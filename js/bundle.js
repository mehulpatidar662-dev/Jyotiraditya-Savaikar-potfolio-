/**
 * Jyotiraditya Savaikar Portfolio - Universal Standalone Bundle
 * Plain JavaScript - Zero external framework dependencies
 * Compatible with file:/// double-click and standard HTTP servers
 */


/* ==================== MODULE: folk-art.js ==================== */

// Indian Folk-Art Decorations & Kolam Ornaments
// Generates scalable SVG Kolam motifs, repeating diamond borders, and Indian folk accents

const FolkArt = {
  // Repeating diamond border strip (Red/Black/Green motifs)
  renderDiamondBorder(containerId) {
    const containers = document.querySelectorAll(containerId || '.folk-border-strip');
    containers.forEach(container => {
      if (container.dataset.rendered) return;
      container.dataset.rendered = "true";
      
      const isAlt = container.classList.contains('folk-border-alt');
      const height = container.dataset.height || 28;
      
      // Inline repeating SVG pattern
      container.innerHTML = `
        <svg class="folk-border-svg" width="100%" height="${height}" preserveAspectRatio="none" viewBox="0 0 1200 ${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diamondPattern-${Math.random().toString(36).substr(2, 9)}" width="60" height="${height}" patternUnits="userSpaceOnUse">
              <!-- Background strip line -->
              <rect x="0" y="0" width="60" height="${height}" fill="transparent" />
              <line x1="0" y1="2" x2="60" y2="2" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="2,2"/>
              <line x1="0" y1="${height - 2}" x2="60" y2="${height - 2}" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="2,2"/>
              
              <!-- Center Crimson Red Diamond -->
              <polygon points="15,${height/2} 30,3 45,${height/2} 30,${height-3}" fill="#B91C1C" stroke="#7F1D1D" stroke-width="1.2"/>
              
              <!-- Inner Cobalt Blue Diamond -->
              <polygon points="22,${height/2} 30,8 38,${height/2} 30,${height-8}" fill="#1D4ED8" stroke="#1E40AF" stroke-width="1"/>
              
              <!-- Center Gold Dot / Eye -->
              <circle cx="30" cy="${height/2}" r="2.5" fill="#F59E0B" />
              
              <!-- Side Cobalt Blue Triangular Chevrons -->
              <polygon points="0,${height/2} 8,5 8,${height-5}" fill="#1D4ED8" stroke="#1E40AF" stroke-width="0.8"/>
              <polygon points="60,${height/2} 52,5 52,${height-5}" fill="#1D4ED8" stroke="#1E40AF" stroke-width="0.8"/>
              
              <!-- Flanking Accent Dots -->
              <circle cx="8" cy="${height/2}" r="1.5" fill="#B91C1C" />
              <circle cx="52" cy="${height/2}" r="1.5" fill="#B91C1C" />
              <circle cx="30" cy="4" r="1.2" fill="#F59E0B" />
              <circle cx="30" cy="${height-4}" r="1.2" fill="#F59E0B" />
            </pattern>
          </defs>
          <rect width="100%" height="${height}" fill="url(#${container.querySelector('pattern') ? '' : ''})" style="fill: inherit;" />
        </svg>
      `;

      // Simpler, ultra-clean CSS background pattern for infinite seamless sharpness
      container.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='26' viewBox='0 0 60 26'%3E%3Cline x1='0' y1='1' x2='60' y2='1' stroke='%23CBD5E1' stroke-width='1.5' stroke-dasharray='2,2'/%3E%3Cline x1='0' y1='25' x2='60' y2='25' stroke='%23CBD5E1' stroke-width='1.5' stroke-dasharray='2,2'/%3E%3Cpolygon points='15,13 30,3 45,13 30,23' fill='%23B91C1C' stroke='%237F1D1D' stroke-width='1'/%3E%3Cpolygon points='22,13 30,7 38,13 30,19' fill='%231D4ED8' stroke='%231E40AF' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='13' r='2.5' fill='%23F59E0B'/%3E%3Cpolygon points='0,13 7,5 7,21' fill='%231D4ED8' stroke='%231E40AF' stroke-width='0.6'/%3E%3Cpolygon points='60,13 53,5 53,21' fill='%231D4ED8' stroke='%231E40AF' stroke-width='0.6'/%3E%3Ccircle cx='10' cy='13' r='1.5' fill='%23B91C1C'/%3E%3Ccircle cx='50' cy='13' r='1.5' fill='%23B91C1C'/%3E%3C/svg%3E")`;
      container.style.backgroundRepeat = 'repeat-x';
      container.style.backgroundSize = '60px 26px';
      container.style.height = '26px';
    });
  },

  // Symmetrical Kolam line-art ornament for project titles
  getKolamSvg(direction = 'left') {
    const isRight = direction === 'right';
    const transform = isRight ? 'transform="scale(-1, 1) translate(-48, 0)"' : '';
    
    return `
      <svg class="kolam-ornament ${direction}" width="42" height="28" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g ${transform}>
          <!-- Central Loop (Kolam Sikku knot motif in Crimson Red) -->
          <path d="M4 16 C 12 6, 20 6, 28 16 C 36 26, 44 26, 46 16 C 44 6, 36 6, 28 16 C 20 26, 12 26, 4 16 Z" 
                stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          
          <!-- Inner loop with Cobalt Blue accent -->
          <path d="M12 16 C 16 10, 20 10, 24 16 C 28 22, 32 22, 36 16" 
                stroke="#1D4ED8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          
          <!-- Traditional Kolam Dots (Pulli) in Amber Gold, Red & Blue -->
          <circle cx="16" cy="16" r="2.2" fill="#B91C1C" />
          <circle cx="28" cy="16" r="2.2" fill="#F59E0B" />
          <circle cx="40" cy="16" r="2.2" fill="#B91C1C" />
          <circle cx="28" cy="8" r="1.8" fill="#1D4ED8" />
          <circle cx="28" cy="24" r="1.8" fill="#1D4ED8" />

          <!-- Finial floral curve -->
          <path d="M44 16 C 47 12, 48 8, 45 6 C 42 4, 38 8, 40 12" 
                stroke="#B91C1C" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        </g>
      </svg>
    `;
  },

  // Initialize all Kolam ornaments in project headings
  initKolamTitles() {
    const titles = document.querySelectorAll('.project-title-kolam');
    titles.forEach(title => {
      if (title.dataset.kolamInitialized) return;
      title.dataset.kolamInitialized = "true";

      const leftKolam = this.getKolamSvg('left');
      const rightKolam = this.getKolamSvg('right');
      const text = title.innerHTML;

      title.innerHTML = `
        <span class="kolam-wing kolam-wing-left">${leftKolam}</span>
        <span class="title-text">${text}</span>
        <span class="kolam-wing kolam-wing-right">${rightKolam}</span>
      `;
    });
  }
};


/* ==================== MODULE: icons.js ==================== */

// Professional SVG Icons for Toolkit & UI Elements

