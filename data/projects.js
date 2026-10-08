/**
 * Jyotiraditya Savaikar - Portfolio Projects Data
 * Single source of truth for all projects across Home and Gallery pages.
 * To add a new project, simply append an object to this array and drop media into assets/projects/<slug>/
 */

const PROJECTS = [
  {
    slug: "jaimini",
    title: "Jaimini",
    subtitle: "Title Sequence & Worldbuilding",
    category: "Title Sequence",
    year: "2024",
    role: "Director, 2D Animator & Concept Artist",
    tools: ["After Effects", "Photoshop", "Blender", "Clip Studio Paint"],
    behanceLink: "https://www.behance.net/mnkeshthewise",
    coverImage: "assets/projects/jaimini/cover.jpg",
    coverVideo: "assets/projects/jaimini/jaimini_title_sequence.mp4",
    description: "A fictional animated series following Jaimini Trivedi, the revered temple priest of Jagannath Puri who spearheaded the spiritual and architectural reconstruction of the ancient coastal citadel following a catastrophic nuclear conflict. As tensions escalate, Jaimini embarks on a high-stakes struggle to avert the total annihilation of Puri following an insidious pact ratified between the King of Puri and the autonomous Machine Division.",
    media: [
      {
        type: "video",
        src: "assets/projects/jaimini/jaimini_title_sequence.mp4",
        caption: "Official Title Sequence Animation Reel (Music & Kinetic Typography)",
        section: "Final"
      },
      {
        type: "image",
        src: "assets/projects/jaimini/jaimini_title_logo.png",
        caption: "Title Identity Design: Calligraphic Typeface & Sacred Iconography",
        section: "Concept Art"
      },
      {
        type: "image",
        src: "assets/projects/jaimini/jaimini_priest_art.png",
        caption: "Jaimini Trivedi Character Model Sheet: Ceremonial Vestments & Cybernetic Enhancements",
        section: "Character Sheets"
      },
      {
        type: "image",
        src: "assets/projects/jaimini/jaimini_art.jpg",
        caption: "Citadel Vista: Post-Nuclear Rebuilding of Jagannath Puri Architectural Concept",
        section: "Concept Art"
      }
    ]
  },
  {
    slug: "the-bot-and-the-boy",
    title: "The Bot and the Boy",
    subtitle: "Story, Storyboard and Animatic",
    category: "Storyboarding & Animatic",
    year: "2024",
    role: "Story Writer, Storyboard Artist & Character Designer",
    tools: ["Clip Studio Paint", "Photoshop", "After Effects", "Premiere Pro"],
    behanceLink: "https://www.behance.net/mnkeshthewise",
    coverImage: "assets/projects/the-bot-and-the-boy/cover.png",
    coverVideo: "assets/projects/the-bot-and-the-boy/bot_and_boy_animatic.mp4",
    description: "Brief: \"A boy walks into a junkyard and finds a broken robot.\" This emotional narrative explores themes of companionship, rediscovery, and wonder against an industrial backdrop. Follow the sequence from early gesture studies through rigorous sequential beats to full dynamic animatics with sound design.",
    media: [
      {
        type: "video",
        src: "assets/projects/the-bot-and-the-boy/bot_and_boy_animatic.mp4",
        caption: "Complete Story Animatic with Sound Effects & Timed Camera Shots",
        section: "Animatic"
      },
      {
        type: "image",
        src: "assets/projects/the-bot-and-the-boy/bot_and_boy_poster.png",
        caption: "Hero Keyframe Poster: The Encounter in the Scrap Cavern",
        section: "Final"
      },
      {
        type: "image",
        src: "assets/projects/the-bot-and-the-boy/bot_and_boy_storyboard.png",
        caption: "Storyboard Beat Sheet: Exploring the Junkyard & Awakening Sequence",
        section: "Storyboard"
      },
      {
        type: "image",
        src: "assets/projects/the-bot-and-the-boy/bot_mech_breakdown.png",
        caption: "Decommissioned Automaton Technical Schematic & Mechanism Anatomy",
        section: "Character Art"
      },
      {
        type: "image",
        src: "assets/projects/the-bot-and-the-boy/robot_exploration_sketches.png",
        caption: "Robot Silhouette Exploration, Joint Articulation & Form Studies",
        section: "Character Art"
      },
      {
        type: "image",
        src: "assets/projects/the-bot-and-the-boy/bot_and_boy_art.jpg",
        caption: "Atmospheric Lighting Script: The Sunbeam Awakening",
        section: "Character Art"
      }
    ]
  },
  {
    slug: "beavis-and-butt-head",
    title: "Beavis and Butt-Head",
    subtitle: "Scene Layout and Animatic",
    category: "Scene Layout",
    year: "2024",
    role: "Layout Artist & Animatic Timing",
    tools: ["Photoshop", "After Effects", "Blender"],
    behanceLink: "https://www.behance.net/mnkeshthewise",
    coverImage: "assets/projects/beavis-and-butt-head/cover.jpg",
    coverVideo: "assets/projects/the-bot-and-the-boy/bot_and_boy_animatic.mp4",
    description: "An intensive layout and staging study honoring the iconic aesthetic of 1990s television animation. Focuses on horizontal tracking pan shots, comedic perspective distortion, multi-plane parallax depth, and character key framing across suburban American landscapes.",
    media: [
      {
        type: "image",
        src: "assets/projects/beavis-and-butt-head/beavis_layout_art.jpg",
        caption: "Classic Character Pose Staging & Composition Framing",
        section: "Layout Sketches"
      },
      {
        type: "image",
        src: "assets/projects/beavis-and-butt-head/camera_pan_layout.png",
        caption: "Dynamic Camera Pan Multi-plane Staging Guide with Field Guides",
        section: "Layout Sketches"
      },
      {
        type: "image",
        src: "assets/projects/beavis-and-butt-head/street_pan_layout.png",
        caption: "Continuous Suburban Street Pan Environment Layout & Background Plates",
        section: "Layout Sketches"
      },
      {
        type: "video",
        src: "assets/projects/the-bot-and-the-boy/bot_and_boy_animatic.mp4",
        caption: "Scene Timing & Layout Animatic Reel (Sequential Study)",
        section: "Animatic"
      }
    ]
  },
  {
    slug: "the-tale-of-akkad",
    title: "The Tale of Akkad",
    subtitle: "Unpublished Concept Art & Worldbuilding",
    category: "Concept Art",
    year: "2023 - 2024",
    role: "Visual Development Lead & Comic Artist",
    tools: ["Photoshop", "Clip Studio Paint", "Blender"],
    behanceLink: "https://www.behance.net/mnkeshthewise",
    pdfUrl: "assets/projects/the-tale-of-akkad/Akkad.pdf",
    coverImage: "assets/projects/the-tale-of-akkad/cover.jpg",
    coverVideo: "assets/projects/the-tale-of-akkad/akkad_sequence.mp4",
    description: "An epic high-fantasy worldbuilding and graphic novel concept set in the ancient mythical realm of Akkad. Blending Mesopotamian mythology with speculative sci-fi architecture, sweeping desert panoramas, and tense dynastic conspiracies. Includes an exhaustive world dossier, sequential graphic novel spreads, and animated sequences.",
    media: [
      {
        type: "video",
        src: "assets/projects/the-tale-of-akkad/akkad_sequence.mp4",
        caption: "Cinematic Sequence Animatic & Motion Teaser",
        section: "Video"
      },
      {
        type: "image",
        src: "assets/projects/the-tale-of-akkad/akkad_art.jpg",
        caption: "The Ancient Realm of Akkad: Monolithic Architecture & Atmosphere",
        section: "Concept Art"
      },
      {
        type: "image",
        src: "assets/projects/the-tale-of-akkad/rooftops_night_bg.png",
        caption: "Imperial Citadel Rooftops at Night - Infiltration Sequence Staging",
        section: "Comic Panels"
      },
      {
        type: "image",
        src: "assets/projects/the-tale-of-akkad/rooftops_day_bg.png",
        caption: "Daylight Citadel Overview & Spatial Hierarchy Visual Development",
        section: "Concept Art"
      }
    ]
  },
  {
    slug: "target-practise",
    title: "Target Practise",
    subtitle: "Black-and-White Storyboard Panels",
    category: "Storyboarding",
    year: "2024",
    role: "Storyboard Artist & Prop Designer",
    tools: ["Clip Studio Paint", "Photoshop"],
    behanceLink: "https://www.behance.net/mnkeshthewise",
    pdfUrl: "assets/projects/target-practise/TARGET_PRACTISE.pdf",
    coverImage: "assets/projects/target-practise/cover.jpg",
    description: "A high-octane, black-and-white noir tactical storyboard sequence showcasing cinematic camera angles, precise shot composition, weapon mechanics, and rapid pacing. Includes full production dossiers detailing weapon prop blueprints and ballistic action sequences.",
    media: [
      {
        type: "image",
        src: "assets/projects/target-practise/target_practise_art.jpg",
        caption: "High-Contrast Storyboard Keyframe: Crosshairs & Confrontation",
        section: "Storyboard"
      },
      {
        type: "image",
        src: "assets/projects/target-practise/target_split_blast_rifle.png",
        caption: "Split-Blast Tactical Particle Rifle Technical Blueprint & Disassembly",
        section: "Concept Art"
      },
      {
        type: "image",
        src: "assets/projects/target-practise/target_weapons_concept.png",
        caption: "Ballistic Weaponry Orthographic Turnaround & Reload Mechanics",
        section: "Concept Art"
      }
    ]
  },
  {
    slug: "monkesh",
    title: "Monkesh",
    subtitle: "Character Design & Expression Studies",
    category: "Character Design",
    year: "2024",
    role: "Character Designer & Visual Development Artist",
    tools: ["Photoshop", "Clip Studio Paint", "Illustrator"],
    behanceLink: "https://www.behance.net/mnkeshthewise",
    coverImage: "assets/projects/monkesh/cover.jpg",
    description: "Complete character design package for Monkesh, an agile trickster inhabiting urban rooftops. Features silhouette studies, orthographic turnarounds, costume breakdown, dynamic gesture sheets, a grid of 8 expressive emotional reactions on dark ink, and custom typographic title design.",
    media: [
      {
        type: "image",
        src: "assets/projects/monkesh/monkesh_art.jpg",
        caption: "Monkesh Core Model Sheet: Proportions, Silhouette & Stance",
        section: "Character Art"
      },
      {
        type: "image",
        src: "assets/projects/monkesh/expression_sheet_ref.png",
        caption: "Expression Sheet: 8 Key Emotional States on Dark Inking Background",
        section: "Expression Sheet"
      },
      {
        type: "image",
        src: "assets/projects/monkesh/title_design.jpg",
        caption: "Custom Title Logo Treatment & Promotional Typography",
        section: "Title Design"
      }
    ]
  },
  {
    slug: "3d-motion-graphics",
    title: "3D Motion Graphics",
    subtitle: "Looping Animated Cube & Logo Reveals",
    category: "Motion Design",
    year: "2024",
    role: "3D Animator & Motion Designer",
    tools: ["Blender", "After Effects", "Cinema 4D", "Photoshop"],
    behanceLink: "https://www.behance.net/mnkeshthewise",
    coverImage: "assets/projects/3d-motion-graphics/cover.jpg",
    coverVideo: "assets/projects/3d-motion-graphics/rendered_shot.mp4",
    description: "Exploration of hard-surface geometry, mathematical kinetic motion, and stylized lighting. Features seamlessly looping animated cubes, isometric dimensional puzzles, chromatic dispersion, and clean corporate logo reveal animations engineered for broadcast and interactive web.",
    media: [
      {
        type: "video",
        src: "assets/projects/3d-motion-graphics/rendered_shot.mp4",
        caption: "Blender 3D Geometric Looping Cube & Kinetic Volumetric Reveal",
        section: "Final"
      },
      {
        type: "image",
        src: "assets/projects/3d-motion-graphics/compositing_breakdown.jpg",
        caption: "Lighting Passes, Ambient Occlusion & After Effects Post-Processing Pipeline",
        section: "Process"
      }
    ]
  }
];

// Expose globally for browsers loading via standard <script> tag on file:/// or http://
if (typeof window !== "undefined") {
  window.PROJECTS = PROJECTS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROJECTS };
}
