// Indian Folk-Art Decorations & Kolam Ornaments
// Generates scalable SVG Kolam motifs, repeating diamond borders, and Indian folk accents

export const FolkArt = {
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
