// Interactive Media Player & Artwork Generator
// Provides interactive animatic previewers, animated scene canvases,
// frame steppers for storyboards, and drop-in support for real video files.

export const MediaPlayer = {
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
