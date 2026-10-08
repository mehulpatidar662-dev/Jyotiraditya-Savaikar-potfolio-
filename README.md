# Jyotiraditya Savaikar — Animation & Motion Design Portfolio

A fast, responsive, and data-driven animation portfolio website for **Jyotiraditya Savaikar** (2D Animator | Motion Designer | Pre-Production Artist, Pune, India).

Built entirely with **plain semantic HTML5, modern CSS, and vanilla JavaScript (no frameworks or build tools)** so that it works seamlessly out of the box simply by **double-clicking `index.html`** in Windows Explorer or launching via any web server.

---

## 📁 File Structure

```text
jyotiraditya-portfolio/
│
├── index.html                  # Home page (Hero, About, Carousel, Toolkit, Timeline, Contact, Footer)
├── gallery.html                # Universal Gallery page template (loads projects via ?project=slug)
├── README.md                   # Documentation & guide
│
├── css/
│   └── style.css               # Unified responsive stylesheet, custom folk-art accents & color tokens
│
├── js/
│   ├── main.js                 # Home page script (dynamic work carousel, QR code generator, interactive controls)
│   └── gallery.js              # Gallery script (URL routing, section filters, masonry grid, fullscreen lightbox)
│
├── data/
│   └── projects.js             # SINGLE SOURCE OF TRUTH: All project metadata and media data
│
└── assets/
    ├── hero-bg.mp4             # High-definition looping video background for Hero
    ├── profile/
    │   └── jyotiraditya_portrait.jpg # Circular artist portrait
    ├── icons/                  # Vector icons & branding SVGs
    └── projects/               # Organized media folders per project slug
        ├── jaimini/
        ├── the-bot-and-the-boy/
        ├── beavis-and-butt-head/
        ├── the-tale-of-akkad/
        ├── target-practise/
        ├── monkesh/
        └── 3d-motion-graphics/
```

---

## 🎨 Visual Identity & Folk-Art Aesthetic

- **Cream Background (`#F2E1BC`)**: Warm, traditional handmade paper texture aesthetic.
- **Rust / Maroon (`#B33A12` / `#8F2D0B`)**: Terracotta warmth for headers, cards, and accent buttons.
- **Lime Green (`#9ACD32`)**: Crisp, vibrant contrast for headings and badges.
- **Dark Brown / Ink (`#7A3B10` / `#1F150F`)**: High-contrast, legible typography for storytelling text.
- **Indian Folk-Art Motifs**: Repeating red, black, and green border strips and Kolam line-art ornaments flanking project titles.

---

## 🚀 How to Run Locally

### Method 1: Direct Double-Click (Zero Setup)
1. Navigate to the project directory in Windows File Explorer:
   `C:\Users\Admin\.gemini\antigravity\scratch\jyotiraditya-portfolio`
2. Double-click `index.html`.
3. Your default web browser (Chrome, Edge, Firefox, Brave) will immediately display the website via `file:///` protocol. All videos, images, carousels, and gallery lightbox features work 100% offline.

### Method 2: Local HTTP Server (Optional)
If you prefer running a local development server:
```powershell
# Using Python
python -m http.server 8000

# Open in browser:
http://localhost:8000/
```

---

## 🛠️ How to Add a New Project

The website is **100% data-driven**. You never need to write HTML to add or update projects.

### Step 1: Create a media folder
Create a folder inside `assets/projects/` named after your project's `slug` (use lowercase with hyphens):
```text
assets/projects/my-new-project/
```
Drop your images, video clips (`.mp4`), and PDF documents into this folder.

### Step 2: Add an entry to `data/projects.js`
Open `data/projects.js` in your editor and add a new object to the `PROJECTS` array:

```javascript
{
  slug: "my-new-project",
  title: "My New Animation Project",
  subtitle: "Storyboarding & 2D Character Animation",
  category: "2D Animation",
  year: "2025",
  role: "Lead Animator & Storyboard Artist",
  tools: ["Clip Studio Paint", "After Effects", "Blender"],
  behanceLink: "https://www.behance.net/jyotiradityasavaikar",
  pdfUrl: "assets/projects/my-new-project/production-dossier.pdf", // Optional: renders PDF link in gallery!
  coverImage: "assets/projects/my-new-project/cover.jpg",
  coverVideo: "assets/projects/my-new-project/preview.mp4",        // Optional: loops on hover!
  description: "Detailed synopsis and creative intent of your project...",
  media: [
    {
      type: "video",
      src: "assets/projects/my-new-project/animatic.mp4",
      caption: "Full Scene Animatic Reel with Temp Audio",
      section: "Animatic"      // Automatically creates a "Animatic" filter tab!
    },
    {
      type: "image",
      src: "assets/projects/my-new-project/character-sheet.jpg",
      caption: "Turnaround Model Sheet & Costume Exploration",
      section: "Character Art" // Automatically creates a "Character Art" filter tab!
    },
    {
      type: "image",
      src: "assets/projects/my-new-project/storyboard-01.png",
      caption: "Sequence 01 Storyboard Beat Panels",
      section: "Storyboard"    // Automatically creates a "Storyboard" filter tab!
    }
  ]
}
```

### Step 3: Refresh the browser!
- The home page carousel will automatically display the new card with hover video playback.
- Clicking **"View Gallery"** on the card will open `gallery.html?project=my-new-project`, showing:
  - Project banner with Kolam ornaments.
  - Role, tools chips, year, category, and external Behance link.
  - PDF Dossier download/view button (if `pdfUrl` is set).
  - Automatically generated section filter tabs matching the `section` fields in your media items.
  - Responsive masonry grid with full video/image lightbox.

---

## 📱 Features & Highlights

- **Universal Gallery Routing**: `gallery.html?project=<slug>` loads any project dynamically; gracefully falls back to the first project if no query is given.
- **Lightbox Viewer**:
  - Fullscreen display for high-resolution artwork and HTML5 video playback.
  - Keyboard navigation: Left Arrow (<kbd>&larr;</kbd>) / Right Arrow (<kbd>&rarr;</kbd>) to step through media, Escape (<kbd>Esc</kbd>) to close.
  - Mobile touch swipe navigation.
- **Interactive Carousel**: Horizontal sliding track with smooth arrow controls and hover video previews.
- **1-Click Copy Email**: Instant visual clipboard copy for `pa4589645@gmail.com`.
- **Offline Vector QR Codes**: Footer Behance & LinkedIn QR codes rendered purely via inline SVG math (zero network API latency).
- **Responsive Layout**: Fluid breakpoints tested across Mobile (375px), Tablet (768px), and Large Desktop (1440px+).
- **Accessibility & Performance**: Native HTML5 lazy loading (`loading="lazy"`), semantic elements, ARIA labels, and `prefers-reduced-motion` compliance.