const Icons = {
  blender: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <path d="M12.518 0c-3.197 0-5.836 2.4-6.236 5.488l-4.526 2.62a1.35 1.35 0 0 0-.486 1.848 1.35 1.35 0 0 0 1.848.486l4.234-2.45c.815.772 1.884 1.288 3.072 1.43v5.042a1.35 1.35 0 0 0 2.7 0V9.422c1.188-.142 2.257-.658 3.072-1.43l4.234 2.45a1.35 1.35 0 0 0 1.848-.486 1.35 1.35 0 0 0-.486-1.848l-4.526-2.62C16.26 2.4 13.621 0 10.424 0h2.094zm-.094 2.7c1.99 0 3.6 1.61 3.6 3.6s-1.61 3.6-3.6 3.6-3.6-1.61-3.6-3.6 1.61-3.6 3.6-3.6zm0 1.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm-1.8 10.8a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8zm0 2.7a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4z"/>
    </svg>
  `,
  photoshop: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#001E36" stroke="#31A8FF" stroke-width="1.5"/>
      <path d="M6.5 7h4c1.8 0 3 1 3 2.5s-1.2 2.5-3 2.5H8.5V17H6.5V7zm2 3.5h2c.8 0 1.2-.4 1.2-1s-.4-1-1.2-1h-2v2z" fill="#31A8FF"/>
      <path d="M14 13.5c.5-.4 1.2-.6 2-.6 1.2 0 1.8.5 1.8 1.4v.2c-.4-.2-.9-.3-1.6-.3-1.6 0-2.4.7-2.4 1.8 0 1.1.8 1.8 2 1.8.9 0 1.5-.4 1.9-1v.9h1.7v-4.4c0-1.8-1.2-2.7-3.2-2.7-.9 0-1.7.2-2.4.6l.2 1.3zm3.7 2.3c-.3.6-.8.9-1.4.9-.6 0-1-.3-1-.8 0-.6.5-.9 1.3-.9.4 0 .8.1 1.1.2v.6z" fill="#31A8FF"/>
    </svg>
  `,
  illustrator: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#330000" stroke="#FF9A00" stroke-width="1.5"/>
      <path d="M6 16.5l3.4-9.5h2.2l3.4 9.5h-2.1l-.8-2.4H8.9l-.8 2.4H6zm3.4-4h2.2l-1.1-3.6-1.1 3.6z" fill="#FF9A00"/>
      <path d="M16.5 8.5a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zm-1 8V10.5h2v6h-2z" fill="#FF9A00"/>
    </svg>
  `,
  aftereffects: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#00005B" stroke="#9999FF" stroke-width="1.5"/>
      <path d="M5.5 16.5l3.2-9.5h2.1l3.2 9.5h-2l-.7-2.3H8.3l-.7 2.3H5.5zm3.3-3.9h2.1L9.8 9.2l-1 3.4z" fill="#9999FF"/>
      <path d="M14 13.5c0-1.8 1.3-3.2 3.1-3.2 1.8 0 3 1.3 3 3.2v.4h-4.3c.1 1 .8 1.6 1.8 1.6.7 0 1.2-.2 1.6-.7l1.1 1.1c-.7.8-1.6 1.2-2.7 1.2-2.1 0-3.6-1.5-3.6-3.6zm4.3-.8c-.1-.9-.7-1.4-1.5-1.4-.8 0-1.4.5-1.5 1.4h3z" fill="#9999FF"/>
    </svg>
  `,
  figma: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1E1E1E" stroke="#E07A28" stroke-width="1.2"/>
      <path d="M9 12a3 3 0 0 0 3-3V6H9a3 3 0 0 0 0 6z" fill="#F24E1E"/>
      <path d="M12 6h3a3 3 0 0 1 0 6h-3V6z" fill="#FF7262"/>
      <path d="M12 12h3a3 3 0 0 1 0 6h-3v-6z" fill="#1ABCFE"/>
      <path d="M9 18a3 3 0 0 0 3-3v-3H9a3 3 0 0 0 0 6z" fill="#0ACF83"/>
      <path d="M9 18a3 3 0 1 0 3 3v-3H9z" fill="#A259FF"/>
    </svg>
  `,
  clipstudio: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1C2833" stroke="#9ACD32" stroke-width="1.5"/>
      <!-- Clip studio paint icon shape -->
      <path d="M6.5 12c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5zm8.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" fill="#9ACD32"/>
      <circle cx="12" cy="12" r="1.5" fill="#FFF"/>
    </svg>
  `,
  procreate: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#241B16" stroke="#B33A12" stroke-width="1.5"/>
      <path d="M6 17c1.5-2.5 3-4 5.5-6.5l4-4 2 2-4 4c-2.5 2.5-4 4-6.5 5.5l-1-1z" fill="#B33A12"/>
      <path d="M14.5 7.5l2-2 2 2-2 2-2-2z" fill="#9ACD32"/>
    </svg>
  `
};


/* ==================== MODULE: qr-generator.js ==================== */

// QR Code Generator for Behance, LinkedIn, Phone, and Custom Links
// Implements standard QR matrix calculation or high-contrast crisp vector QR display

const QRHelper = {
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

  // Direct link opener (QR codes and QR modal removed per user specification)
  openQRModal({ url } = {}) {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }
};


/* ==================== MODULE: voxel-cube.js ==================== */

// 3D Animated Voxel Cube & Logo Reveal Component
// Pure HTML5 Canvas 3D isometric/perspective voxel engine with dynamic lighting, logo reveal, and physics

class VoxelCube {
  constructor(canvasId) {
    this.canvas = typeof canvasId === 'string' ? document.getElementById(canvasId) : canvasId;
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = this.canvas.parentElement ? this.canvas.parentElement.clientWidth : 500;
    this.height = this.canvas.height = this.canvas.parentElement ? this.canvas.parentElement.clientHeight || 400 : 400;

    // Palette: Cream, Rust, Lime, Brown, Black, Gold
    this.colors = {
      rust: '#B33A12',
      rustLight: '#D44A1E',
      lime: '#9ACD32',
      limeBright: '#B4E63C',
      cream: '#F2E1BC',
      brown: '#7A3B10',
      dark: '#1F1712',
      gold: '#E07A28'
    };

    // Voxel grid dimension (3x3x3 or 4x4x4)
    this.gridSize = 3;
    this.voxelSize = 34;
    this.spacing = 6;
    this.voxels = [];

    // Camera & Rotation
    this.rotX = 0.55;
    this.rotY = -0.78;
    this.targetRotX = 0.55;
    this.targetRotY = -0.78;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // Animation Modes: 'wave', 'explode', 'logo'
    this.mode = 'wave';
    this.time = 0;
    this.speed = 1.0;
    this.isPlaying = true;

    this.initVoxels();
    this.setupEvents();
    this.animate = this.animate.bind(this);
    this.rafId = requestAnimationFrame(this.animate);

    window.addEventListener('resize', () => this.handleResize());
  }

  initVoxels() {
    this.voxels = [];
    const half = (this.gridSize - 1) / 2;

    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        for (let z = 0; z < this.gridSize; z++) {
          const gx = (x - half);
          const gy = (y - half);
          const gz = (z - half);

          // Determine aesthetic voxel styling
          let colorType = 'rust';
          if (gx === 0 && gy === 0 && gz === 0) {
            colorType = 'core'; // Hidden glowing core
          } else if ((x + y + z) % 2 === 0) {
            colorType = 'lime';
          } else {
            colorType = 'cream';
          }

          this.voxels.push({
            origX: gx,
            origY: gy,
            origZ: gz,
            currX: gx,
            currY: gy,
            currZ: gz,
            scale: 1,
            colorType,
            phase: Math.sqrt(gx*gx + gy*gy + gz*gz) * 1.2
          });
        }
      }
    }
  }

  setupEvents() {
    const handleStart = (clientX, clientY) => {
      this.isDragging = true;
      this.lastMouseX = clientX;
      this.lastMouseY = clientY;
    };

    const handleMove = (clientX, clientY) => {
      if (!this.isDragging) return;
      const dx = clientX - this.lastMouseX;
      const dy = clientY - this.lastMouseY;
      this.targetRotY += dx * 0.008;
      this.targetRotX += dy * 0.008;
      this.lastMouseX = clientX;
      this.lastMouseY = clientY;
    };

    const handleEnd = () => {
      this.isDragging = false;
    };

    this.canvas.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', handleEnd);

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) handleStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', handleEnd);
  }

  handleResize() {
    if (!this.canvas || !this.canvas.parentElement) return;
    this.width = this.canvas.width = this.canvas.parentElement.clientWidth;
    this.height = this.canvas.height = this.canvas.parentElement.clientHeight || 400;
  }

  setMode(mode) {
    this.mode = mode;
  }

  updatePhysics() {
    // Smooth rotation dampening
    if (!this.isDragging && this.isPlaying) {
      this.targetRotY += 0.012 * this.speed;
      this.targetRotX = 0.45 + Math.sin(this.time * 0.5) * 0.15;
    }

    this.rotX += (this.targetRotX - this.rotX) * 0.1;
    this.rotY += (this.targetRotY - this.rotY) * 0.1;

    if (!this.isPlaying) return;
    this.time += 0.03 * this.speed;

    // Apply procedural motion based on current mode
    this.voxels.forEach(v => {
      if (this.mode === 'wave') {
        const offset = Math.sin(this.time * 2 + v.phase) * 0.25;
        v.currX = v.origX * (1 + offset * 0.2);
        v.currY = v.origY + offset;
        v.currZ = v.origZ * (1 + offset * 0.2);
        v.scale = 1 + offset * 0.15;
      } else if (this.mode === 'explode') {
        const exp = (Math.sin(this.time * 1.5) + 1) * 0.5; // 0 to 1
        const dist = exp * 1.2;
        v.currX = v.origX * (1 + dist);
        v.currY = v.origY * (1 + dist);
        v.currZ = v.origZ * (1 + dist);
        v.scale = 1 - exp * 0.3;
      } else if (this.mode === 'logo') {
        // Logo Reveal mode: outer voxels peel open like a blooming box revealing the glowing 'JS' monogram inside
        const bloom = (Math.sin(this.time * 1.8) + 1) * 0.5;
        if (v.origX === 0 && v.origY === 0 && v.origZ === 0) {
          v.currX = 0;
          v.currY = 0;
          v.currZ = 0;
          v.scale = 1.3 + Math.sin(this.time * 4) * 0.2; // Pulsing core monogram
        } else {
          v.currX = v.origX * (1 + bloom * 0.9);
          v.currY = v.origY * (1 + bloom * 0.9);
          v.currZ = v.origZ * (1 + bloom * 0.9);
          v.scale = 0.9;
        }
      }
    });
  }

  // 3D Projection math
  project(x, y, z) {
    // Rotate around Y
    const cosY = Math.cos(this.rotY);
    const sinY = Math.sin(this.rotY);
    let x1 = x * cosY - z * sinY;
    let z1 = z * cosY + x * sinY;

    // Rotate around X
    const cosX = Math.cos(this.rotX);
    const sinX = Math.sin(this.rotX);
    let y2 = y * cosX - z1 * sinX;
    let z2 = z1 * cosX + y * sinX;

    // Perspective factor
    const fov = 400;
    const distance = 420;
    const factor = fov / (distance + z2);

    return {
      x: this.width / 2 + x1 * factor,
      y: this.height / 2 + y2 * factor,
      depth: z2,
      scale: factor
    };
  }

  // Draw an individual 3D voxel box
  drawVoxel(voxel) {
    const step = (this.voxelSize + this.spacing);
    const cx = voxel.currX * step;
    const cy = voxel.currY * step;
    const cz = voxel.currZ * step;
    const s = (this.voxelSize / 2) * voxel.scale;

    // 8 vertices of the cube
    const rawVertices = [
      { x: cx - s, y: cy - s, z: cz - s },
      { x: cx + s, y: cy - s, z: cz - s },
      { x: cx + s, y: cy + s, z: cz - s },
      { x: cx - s, y: cy + s, z: cz - s },
      { x: cx - s, y: cy - s, z: cz + s },
      { x: cx + s, y: cy - s, z: cz + s },
      { x: cx + s, y: cy + s, z: cz + s },
      { x: cx - s, y: cy + s, z: cz + s }
    ];

    const projected = rawVertices.map(v => this.project(v.x, v.y, v.z));

    // Faces: [v0, v1, v2, v3, normal]
    // 0: front (z+), 1: back (z-), 2: top (y-), 3: bottom (y+), 4: right (x+), 5: left (x-)
    const faces = [
      { verts: [4, 5, 6, 7], shade: 0.9, normal: [0, 0, 1] },   // Front
      { verts: [0, 4, 7, 3], shade: 0.65, normal: [-1, 0, 0] }, // Left
      { verts: [5, 1, 2, 6], shade: 0.8, normal: [1, 0, 0] },  // Right
      { verts: [0, 1, 5, 4], shade: 1.0, normal: [0, -1, 0] },  // Top
      { verts: [7, 6, 2, 3], shade: 0.45, normal: [0, 1, 0] },  // Bottom
      { verts: [1, 0, 3, 2], shade: 0.5, normal: [0, 0, -1] }   // Back
    ];

    // Determine colors
    let topColor = this.colors.rustLight;
    let rightColor = this.colors.rust;
    let leftColor = this.colors.brown;
    let isCore = voxel.colorType === 'core';

    if (isCore) {
      topColor = this.colors.limeBright;
      rightColor = this.colors.lime;
      leftColor = '#6A9E18';
    } else if (voxel.colorType === 'lime') {
      topColor = this.colors.limeBright;
      rightColor = this.colors.lime;
      leftColor = '#72A11E';
    } else if (voxel.colorType === 'cream') {
      topColor = '#FFF5DE';
      rightColor = this.colors.cream;
      leftColor = '#D4C097';
    }

    // Sort visible faces by centroid depth
    faces.forEach(face => {
      const v0 = projected[face.verts[0]];
      const v1 = projected[face.verts[1]];
      const v2 = projected[face.verts[2]];

      // Back-face culling via 2D cross-product
      const cross = (v1.x - v0.x) * (v2.y - v0.y) - (v1.y - v0.y) * (v2.x - v0.x);
      if (cross > 0) {
        this.ctx.beginPath();
        this.ctx.moveTo(v0.x, v0.y);
        for (let i = 1; i < face.verts.length; i++) {
          const vi = projected[face.verts[i]];
          this.ctx.lineTo(vi.x, vi.y);
        }
        this.ctx.closePath();

        // Fill with shaded lighting
        let baseColor = topColor;
        if (face.shade === 0.8) baseColor = rightColor;
        else if (face.shade <= 0.65) baseColor = leftColor;

        this.ctx.fillStyle = baseColor;
        this.ctx.fill();

        // Edge stroke
        this.ctx.strokeStyle = isCore ? '#FFF' : '#1F1712';
        this.ctx.lineWidth = isCore ? 1.5 : 1.0;
        this.ctx.stroke();

        // If core and mode is 'logo', render Jyotiraditya monogram 'JS'
        if (isCore && this.mode === 'logo') {
          const midX = (v0.x + v1.x + v2.x + projected[face.verts[3]].x) / 4;
          const midY = (v0.y + v1.y + v2.y + projected[face.verts[3]].y) / 4;
          this.ctx.fillStyle = '#1F1712';
          this.ctx.font = 'bold 12px "Syne", sans-serif';
          this.ctx.textAlign = 'center';
          this.ctx.textBaseline = 'middle';
          this.ctx.fillText('JS', midX, midY);
        }
      }
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Warm studio ambient background glow
    const grad = this.ctx.createRadialGradient(
      this.width / 2, this.height / 2, 40,
      this.width / 2, this.height / 2, this.width * 0.6
    );
    grad.addColorStop(0, 'rgba(242, 225, 188, 0.4)');
    grad.addColorStop(1, 'rgba(242, 225, 188, 0)');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Dynamic ground shadow
    const shadowY = this.height / 2 + 110;
    this.ctx.beginPath();
    this.ctx.ellipse(this.width / 2, shadowY, 110, 26, 0, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(122, 59, 16, 0.16)';
    this.ctx.fill();

    this.updatePhysics();

    // Sort voxels back to front (Painter's algorithm)
    const sortedVoxels = [...this.voxels].map(v => {
      const proj = this.project(
        v.currX * (this.voxelSize + this.spacing),
        v.currY * (this.voxelSize + this.spacing),
        v.currZ * (this.voxelSize + this.spacing)
      );
      return { voxel: v, depth: proj.depth };
    }).sort((a, b) => b.depth - a.depth);

    // Draw sorted voxels
    sortedVoxels.forEach(item => {
      this.drawVoxel(item.voxel);
    });

    this.rafId = requestAnimationFrame(this.animate);
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
  }
}


/* ==================== MODULE: media-player.js ==================== */

// Interactive Media Player & Artwork Generator
// Provides interactive animatic previewers, animated scene canvases,
// frame steppers for storyboards, and drop-in support for real video files.

const MediaPlayer = {
  activeCanvases: new Map(),

  // Initialize all interactive media players on the page
  init() {
    this.initHeroReel();
    this.initJaiminiPlayer();
    this.initBotAndBoy();
    this.initBeavisPlayer();
    this.initAkkadGallery();
    this.initTargetPractise();
    this.initMonkeshExpressions();
    this.setupVideoControls();
    this.setupCinemaFocusMode();
  },

  // Setup standard video player UI controls (for both native <video> and canvas simulators)
  setupVideoControls() {
    document.querySelectorAll('.portfolio-media-wrapper').forEach(wrapper => {
      const video = wrapper.querySelector('video');
      const canvas = wrapper.querySelector('canvas');
      const playBtn = wrapper.querySelector('.media-play-toggle');
      const muteBtn = wrapper.querySelector('.media-mute-toggle');
      const progressBar = wrapper.querySelector('.media-progress-bar');
      const progressFill = wrapper.querySelector('.media-progress-fill');
      const fullscreenBtn = wrapper.querySelector('.media-fullscreen-btn');
      const placeholderBadge = wrapper.querySelector('.media-source-pill');

      if (video) {
        // Real video player integration
        const togglePlay = () => {
          if (video.paused) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.then(() => {
                if (playBtn) playBtn.innerHTML = '&#10074;&#10074;';
              }).catch(err => {
                console.warn('Autoplay prevented or video play error:', err);
              });
            }
          } else {
            video.pause();
            if (playBtn) playBtn.innerHTML = '&#9654;';
          }
        };

        if (playBtn) playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);

        video.addEventListener('play', () => {
          if (playBtn) playBtn.innerHTML = '&#10074;&#10074;';
        });

        video.addEventListener('pause', () => {
          if (playBtn) playBtn.innerHTML = '&#9654;';
        });

        video.addEventListener('ended', () => {
          if (playBtn) playBtn.innerHTML = '&#9654;';
          if (progressFill) progressFill.style.width = '100%';
        });

        if (muteBtn) {
          muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            muteBtn.classList.toggle('muted', video.muted);
            muteBtn.innerHTML = video.muted ? '&#128263;' : '&#128266;';
          });
        }

        video.addEventListener('timeupdate', () => {
          if (progressFill && video.duration) {
            const pct = (video.currentTime / video.duration) * 100;
            progressFill.style.width = pct + '%';
          }
        });

        if (progressBar) {
          progressBar.style.cursor = 'pointer';
          progressBar.addEventListener('click', (e) => {
            if (!video.duration) return;
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pos = Math.max(0, Math.min(1, clickX / rect.width));
            video.currentTime = pos * video.duration;
            if (progressFill) progressFill.style.width = (pos * 100) + '%';
          });
        }
      } else if (canvas) {
        // Interactive Canvas preview simulation controls
        let isSimPlaying = true;
        let isSimMuted = false;

        if (playBtn) {
          playBtn.addEventListener('click', () => {
            isSimPlaying = !isSimPlaying;
            playBtn.innerHTML = isSimPlaying ? '&#10074;&#10074;' : '&#9654;';
          });
        }

        if (muteBtn) {
          muteBtn.addEventListener('click', () => {
            isSimMuted = !isSimMuted;
            muteBtn.classList.toggle('muted', isSimMuted);
            muteBtn.innerHTML = isSimMuted ? '&#128263;' : '&#128266;';
          });
        }
      }
    });
  },

  // Setup Distraction-Free Cinema Theater Focus Mode
  setupCinemaFocusMode() {
    let closeBtn = document.querySelector('.cinema-close-floating-btn');
    if (!closeBtn) {
      closeBtn = document.createElement('button');
      closeBtn.className = 'cinema-close-floating-btn';
      closeBtn.innerHTML = '<span>✕ Exit Cinema Focus</span>';
      closeBtn.style.display = 'none';
      document.body.appendChild(closeBtn);
    }

    const exitCinema = () => {
      document.body.classList.remove('cinema-focus-active');
      document.querySelectorAll('.project-item.is-cinema-focused').forEach(el => {
        el.classList.remove('is-cinema-focused');
      });
      closeBtn.style.display = 'none';
    };

    closeBtn.addEventListener('click', exitCinema);

    // Escape key exits
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') exitCinema();
    });

    // Wire up theater toggle buttons
    document.querySelectorAll('.media-theater-toggle, .media-fullscreen-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectItem = btn.closest('.project-item');
        if (!projectItem) return;

        const isCurrentlyFocused = projectItem.classList.contains('is-cinema-focused');
        if (isCurrentlyFocused) {
          exitCinema();
        } else {
          document.querySelectorAll('.project-item.is-cinema-focused').forEach(el => el.classList.remove('is-cinema-focused'));
          projectItem.classList.add('is-cinema-focused');
          document.body.classList.add('cinema-focus-active');
          closeBtn.style.display = 'inline-flex';
        }
      });
    });

    // Wire up artwork image click to enter cinema focus
    document.querySelectorAll('.project-artwork-frame').forEach(frame => {
      frame.style.cursor = 'zoom-in';
      frame.title = 'Click for Distraction-Free Cinema View';
      frame.addEventListener('click', () => {
        const projectItem = frame.closest('.project-item');
        if (!projectItem || projectItem.classList.contains('is-cinema-focused')) return;
        projectItem.classList.add('is-cinema-focused');
        document.body.classList.add('cinema-focus-active');
        closeBtn.style.display = 'inline-flex';
      });
    });
  },

  // 1. HERO SHOWREEL CANVAS
  initHeroReel() {
    const canvas = document.getElementById('hero-reel-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight || 420;

    let time = 0;
    let isPlaying = true;

    const render = () => {
      if (isPlaying) time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Deep cinematic backdrop
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#1F1712');
      bgGrad.addColorStop(0.5, '#2D1B13');
      bgGrad.addColorStop(1, '#15100D');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Geometric animated Indian folk / sci-fi grid
      ctx.strokeStyle = 'rgba(242, 225, 188, 0.08)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Animated kinetic motion arcs
      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < 4; i++) {
        const radius = 60 + i * 35;
        const angle = time * (i % 2 === 0 ? 0.8 : -0.6) + i * 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, angle, angle + Math.PI * 0.9);
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(179, 58, 18, 0.85)' : 'rgba(154, 205, 50, 0.85)';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        // Pulsing dots at arc ends
        const dotX = cx + Math.cos(angle + Math.PI * 0.9) * radius;
        const dotY = cy + Math.sin(angle + Math.PI * 0.9) * radius;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF5DE';
        ctx.fill();
      }

      // Central Showreel Logo Mark
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(Math.sin(time * 0.4) * 0.08);

      // Diamond folk emblem
      ctx.beginPath();
      ctx.moveTo(0, -45);
      ctx.lineTo(45, 0);
      ctx.lineTo(0, 45);
      ctx.lineTo(-45, 0);
      ctx.closePath();
      ctx.fillStyle = '#B33A12';
      ctx.fill();
      ctx.strokeStyle = '#9ACD32';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Play Icon
      ctx.beginPath();
      ctx.moveTo(-10, -18);
      ctx.lineTo(18, 0);
      ctx.lineTo(-10, 18);
      ctx.closePath();
      ctx.fillStyle = '#FFF5DE';
      ctx.fill();

      ctx.restore();

      // Cinematic Filmstrip overlay banner
      ctx.fillStyle = 'rgba(0,0,0,0.65)';
      ctx.fillRect(0, height - 52, width, 52);
      ctx.fillStyle = '#9ACD32';
      ctx.font = 'bold 12px "Syne", sans-serif';
      ctx.fillText('FEATURED REEL 2025–2026', 24, height - 24);
      ctx.fillStyle = '#F2E1BC';
      ctx.font = '12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('2D Animation • Motion Graphics • Pre-Production', 220, height - 24);

      requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight || 420;
      }
    });
  },

  // 2. JAIMINI (TITLE SEQUENCE)
  initJaiminiPlayer() {
    const canvas = document.getElementById('jaimini-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight || 420;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Post-nuclear apocalyptic sky: rust, crimson, amber
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, '#360F05');
      sky.addColorStop(0.5, '#7A2208');
      sky.addColorStop(0.85, '#B33A12');
      sky.addColorStop(1, '#1A0B06');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      // Fallout ember particles
      for (let i = 0; i < 28; i++) {
        const px = (Math.sin(i * 99 + time * 0.5) * 0.5 + 0.5) * width;
        const py = ((i * 17 - time * 45) % height + height) % height;
        const pr = (i % 3) + 1.2;
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#9ACD32' : '#F7B05B';
        ctx.fill();
      }

      // Sun / Nuclear glow disc behind temple
      const sunY = height * 0.45;
      const sunGrad = ctx.createRadialGradient(width * 0.5, sunY, 15, width * 0.5, sunY, 160);
      sunGrad.addColorStop(0, 'rgba(255, 230, 160, 0.95)');
      sunGrad.addColorStop(0.3, 'rgba(224, 122, 40, 0.6)');
      sunGrad.addColorStop(1, 'rgba(179, 58, 18, 0)');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(width * 0.5, sunY, 160, 0, Math.PI * 2);
      ctx.fill();

      // Jagannath Puri Temple Shikhar Silhouette
      const tx = width * 0.5;
      const ty = height * 0.78;
      ctx.fillStyle = '#150A06';
      ctx.beginPath();
      ctx.moveTo(tx - 110, ty);
      ctx.lineTo(tx - 90, ty - 60);
      ctx.lineTo(tx - 65, ty - 120);
      ctx.lineTo(tx - 40, ty - 170);
      ctx.lineTo(tx - 15, ty - 220);
      // Amalaka & Kalash
      ctx.lineTo(tx - 25, ty - 225);
      ctx.lineTo(tx, ty - 255); // Top spire
      ctx.lineTo(tx + 25, ty - 225);
      ctx.lineTo(tx + 15, ty - 220);
      ctx.lineTo(tx + 40, ty - 170);
      ctx.lineTo(tx + 65, ty - 120);
      ctx.lineTo(tx + 90, ty - 60);
      ctx.lineTo(tx + 110, ty);
      ctx.closePath();
      ctx.fill();

      // Machine Division mechanical circuit veins crawling up the stone temple
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = '#9ACD32';
      ctx.shadowColor = '#9ACD32';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      const pulse = Math.sin(time * 3);
      if (pulse > -0.2) {
        ctx.moveTo(tx - 60, ty);
        ctx.lineTo(tx - 50, ty - 70);
        ctx.lineTo(tx - 20, ty - 110);
        ctx.lineTo(tx - 25, ty - 160);
        ctx.lineTo(tx, ty - 210);

        ctx.moveTo(tx + 60, ty);
        ctx.lineTo(tx + 45, ty - 80);
        ctx.lineTo(tx + 25, ty - 130);
        ctx.lineTo(tx + 10, ty - 180);
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset glow

      // Foreground Priest Silhouette (Jaimini Trivedi standing with staff & mechanical arm)
      const px = width * 0.35;
      const py = height * 0.85;
      ctx.fillStyle = '#0D0503';
      ctx.beginPath();
      // Priest dhoti & torso
      ctx.ellipse(px, py - 45, 18, 45, 0, 0, Math.PI * 2);
      ctx.fill();
      // Head
      ctx.beginPath();
      ctx.arc(px, py - 95, 12, 0, Math.PI * 2);
      ctx.fill();
      // Sacred staff / Mech conduit
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#9ACD32';
      ctx.beginPath();
      ctx.moveTo(px + 18, py + 10);
      ctx.lineTo(px + 18, py - 125);
      ctx.stroke();

      // Floating cinematic typography
      ctx.fillStyle = '#FFF5DE';
      ctx.font = '900 28px "Syne", sans-serif';
      ctx.letterSpacing = '6px';
      ctx.textAlign = 'center';
      ctx.fillText('JAIMINI', width * 0.5, height * 0.22);

      ctx.fillStyle = '#9ACD32';
      ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
      ctx.letterSpacing = '3px';
      ctx.fillText('THE REBUILDING OF PURI • TITLE SEQUENCE', width * 0.5, height * 0.27);

      requestAnimationFrame(render);
    };

    render();
  },

  // 3. THE BOT AND THE BOY (Robot character art & animatic)
  initBotAndBoy() {
    const canvas = document.getElementById('bot-boy-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight || 420;
    let time = 0;

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Junkyard atmospheric gradient
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, '#1E1916');
      bg.addColorStop(0.7, '#2F231B');
      bg.addColorStop(1, '#1A120D');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Junkyard scrap mounds
      ctx.fillStyle = '#140D09';
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, height - 90);
      ctx.bezierCurveTo(width * 0.2, height - 120, width * 0.4, height - 70, width * 0.6, height - 110);
      ctx.bezierCurveTo(width * 0.8, height - 130, width * 0.9, height - 80, width, height - 100);
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // ROBOT CHARACTER ART (Center)
      const rx = width * 0.58;
      const ry = height * 0.65;
      const breath = Math.sin(time * 2) * 3;

      // Robot Chassis / Torso
      ctx.fillStyle = '#7A3B10';
      ctx.strokeStyle = '#1F1712';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(rx - 45, ry - 75 + breath, 90, 85, [12, 12, 6, 6]);
      ctx.fill();
      ctx.stroke();

      // Rust patches
      ctx.fillStyle = '#B33A12';
      ctx.beginPath();
      ctx.arc(rx - 25, ry - 50 + breath, 14, 0, Math.PI * 2);
      ctx.arc(rx + 20, ry - 20 + breath, 18, 0, Math.PI * 2);
      ctx.fill();

      // Chest plate gauge
      ctx.fillStyle = '#221914';
      ctx.fillRect(rx - 24, ry - 35 + breath, 48, 20);
      ctx.strokeStyle = '#9ACD32';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(rx - 24, ry - 35 + breath, 48, 20);

      // Robot Head
      ctx.fillStyle = '#8F4613';
      ctx.beginPath();
      ctx.roundRect(rx - 35, ry - 140 + breath, 70, 55, [16, 16, 8, 8]);
      ctx.fill();
      ctx.strokeStyle = '#1F1712';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Glowing Eye (The discovery moment!)
      const eyeGlow = (Math.sin(time * 3.5) + 1) * 0.5;
      ctx.beginPath();
      ctx.arc(rx - 12, ry - 115 + breath, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#1A1A1A';
      ctx.fill();

      // Luminous Lime Eye
      ctx.beginPath();
      ctx.arc(rx - 12, ry - 115 + breath, 7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(154, 205, 50, ${0.7 + eyeGlow * 0.3})`;
      ctx.shadowColor = '#9ACD32';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Second eye (broken, flickering wire)
      ctx.beginPath();
      ctx.arc(rx + 14, ry - 115 + breath, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#1A1A1A';
      ctx.fill();
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(rx + 12, ry - 115 + breath);
      ctx.lineTo(rx + 22, ry - 105 + breath);
      ctx.stroke();

      // THE BOY (Left Silhouette, reaching out)
      const bx = width * 0.28;
      const by = height * 0.72;

      ctx.fillStyle = '#130C08';
      // Boy Body
      ctx.beginPath();
      ctx.ellipse(bx, by - 40, 16, 38, 0.1, 0, Math.PI * 2);
      ctx.fill();
      // Boy Head
      ctx.beginPath();
      ctx.arc(bx + 4, by - 85, 14, 0, Math.PI * 2);
      ctx.fill();
      // Reaching Arm toward Robot Eye
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#130C08';
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(bx + 10, by - 55);
      ctx.lineTo(bx + 55, by - 65 + Math.sin(time * 2) * 4);
      ctx.lineTo(rx - 48, ry - 60 + breath);
      ctx.stroke();

      // Interactive Blueprint / Turnaround Tag
      ctx.fillStyle = '#9ACD32';
      ctx.font = 'bold 11px "Syne", sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('CHARACTER SPEC: SCRAP BOT v4 • PULL-DOWN BLUEPRINT', 24, 32);

      requestAnimationFrame(render);
    };

    render();
  },

  // 4. BEAVIS AND BUTT-HEAD (Scene Layout & Animatic)
  initBeavisPlayer() {
    const canvas = document.getElementById('beavis-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight || 420;

    let mode = 'split'; // 'sketch', 'animatic', 'split'
    let splitPos = 0.5;
    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Living Room couch background
      // Left side: Pencil Layout Sketch (Animation Production style)
      // Right side: Colored Cel Animatic

      const drawSketchSide = (w) => {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, w, height);
        ctx.clip();

        // Animation layout paper background (warm off-white with peg holes)
        ctx.fillStyle = '#F8F5EC';
        ctx.fillRect(0, 0, w, height);

        // Production grid lines & safe area
        ctx.strokeStyle = 'rgba(70, 130, 180, 0.35)'; // Non-photo blue pencil
        ctx.lineWidth = 1;
        ctx.strokeRect(30, 25, width - 60, height - 50);
        ctx.strokeRect(50, 45, width - 100, height - 90);

        // Pencil sketch contours (Beavis couch scene)
        ctx.strokeStyle = '#2B3542'; // Graphite
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        // Couch sketch
        ctx.beginPath();
        ctx.moveTo(60, height - 110);
        ctx.lineTo(width - 60, height - 110);
        ctx.lineTo(width - 40, height - 60);
        ctx.lineTo(40, height - 60);
        ctx.closePath();
        ctx.stroke();

        // Rough pencil characters
        const bounce = Math.sin(time * 6) * 4;
        // Head bang doodle 1
        ctx.beginPath();
        ctx.arc(width * 0.38, height * 0.48 + bounce, 24, 0, Math.PI * 2);
        ctx.stroke();
        // Head bang doodle 2
        ctx.beginPath();
        ctx.arc(width * 0.58, height * 0.45 - bounce, 26, 0, Math.PI * 2);
        ctx.stroke();

        // Production annotation notes
        ctx.fillStyle = '#B33A12';
        ctx.font = '11px monospace';
        ctx.fillText('SCENE: 04 / SHOT: 12B [LAYOUT STAGE]', 40, height - 15);
        ctx.fillText('ACTION: DUAL HEADBANG (HOLD 8 FR)', 40, height - 32);

        ctx.restore();
      };

      const drawColorSide = (startX) => {
        ctx.save();
        ctx.beginPath();
        ctx.rect(startX, 0, width - startX, height);
        ctx.clip();

        // Colored living room
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, 0, width, height);

        // Wallpaper
        ctx.fillStyle = '#A0522D';
        ctx.fillRect(0, 0, width, height * 0.65);

        // Colored couch
        ctx.fillStyle = '#CD853F';
        ctx.strokeStyle = '#1F1712';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(width * 0.18, height * 0.45, width * 0.64, height * 0.42, 16);
        ctx.fill();
        ctx.stroke();

        // Characters with animated headbanging
        const bounce = Math.sin(time * 6) * 6;

        // Beavis (Blue shirt)
        ctx.fillStyle = '#4169E1';
        ctx.fillRect(width * 0.32, height * 0.52 + bounce, 40, 50);
        // Beavis Blonde hair
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(width * 0.36, height * 0.44 + bounce, 22, 0, Math.PI * 2);
        ctx.fill();

        // Butt-Head (AC/DC shirt)
        ctx.fillStyle = '#696969';
        ctx.fillRect(width * 0.54, height * 0.50 - bounce, 45, 52);
        // Butt-Head brown pompadour
        ctx.fillStyle = '#4A2A12';
        ctx.beginPath();
        ctx.arc(width * 0.59, height * 0.41 - bounce, 24, 0, Math.PI * 2);
        ctx.fill();

        // TV Glow
        const tvGlow = (Math.sin(time * 8) + 1) * 0.15;
        ctx.fillStyle = `rgba(173, 216, 230, ${0.1 + tvGlow})`;
        ctx.fillRect(0, 0, width, height);

        ctx.restore();
      };

      const dividerX = width * splitPos;
      drawSketchSide(dividerX);
      drawColorSide(dividerX);

      // Split Divider Bar
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#9ACD32';
      ctx.beginPath();
      ctx.moveTo(dividerX, 0);
      ctx.lineTo(dividerX, height);
      ctx.stroke();

      // Divider Handle Handle
      ctx.fillStyle = '#B33A12';
      ctx.beginPath();
      ctx.arc(dividerX, height / 2, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FFF5DE';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#FFF5DE';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('◄ ►', dividerX, height / 2 + 3);

      requestAnimationFrame(render);
    };

    render();

    // Mouse & Touch drag for split slider
    let isDragging = false;
    const startDrag = (clientX) => {
      isDragging = true;
      const rect = canvas.getBoundingClientRect();
      splitPos = Math.max(0.08, Math.min(0.92, (clientX - rect.left) / rect.width));
    };
    const moveDrag = (clientX) => {
      if (!isDragging) return;
      const rect = canvas.getBoundingClientRect();
      splitPos = Math.max(0.08, Math.min(0.92, (clientX - rect.left) / rect.width));
    };
    const endDrag = () => { isDragging = false; };

    canvas.addEventListener('mousedown', (e) => startDrag(e.clientX));
    window.addEventListener('mousemove', (e) => moveDrag(e.clientX));
    window.addEventListener('mouseup', endDrag);

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) startDrag(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches && e.touches.length > 0) moveDrag(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchend', endDrag);
  },

  // 5. THE TALE OF AKKAD (Panel gallery: archery lesson scene)
  initAkkadGallery() {
    // Interactive multi-panel viewer for The Tale of Akkad
    const panels = [
      { id: 1, title: 'Panel 1: The Master Whispers', desc: 'Akkadian archery master adjusts young archer posture under ancient cedar grove.' },
      { id: 2, title: 'Panel 2: Tension on the Bowstring', desc: 'Extreme close up: sinew bowstring drawn taut against cheek, breath held.' },
      { id: 3, title: 'Panel 3: The Golden Flight', desc: 'Arrow slicing through Mesopotamian dusk light with atmospheric dust particles.' },
      { id: 4, title: 'Panel 4: The Bronze Bullseye', desc: 'Direct impact on ceremonial clay target, copper sparks scattering.' }
    ];

    const container = document.getElementById('akkad-panel-strip');
    if (!container) return;

    container.innerHTML = panels.map((p, idx) => `
      <div class="akkad-panel-card ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="akkad-panel-canvas-wrap">
          <canvas class="akkad-mini-canvas" width="280" height="180" data-panel="${p.id}"></canvas>
        </div>
        <div class="akkad-panel-info">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
      </div>
    `).join('');

    // Draw art on mini canvases
    container.querySelectorAll('.akkad-mini-canvas').forEach((c, idx) => {
      const ctx = c.getContext('2d');
      // Mesopotamia dusk palette: ochre, terracotta, rust, gold
      const grad = ctx.createLinearGradient(0, 0, 0, 180);
      grad.addColorStop(0, '#532213');
      grad.addColorStop(0.6, '#B33A12');
      grad.addColorStop(1, '#1A0E08');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 280, 180);

      // Distant Akkadian ziggurat silhouette
      ctx.fillStyle = '#22110B';
      ctx.beginPath();
      ctx.moveTo(30, 120);
      ctx.lineTo(60, 80);
      ctx.lineTo(110, 80);
      ctx.lineTo(140, 120);
      ctx.fill();

      // Stylized archer silhouette
      ctx.strokeStyle = '#F2E1BC';
      ctx.lineWidth = 2.5;
      if (idx === 0) {
        // Two figures standing
        ctx.fillStyle = '#0F0704';
        ctx.fillRect(160, 70, 24, 75);
        ctx.fillRect(200, 85, 20, 60);
      } else if (idx === 1) {
        // Drawn bow
        ctx.beginPath();
        ctx.arc(140, 90, 50, -Math.PI * 0.4, Math.PI * 0.4);
        ctx.stroke();
        ctx.strokeStyle = '#9ACD32';
        ctx.beginPath();
        ctx.moveTo(140, 90);
        ctx.lineTo(210, 90);
        ctx.stroke();
      } else if (idx === 2) {
        // Arrow in motion with golden streak
        ctx.strokeStyle = '#9ACD32';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(40, 90);
        ctx.lineTo(240, 90);
        ctx.stroke();
      } else {
        // Target impact sparks
        ctx.fillStyle = '#B33A12';
        ctx.beginPath();
        ctx.arc(140, 90, 32, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#9ACD32';
        ctx.beginPath();
        ctx.arc(140, 90, 12, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Archery Video Clip Player Loop
    const videoCanvas = document.getElementById('akkad-video-canvas');
    if (videoCanvas) {
      const vCtx = videoCanvas.getContext('2d');
      let vWidth = videoCanvas.width = videoCanvas.parentElement.clientWidth;
      let vHeight = videoCanvas.height = videoCanvas.parentElement.clientHeight || 320;
      let vTime = 0;

      const renderVideo = () => {
        vTime += 0.025;
        vCtx.clearRect(0, 0, vWidth, vHeight);

        // Dusk Mesopotamian sky with dramatic clouds
        const grad = vCtx.createLinearGradient(0, 0, 0, vHeight);
        grad.addColorStop(0, '#38160B');
        grad.addColorStop(0.5, '#7A2E16');
        grad.addColorStop(0.85, '#B33A12');
        grad.addColorStop(1, '#1A0E08');
        vCtx.fillStyle = grad;
        vCtx.fillRect(0, 0, vWidth, vHeight);

        // Distant Ziggurats and cedar forest silhouettes
        vCtx.fillStyle = '#140A06';
        vCtx.beginPath();
        vCtx.moveTo(0, vHeight);
        vCtx.lineTo(0, vHeight - 70);
        vCtx.lineTo(120, vHeight - 110);
        vCtx.lineTo(240, vHeight - 75);
        vCtx.lineTo(vWidth * 0.6, vHeight - 120);
        vCtx.lineTo(vWidth * 0.8, vHeight - 80);
        vCtx.lineTo(vWidth, vHeight - 100);
        vCtx.lineTo(vWidth, vHeight);
        vCtx.closePath();
        vCtx.fill();

        // Archer Drawing Bow (Left)
        const ax = vWidth * 0.22;
        const ay = vHeight * 0.72;
        vCtx.fillStyle = '#080402';
        vCtx.beginPath();
        vCtx.ellipse(ax, ay - 40, 16, 42, 0, 0, Math.PI * 2);
        vCtx.fill();
        vCtx.beginPath();
        vCtx.arc(ax, ay - 88, 12, 0, Math.PI * 2);
        vCtx.fill();

        // Animated Arrow Flight across the screen
        const flightLoop = (vTime * 1.5) % 3.0; // 0 to 3
        if (flightLoop < 2.0) {
          const arrowProgress = flightLoop / 2.0;
          const arrowX = ax + 30 + arrowProgress * (vWidth * 0.6);
          const arrowY = (ay - 50) + Math.sin(arrowProgress * Math.PI) * -35 + (arrowProgress * 20);

          vCtx.strokeStyle = '#9ACD32';
          vCtx.lineWidth = 3.5;
          vCtx.beginPath();
          vCtx.moveTo(arrowX - 45, arrowY + (arrowProgress * 4));
          vCtx.lineTo(arrowX, arrowY);
          vCtx.stroke();

          // Golden arrowhead flare
          vCtx.fillStyle = '#FFEB85';
          vCtx.beginPath();
          vCtx.arc(arrowX, arrowY, 4, 0, Math.PI * 2);
          vCtx.fill();
        } else {
          // Impact flash at the distant ceremonial target
          const targetX = ax + 30 + (vWidth * 0.6);
          const targetY = (ay - 50) + 20;
          vCtx.fillStyle = '#9ACD32';
          vCtx.beginPath();
          vCtx.arc(targetX, targetY, 18, 0, Math.PI * 2);
          vCtx.fill();
          vCtx.fillStyle = '#FFF5DE';
          vCtx.beginPath();
          vCtx.arc(targetX, targetY, 8, 0, Math.PI * 2);
          vCtx.fill();
        }

        // Overlay text
        vCtx.fillStyle = 'rgba(255, 245, 222, 0.9)';
        vCtx.font = 'bold 12px "Syne", sans-serif';
        vCtx.fillText('THE TALE OF AKKAD • SEQUENCE CLIP: THE CEDAR GROVE ARROW FLIGHT', 24, 30);

        requestAnimationFrame(renderVideo);
      };

      renderVideo();
    }
  },

  // 6. TARGET PRACTISE (Black-and-White Comic Storyboard Panels)
  initTargetPractise() {
    const panels = [
      { num: 'SHOT 01', type: 'EXT. ROOFTOP - DUSK', camera: 'WIDE ESTABLISHING', text: 'Rain pelting down corrugated metal sheets. Figure crouched beside water tank.' },
      { num: 'SHOT 02', type: 'CLOSE UP - EYE', camera: 'EXTREME MACRO', text: 'Reflected neon sign flickering in pupil. Reticle calibrates across lens.' },
      { num: 'SHOT 03', type: 'OVER THE SHOULDER', camera: 'DUTCH TILT', text: 'Crosshair locks onto paper silhouette target 200m across the alleyway.' },
      { num: 'SHOT 04', type: 'ACTION BEAT - THE TRIGGER', camera: 'SNAP ZOOM', text: 'Finger tensions hairpin trigger. Muzzle flash illuminates raindrops.' },
      { num: 'SHOT 05', type: 'IMPACT FRAME', camera: 'HIGH SPEED', text: 'Target center punched clean through. Black ink splatter dissipates.' }
    ];

    const setupInstance = (canvasId, infoId, prevId, nextId, autoId, frameId) => {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;

      const infoBox = infoId ? document.getElementById(infoId) : null;
      const prevBtn = document.getElementById(prevId);
      const nextBtn = document.getElementById(nextId);
      const autoBtn = document.getElementById(autoId);
      const frameNumEl = document.getElementById(frameId);

      const ctx = canvas.getContext('2d');
      let width = canvas.width = (canvas.parentElement && canvas.parentElement.clientWidth > 0) ? canvas.parentElement.clientWidth : 600;
      let height = canvas.height = (canvas.parentElement && canvas.parentElement.clientHeight > 0) ? canvas.parentElement.clientHeight : 260;

      let currentFrame = 0;

      const drawFrame = (index) => {
        ctx.clearRect(0, 0, width, height);

        // High contrast B&W comic ink paper
        ctx.fillStyle = '#0D0D0D';
        ctx.fillRect(0, 0, width, height);

        // Authentic halftone & manga speedlines
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;

        // Outer panel frame with hand-drawn ink weight
        ctx.strokeRect(20, 20, width - 40, height - 40);

        if (index === 0) {
          // Wide establishing: Rooftops & Rain
          for (let i = 0; i < 50; i++) {
            const rx = Math.random() * width;
            const ry = Math.random() * height;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx - 8, ry + 24);
            ctx.stroke();
          }
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(width * 0.2, height * 0.6, width * 0.6, height * 0.4);
          ctx.fillStyle = '#0D0D0D';
          ctx.beginPath();
          ctx.arc(width * 0.45, height * 0.58, 22, 0, Math.PI * 2);
          ctx.fill();
        } else if (index === 1) {
          // Close up eye with reticle
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(width * 0.5, height * 0.5, width * 0.35, height * 0.25, 0, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(width * 0.5, height * 0.5, 38, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#0D0D0D';
          ctx.beginPath();
          ctx.arc(width * 0.5, height * 0.5, 14, 0, Math.PI * 2);
          ctx.fill();

          // Reticle markings
          ctx.strokeStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.moveTo(width * 0.5 - 60, height * 0.5);
          ctx.lineTo(width * 0.5 + 60, height * 0.5);
          ctx.moveTo(width * 0.5, height * 0.5 - 60);
          ctx.lineTo(width * 0.5, height * 0.5 + 60);
          ctx.stroke();
        } else if (index === 2) {
          // Dutch tilt target acquisition
          ctx.save();
          ctx.translate(width * 0.5, height * 0.5);
          ctx.rotate(0.14);
          ctx.translate(-width * 0.5, -height * 0.5);

          // Silhouette target
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(width * 0.65, height * 0.4, 25, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillRect(width * 0.55, height * 0.48, 48, 70);

          // Gun barrel silhouette in foreground
          ctx.fillStyle = '#222';
          ctx.beginPath();
          ctx.moveTo(0, height);
          ctx.lineTo(width * 0.45, height * 0.65);
          ctx.lineTo(width * 0.48, height * 0.75);
          ctx.lineTo(0, height);
          ctx.fill();
          ctx.restore();
        } else if (index === 3) {
          // Action beat: Trigger & Muzzle Flash
          const cx = width * 0.5;
          const cy = height * 0.5;

          // Starburst muzzle flash
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
            const r1 = 90;
            const r2 = 35;
            ctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
            ctx.lineTo(cx + Math.cos(a + Math.PI / 16) * r2, cy + Math.sin(a + Math.PI / 16) * r2);
          }
          ctx.closePath();
          ctx.fill();

          // Speedlines outward
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 2;
          for (let i = 0; i < 24; i++) {
            const ang = (i / 24) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(ang) * 110, cy + Math.sin(ang) * 110);
            ctx.lineTo(cx + Math.cos(ang) * (width * 0.45), cy + Math.sin(ang) * (width * 0.45));
            ctx.stroke();
          }
        } else if (index === 4) {
          // High speed impact frame
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(20, 20, width - 40, height - 40);

          // Shattered target hole & ink drops
          ctx.fillStyle = '#0D0D0D';
          ctx.beginPath();
          ctx.arc(width * 0.5, height * 0.5, 45, 0, Math.PI * 2);
          ctx.fill();

          for (let i = 0; i < 40; i++) {
            const rad = 50 + Math.random() * (width * 0.35);
            const a = Math.random() * Math.PI * 2;
            const dotR = 2 + Math.random() * 6;
            ctx.beginPath();
            ctx.arc(width * 0.5 + Math.cos(a) * rad, height * 0.5 + Math.sin(a) * rad, dotR, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        if (frameNumEl) {
          if (frameId.includes('dossier')) {
            frameNumEl.textContent = `Frame ${index + 1} of 5: ${panels[index].type} — ${panels[index].camera}`;
          } else {
            frameNumEl.textContent = `${index + 1}`;
          }
        }

        if (infoBox) {
          const item = panels[index];
          infoBox.innerHTML = `
            <div class="tp-meta">
              <span class="tp-badge">${item.num}</span>
              <span class="tp-cam">${item.camera}</span>
              <span class="tp-loc">${item.type}</span>
            </div>
            <p class="tp-desc">${item.text}</p>
          `;
        }
      };

      drawFrame(0);

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentFrame = (currentFrame - 1 + panels.length) % panels.length;
          drawFrame(currentFrame);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentFrame = (currentFrame + 1) % panels.length;
          drawFrame(currentFrame);
        });
      }

      let isAuto = false;
      let autoInterval;
      if (autoBtn) {
        autoBtn.addEventListener('click', () => {
          isAuto = !isAuto;
          autoBtn.textContent = isAuto ? 'Stop Animatic' : 'Play Animatic Loop';
          autoBtn.classList.toggle('playing', isAuto);

          if (isAuto) {
            autoInterval = setInterval(() => {
              currentFrame = (currentFrame + 1) % panels.length;
              drawFrame(currentFrame);
            }, 1400);
          } else {
            clearInterval(autoInterval);
          }
        });
      }
    };

    setupInstance('target-practise-canvas', 'target-practise-info', 'tp-prev-btn', 'tp-next-btn', 'tp-auto-btn', 'tp-frame-num');
    setupInstance('dossier-target-practise-canvas', null, 'dossier-tp-prev-btn', 'dossier-tp-next-btn', 'dossier-tp-auto-btn', 'dossier-tp-frame-num');
  },

    // 7. MONKESH (Character design with 8-facial expression sheet on dark background)
  initMonkeshExpressions() {
    const expressions = [
      { name: 'Joy / Mischief', mouth: 'grin', eyes: 'happy', brow: 'relaxed' },
      { name: 'Shock / Caught', mouth: 'open-o', eyes: 'wide', brow: 'raised' },
      { name: 'Scheming / Plot', mouth: 'smirk-side', eyes: 'sly', brow: 'angled' },
      { name: 'Rage / Defiance', mouth: 'teeth-grit', eyes: 'sharp', brow: 'furrowed' },
      { name: 'Skeptical / Doubt', mouth: 'flat', eyes: 'squint', brow: 'one-up' },
      { name: 'Smug / Victorious', mouth: 'confident', eyes: 'winking', brow: 'cool' },
      { name: 'Sorrow / Remorse', mouth: 'frown', eyes: 'teary', brow: 'drooping' },
      { name: 'Determined / Focus', mouth: 'tight', eyes: 'intense', brow: 'steep' }
    ];

    const grids = document.querySelectorAll('#monkesh-expression-grid, #dossier-monkesh-expression-grid, .monkesh-expression-grid');
    if (grids.length === 0) return;

    grids.forEach(grid => {
      grid.innerHTML = expressions.map((exp, idx) => `
      <div class="monkesh-card" data-idx="${idx}">
        <canvas class="monkesh-canvas" width="160" height="160" data-expr="${idx}"></canvas>
        <div class="monkesh-label">
          <span class="monkesh-num">0${idx + 1}</span>
          <span class="monkesh-title">${exp.name}</span>
        </div>
      </div>
    `).join('');

    // Draw the 8 expressions on dark background
    grid.querySelectorAll('.monkesh-canvas').forEach((c, idx) => {
      const ctx = c.getContext('2d');
      const exp = expressions[idx];
      const cx = 80;
      const cy = 80;

      // Dark card canvas
      ctx.fillStyle = '#1A1412';
      ctx.fillRect(0, 0, 160, 160);

      // Character Muzzle & Head base (Monkey humanoid character)
      // Ears
      ctx.fillStyle = '#B33A12';
      ctx.strokeStyle = '#1F1712';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx - 48, cy - 8, 14, 0, Math.PI * 2);
      ctx.arc(cx + 48, cy - 8, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Head shape
      ctx.fillStyle = '#7A3B10';
      ctx.beginPath();
      ctx.ellipse(cx, cy - 10, 42, 46, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Golden fur crest / hair tuft
      ctx.fillStyle = '#9ACD32';
      ctx.beginPath();
      ctx.moveTo(cx - 14, cy - 54);
      ctx.lineTo(cx, cy - 72);
      ctx.lineTo(cx + 14, cy - 54);
      ctx.closePath();
      ctx.fill();

      // Muzzle area
      ctx.fillStyle = '#F2E1BC';
      ctx.beginPath();
      ctx.ellipse(cx, cy + 8, 28, 22, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Nose
      ctx.fillStyle = '#1F1712';
      ctx.beginPath();
      ctx.arc(cx, cy + 2, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw dynamic eyes based on expression
      ctx.strokeStyle = '#1F1712';
      ctx.lineWidth = 2.5;
      ctx.fillStyle = '#FFF';

      if (exp.eyes === 'happy') {
        // Arched smiling eyes
        ctx.beginPath();
        ctx.arc(cx - 16, cy - 14, 8, Math.PI, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx + 16, cy - 14, 8, Math.PI, 0);
        ctx.stroke();
      } else if (exp.eyes === 'wide') {
        // Big round pupils
        ctx.beginPath();
        ctx.arc(cx - 16, cy - 14, 11, 0, Math.PI * 2);
        ctx.arc(cx + 16, cy - 14, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#B33A12';
        ctx.beginPath();
        ctx.arc(cx - 16, cy - 14, 5, 0, Math.PI * 2);
        ctx.arc(cx + 16, cy - 14, 5, 0, Math.PI * 2);
        ctx.fill();
      } else if (exp.eyes === 'winking') {
        // One winking, one open
        ctx.beginPath();
        ctx.arc(cx - 16, cy - 14, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + 8, cy - 14);
        ctx.lineTo(cx + 24, cy - 14);
        ctx.stroke();
      } else {
        // Focused intense eyes
        ctx.beginPath();
        ctx.arc(cx - 16, cy - 14, 8, 0, Math.PI * 2);
        ctx.arc(cx + 16, cy - 14, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#1F1712';
        ctx.beginPath();
        ctx.arc(cx - 16, cy - 14, 4, 0, Math.PI * 2);
        ctx.arc(cx + 16, cy - 14, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Eyebrows
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#1F1712';
      ctx.beginPath();
      if (exp.brow === 'furrowed' || exp.brow === 'steep') {
        ctx.moveTo(cx - 26, cy - 28);
        ctx.lineTo(cx - 8, cy - 22);
        ctx.moveTo(cx + 26, cy - 28);
        ctx.lineTo(cx + 8, cy - 22);
      } else if (exp.brow === 'raised') {
        ctx.moveTo(cx - 26, cy - 30);
        ctx.lineTo(cx - 8, cy - 30);
        ctx.moveTo(cx + 8, cy - 30);
        ctx.lineTo(cx + 26, cy - 30);
      } else {
        ctx.moveTo(cx - 24, cy - 26);
        ctx.lineTo(cx - 8, cy - 25);
        ctx.moveTo(cx + 8, cy - 25);
        ctx.lineTo(cx + 24, cy - 26);
      }
      ctx.stroke();

      // Mouth
      ctx.beginPath();
      if (exp.mouth === 'grin') {
        ctx.arc(cx, cy + 12, 14, 0.1, Math.PI - 0.1);
      } else if (exp.mouth === 'open-o') {
        ctx.ellipse(cx, cy + 16, 7, 10, 0, 0, Math.PI * 2);
      } else if (exp.mouth === 'teeth-grit') {
        ctx.rect(cx - 14, cy + 12, 28, 8);
      } else if (exp.mouth === 'frown') {
        ctx.arc(cx, cy + 24, 12, Math.PI + 0.3, -0.3);
      } else {
        ctx.moveTo(cx - 10, cy + 16);
        ctx.lineTo(cx + 12, cy + 14);
      }
      ctx.stroke();
      });
    });
  }
};


/* ==================== MODULE: app.js ==================== */

// Main Application Logic & SPA Routing

class PortfolioApp {
  constructor() {
    this.voxelCubeInstances = [];
    this.init();
  }

  init() {
    // 1. Initialize Indian Folk-Art Decorations & Borders
    FolkArt.renderDiamondBorder();
    FolkArt.initKolamTitles();

    // 2. Inject Tool Icons into DOM
    this.populateToolIcons();

    // 3. Initialize Media Players & Canvas Animators
    MediaPlayer.init();

    // 4. Initialize 3D Voxel Cube for Motion Graphics
    this.initVoxelCube();

    // 5. Setup Carousel
    this.setupCarousel();

    // 6. Setup QR Code Triggers
    this.setupQREvents();

    // 7. Setup SPA Hash Router & Navigation
    this.setupRouter();
    this.setupNavigation();

    // 8. Setup Scroll Animations & Interactions
    this.setupScrollEffects();

    // 9. Setup Attractive Color Theme Switcher
    this.setupThemeSwitcher();

    // 10. Setup Copy Email & Toast Notification
    this.setupCopyActions();

    // 11. Setup Interactive Gallery Filters & Categories
    this.setupGalleryFilters();

    // 12. Setup High-Resolution Cinema Lightbox Modal
    this.setupLightbox();

    // 13. Setup Floating Back to Top Button
    this.setupBackToTop();

    // 14. Setup Interactive Folder-in-Folder Archive & In-Site Scrollable PDF System
    this.setupFolderExplorer();
  }

  // Floating Back to Top smooth scroll
  setupBackToTop() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // One-click copy email with floating toast alert
  setupCopyActions() {
    const copyBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast-notification');
    let toastTimeout = null;

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const email = copyBtn.dataset.email || 'pa4589645@gmail.com';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
          } else {
            // Fallback for non-https or older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }

          if (toast) {
            const toastMsg = toast.querySelector('.toast-message');
            if (toastMsg) {
              toastMsg.textContent = `Email copied to clipboard: ${email}`;
            }
            toast.classList.add('show');

            if (toastTimeout) clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
              toast.classList.remove('show');
            }, 3200);
          }
        } catch (err) {
          console.warn('Could not copy email to clipboard', err);
          window.location.href = `mailto:${email}`;
        }
      });
    }
  }

  // Inject crisp SVG icons into tool cards
  populateToolIcons() {
    document.querySelectorAll('[data-tool-icon]').forEach(el => {
      const toolKey = el.dataset.toolIcon;
      if (Icons[toolKey]) {
        el.innerHTML = Icons[toolKey];
      }
    });
  }

  // Initialize interactive 3D Voxel Cube
  initVoxelCube() {
    const canvases = document.querySelectorAll('#voxel-cube-canvas, #dossier-voxel-cube-canvas');
    this.voxelCubeInstances = [];
    canvases.forEach(canvas => {
      if (canvas) {
        const instance = new VoxelCube(canvas);
        this.voxelCubeInstances.push(instance);
      }
    });

    // Setup Voxel Mode Switcher buttons
    document.querySelectorAll('.voxel-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.voxel-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.mode;
        this.voxelCubeInstances.forEach(inst => {
          if (inst) inst.setMode(mode);
        });
      });
    });
  }

  // Work Categories Horizontal Carousel
  setupCarousel() {
    const viewport = document.querySelector('.carousel-viewport');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (!viewport || !prevBtn || !nextBtn) return;

    const scrollAmount = 370;

    prevBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Touch / Mouse Drag Support
    let isDown = false;
    let startX;
    let scrollLeft;

    viewport.addEventListener('mousedown', (e) => {
      isDown = true;
      viewport.classList.add('dragging');
      startX = e.pageX - viewport.offsetLeft;
      scrollLeft = viewport.scrollLeft;
    });

    viewport.addEventListener('mouseleave', () => {
      isDown = false;
      viewport.classList.remove('dragging');
    });

    viewport.addEventListener('mouseup', () => {
      isDown = false;
      viewport.classList.remove('dragging');
    });

    viewport.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const walk = (x - startX) * 1.5;
      viewport.scrollLeft = scrollLeft - walk;
    });
  }

  // Direct link handlers (QR codes removed per user specification)
  setupQREvents() {
    document.querySelectorAll('[data-qr-trigger]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.dataset.url || 'https://www.behance.net/mnkeshthewise';
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    });

    document.querySelectorAll('[data-open-qr]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const type = el.dataset.openQr;
        const url = (type === 'linkedin')
          ? 'https://www.linkedin.com/in/jyotiraditya-savaikar-435852273/'
          : 'https://www.behance.net/mnkeshthewise';
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    });
  }

  // Modern In-Page Hash Router & Smooth Navigation
  setupRouter() {
    const handleRoute = () => {
      const rawHash = window.location.hash.slice(1);
      const hash = rawHash || 'hero';

      // Remove intro mode if present
      document.body.classList.remove('is-intro-mode');

      // Check if it's a gallery route (e.g. #gallery, #gallery-all, #gallery-comic-storyboards)
      if (hash === 'gallery' || hash === 'gallery-all' || hash.startsWith('gallery-')) {
        const categorySlug = hash.startsWith('gallery-') ? hash.replace('gallery-', '') : 'all';
        this.filterGallery(categorySlug);

        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        const anchorTarget = document.getElementById(hash);
        if (anchorTarget) {
          anchorTarget.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Update active nav styling
      document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkHash = href.includes('#') ? href.split('#')[1] : '';
        const isMatched = (linkHash === hash) ||
                          (linkHash === 'gallery' && (hash === 'gallery' || hash.startsWith('gallery-'))) ||
                          (linkHash === 'hero' && (hash === 'hero' || hash === '' || hash === 'home'));
        link.classList.toggle('active', isMatched);
      });
    };

    window.addEventListener('hashchange', handleRoute);
    if (window.location.hash) {
      setTimeout(handleRoute, 120);
    }

    // Smooth scroll and routing for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        const targetId = href.slice(1);
        if (!targetId) return;

        if (targetId === 'gallery' || targetId.startsWith('gallery-')) {
          e.preventDefault();
          window.location.hash = targetId;
          const categorySlug = targetId.startsWith('gallery-') ? targetId.replace('gallery-', '') : 'all';
          this.filterGallery(categorySlug);
          const gallerySection = document.getElementById('gallery');
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            window.location.hash = targetId;
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    if ('IntersectionObserver' in window && sections.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
              const href = link.getAttribute('href') || '';
              const linkHash = href.includes('#') ? href.split('#')[1] : '';
              if (linkHash === id) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
              }
            });
          }
        });
      }, { rootMargin: '-20% 0px -60% 0px' });

      sections.forEach(section => observer.observe(section));
    }
  }

  // Navigation interactions & Mobile Menu
  setupNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
      });

      // Close menu on link click
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
        });
      });
    }

    // Print resume button
    const printBtn = document.getElementById('print-resume-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // Smooth scroll and entry animations
  setupScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-item, .category-card, .timeline-card, .tool-card').forEach(el => {
      observer.observe(el);
    });
  }

  // First-Class Dark Mode Toggle & System Preference Detection
  setupThemeSwitcher() {
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let savedTheme = localStorage.getItem('jyoti-theme');

    if (!savedTheme) {
      savedTheme = systemPrefersDark ? 'dark' : 'light';
    }

    const applyTheme = (themeName) => {
      const isDark = (themeName === 'dark' || themeName === 'midnight');
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('jyoti-theme', isDark ? 'dark' : 'light');

      // Update all toggle buttons in DOM
      document.querySelectorAll('.dark-mode-toggle-btn, .theme-switcher-btn').forEach(btn => {
        const iconEl = btn.querySelector('.theme-icon');
        const textEl = btn.querySelector('.theme-label-text, .theme-name');
        if (iconEl) iconEl.textContent = isDark ? '☀️' : '🌙';
        if (textEl) textEl.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        btn.setAttribute('aria-checked', isDark ? 'true' : 'false');
      });
    };

    applyTheme(savedTheme);

    // Bind click handlers
    document.querySelectorAll('.dark-mode-toggle-btn, .theme-switcher-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
        applyTheme(isCurrentlyDark ? 'light' : 'dark');
      });
    });

    // Listen for OS dark mode changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('jyoti-theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // Setup Live Category Filters in Gallery
  setupGalleryFilters() {
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.dataset.filter || 'all';
        this.filterGallery(filter);
        if (filter === 'all') {
          history.replaceState(null, null, '#gallery');
        } else {
          history.replaceState(null, null, `#gallery-${filter}`);
        }
      });
    });
  }

  // Live filter gallery items by category slug & toggle topic dossiers
  filterGallery(filterCategory) {
    const galleryView = document.getElementById('gallery') || document.getElementById('view-gallery');
    if (!galleryView) return;

    const catSlug = filterCategory || 'all';

    // Update active filter button styling
    galleryView.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      const btnFilter = btn.dataset.filter;
      const isActive = (btnFilter === catSlug || (catSlug === 'all' && btnFilter === 'all'));
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.style.background = 'var(--rust)';
        btn.style.color = '#ffffff';
        btn.style.borderColor = 'var(--rust)';
      } else {
        btn.style.background = 'var(--bg-card)';
        btn.style.color = 'var(--text-color)';
        btn.style.borderColor = 'var(--border-color)';
      }
    });

    // Update dynamic gallery header
    const titleEl = document.getElementById('gallery-active-title');
    const descEl = document.getElementById('gallery-active-desc');
    const categoryInfo = {
      'all': {
        title: 'Master Production Gallery & Archives',
        desc: 'Full high-resolution visual development, beat boards, character model sheets, environment layouts, and complete downloadable production PDF books.'
      },
      'comic-storyboards': {
        title: 'Comic Storyboards — Target Practise',
        desc: 'Complete 88.2 MB action comic storyboard book, weapon ballistics blueprints, extreme foreshortening and high-contrast inking.'
      },
      'storyboarding': {
        title: 'Storyboarding & Animatics — The Bot and the Boy',
        desc: 'Full 1-minute 49-second 2D animatic reel, official color key art poster, 9-panel desert chase beat boards, and robot mechanical anatomy.'
      },
      'character-design': {
        title: 'Character Design & Concept Art — Akkad & Monkesh',
        desc: 'The Tale of Akkad 34.3 MB Production Book PDF, 20-second archery lesson sequence, robot anatomy, and Monkesh 8-expression model sheet.'
      },
      'scene-layout': {
        title: 'Scene Layout & Environment Backgrounds',
        desc: 'Atmospheric panoramic day vs. night city lighting keys, widescreen 3072x768 nocturnal street painting, and 3-stage camera staging sheets.'
      },
      'title-sequences': {
        title: 'Title Sequences — Jaimini',
        desc: 'Full 57-second production title sequence video, ornate serpent typography emblem, and lead character visual development.'
      },
      '3d-motion': {
        title: '3D Motion Graphics & Isometric Physics',
        desc: 'Interactive procedural voxel physics engine, isometric transformations, and dynamic logo reveal mechanics.'
      }
    };

    if (categoryInfo[catSlug]) {
      if (titleEl) titleEl.textContent = categoryInfo[catSlug].title;
      if (descEl) descEl.textContent = categoryInfo[catSlug].desc;
    }

    // Toggle master showcase vs. topic dossiers
    const masterShowcase = document.getElementById('gallery-master-showcase');
    const dossiers = galleryView.querySelectorAll('.project-topic-dossier');

    if (catSlug === 'all') {
      if (masterShowcase) masterShowcase.style.display = 'block';
      dossiers.forEach(d => {
        d.style.display = 'none';
      });
    } else {
      if (masterShowcase) masterShowcase.style.display = 'none';
      dossiers.forEach(d => {
        if (d.dataset.topic === catSlug) {
          d.style.display = 'block';
        } else {
          d.style.display = 'none';
        }
      });
    }

    // Wire up return-to-all buttons inside dossiers
    galleryView.querySelectorAll('.dossier-reset-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        this.filterGallery('all');
        history.replaceState(null, null, '#gallery');
        galleryView.scrollIntoView({ behavior: 'smooth' });
      };
    });
  }

  // Setup High-Resolution Fullscreen Cinema Lightbox
  setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    const imgEl = document.getElementById('lightbox-img');
    const badgeEl = document.getElementById('lightbox-badge');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');
    const specsEl = document.getElementById('lightbox-specs');
    const closeBtn = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentItems = [];
    let currentIndex = 0;

    const updateLightbox = (idx) => {
      if (!currentItems[idx]) return;
      currentIndex = idx;
      const item = currentItems[idx];
      if (imgEl) {
        imgEl.src = item.src;
        imgEl.alt = item.title;
      }
      if (badgeEl) badgeEl.textContent = item.badge || 'PRODUCTION PLATE';
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc || '';
      if (specsEl) specsEl.textContent = item.specs || '';
    };

    const openLightbox = (triggerEl) => {
      // Find all currently visible lightbox triggers in the active view
      const visibleTriggers = Array.from(document.querySelectorAll('[data-lightbox-trigger]')).filter(el => {
        return el.offsetParent !== null; // element is currently visible in DOM
      });

      currentItems = visibleTriggers.map(el => ({
        src: el.dataset.lightboxSrc || (el.querySelector('img') ? el.querySelector('img').src : ''),
        title: el.dataset.lightboxTitle || (el.querySelector('h3, h4') ? el.querySelector('h3, h4').textContent : 'Production Artwork'),
        badge: el.dataset.lightboxBadge || 'PRODUCTION PLATE',
        desc: el.dataset.lightboxDesc || (el.querySelector('p') ? el.querySelector('p').textContent : ''),
        specs: el.dataset.lightboxSpecs || ''
      }));

      const clickIndex = visibleTriggers.indexOf(triggerEl);
      currentIndex = clickIndex >= 0 ? clickIndex : 0;

      updateLightbox(currentIndex);
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (imgEl) imgEl.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";
    };

    // Bind triggers using event delegation
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox-trigger]');
      if (trigger) {
        // If clicking on an anchor tag inside that is not a zoom button, let it navigate
        if (e.target.closest('a') && !e.target.closest('.gallery-zoom-trigger')) {
          return;
        }
        e.preventDefault();
        openLightbox(trigger);
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentItems.length === 0) return;
        const newIdx = (currentIndex - 1 + currentItems.length) % currentItems.length;
        updateLightbox(newIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentItems.length === 0) return;
        const newIdx = (currentIndex + 1) % currentItems.length;
        updateLightbox(newIdx);
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        if (currentItems.length > 0) {
          const newIdx = (currentIndex - 1 + currentItems.length) % currentItems.length;
          updateLightbox(newIdx);
        }
      } else if (e.key === 'ArrowRight') {
        if (currentItems.length > 0) {
          const newIdx = (currentIndex + 1) % currentItems.length;
          updateLightbox(newIdx);
        }
      }
    });
  }

  // =========================================================================
  // 14. INTERACTIVE FOLDER-IN-FOLDER ARCHIVE SYSTEM & IN-SITE SCROLLABLE PDF
  // =========================================================================
  setupFolderExplorer() {
    const explorerSections = document.querySelectorAll('.folder-browser-section');
    if (!explorerSections.length) return;

    explorerSections.forEach(section => {
      const viewRoot = section.querySelector('#view-level-root');
      const viewCat = section.querySelector('#view-level-cat');
      const viewSub = section.querySelector('#view-level-sub');
      const viewAll = section.querySelector('#view-level-all');

      const crumbRoot = section.querySelector('#crumb-root');
      const crumbSepCat = section.querySelector('#crumb-sep-cat');
      const crumbCat = section.querySelector('#crumb-cat');
      const crumbCatText = section.querySelector('#crumb-cat-text');
      const crumbSepSub = section.querySelector('#crumb-sep-sub');
      const crumbSub = section.querySelector('#crumb-sub');
      const crumbSubText = section.querySelector('#crumb-sub-text');

      const statsBadge = section.querySelector('#folder-stats-text');
      const toggleBtn = section.querySelector('#view-mode-toggle');
      const toggleText = section.querySelector('#toggle-text');
      const toggleIcon = section.querySelector('#toggle-icon');

      let currentLevel = 'root';
      let activeCatId = null;
      let activeSubId = null;

      const categoryNames = {
        '2d': '2D',
        'preprod': 'Preprod',
        '3d': '3D',
        'xtra-work': 'Xtra work'
      };

      const subfolderNames = {
        'jaimini': 'Jaimini Title Sequence',
        'non-narrative': 'Non Narrative',
        'target-practise': 'Target Practise',
        'akkad': 'Akkad',
        'beavis': 'Beavis',
        'bot-and-boy': 'bot and boy',
        'monkesh': 'Monkesh',
        'cube': 'cube',
        'cyberpunk': 'Cyberpunk',
        'wine': 'Wine',
        'illustrations': 'Extra Work'
      };

      const updatePills = (activeId) => {
        section.querySelectorAll('.folder-tab-btn').forEach(btn => {
          if (btn.dataset.tabFolder === activeId) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      };

      const showRoot = () => {
        currentLevel = 'root';
        activeCatId = null;
        activeSubId = null;

        if (viewRoot) viewRoot.classList.add('active');
        if (viewCat) viewCat.classList.remove('active');
        if (viewSub) viewSub.classList.remove('active');
        if (viewAll) viewAll.classList.remove('active');

        if (crumbRoot) {
          crumbRoot.classList.add('active');
          crumbRoot.style.display = 'inline-flex';
        }
        if (crumbSepCat) crumbSepCat.style.display = 'none';
        if (crumbCat) crumbCat.style.display = 'none';
        if (crumbSepSub) crumbSepSub.style.display = 'none';
        if (crumbSub) crumbSub.style.display = 'none';

        if (statsBadge) statsBadge.textContent = '4 Categories • 11 Projects • 30 Assets';
        updatePills('root');
      };

      const showCategory = (catId) => {
        if (!catId) return showRoot();
        currentLevel = 'cat';
        activeCatId = catId;
        activeSubId = null;

        if (viewRoot) viewRoot.classList.remove('active');
        if (viewCat) viewCat.classList.add('active');
        if (viewSub) viewSub.classList.remove('active');
        if (viewAll) viewAll.classList.remove('active');

        section.querySelectorAll('.category-subfolder-container').forEach(el => {
          el.style.display = 'none';
        });
        const target = section.querySelector('#cat-container-' + catId);
        if (target) target.style.display = 'block';

        if (crumbRoot) crumbRoot.classList.remove('active');
        if (crumbSepCat) crumbSepCat.style.display = 'inline';
        if (crumbCat) {
          crumbCat.style.display = 'inline-flex';
          crumbCat.classList.add('active');
          crumbCat.dataset.catId = catId;
          if (crumbCatText) crumbCatText.textContent = categoryNames[catId] || catId;
        }
        if (crumbSepSub) crumbSepSub.style.display = 'none';
        if (crumbSub) crumbSub.style.display = 'none';

        if (statsBadge) statsBadge.textContent = 'Category: ' + (categoryNames[catId] || catId);
        updatePills(catId);
      };

      const showSubfolder = (subId, parentCatId) => {
        if (!subId) return showRoot();
        currentLevel = 'sub';
        activeSubId = subId;
        activeCatId = parentCatId || activeCatId;

        if (viewRoot) viewRoot.classList.remove('active');
        if (viewCat) viewCat.classList.remove('active');
        if (viewSub) viewSub.classList.add('active');
        if (viewAll) viewAll.classList.remove('active');

        section.querySelectorAll('.subfolder-content-container').forEach(el => {
          el.style.display = 'none';
        });
        const target = section.querySelector('#sub-container-' + subId);
        if (target) {
          target.style.display = 'block';
          target.querySelectorAll('iframe[data-pdf-src]').forEach(iframe => {
            if (!iframe.src || iframe.src === 'about:blank' || !iframe.src.includes('.pdf')) {
              iframe.src = iframe.dataset.pdfSrc;
            }
          });
          if (!activeCatId && target.dataset.parentCat) {
            activeCatId = target.dataset.parentCat;
          }
        }

        if (crumbRoot) crumbRoot.classList.remove('active');
        if (crumbSepCat) crumbSepCat.style.display = 'inline';
        if (crumbCat) {
          crumbCat.style.display = 'inline-flex';
          crumbCat.classList.remove('active');
          crumbCat.dataset.catId = activeCatId;
          if (crumbCatText) crumbCatText.textContent = categoryNames[activeCatId] || activeCatId;
        }
        if (crumbSepSub) crumbSepSub.style.display = 'inline';
        if (crumbSub) {
          crumbSub.style.display = 'inline-flex';
          crumbSub.classList.add('active');
          if (crumbSubText) crumbSubText.textContent = subfolderNames[subId] || subId;
        }

        if (statsBadge) statsBadge.textContent = 'Project: ' + (subfolderNames[subId] || subId);
        updatePills(activeCatId);
      };

      const toggleViewAll = () => {
        if (currentLevel === 'all') {
          showRoot();
          if (toggleText) toggleText.textContent = 'Expand All Projects';
          if (toggleIcon) toggleIcon.textContent = '⊞';
        } else {
          currentLevel = 'all';
          if (viewRoot) viewRoot.classList.remove('active');
          if (viewCat) viewCat.classList.remove('active');
          if (viewSub) viewSub.classList.remove('active');
          if (viewAll) viewAll.classList.add('active');

          if (crumbRoot) crumbRoot.classList.add('active');
          if (crumbSepCat) crumbSepCat.style.display = 'none';
          if (crumbCat) crumbCat.style.display = 'none';
          if (crumbSepSub) crumbSepSub.style.display = 'none';
          if (crumbSub) crumbSub.style.display = 'none';

          if (toggleText) toggleText.textContent = 'Catalog View';
          if (toggleIcon) toggleIcon.textContent = '▦';
          if (statsBadge) statsBadge.textContent = 'Expanded View (All 11 Projects)';
        }
      };

      if (crumbRoot) crumbRoot.addEventListener('click', () => showRoot());
      if (crumbCat) crumbCat.addEventListener('click', () => {
        if (activeCatId) showCategory(activeCatId);
      });
      if (toggleBtn) toggleBtn.addEventListener('click', toggleViewAll);

      section.addEventListener('click', (e) => {
        const catCard = e.target.closest('[data-open-cat]');
        if (catCard) {
          const catId = catCard.dataset.openCat;
          showCategory(catId);
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        const subCard = e.target.closest('[data-open-sub]');
        if (subCard) {
          if (subCard.dataset.dragged === 'true') {
            subCard.removeAttribute('data-dragged');
            return;
          }
          const subId = subCard.dataset.openSub;
          const parentCat = subCard.dataset.parentCat;
          showSubfolder(subId, parentCat);
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        const backCatBtn = e.target.closest('[data-action="go-parent-cat"]');
        if (backCatBtn) {
          const catId = backCatBtn.dataset.parentCat || activeCatId;
          showCategory(catId);
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        const backRootBtn = e.target.closest('[data-action="go-root"]');
        if (backRootBtn) {
          showRoot();
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        const tabBtn = e.target.closest('[data-tab-folder]');
        if (tabBtn) {
          const target = tabBtn.dataset.tabFolder;
          if (target === 'root') {
            showRoot();
          } else {
            showCategory(target);
          }
          return;
        }
      });

      // Initialize Project Scrolling Tracks (Mouse drag, mouse wheel, scroll arrows, and filters)
      const initScrollTracks = () => {
        section.querySelectorAll('.projects-scroll-container').forEach(track => {
          let isDown = false;
          let startX = 0;
          let scrollLeftPos = 0;
          let hasMoved = false;

          track.addEventListener('mousedown', (e) => {
            if (e.target.closest('button') || e.target.closest('a')) return;
            isDown = true;
            hasMoved = false;
            track.classList.add('is-dragging');
            startX = e.pageX - track.offsetLeft;
            scrollLeftPos = track.scrollLeft;
          });

          track.addEventListener('mouseleave', () => {
            isDown = false;
            track.classList.remove('is-dragging');
          });

          track.addEventListener('mouseup', () => {
            isDown = false;
            track.classList.remove('is-dragging');
            if (hasMoved) {
              setTimeout(() => {
                track.querySelectorAll('.project-scroll-card').forEach(c => c.removeAttribute('data-dragged'));
              }, 100);
            }
          });

          track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5;
            if (Math.abs(walk) > 8) {
              hasMoved = true;
              track.querySelectorAll('.project-scroll-card').forEach(c => c.setAttribute('data-dragged', 'true'));
            }
            track.scrollLeft = scrollLeftPos - walk;
          });

          // Wheel horizontal scroll
          track.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              const canLeft = track.scrollLeft > 0;
              const canRight = track.scrollLeft < (track.scrollWidth - track.clientWidth - 2);
              if ((e.deltaY < 0 && canLeft) || (e.deltaY > 0 && canRight)) {
                track.scrollLeft += e.deltaY;
                e.preventDefault();
              }
            }
          }, { passive: false });
        });

        // Arrow buttons for master project scroll track
        const scrollPrevBtn = section.querySelector('#scroll-prev-btn');
        const scrollNextBtn = section.querySelector('#scroll-next-btn');
        const masterScrollTrack = section.querySelector('#projects-scroll-track');
        if (scrollPrevBtn && masterScrollTrack) {
          scrollPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            masterScrollTrack.scrollBy({ left: -360, behavior: 'smooth' });
          });
        }
        if (scrollNextBtn && masterScrollTrack) {
          scrollNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            masterScrollTrack.scrollBy({ left: 360, behavior: 'smooth' });
          });
        }

        // Arrow buttons for category scroll tracks
        section.querySelectorAll('.cat-scroll-prev').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.dataset.target;
            const track = section.querySelector('#' + targetId);
            if (track) track.scrollBy({ left: -340, behavior: 'smooth' });
          });
        });
        section.querySelectorAll('.cat-scroll-next').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.dataset.target;
            const track = section.querySelector('#' + targetId);
            if (track) track.scrollBy({ left: 340, behavior: 'smooth' });
          });
        });

        // Category filter pills in master scrolling section
        section.querySelectorAll('#project-scroll-filters .project-filter-pill').forEach(pill => {
          pill.addEventListener('click', (e) => {
            e.stopPropagation();
            section.querySelectorAll('#project-scroll-filters .project-filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const filter = pill.dataset.filter;
            if (!masterScrollTrack) return;
            const cards = masterScrollTrack.querySelectorAll('.project-scroll-card');
            cards.forEach(card => {
              if (filter === 'all' || card.dataset.cat === filter) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            });
            masterScrollTrack.scrollTo({ left: 0, behavior: 'smooth' });
          });
        });
      };

      initScrollTracks();

      // Check URL parameters for deep-linking (robust against sub, project, folder, category)
      const urlParams = new URLSearchParams(window.location.search);
      const folderParam = urlParams.get('folder') || urlParams.get('category') || urlParams.get('cat');
      const subParam = urlParams.get('sub') || urlParams.get('project');
      const projectParam = urlParams.get('project') || urlParams.get('sub');

      const projectFolderMap = {
        'jaimini': { cat: '2d', sub: 'jaimini' },
        'jaimini-title-sequence': { cat: '2d', sub: 'jaimini' },
        'title-sequences': { cat: '2d', sub: 'jaimini' },
        'non-narrative': { cat: '2d', sub: 'non-narrative' },
        'target-practise': { cat: '2d', sub: 'target-practise' },
        'comic-storyboards': { cat: '2d', sub: 'target-practise' },
        'the-tale-of-akkad': { cat: 'preprod', sub: 'akkad' },
        'akkad': { cat: 'preprod', sub: 'akkad' },
        'beavis': { cat: 'preprod', sub: 'beavis' },
        'scene-layout': { cat: 'preprod', sub: 'beavis' },
        'bot-and-boy': { cat: 'preprod', sub: 'bot-and-boy' },
        'the-bot-and-the-boy': { cat: 'preprod', sub: 'bot-and-boy' },
        'storyboarding': { cat: 'preprod', sub: 'bot-and-boy' },
        'monkesh': { cat: 'preprod', sub: 'monkesh' },
        'character-design': { cat: 'preprod', sub: 'monkesh' },
        '3d-motion': { cat: '3d', sub: 'cube' },
        'cube': { cat: '3d', sub: 'cube' },
        'cyberpunk': { cat: '3d', sub: 'cyberpunk' },
        'wine': { cat: '3d', sub: 'wine' },
        'xtra-work': { cat: 'xtra-work', sub: 'illustrations' },
        'illustrations': { cat: 'xtra-work', sub: 'illustrations' },
        'extra-work': { cat: 'xtra-work', sub: 'illustrations' }
      };

      if (folderParam && subParam) {
        showSubfolder(subParam, folderParam);
      } else if (projectParam && projectFolderMap[projectParam]) {
        const map = projectFolderMap[projectParam];
        showSubfolder(map.sub, map.cat);
      } else if (subParam && projectFolderMap[subParam]) {
        const map = projectFolderMap[subParam];
        showSubfolder(map.sub, map.cat);
      } else if (subParam) {
        showSubfolder(subParam);
      } else if (folderParam) {
        showCategory(folderParam);
      }
    });

    // In-Site PDF Viewer Global Setup
    const masterIframe = document.getElementById('master-pdf-iframe');
    const masterTitle = document.getElementById('master-pdf-title');
    const masterSub = document.getElementById('master-pdf-sub');
    const masterSize = document.getElementById('master-pdf-size');
    const masterOpenBtn = document.getElementById('master-pdf-open-btn');
    const masterDownloadBtn = document.getElementById('master-pdf-download-btn');
    const masterDownloadText = document.getElementById('master-download-text');
    const masterSummaryText = document.getElementById('master-pdf-summary-text');
    const masterHighlightsBox = document.getElementById('master-pdf-highlights-box');
    const masterHeightBtn = document.getElementById('master-pdf-height-btn');
    const masterHeightText = document.getElementById('master-height-text');
    const masterFullscreenBtn = document.getElementById('master-pdf-fullscreen-btn');
    const masterContainer = document.getElementById('master-in-site-pdf-viewer');

    const tabAkkad = document.getElementById('tab-pdf-akkad');
    const tabTarget = document.getElementById('tab-pdf-target');

    const switchMasterPdf = (tabEl) => {
      if (!tabEl || !masterIframe) return;
      document.querySelectorAll('.pdf-switch-btn').forEach(btn => btn.classList.remove('active'));
      tabEl.classList.add('active');

      const src = tabEl.dataset.pdfSrc;
      const title = tabEl.dataset.pdfTitle;
      const size = tabEl.dataset.pdfSize;
      const format = tabEl.dataset.pdfFormat;
      const summary = tabEl.dataset.pdfSummary;
      const highlights = (tabEl.dataset.pdfHighlights || '').split(',');

      masterIframe.src = src + '#toolbar=1&navpanes=0&scrollbar=1&view=FitH';
      if (masterTitle) masterTitle.textContent = title;
      if (masterSize) masterSize.textContent = size;
      if (masterSub) masterSub.innerHTML = format + ' &bull; <strong style="color: var(--rust);">' + size + '</strong>';
      if (masterOpenBtn) masterOpenBtn.href = src;
      if (masterDownloadBtn) masterDownloadBtn.href = src;
      if (masterDownloadText) masterDownloadText.textContent = 'Download (' + size + ')';
      if (masterSummaryText) masterSummaryText.textContent = summary;

      if (masterHighlightsBox) {
        masterHighlightsBox.innerHTML = '';
        highlights.forEach(hl => {
          const span = document.createElement('span');
          span.innerHTML = '&bull; ' + hl.trim();
          masterHighlightsBox.appendChild(span);
        });
      }
    };

    if (tabAkkad) tabAkkad.addEventListener('click', () => switchMasterPdf(tabAkkad));
    if (tabTarget) tabTarget.addEventListener('click', () => switchMasterPdf(tabTarget));

    // IntersectionObserver to lazy load master PDF viewer when viewport reaches section
    if (masterContainer && masterIframe) {
      if ('IntersectionObserver' in window) {
        const pdfObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (!masterIframe.src && masterIframe.dataset.pdfSrc) {
                masterIframe.src = masterIframe.dataset.pdfSrc;
              }
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '300px' });
        pdfObserver.observe(masterContainer);
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => {
            if (!masterIframe.src && masterIframe.dataset.pdfSrc) {
              masterIframe.src = masterIframe.dataset.pdfSrc;
            }
          }, 1500);
        });
      }
    }

    // Handle quick-jump buttons to specific PDFs
    document.addEventListener('click', (e) => {
      const pdfBtn = e.target.closest('[data-select-pdf]');
      if (pdfBtn) {
        const docId = pdfBtn.dataset.selectPdf;
        if (docId === 'akkad' && tabAkkad) {
          switchMasterPdf(tabAkkad);
        } else if ((docId === 'target-practise' || docId === 'target') && tabTarget) {
          switchMasterPdf(tabTarget);
        }
      }
    });

    if (masterHeightBtn && masterContainer) {
      masterHeightBtn.addEventListener('click', () => {
        masterContainer.classList.toggle('expanded');
        const isExp = masterContainer.classList.contains('expanded');
        if (masterHeightText) masterHeightText.textContent = isExp ? 'Compact (800px)' : 'Expand (1200px)';
      });
    }

    if (masterFullscreenBtn && masterContainer) {
      masterFullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          masterContainer.requestFullscreen().catch(err => {
            console.warn('Fullscreen request failed:', err);
          });
        } else {
          document.exitFullscreen();
        }
      });
    }

    // In-subfolder PDF toggles
    document.querySelectorAll('.toggle-pdf-height-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const el = document.getElementById(targetId);
        if (el) el.classList.toggle('expanded');
      });
    });

    document.querySelectorAll('.toggle-pdf-fullscreen-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const el = document.getElementById(targetId);
        if (el) {
          if (!document.fullscreenElement) {
            el.requestFullscreen().catch(e => console.warn(e));
          } else {
            document.exitFullscreen();
          }
        }
      });
    });

    if (window.location.hash === '#in-site-pdf-viewer') {
      const el = document.getElementById('in-site-pdf-viewer');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});
