import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

view_ids = re.findall(r'id=["\'](view-[^"\']+)["\']', text)
print("View IDs in index.html:", view_ids)

gallery_links = re.findall(r'href=["\']([^"\']*gallery[^"\']*)["\']', text)
print("\nGallery links in index.html:")
for gl in set(gallery_links):
    print(" ", gl)
