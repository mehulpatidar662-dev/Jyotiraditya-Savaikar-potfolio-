// Main Application Logic & SPA Routing
import { FolkArt } from './folk-art.js';
import { QRHelper } from './qr-generator.js';
import { VoxelCube } from './voxel-cube.js';
import { MediaPlayer } from './media-player.js';
import { Icons } from './icons.js';

class PortfolioApp {
  constructor() {
    this.voxelCubeInstances = [];
    this.init();
  }

  init() {
    // 1. Setup Theme Switcher FIRST
    try { this.setupThemeSwitcher(); } catch(e) { console.warn(e); }

    // 2. Initialize Indian Folk-Art Decorations & Borders
    try { FolkArt.renderDiamondBorder(); } catch(e) { console.warn(e); }
    try { FolkArt.initKolamTitles(); } catch(e) { console.warn(e); }

    // 3. Inject Tool Icons into DOM
    try { this.populateToolIcons(); } catch(e) { console.warn(e); }

    // 4. Initialize Media Players & Canvas Animators
    try { MediaPlayer.init(); } catch(e) { console.warn(e); }

    // 5. Initialize 3D Voxel Cube for Motion Graphics
    try { this.initVoxelCube(); } catch(e) { console.warn(e); }

    // 6. Setup Carousel
    try { this.setupCarousel(); } catch(e) { console.warn(e); }

    // 7. Setup QR Code Triggers
    try { this.setupQREvents(); } catch(e) { console.warn(e); }

    // 8. Setup SPA Hash Router & Navigation
    try { this.setupRouter(); } catch(e) { console.warn(e); }
    try { this.setupNavigation(); } catch(e) { console.warn(e); }

    // 9. Setup Scroll Animations & Interactions
    try { this.setupScrollEffects(); } catch(e) { console.warn(e); }

    // 10. Setup Copy Email & Toast Notification
    try { this.setupCopyActions(); } catch(e) { console.warn(e); }

    // 11. Setup Interactive Gallery Filters & Categories
    try { this.setupGalleryFilters(); } catch(e) { console.warn(e); }

    // 12. Setup High-Resolution Cinema Lightbox Modal
    try { this.setupLightbox(); } catch(e) { console.warn(e); }

    // 13. Setup Floating Back to Top Button
    try { this.setupBackToTop(); } catch(e) { console.warn(e); }
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

  // Setup Behance and LinkedIn QR Code popups
  setupQREvents() {
    // Project Behance triggers
    document.querySelectorAll('[data-qr-trigger]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = btn.dataset.project || 'Project';
        const url = btn.dataset.url || 'https://www.behance.net/mnkeshthewise';
        QRHelper.openQRModal({
          title: `${project} on Behance`,
          subtitle: 'Scan to explore high-res project breakdown & animatic',
          url: url,
          type: 'behance'
        });
      });
    });

    // Explicit QR modal triggers if requested
    document.querySelectorAll('[data-open-qr]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const type = el.dataset.openQr;
        if (type === 'behance') {
          QRHelper.openQRModal({
            title: 'Jyotiraditya Savaikar on Behance',
            subtitle: '@mnkeshthewise • Animation & Storyboards',
            url: 'https://www.behance.net/mnkeshthewise',
            type: 'behance'
          });
        } else if (type === 'linkedin') {
          QRHelper.openQRModal({
            title: 'Jyotiraditya Savaikar on LinkedIn',
            subtitle: 'Professional Animation & Pre-Production Network',
            url: 'https://www.linkedin.com/in/jyotiraditya-savaikar-435852273/',
            type: 'linkedin'
          });
        }
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
          const gallerySection = document.getElementById('gallery') || document.getElementById('work') || document.getElementById('folder-explorer');
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
    let savedTheme = localStorage.getItem('jyoti-theme') || 'dark';

    const applyTheme = (themeName) => {
      const isDark = (themeName === 'dark' || themeName === 'midnight');
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      try { localStorage.setItem('jyoti-theme', isDark ? 'dark' : 'light'); } catch(e){}

      // Update all toggle buttons in DOM
      document.querySelectorAll('.dark-mode-toggle-btn, .theme-switcher-btn').forEach(btn => {
        const iconEl = btn.querySelector('.theme-icon');
        const textEl = btn.querySelector('.theme-label-text, .theme-name');
        if (iconEl) iconEl.textContent = isDark ? '☀️' : '🌙';
        if (textEl) textEl.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        btn.setAttribute('aria-checked', isDark ? 'true' : 'false');
        btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      });
    };

    applyTheme(savedTheme);

    // Bind click handlers
    document.querySelectorAll('.dark-mode-toggle-btn, .theme-switcher-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        if (typeof window.toggleTheme === 'function') {
          window.toggleTheme();
        } else {
          const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
          applyTheme(isCurrentlyDark ? 'light' : 'dark');
        }
      };
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

  // Setup High-Resolution Fullscreen Cinema Lightbox & Video Player
  setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    const imgEl = document.getElementById('lightbox-img');
    const videoEl = document.getElementById('lightbox-video');
    const badgeEl = document.getElementById('lightbox-badge');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');
    const specsEl = document.getElementById('lightbox-specs');
    const closeBtn = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const zoomBtn = document.getElementById('lightbox-zoom-toggle');
    const zoomText = document.getElementById('lightbox-zoom-text');
    const browserFsBtn = document.getElementById('lightbox-browser-fullscreen');
    const speedBtn = document.getElementById('lightbox-speed-btn');
    const speedText = document.getElementById('lightbox-speed-text');
    const mediaWrap = document.getElementById('lightbox-media-container');

    let currentItems = [];
    let currentIndex = 0;
    const SPEED_STEPS = [1.0, 1.25, 1.5, 2.0, 0.75];
    let currentSpeedIdx = 0;

    // Cinema HUD Overlay Helper
    const showCinemaHUD = (msg, icon = '🎬') => {
      let toast = document.getElementById('cinema-hud-toast');
      if (!toast) return;
      const iconEl = document.getElementById('cinema-hud-icon');
      const textEl = document.getElementById('cinema-hud-text');
      if (iconEl) iconEl.innerHTML = icon;
      if (textEl) textEl.textContent = msg;
      toast.classList.remove('visible');
      void toast.offsetWidth; // force reflow
      toast.classList.add('visible');
      clearTimeout(toast._timeout);
      toast._timeout = setTimeout(() => {
        toast.classList.remove('visible');
      }, 850);
    };
    window.showCinemaHUD = showCinemaHUD;

    const formatTime = (secs) => {
      if (isNaN(secs) || secs < 0) return '0:00';
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const resetZoom = () => {
      if (imgEl) imgEl.classList.remove('is-zoomed');
      if (mediaWrap) mediaWrap.classList.remove('is-zoomed-wrap');
      if (zoomText) zoomText.textContent = 'Fit / Zoom';
    };

    const toggleZoom = () => {
      if (!imgEl || imgEl.style.display === 'none') return;
      const isZoomed = imgEl.classList.toggle('is-zoomed');
      if (mediaWrap) mediaWrap.classList.toggle('is-zoomed-wrap', isZoomed);
      if (zoomText) zoomText.textContent = isZoomed ? 'Fit Screen' : 'Zoom In';
      showCinemaHUD(isZoomed ? '🔍 1:1 Pixel Details' : '⛶ Fit to Screen', '🔍');
    };

    if (zoomBtn) {
      zoomBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleZoom();
      });
    }

    if (imgEl) {
      imgEl.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleZoom();
      });
    }

    // Toggle True Browser Fullscreen
    const toggleFullscreen = (targetEl) => {
      const el = targetEl || document.documentElement;
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (el.requestFullscreen) {
          el.requestFullscreen().catch(err => console.warn(err));
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else if (el.webkitEnterFullscreen) {
          el.webkitEnterFullscreen();
        }
        showCinemaHUD('⛶ Fullscreen Browser Mode', '⛶');
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(err => console.warn(err));
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
        showCinemaHUD('Standard View', '🗗');
      }
    };

    if (browserFsBtn) {
      browserFsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFullscreen(modal);
      });
    }

    // Speed Cycle Handler
    const cycleSpeed = (targetVid) => {
      currentSpeedIdx = (currentSpeedIdx + 1) % SPEED_STEPS.length;
      const newSpeed = SPEED_STEPS[currentSpeedIdx];
      if (targetVid) {
        targetVid.playbackRate = newSpeed;
      }
      const speedStr = `${newSpeed}x`;
      if (speedText) speedText.textContent = speedStr;
      document.querySelectorAll('.video-speed-btn .speed-val').forEach(el => {
        el.textContent = speedStr;
      });
      showCinemaHUD(`⚡ Playback Speed: ${speedStr}`, '⚡');
    };

    if (speedBtn) {
      speedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        cycleSpeed(videoEl);
      });
    }

    const updateLightbox = (idx) => {
      if (!currentItems[idx]) return;
      currentIndex = idx;
      resetZoom();
      const item = currentItems[idx];
      const isVideo = !!(item.videoSrc || (item.src && (item.src.endsWith('.mp4') || item.src.endsWith('.mov') || item.src.endsWith('.webm'))));

      if (isVideo) {
        if (imgEl) {
          imgEl.style.display = 'none';
          imgEl.src = '';
        }
        if (zoomBtn) zoomBtn.style.display = 'none';
        if (speedBtn) speedBtn.style.display = 'inline-flex';
        if (videoEl) {
          videoEl.style.display = 'block';
          const targetSrc = item.videoSrc || item.src;
          if (videoEl.src !== targetSrc) {
            videoEl.src = targetSrc;
          }
          if (item.poster) videoEl.poster = item.poster;
          videoEl.playbackRate = SPEED_STEPS[currentSpeedIdx];
          videoEl.currentTime = 0;
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(err => console.warn('Autoplay prevented:', err));
          }
        }
        showCinemaHUD('▶ Cinema Player Active', '🎬');
      } else {
        if (videoEl) {
          videoEl.pause();
          videoEl.removeAttribute('src');
          videoEl.style.display = 'none';
        }
        if (zoomBtn) zoomBtn.style.display = 'inline-flex';
        if (speedBtn) speedBtn.style.display = 'none';
        if (imgEl) {
          imgEl.style.display = 'block';
          imgEl.src = item.src;
          imgEl.alt = item.title;
        }
      }

      if (badgeEl) badgeEl.textContent = item.badge || (isVideo ? 'CINEMA VIDEO' : 'PRODUCTION PLATE');
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc || '';
      if (specsEl) specsEl.textContent = item.specs || '';
    };

    const openLightbox = (triggerEl) => {
      // Find all currently visible lightbox triggers in the active view
      const visibleTriggers = Array.from(document.querySelectorAll('[data-lightbox-trigger]')).filter(el => {
        return el.offsetParent !== null; // element is currently visible in DOM
      });

      currentItems = visibleTriggers.map(el => {
        const vSrc = el.dataset.lightboxVideoSrc || el.dataset.videoSrc || (el.querySelector('video source') ? el.querySelector('video source').src : (el.querySelector('video') ? el.querySelector('video').src : ''));
        const iSrc = el.dataset.lightboxSrc || (el.querySelector('img') ? el.querySelector('img').src : '');
        return {
          src: iSrc,
          videoSrc: vSrc,
          title: el.dataset.lightboxTitle || el.dataset.videoTitle || (el.querySelector('h3, h4, .cinema-media-title, .folder-media-title-inline') ? el.querySelector('h3, h4, .cinema-media-title, .folder-media-title-inline').textContent.trim() : 'Production Artwork'),
          badge: el.dataset.lightboxBadge || el.dataset.videoBadge || (vSrc ? 'CINEMA VIDEO' : 'PRODUCTION PLATE'),
          desc: el.dataset.lightboxDesc || (el.querySelector('p, .cinema-caption') ? el.querySelector('p, .cinema-caption').textContent.trim() : ''),
          specs: el.dataset.lightboxSpecs || '',
          poster: el.querySelector('video') ? el.querySelector('video').poster : ''
        };
      });

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
      resetZoom();
      if (imgEl) imgEl.src = '';
      if (videoEl) {
        videoEl.pause();
        videoEl.removeAttribute('src');
        videoEl.style.display = 'none';
      }
      showCinemaHUD('Cinema Lightbox Closed', '✕');
    };

    // Global click listener for lightbox triggers, theater buttons, and fullscreen buttons
    document.addEventListener('click', (e) => {
      const theaterBtn = e.target.closest('.open-video-theater-btn');
      if (theaterBtn) {
        e.preventDefault();
        e.stopPropagation();
        const card = theaterBtn.closest('.folder-media-card') || theaterBtn;
        openLightbox(card);
        return;
      }

      const videoFsBtn = e.target.closest('.toggle-video-fullscreen-btn');
      if (videoFsBtn) {
        e.preventDefault();
        e.stopPropagation();
        const card = videoFsBtn.closest('.folder-media-card');
        const vid = card ? card.querySelector('video') : null;
        if (vid) toggleFullscreen(vid);
        return;
      }

      const speedBtnClicked = e.target.closest('.video-speed-btn');
      if (speedBtnClicked) {
        e.preventDefault();
        e.stopPropagation();
        const card = speedBtnClicked.closest('.folder-media-card');
        const vid = card ? card.querySelector('video') : null;
        cycleSpeed(vid);
        return;
      }

      const trigger = e.target.closest('[data-lightbox-trigger]');
      if (trigger) {
        if (e.target.closest('a') && !e.target.closest('.gallery-zoom-trigger')) {
          return;
        }
        if (e.target.tagName === 'VIDEO' || e.target.closest('video')) {
          return;
        }
        if (e.target.closest('.video-action-btn') && !e.target.closest('.open-video-theater-btn') && !e.target.closest('.image-action-fullscreen-btn') && !e.target.closest('.cinema-zoom-btn')) {
          return;
        }
        e.preventDefault();
        const startZoomed = !!e.target.closest('.cinema-zoom-btn');
        openLightbox(trigger);
        if (startZoomed) {
          setTimeout(() => toggleZoom(), 80);
        }
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

    // Helper to find the active/playing video on the page
    const getActiveVideo = () => {
      if (modal && modal.classList.contains('active')) {
        return (videoEl && videoEl.style.display !== 'none' && videoEl.src) ? videoEl : null;
      }
      const allVideos = Array.from(document.querySelectorAll('video'));
      const playingVideo = allVideos.find(v => !v.paused && !v.ended && v.currentTime > 0);
      if (playingVideo) return playingVideo;
      const hoveredVideo = allVideos.find(v => v.matches(':hover') || (v.closest('.folder-media-card') && v.closest('.folder-media-card').matches(':hover')));
      if (hoveredVideo) return hoveredVideo;
      return null;
    };

    // ==========================================
    // CINEMA KEYBOARD CONTROLS (Universal)
    // ==========================================
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      const isModalActive = modal && modal.classList.contains('active');
      const activeVideo = getActiveVideo();

      // 1. SPACEBAR: Play / Pause or Next Plate
      if (e.code === 'Space' || e.key === ' ') {
        if (isModalActive) {
          e.preventDefault();
          if (videoEl && videoEl.style.display !== 'none' && videoEl.src) {
            if (videoEl.paused) {
              videoEl.play();
              showCinemaHUD('▶ Playing', '▶');
            } else {
              videoEl.pause();
              showCinemaHUD('❚❚ Paused', '❚❚');
            }
          } else {
            // Space advances image plate
            if (currentItems.length > 0) {
              const newIdx = (currentIndex + 1) % currentItems.length;
              updateLightbox(newIdx);
            }
          }
          return;
        } else if (activeVideo) {
          e.preventDefault();
          if (activeVideo.paused) {
            activeVideo.play();
            showCinemaHUD('▶ Playing', '▶');
          } else {
            activeVideo.pause();
            showCinemaHUD('❚❚ Paused', '❚❚');
          }
          return;
        }
      }

      // 2. F / f: Toggle Fullscreen
      if (e.key === 'f' || e.key === 'F') {
        if (isModalActive) {
          e.preventDefault();
          toggleFullscreen(modal);
          return;
        } else if (activeVideo) {
          e.preventDefault();
          toggleFullscreen(activeVideo);
          return;
        }
      }

      // 3. M / m: Mute / Unmute
      if (e.key === 'm' || e.key === 'M') {
        if (activeVideo) {
          e.preventDefault();
          activeVideo.muted = !activeVideo.muted;
          const status = activeVideo.muted ? '🔇 Muted' : '🔊 Unmuted';
          showCinemaHUD(status, activeVideo.muted ? '🔇' : '🔊');
          return;
        }
      }

      // 4. ARROW LEFT: Seek -5s on video OR Previous Plate
      if (e.key === 'ArrowLeft') {
        if (isModalActive) {
          e.preventDefault();
          const hasVideo = videoEl && videoEl.style.display !== 'none' && videoEl.src;
          if (hasVideo && !e.shiftKey) {
            videoEl.currentTime = Math.max(0, videoEl.currentTime - 5);
            showCinemaHUD(`⏪ -5s (${formatTime(videoEl.currentTime)})`, '⏪');
          } else {
            if (currentItems.length > 0) {
              const newIdx = (currentIndex - 1 + currentItems.length) % currentItems.length;
              updateLightbox(newIdx);
            }
          }
          return;
        } else if (activeVideo) {
          e.preventDefault();
          activeVideo.currentTime = Math.max(0, activeVideo.currentTime - 5);
          showCinemaHUD(`⏪ -5s (${formatTime(activeVideo.currentTime)})`, '⏪');
          return;
        }
      }

      // 5. ARROW RIGHT: Seek +5s on video OR Next Plate
      if (e.key === 'ArrowRight') {
        if (isModalActive) {
          e.preventDefault();
          const hasVideo = videoEl && videoEl.style.display !== 'none' && videoEl.src;
          if (hasVideo && !e.shiftKey) {
            videoEl.currentTime = Math.min(videoEl.duration || Infinity, videoEl.currentTime + 5);
            showCinemaHUD(`⏩ +5s (${formatTime(videoEl.currentTime)})`, '⏩');
          } else {
            if (currentItems.length > 0) {
              const newIdx = (currentIndex + 1) % currentItems.length;
              updateLightbox(newIdx);
            }
          }
          return;
        } else if (activeVideo) {
          e.preventDefault();
          activeVideo.currentTime = Math.min(activeVideo.duration || Infinity, activeVideo.currentTime + 5);
          showCinemaHUD(`⏩ +5s (${formatTime(activeVideo.currentTime)})`, '⏩');
          return;
        }
      }

      // 6. SPEED CONTROLS: '>' / '.' speed up, '<' / ',' slow down
      if (e.key === '>' || (e.shiftKey && e.key === '.') || e.key === '<' || (e.shiftKey && e.key === ',')) {
        if (activeVideo) {
          e.preventDefault();
          const isUp = (e.key === '>' || (e.shiftKey && e.key === '.'));
          const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
          let curIdx = speeds.indexOf(activeVideo.playbackRate);
          if (curIdx === -1) curIdx = 2; // 1.0
          const nextIdx = isUp ? Math.min(speeds.length - 1, curIdx + 1) : Math.max(0, curIdx - 1);
          activeVideo.playbackRate = speeds[nextIdx];
          const speedStr = `${speeds[nextIdx]}x`;
          if (speedText) speedText.textContent = speedStr;
          showCinemaHUD(`⚡ Playback Speed: ${speedStr}`, '⚡');
          return;
        }
      }

      // 7. NUMBERS 0-9: Jump percentage of video
      if (activeVideo && e.key >= '0' && e.key <= '9' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        const pct = parseInt(e.key, 10) * 0.1;
        if (activeVideo.duration) {
          activeVideo.currentTime = pct * activeVideo.duration;
          showCinemaHUD(`⏱ Jump to ${parseInt(e.key, 10) * 10}% (${formatTime(activeVideo.currentTime)})`, '⏱');
        }
        return;
      }

      // 8. ESCAPE: Close Lightbox
      if (e.key === 'Escape' && isModalActive) {
        closeLightbox();
        return;
      }

      // 9. Z / z: Toggle 1:1 Zoom (on images)
      if ((e.key === 'z' || e.key === 'Z') && isModalActive && imgEl && imgEl.style.display !== 'none') {
        toggleZoom();
        return;
      }
    });

    // ==========================================
    // MOBILE TOUCH GESTURES (Swipe & Double-Tap)
    // ==========================================
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isTouchActive = false;
    let lastTapTime = 0;

    if (mediaWrap) {
      mediaWrap.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchStartTime = Date.now();
          isTouchActive = true;

          // Double-tap zoom detection on images
          const now = Date.now();
          if (imgEl && imgEl.style.display !== 'none' && (now - lastTapTime < 320)) {
            toggleZoom();
            lastTapTime = 0;
          } else {
            lastTapTime = now;
          }
        }
      }, { passive: true });

      mediaWrap.addEventListener('touchmove', (e) => {
        if (!isTouchActive || e.touches.length !== 1) return;
        const curX = e.touches[0].clientX;
        const curY = e.touches[0].clientY;
        const diffX = curX - touchStartX;
        const diffY = curY - touchStartY;

        // If zoomed, allow native panning
        if (imgEl && imgEl.classList.contains('is-zoomed')) return;

        const activeEl = (videoEl && videoEl.style.display !== 'none') ? videoEl : imgEl;
        if (!activeEl) return;

        // Elastic horizontal swipe feedback
        if (Math.abs(diffX) > Math.abs(diffY)) {
          activeEl.style.transform = `translateX(${diffX * 0.4}px)`;
          activeEl.style.transition = 'none';
        } else if (diffY > 0 && Math.abs(diffY) > Math.abs(diffX) * 1.4) {
          // Vertical pull-to-dismiss feedback
          const scaleVal = Math.max(0.85, 1 - (diffY / 900));
          activeEl.style.transform = `translateY(${diffY * 0.5}px) scale(${scaleVal})`;
          activeEl.style.transition = 'none';
        }
      }, { passive: true });

      const handleTouchEnd = (e) => {
        if (!isTouchActive) return;
        isTouchActive = false;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        const duration = Date.now() - touchStartTime;

        const activeEl = (videoEl && videoEl.style.display !== 'none') ? videoEl : imgEl;
        if (activeEl) {
          activeEl.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
          activeEl.style.transform = '';
        }

        if (imgEl && imgEl.classList.contains('is-zoomed')) return;

        // Pull down to dismiss
        if (diffY > 90 && Math.abs(diffX) < 60) {
          closeLightbox();
          return;
        }

        // Horizontal swipe (Next / Prev)
        if (Math.abs(diffX) > 50 || (Math.abs(diffX) > 30 && duration < 320)) {
          if (diffX < 0) {
            // Swiped Left -> Next plate
            if (currentItems.length > 0) {
              const newIdx = (currentIndex + 1) % currentItems.length;
              updateLightbox(newIdx);
              showCinemaHUD('Next Plate →', '❯');
            }
          } else {
            // Swiped Right -> Previous plate
            if (currentItems.length > 0) {
              const newIdx = (currentIndex - 1 + currentItems.length) % currentItems.length;
              updateLightbox(newIdx);
              showCinemaHUD('← Previous Plate', '❮');
            }
          }
        }
      };

      mediaWrap.addEventListener('touchend', handleTouchEnd, { passive: true });
      mediaWrap.addEventListener('touchcancel', () => {
        isTouchActive = false;
        const activeEl = (videoEl && videoEl.style.display !== 'none') ? videoEl : imgEl;
        if (activeEl) {
          activeEl.style.transition = 'transform 0.25s ease';
          activeEl.style.transform = '';
        }
      }, { passive: true });
    }

    // In-page mobile double-tap on video boxes to seek 5s
    document.querySelectorAll('.folder-video-box').forEach(box => {
      let lastTapTime = 0;
      let lastTapX = 0;

      box.addEventListener('touchend', (e) => {
        const video = box.querySelector('video');
        if (!video) return;
        const now = Date.now();
        const touch = e.changedTouches[0];
        const rect = box.getBoundingClientRect();
        const tapX = touch.clientX - rect.left;

        if (now - lastTapTime < 320 && Math.abs(tapX - lastTapX) < 60) {
          const isLeft = tapX < (rect.width * 0.4);
          const isRight = tapX > (rect.width * 0.6);
          if (isLeft) {
            video.currentTime = Math.max(0, video.currentTime - 5);
            showCinemaHUD(`⏪ -5s (${formatTime(video.currentTime)})`, '⏪');
          } else if (isRight) {
            video.currentTime = Math.min(video.duration || Infinity, video.currentTime + 5);
            showCinemaHUD(`⏩ +5s (${formatTime(video.currentTime)})`, '⏩');
          }
          lastTapTime = 0;
        } else {
          lastTapTime = now;
          lastTapX = tapX;
        }
      });
    });
  }
}

function bootPortfolioApp() {
  if (!window.portfolioApp) {
    try {
      window.portfolioApp = new PortfolioApp();
    } catch (err) {
      console.error('PortfolioApp boot error:', err);
    }
  }
}

// Instantiate safely on DOM ready or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootPortfolioApp);
} else {
  bootPortfolioApp();
}
