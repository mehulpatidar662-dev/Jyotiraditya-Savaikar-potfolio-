#!/usr/bin/env python3
"""
Complete Static Portfolio Builder
Bakes all Flask templates with 100% of the rich data from portfolio_data.py into
standalone HTML files with pristine relative paths for zero-config file:/// double-clicking
and web server hosting.
"""

import os
import re
import sys
import shutil

root = r"C:\Users\Admin\.gemini\antigravity\scratch\jyotiraditya-portfolio"
os.chdir(root)

from app import app
from portfolio_data import WORK_CATEGORIES, FEATURED_PROJECTS, PRODUCTION_DOCS, PROJECT_DOSSIERS

def make_relative(html_content, current_page):
    """
    Transforms all root-relative URLs into local relative URLs suitable for file:/// double-click
    and static hosting.
    """
    s = html_content

    # 1. Assets: /static/... -> static/...
    s = re.sub(r'href=["\']/static/([^"\']+)["\']', r'href="static/\1"', s)
    s = re.sub(r'src=["\']/static/([^"\']+)["\']', r'src="static/\1"', s)
    s = re.sub(r'poster=["\']/static/([^"\']+)["\']', r'poster="static/\1"', s)
    s = re.sub(r'data-src=["\']/static/([^"\']+)["\']', r'data-src="static/\1"', s)
    s = re.sub(r'data-video-src=["\']/static/([^"\']+)["\']', r'data-video-src="static/\1"', s)
    s = re.sub(r'data-lightbox-src=["\']/static/([^"\']+)["\']', r'data-lightbox-src="static/\1"', s)
    s = re.sub(r'data-pdf-src=["\']/static/([^"\']+)["\']', r'data-pdf-src="static/\1"', s)

    # 2. Main route links (supporting URL hash fragments)
    s = re.sub(r'href=["\']/about(#.*?)?["\']', r'href="about.html\1"', s)
    s = re.sub(r'href=["\']/resume(#.*?)?["\']', r'href="resume.html\1"', s)
    s = re.sub(r'href=["\']/gallery(#.*?)?["\']', r'href="gallery.html\1"', s)

    # 3. Category gallery routes: /gallery/<slug> -> gallery-<slug>.html
    for cat in WORK_CATEGORIES:
        slug = cat['slug']
        s = re.sub(rf'href=["\']/gallery/{slug}["\']', rf'href="gallery-{slug}.html"', s)

    # 4. In-page anchor links from navbar and buttons
    if current_page == "index.html":
        s = re.sub(r'href=["\']/#([a-zA-Z0-9_-]+)["\']', r'href="#\1"', s)
        s = re.sub(r'href=["\']/["\']', r'href="#hero"', s)
    else:
        s = re.sub(r'href=["\']/#([a-zA-Z0-9_-]+)["\']', r'href="index.html#\1"', s)
        s = re.sub(r'href=["\']/["\']', r'href="index.html"', s)

    # 5. Fix spaces in PDF names
    s = s.replace("TARGET PRACTISE.pdf", "TARGET_PRACTISE.pdf")

    # 6. Ensure View Gallery buttons on category cards go to dedicated gallery pages
    # <a href="#gallery-{{ cat.slug }}" class="category-view-btn" data-gallery-target="{{ cat.slug }}">View Gallery &rarr;</a>
    # We can keep data-gallery-target and direct link to gallery-<slug>.html!
    for cat in WORK_CATEGORIES:
        slug = cat['slug']
        s = re.sub(
            rf'href=["\']#gallery-{slug}["\']([^>]*class=["\'][^"\']*category-view-btn[^"\']*["\'])',
            rf'href="gallery-{slug}.html"\1',
            s
        )

    return s

