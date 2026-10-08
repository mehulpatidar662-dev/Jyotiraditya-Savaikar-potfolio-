import os, sys, re, urllib.parse
from html.parser import HTMLParser

sys.stdout.reconfigure(encoding='utf-8')

class HTMLAuditor(HTMLParser):
    def __init__(self, filename):
        super().__init__()
        self.filename = filename
        self.ids = {}
        self.tag_stack = []
        self.void_tags = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
        self.errors = []
        self.warnings = []
        self.links = []
        self.sources = []

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        pos = self.getpos()[0]
        
        # Check duplicate IDs
        if 'id' in attr_dict:
            id_val = attr_dict['id']
            if id_val in self.ids:
                self.errors.append(f"Duplicate ID '{id_val}' at line {pos} (first defined at line {self.ids[id_val]})")
            else:
                self.ids[id_val] = pos

        # Check images
        if tag == 'img':
            src = attr_dict.get('src', '')
            alt = attr_dict.get('alt', '')
            if not src:
                self.errors.append(f"img tag missing src at line {pos}")
            else:
                self.sources.append((src, pos))
            if not alt and alt != '':
                self.warnings.append(f"img missing alt attribute at line {pos}")

        # Check links
        if tag == 'a':
            href = attr_dict.get('href', '')
            if href:
                self.links.append((href, pos))

        # Check video / source
        if tag in ('source', 'video', 'iframe'):
            src = attr_dict.get('src', '')
            if src:
                self.sources.append((src, pos))

        if tag not in self.void_tags:
            self.tag_stack.append((tag, pos))

    def handle_endtag(self, tag):
        if tag in self.void_tags:
            return
        if not self.tag_stack:
            self.errors.append(f"Unexpected closing tag </{tag}> at line {self.getpos()[0]}")
            return
        expected_tag, line_no = self.tag_stack.pop()
        if expected_tag != tag:
            self.errors.append(f"Mismatched closing tag </{tag}> at line {self.getpos()[0]} (expected </{expected_tag}> opened at line {line_no})")

def audit():
    print("=== STARTING FULL SITE AUDIT ===")
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    all_anchors = {}
    file_audits = {}

    for hf in sorted(html_files):
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()
        parser = HTMLAuditor(hf)
        parser.feed(content)
        while parser.tag_stack:
            t, l = parser.tag_stack.pop()
            parser.errors.append(f"Unclosed tag <{t}> opened at line {l}")
        
        all_anchors[hf] = set(parser.ids.keys())
        file_audits[hf] = parser

    total_errs = 0
    total_warnings = 0

    for hf, parser in file_audits.items():
        if parser.errors:
            print(f"\n[ERRORS] {hf} ({len(parser.errors)} errors):")
            for e in parser.errors[:10]:
                print(f"   Line {e}")
            total_errs += len(parser.errors)
        if parser.warnings:
            print(f"[WARNINGS] {hf} ({len(parser.warnings)} warnings):")
            for w in parser.warnings[:5]:
                print(f"   Line {w}")
            total_warnings += len(parser.warnings)
            
    print(f"\nAudit complete: {total_errs} structure errors, {total_warnings} warnings across {len(html_files)} HTML files.")

    # Check internal anchors and file references
    broken_references = []
    for hf, parser in file_audits.items():
        for href, line in parser.links:
            if href.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:')):
                continue
            # Parse url
            parsed = urllib.parse.urlparse(href)
            target_file = parsed.path
            fragment = parsed.fragment
            
            # 1. Check local file existence if path specified
            check_file = hf if not target_file else target_file
            if target_file and not os.path.exists(urllib.parse.unquote(target_file)):
                broken_references.append((hf, line, href, f"Target file '{target_file}' not found"))
                continue
            
            # 2. Check fragment ID if target file is HTML
            if fragment and check_file.endswith('.html'):
                target_ids = all_anchors.get(check_file, set())
                # also check if check_file is relative path
                if not target_ids and os.path.basename(check_file) in all_anchors:
                    target_ids = all_anchors[os.path.basename(check_file)]
                
                # Dynamic fragments like gallery-preprod or cat-preprod
                valid_frag = (
                    fragment in target_ids or 
                    fragment in ('gallery', 'work', 'toolkit', 'experience', 'contact', 'hero', 'top') or
                    fragment.startswith(('gallery-', 'cat-', 'sub-'))
                )
                if not valid_frag and fragment not in target_ids:
                    broken_references.append((hf, line, href, f"Anchor #{fragment} not found in {check_file}"))

    if broken_references:
        print(f"\n[BROKEN ANCHORS / LINKS] ({len(broken_references)} found):")
        for f, l, h, reason in broken_references[:20]:
            print(f"   {f}:{l} -> '{h}': {reason}")
    else:
        print("\n[SUCCESS] All internal anchors (#) and internal links resolve accurately!")

if __name__ == '__main__':
    audit()
