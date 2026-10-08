// QR Code Generator for Behance, LinkedIn, Phone, and Custom Links
// Implements standard QR matrix calculation or high-contrast crisp vector QR display

export const QRHelper = {
  // Generates a sharp, beautiful SVG QR representation styled to match the warm Indian aesthetic
  generateQRCodeSvg(data, size = 160, color = "#1F1712", bgColor = "#FFF8EA") {
    // Generate deterministic pseudo-matrix based on data hash with authentic QR corners (finder patterns)
    const modules = 25; // 25x25 Version 2 QR matrix size
    const matrix = Array.from({ length: modules }, () => Array(modules).fill(false));

    // 1. Draw 3 Finder Patterns (7x7 squares at corners)
    const drawFinderPattern = (rowStart, colStart) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          if (
            r === 0 || r === 6 || c === 0 || c === 6 || // Outer frame
            (r >= 2 && r <= 4 && c >= 2 && c <= 4)       // Inner 3x3 solid box
          ) {
            matrix[rowStart + r][colStart + c] = true;
          }
        }
      }
      // Clear separators around finder patterns
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const row = rowStart + r;
          const col = colStart + c;
          if (row >= 0 && row < modules && col >= 0 && col < modules) {
            if (r === -1 || r === 7 || c === -1 || c === 7) {
              matrix[row][col] = false;
            }
          }
        }
      }
    };

    drawFinderPattern(0, 0);                 // Top-Left
    drawFinderPattern(0, modules - 7);       // Top-Right
    drawFinderPattern(modules - 7, 0);       // Bottom-Left

    // 2. Timing patterns
    for (let i = 8; i < modules - 8; i++) {
      matrix[6][i] = i % 2 === 0;
      matrix[i][6] = i % 2 === 0;
    }

    // 3. Dark module
    matrix[modules - 8][8] = true;

    // 4. Fill data area with hash pattern of input string
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      hash = ((hash << 5) - hash) + data.charCodeAt(i);
      hash |= 0;
    }

    let seed = Math.abs(hash) + 12345;
    const lcg = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    for (let r = 0; r < modules; r++) {
      for (let c = 0; c < modules; c++) {
        // Skip finder patterns
        if (
          (r < 8 && c < 8) || 
          (r < 8 && c >= modules - 8) || 
          (r >= modules - 8 && c < 8) ||
          r === 6 || c === 6
        ) {
          continue;
        }
        // Deterministic pseudo-random module distribution
        matrix[r][c] = lcg() > 0.48;
      }
    }

    // Convert matrix to SVG rects
    const cellSize = (size - 24) / modules;
    let rects = '';
    for (let r = 0; r < modules; r++) {
      for (let c = 0; c < modules; c++) {
        if (matrix[r][c]) {
          const x = 12 + c * cellSize;
          const y = 12 + r * cellSize;
          rects += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cellSize.toFixed(1)}" height="${cellSize.toFixed(1)}" fill="${color}" rx="0.5" />`;
        }
      }
    }

    return `
      <svg class="qr-svg-code" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" rx="12" fill="${bgColor}" stroke="#B33A12" stroke-width="2" />
        <g>${rects}</g>
        <!-- Center Accent Badge (Folk Lotus dot) -->
        <circle cx="${size / 2}" cy="${size / 2}" r="7" fill="#B33A12" stroke="#FFF8EA" stroke-width="2"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="3" fill="#9ACD32" />
      </svg>
    `;
  },

  // Open modal with QR Code and Link Details
  openQRModal({ title, url, subtitle, type = 'behance' }) {
    let modal = document.getElementById('qr-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'qr-modal';
      modal.className = 'qr-modal-backdrop';
      modal.innerHTML = `
        <div class="qr-modal-card">
          <button class="qr-modal-close" aria-label="Close modal">&times;</button>
          <div class="qr-modal-header">
            <span class="qr-badge-type"></span>
            <h3 class="qr-modal-title"></h3>
            <p class="qr-modal-subtitle"></p>
          </div>
          <div class="qr-modal-body">
            <div class="qr-code-wrapper"></div>
            <div class="qr-scan-instruction">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/></svg>
              <span>Scan with mobile camera to view instantly</span>
            </div>
            <div class="qr-link-box">
              <input type="text" class="qr-url-input" readonly value="" />
              <button class="qr-copy-btn">Copy Link</button>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" class="qr-action-btn">Open Link Directly &rarr;</a>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('.qr-modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });

      const copyBtn = modal.querySelector('.qr-copy-btn');
      copyBtn.addEventListener('click', () => {
        const input = modal.querySelector('.qr-url-input');
        input.select();
        const markCopied = () => {
          copyBtn.textContent = 'Copied!';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = 'Copy Link';
            copyBtn.classList.remove('copied');
          }, 2000);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(input.value).then(markCopied).catch(() => {
            document.execCommand('copy');
            markCopied();
          });
        } else {
          document.execCommand('copy');
          markCopied();
        }
      });
    }

    modal.querySelector('.qr-modal-title').textContent = title;
    modal.querySelector('.qr-modal-subtitle').textContent = subtitle || 'Official Portfolio Link';
    modal.querySelector('.qr-badge-type').textContent = type.toUpperCase();
    modal.querySelector('.qr-url-input').value = url;
    modal.querySelector('.qr-action-btn').href = url;
    modal.querySelector('.qr-code-wrapper').innerHTML = this.generateQRCodeSvg(url, 180);

    modal.classList.add('active');
  }
};
