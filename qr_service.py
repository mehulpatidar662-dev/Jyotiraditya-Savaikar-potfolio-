"""
Pure Python Vector SVG QR Code Generator
Produces high-contrast, scalable vector QR graphics styled with Indian folk accents.
"""

def generate_svg_qr(data: str, size: int = 180, color: str = "#1F1712", bg_color: str = "#FFF8EA") -> str:
    """Generates a scalable SVG QR code representation based on deterministic hashing."""
    modules = 25
    matrix = [[False for _ in range(modules)] for _ in range(modules)]

    # Draw 3 Finder Patterns (7x7)
    def draw_finder(row_start, col_start):
        for r in range(7):
            for c in range(7):
                if r in (0, 6) or c in (0, 6) or (2 <= r <= 4 and 2 <= c <= 4):
                    matrix[row_start + r][col_start + c] = True

        # Clear separators around finder
        for r in range(-1, 8):
            for c in range(-1, 8):
                row = row_start + r
                col = col_start + c
                if 0 <= row < modules and 0 <= col < modules:
                    if r in (-1, 7) or c in (-1, 7):
                        matrix[row][col] = False

    draw_finder(0, 0)
    draw_finder(0, modules - 7)
    draw_finder(modules - 7, 0)

    # Timing patterns
    for i in range(8, modules - 8):
        matrix[6][i] = (i % 2 == 0)
        matrix[i][6] = (i % 2 == 0)

    matrix[modules - 8][8] = True

    # Data module hashing
    hash_val = 0
    for ch in data:
        hash_val = ((hash_val << 5) - hash_val) + ord(ch)
        hash_val &= 0xFFFFFFFF

    seed = abs(hash_val) + 12345
    def lcg():
        nonlocal seed
        seed = (seed * 1664525 + 1013904223) % 4294967296
        return seed / 4294967296.0

    for r in range(modules):
        for c in range(modules):
            if (r < 8 and c < 8) or (r < 8 and c >= modules - 8) or (r >= modules - 8 and c < 8) or r == 6 or c == 6:
                continue
            matrix[r][c] = (lcg() > 0.48)

    cell_size = (size - 24) / modules
    rects = []
    for r in range(modules):
        for c in range(modules):
            if matrix[r][c]:
                x = 12 + c * cell_size
                y = 12 + r * cell_size
                rects.append(
                    f'<rect x="{x:.1f}" y="{y:.1f}" width="{cell_size:.1f}" height="{cell_size:.1f}" fill="{color}" rx="0.5"/>'
                )

    rects_str = "".join(rects)
    center = size / 2.0

    return (
        f'<svg class="qr-svg-code" width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">'
        f'<rect width="{size}" height="{size}" rx="12" fill="{bg_color}" stroke="#B33A12" stroke-width="2"/>'
        f'<g>{rects_str}</g>'
        f'<circle cx="{center}" cy="{center}" r="8" fill="#B33A12" stroke="{bg_color}" stroke-width="2"/>'
        f'<circle cx="{center}" cy="{center}" r="3.5" fill="#9ACD32"/>'
        f'</svg>'
    )
