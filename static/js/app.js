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
      if (imgEl) imgEl.src = '';
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
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});
