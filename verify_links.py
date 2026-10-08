import os
import re
import urllib.parse

def verify_all_links():
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    print(f"Checking {len(html_files)} HTML files in root...")

    broken = []
    total_links = 0

    for hf in html_files:
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()

        matches = re.findall(r'(?:src|href|poster|data-src|data-video-src|data-lightbox-src|data-pdf-src)=["\']([^"\']+)["\']', content)
        for m in matches:
            if m.startswith('http') or m.startswith('#') or m.startswith('mailto:') or m.startswith('tel:') or m.startswith('data:') or m.startswith('javascript:'):
                continue
            clean_path = m.split('?')[0].split('#')[0]
            if not clean_path:
                continue
            total_links += 1
            unquoted = urllib.parse.unquote(clean_path)
            if not os.path.exists(unquoted):
                broken.append((hf, m, unquoted))

    print(f"Root: Total internal links checked: {total_links}")
    if broken:
        print(f"[!] Found {len(broken)} broken links in root:")
        for hf, m, cp in broken[:20]:
            print(f"   In {hf}: {m} -> {cp} (NOT FOUND)")
    else:
        print("[SUCCESS] 100% of internal links in root resolve to valid physical files on disk!")

    # Check dist
    dist_html_files = [os.path.join('dist', f) for f in os.listdir('dist') if f.endswith('.html')]
    dist_broken = []
    dist_total = 0
    for hf in dist_html_files:
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()

        matches = re.findall(r'(?:src|href|poster|data-src|data-video-src|data-lightbox-src|data-pdf-src)=["\']([^"\']+)["\']', content)
        for m in matches:
            if m.startswith('http') or m.startswith('#') or m.startswith('mailto:') or m.startswith('tel:') or m.startswith('data:') or m.startswith('javascript:'):
                continue
            clean_path = m.split('?')[0].split('#')[0]
            if not clean_path:
                continue
            dist_total += 1
            unquoted = urllib.parse.unquote(clean_path)
            dist_path = os.path.join('dist', unquoted)
            if not os.path.exists(dist_path) and not os.path.exists(unquoted):
                dist_broken.append((hf, m, dist_path))

    print(f"Dist: Total internal links checked: {dist_total}")
    if dist_broken:
        print(f"[!] Found {len(dist_broken)} broken links in dist:")
        for hf, m, cp in dist_broken[:20]:
            print(f"   In {hf}: {m} -> {cp} (NOT FOUND)")
    else:
        print("[SUCCESS] 100% of internal links in dist/ resolve cleanly!")

if __name__ == '__main__':
    verify_all_links()