def build_portfolio():
    print("[*] Starting Full Portfolio Static Generation...")

    # Ensure static subfolders mirror to root
    for sub in ["css", "js", "images", "videos", "docs"]:
        src = os.path.join("static", sub)
        dst = os.path.join(".", sub)
        if os.path.exists(src):
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.copytree(src, dst)
            print(f"  [+] Mirrored static/{sub} -> ./{sub}")

    # Ensure aditya_project exists in root
    if os.path.exists(os.path.join("static", "aditya_project")) and not os.path.exists("aditya_project"):
        shutil.copytree(os.path.join("static", "aditya_project"), "aditya_project")
        print("  [+] Mirrored static/aditya_project -> ./aditya_project")

    # Also ensure dist exists
    os.makedirs("dist", exist_ok=True)
    os.makedirs(os.path.join("dist", "static"), exist_ok=True)
    for sub in ["css", "js", "images", "videos", "docs"]:
        src = os.path.join("static", sub)
        dst = os.path.join("dist", "static", sub)
        if os.path.exists(src):
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.copytree(src, dst)
            print(f"  [+] Mirrored static/{sub} -> dist/static/{sub}")

    if os.path.exists(os.path.join("static", "aditya_project")) and not os.path.exists(os.path.join("dist", "static", "aditya_project")):
        shutil.copytree(os.path.join("static", "aditya_project"), os.path.join("dist", "static", "aditya_project"))
        print("  [+] Mirrored static/aditya_project -> dist/static/aditya_project")

    routes = [
        ("/", "index.html"),
        ("/about", "about.html"),
        ("/resume", "resume.html"),
        ("/gallery", "gallery.html")
    ]

    for cat in WORK_CATEGORIES:
        routes.append((f"/gallery/{cat['slug']}", f"gallery-{cat['slug']}.html"))

    # Legacy routes for zero 404s
    legacy_slugs = [
        ("title-sequences", "gallery-title-sequences.html"),
        ("comic-storyboards", "gallery-comic-storyboards.html"),
        ("storyboarding", "gallery-storyboarding.html"),
        ("character-design", "gallery-character-design.html"),
        ("scene-layout", "gallery-scene-layout.html"),
        ("3d-motion", "gallery-3d-motion.html")
    ]
    for slug, fname in legacy_slugs:
        routes.append((f"/gallery/{slug}", fname))

    with app.test_client() as client:
        for route, filename in routes:
            resp = client.get(route)
            if resp.status_code != 200:
                print(f"  [!] Error rendering {route}: Status {resp.status_code}")
                continue

            raw_html = resp.data.decode("utf-8")
            clean_html = make_relative(raw_html, filename)

            # Write to root
            with open(filename, "w", encoding="utf-8") as f:
                f.write(clean_html)

            # Write to dist
            with open(os.path.join("dist", filename), "w", encoding="utf-8") as f:
                f.write(clean_html)

            print(f"  [OK] Generated {filename} ({len(clean_html)} chars)")

    # Also build physical directory aliases for local server routing
    # e.g., gallery/index.html, about/index.html, resume/index.html
    for target in [".", "dist"]:
        for page, folder in [("gallery.html", "gallery"), ("about.html", "about"), ("resume.html", "resume")]:
            f_path = os.path.join(target, folder)
            os.makedirs(f_path, exist_ok=True)
            src_file = os.path.join(target, page)
            if os.path.exists(src_file):
                shutil.copy2(src_file, os.path.join(f_path, "index.html"))

        # Category folder aliases inside gallery/
        for cat in WORK_CATEGORIES:
            cat_folder = os.path.join(target, "gallery", cat["slug"])
            os.makedirs(cat_folder, exist_ok=True)
            src_file = os.path.join(target, f"gallery-{cat['slug']}.html")
            if os.path.exists(src_file):
                shutil.copy2(src_file, os.path.join(cat_folder, "index.html"))

        # Legacy slugs aliases inside gallery/
        for slug, fname in legacy_slugs:
            legacy_folder = os.path.join(target, "gallery", slug)
            os.makedirs(legacy_folder, exist_ok=True)
            src_file = os.path.join(target, fname)
            if os.path.exists(src_file):
                shutil.copy2(src_file, os.path.join(legacy_folder, "index.html"))

    print("\n[SUCCESS] Full portfolio built with all data, all media, and all gallery pages!")

if __name__ == "__main__":
    build_portfolio()
