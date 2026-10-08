import os, sys, re, urllib.parse

sys.stdout.reconfigure(encoding='utf-8')

def audit_iframes():
    print("=== AUDITING IFRAMES AND PDF EMBEDS ===")
    for hf in ['index.html', 'gallery.html']:
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()

        iframes = re.findall(r'<iframe[^>]+src=[\'"]([^\'"]+)[\'"]', content)
        print(f"\nFound {len(iframes)} iframes in {hf}:")
        for ifr in iframes:
            path = ifr.split('#')[0].split('?')[0]
            clean = urllib.parse.unquote(path)
            exists = os.path.exists(clean)
            size = os.path.getsize(clean) if exists else 0
            print(f"  - Iframe target: {clean} | Exists: {exists} | Size: {size} bytes")

audit_iframes()
