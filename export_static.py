#!/usr/bin/env python3
"""
Python Static Site Exporter
Bakes the Flask application into a standalone static distribution folder (`dist/`).
Useful for deploying directly to GitHub Pages, Netlify, Vercel, or any CDN.
"""

import os
import sys
import shutil

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

from app import app
from portfolio_data import WORK_CATEGORIES

def export_static_site(output_dir="dist"):
    print(f"[*] Exporting static portfolio to ./{output_dir} ...")

    # Clean / recreate output dir
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)
    os.makedirs(output_dir, exist_ok=True)

    # 1. Copy static assets (css, js, images, icons, videos, docs)
    static_dest = os.path.join(output_dir, "static")
    shutil.copytree("static", static_dest)
    print("  [+] Copied static assets")

    # Also copy static subfolders to dist root for relative fallback compatibility
    for sub in ["css", "js", "images", "videos", "docs"]:
        src_sub = os.path.join("static", sub)
        if os.path.exists(src_sub):
            shutil.copytree(src_sub, os.path.join(output_dir, sub))
            # Also keep root level mirrors updated
            root_sub = os.path.join(".", sub)
            if os.path.exists(root_sub):
                shutil.rmtree(root_sub)
            shutil.copytree(src_sub, root_sub)

    # 2. Render routes using Flask test client
    with app.test_client() as client:
        routes_to_export = [
            ("/", "index.html"),
            ("/about", "about.html"),
            ("/resume", "resume.html"),
            ("/gallery", "gallery.html"),
        ]

        # Add category gallery routes
        for cat in WORK_CATEGORIES:
            routes_to_export.append((f"/gallery/{cat['slug']}", f"gallery-{cat['slug']}.html"))

        for route, filename in routes_to_export:
            response = client.get(route)
            if response.status_code == 200:
                filepath = os.path.join(output_dir, filename)
                with open(filepath, "wb") as f:
                    f.write(response.data)
                print(f"  [+] Rendered {route} -> {filename}")

                # Also write to root directory
                shutil.copy2(filepath, filename)
            else:
                print(f"  [!] Failed to render {route} (status {response.status_code})")

        # 3. Create physical directory routes for static servers like `python -m http.server`
        # e.g., /gallery/index.html and /gallery/<cat>/index.html
        for target_root in [".", output_dir]:
            # /gallery/index.html
            gallery_dir = os.path.join(target_root, "gallery")
            os.makedirs(gallery_dir, exist_ok=True)
            gallery_src = os.path.join(output_dir, "gallery.html")
            if os.path.exists(gallery_src):
                shutil.copy2(gallery_src, os.path.join(gallery_dir, "index.html"))

            # /gallery/<cat>/index.html
            for cat in WORK_CATEGORIES:
                cat_dir = os.path.join(gallery_dir, cat['slug'])
                os.makedirs(cat_dir, exist_ok=True)
                cat_src = os.path.join(output_dir, f"gallery-{cat['slug']}.html")
                if os.path.exists(cat_src):
                    shutil.copy2(cat_src, os.path.join(cat_dir, "index.html"))

            # /about/index.html
            about_dir = os.path.join(target_root, "about")
            os.makedirs(about_dir, exist_ok=True)
            about_src = os.path.join(output_dir, "about.html")
            if os.path.exists(about_src):
                shutil.copy2(about_src, os.path.join(about_dir, "index.html"))

            # /resume/index.html
            resume_dir = os.path.join(target_root, "resume")
            os.makedirs(resume_dir, exist_ok=True)
            resume_src = os.path.join(output_dir, "resume.html")
            if os.path.exists(resume_src):
                shutil.copy2(resume_src, os.path.join(resume_dir, "index.html"))

    print(f"[OK] Static site export completed successfully in ./{output_dir} and root directory!")

if __name__ == "__main__":
    export_static_site()
