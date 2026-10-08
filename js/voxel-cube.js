// 3D Animated Voxel Cube & Logo Reveal Component
// Pure HTML5 Canvas 3D isometric/perspective voxel engine with dynamic lighting, logo reveal, and physics

export class VoxelCube {
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
