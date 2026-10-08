"""
Portfolio Data Layer for Jyotiraditya Savaikar
Contains all authentic biographical data, project specs, toolkit, timeline, and contact information.
100% mapped to authentic files in aditya_project/ (519.4 MB production archive).
"""

ARTIST = {
    "name": "Jyotiraditya Savaikar",
    "monogram": "JS",
    "roles": "2D Animator | Motion Designer | Pre-Production Artist",
    "location": "Pune, Maharashtra, India",
    "institute": "MIT Institute of Design",
    "email": "pa4589645@gmail.com",
    "phone": "(+91) 8767937720",
    "phone_clean": "+918767937720",
    "behance_url": "https://www.behance.net/mnkeshthewise",
    "behance_handle": "@mnkeshthewise",
    "linkedin_url": "https://www.linkedin.com/in/jyotiraditya-savaikar-435852273/",
    "portrait_image": "images/jyotiraditya_savaikar_artist.png",
    "intro_studio_image": "images/intro_studio_art.jpg",
    "showreel_video": "videos/temple_flag_chill_showreel.mp4",
    "intro": (
        "Hello, I'm Jyotiraditya, an animation student. I have been deeply passionate "
        "about animation and storytelling since my childhood. I enjoy expressing my ideas "
        "through storytelling, visuals and written narratives. I am an avid reader, which "
        "helps me expand my imagination and develop unique perspectives."
    ),
    "about_expanded": (
        "I am an animation student currently pursuing my Bachelor of Animation Design at the "
        "prestigious MIT Institute of Design in Pune, Maharashtra (2023–2027). Since childhood, "
        "the alchemy of moving images and sequential narratives has held an undeniable magnetism "
        "for me. To me, pre-production is where the soul of an animation is born. It is the crucial "
        "bridge between an abstract spark and an emotional reality on screen. Whether I am drafting "
        "rapid storyboard thumbnails, choreographing a complex camera move, or sculpting the emotional "
        "nuances of a character's expressions, I treat every frame with intentional narrative weight."
    ),
    "reading_philosophy": (
        "I am an avid reader, which helps me expand my imagination and develop unique perspectives. "
        "From mythologies and sci-fi worldbuilding to psychological fiction and poetry, books fuel my "
        "creative subconscious, providing rich narrative subtext that directly informs my character "
        "design and cinematic storyboarding."
    )
}

INTRO_CONFIG = {
    "slate_prod": "JYOTIRADITYA SAVAIKAR • PRE-PROD",
    "slate_scene": "SCENE 01",
    "slate_take": "TAKE 01",
    "slate_roll": "ROLL 01",
    "slate_fps": "24.00 FPS (ON 2s)",
    "sound_spec": "SYNC AUDIO / 24 FPS",
    "headline": "Stories Crafted Frame by Frame",
    "subheading": "2D Animation & Pre-Production Portfolio",
    "punchline": "From graphite thumbnails to finished screen motion.",
    "badges": [
        "MIT Institute of Design ('23–'27)",
        "Pune, Maharashtra",
        "2D Character Animation",
        "Storyboarding & Layout"
    ]
}

PRODUCTION_DOCS = [
    {
        "id": "pdf-akkad",
        "title": "The Tale of Akkad — Full Production Art & Storyboard Book",
        "subtitle": "Unpublished Pre-Production Pitch Document & Archery Lesson Sequence",
        "category": "Pre-Production & Character Design",
        "file_path": "aditya_project/Preprod/Akkad/Akkad.pdf",
        "file_size": "32.7 MB",
        "format": "Interactive Scrollable PDF Publication • Mesopotamian Fantasy",
        "cover_image": "images/akkad_thumbnail.png",
        "summary": (
            "Complete production book for The Tale of Akkad. Features historical Mesopotamian visual "
            "development, character sheets, costume silhouettes, environment color keys, and the full "
            "archery lesson storyboard sequence."
        ),
        "highlights": [
            "Full Archery Lesson Beat Boards",
            "Mesopotamian Worldbuilding & Color Keys",
            "Anatomical Poses & Archery Mechanics",
            "Cinematic 2.39:1 Composition Studies"
        ],
        "project_anchor": "akkad"
    },
    {
        "id": "pdf-target-practise",
        "title": "Target Practise — Action Comic Storyboard Book",
        "subtitle": "Black & White Sequential Art, Cinematography & Weapon Blueprints",
        "category": "Comic Storyboards & Manga Inking",
        "file_path": "aditya_project/2D/Target Practise/TARGET_PRACTISE.pdf",
        "file_size": "84.1 MB",
        "format": "Interactive Scrollable PDF Publication • 600 DPI Inks",
        "cover_image": "images/target_split_blast_rifle.png",
        "summary": (
            "Full black-and-white comic storyboard publication demonstrating intense sequential pacing, "
            "extreme perspective angles, firearm design blueprints (including the MDC Split-Blast rifle), "
            "and dynamic manga impact choreography."
        ),
        "highlights": [
            "Complete High-Resolution B&W Storyboard Comic",
            "MDC Split-Blast & Firearm Concept Blueprints",
            "Extreme Perspective & Wide-Angle Staging",
            "Dynamic Screen Pacing & Motion Continuity"
        ],
        "project_anchor": "target-practise"
    }
]

WORK_CATEGORIES = [
    {
        "id": "2d",
        "slug": "2d",
        "title": "2D Animation",
        "badge": "3 Folders • 5 Media Files",
        "thumbnail_image": "aditya_project/2D/Jaimini Title Sequence/thumbnail.PNG",
        "description": "Sequential title sequences, non-narrative rhythmic motion, and complete action comic books.",
        "featured_project": "Jaimini Title Sequence"
    },
    {
        "id": "preprod",
        "slug": "preprod",
        "title": "Pre-Production",
        "badge": "4 Folders • 14 Media Files",
        "thumbnail_image": "aditya_project/Preprod/bot and boy/IMG_4688.PNG",
        "description": "Visual development pitch bibles, scene layout camera studies, animatics, and character model sheets.",
        "featured_project": "The Bot and the Boy & Akkad"
    },
    {
        "id": "3d",
        "slug": "3d",
        "title": "3D Motion & Design",
        "badge": "3 Projects • 3 Video Renders",
        "thumbnail_image": "aditya_project/3D/cube/cube.png",
        "description": "Looping isometric dimensional puzzles, cyberpunk kinetic typography, and fluid liquid glass morph animations.",
        "featured_project": "Cube Shift & Cyberpunk"
    },
    {
        "id": "xtra-work",
        "slug": "xtra-work",
        "title": "Extra Work & Visual Development",
        "badge": "1 Collection • 6 Production Plates",
        "thumbnail_image": "aditya_project/Xtra work/FINAL 2.jpg",
        "description": "Diverse collection of visual development plates, high-resolution digital paintings, cover designs, and character concept illustrations.",
        "featured_project": "Editorial Illustrations"
    }
]

FEATURED_PROJECTS = [
    {
        "id": "jaimini",
        "slug": "jaimini",
        "folder_cat": "2d",
        "folder_sub": "jaimini",
        "title": "Jaimini — Title Sequence",
        "subtitle": "Animated Series Title Sequence & Worldbuilding",
        "category": "2D Animation & Worldbuilding",
        "artwork_badge": "1080p HD VIDEO • 24 FPS • 0:57 MIN",
        "media_type": "video",
        "cover_image": "aditya_project/2D/Jaimini Title Sequence/thumbnail.PNG",
        "secondary_image": "aditya_project/2D/Jaimini Title Sequence/IMG_4671.PNG",
        "turnaround_image": "aditya_project/2D/Jaimini Title Sequence/jaimini_turnaround.png",
        "video_file": "aditya_project/2D/Jaimini Title Sequence/Title Card_Amogh _Jyotiraditya 1.mp4",
        "tools": ["After Effects", "Photoshop", "Blender", "Clip Studio Paint"],
        "description": (
            "Fictional animated series about Jaimini Trivedi, the temple priest of Jagannath Puri who "
            "helped rebuild the city after a catastrophic nuclear war. Features the official 0:57 title reel, "
            "ornate serpent emblem typography, and priest character visual development."
        ),
        "highlights": [
            "Full 0:57 HD Title Reel",
            "Serpent Typography Emblem",
            "Temple Priest Character Art",
            "Orthographic 3-Angle Turnaround",
            "Mythic-Futurist Worldbuilding"
        ],
        "gallery_url": "gallery.html?sub=jaimini",
        "folder_path": "Aditya project/2D/Jaimini Title Sequence/",
        "tags": ["2D Animation", "Title Sequence", "Worldbuilding", "Mythology"]
    },
    {
        "id": "bot-and-boy",
        "slug": "bot-and-boy",
        "folder_cat": "preprod",
        "folder_sub": "bot-and-boy",
        "title": "The Bot and the Boy",
        "subtitle": "2D Animatic Short, Key Art Poster & 9-Panel Beat Boards",
        "category": "Storyboarding & Animatics",
        "artwork_badge": "FULL ANIMATIC REEL • 1:49 MIN • 24 FPS",
        "media_type": "video",
        "cover_image": "aditya_project/Preprod/bot and boy/IMG_4688.PNG",
        "storyboard_image": "aditya_project/Preprod/bot and boy/IMG_4689.PNG",
        "video_file": "aditya_project/Preprod/bot and boy/Jyotiraditya_Animatic2.mov",
        "video_file_fallback": "videos/bot_and_boy_animatic.mp4",
        "tools": ["Clip Studio Paint", "Photoshop", "After Effects"],
        "description": (
            "\"A boy walks into a junkyard and finds a broken robot\" was the starting brief. "
            "Jyotiraditya expanded this into a complete 1-minute 49-second production animatic reel, "
            "painted the official color key art poster, and choreographed 9-panel cinematic desert chase beat boards."
        ),
        "highlights": [
            "1:49 Complete Production Animatic Reel",
            "Official Color Cel One-Sheet Poster",
            "9-Panel Desert Chase Beat Boards",
            "Mechanical Anatomy & Staging"
        ],
        "gallery_url": "gallery.html?sub=bot-and-boy",
        "folder_path": "Aditya project/Preprod/bot and boy/",
        "tags": ["Animatic", "Storyboarding", "Beat Boards", "Character Design"]
    },
    {
        "id": "beavis",
        "slug": "beavis",
        "folder_cat": "preprod",
        "folder_sub": "beavis",
        "title": "Scene Layout & Backgrounds",
        "subtitle": "Widescreen Street Panorama & 3-Stage Camera Moves",
        "category": "Scene Layout & Cinematography",
        "artwork_badge": "3072x768 PANORAMA • 3-STAGE CAMERA BLUEPRINTS",
        "media_type": "video",
        "cover_image": "aditya_project/Preprod/Beavis/hori pan lol.png",
        "layout_image": "aditya_project/Preprod/Beavis/laout pic.png",
        "video_file": "aditya_project/Preprod/Beavis/Animatic.MP4",
        "rendered_video": "aditya_project/Preprod/Beavis/RENDERED SHOT.mp4",
        "tools": ["Photoshop", "After Effects", "Blender"],
        "description": (
            "Cinematography and multi-plane layout studies featuring an ultra-widescreen 3072x768 "
            "horizontal street pan, 3-stage camera staging blueprints with field cut-in guides, "
            "full animatic reel, and finished rendered shots."
        ),
        "highlights": [
            "3072x768 Multi-Plane Street Pan",
            "3-Stage Acme Camera Layout Blueprint",
            "Timing & Motion Animatic Reel",
            "Rendered 2D Animation Shot"
        ],
        "gallery_url": "gallery.html?sub=beavis",
        "folder_path": "Aditya project/Preprod/Beavis/",
        "tags": ["Scene Layout", "Environment Art", "Camera Pacing", "Color Keys"]
    },
    {
        "id": "akkad",
        "slug": "akkad",
        "folder_cat": "preprod",
        "folder_sub": "akkad",
        "title": "The Tale of Akkad",
        "subtitle": "Mesopotamian Pitch Bible & Archery Lesson Storyboard Book",
        "category": "Visual Development & Character Bible",
        "artwork_badge": "32.7 MB SCROLLABLE PDF BIBLE • MESOPOTAMIAN FANTASY",
        "media_type": "pdf",
        "cover_image": "images/akkad_thumbnail.png",
        "pdf_file": "aditya_project/Preprod/Akkad/Akkad.pdf",
        "pdf_size": "32.7 MB",
        "has_pdf": True,
        "tools": ["Photoshop", "Clip Studio Paint", "Blender"],
        "description": (
            "Complete 32.7 MB pre-production pitch bible featuring historical Mesopotamian visual "
            "development, character turnarounds, costume silhouettes, environment color keys, and "
            "the full archery lesson storyboard sequence."
        ),
        "highlights": [
            "32.7 MB Scrollable Production Book",
            "Full Archery Lesson Beat Boards",
            "Mesopotamian Worldbuilding Keys",
            "Anatomical Archery Mechanics"
        ],
        "gallery_url": "gallery.html?sub=akkad",
        "pdf_viewer_anchor": "#in-site-pdf-viewer",
        "folder_path": "Aditya project/Preprod/Akkad/",
        "tags": ["Visual Development", "Concept Art", "Pitch Bible", "Scrollable PDF"]
    },
    {
        "id": "target-practise",
        "slug": "target-practise",
        "folder_cat": "2d",
        "folder_sub": "target-practise",
        "title": "Target Practise",
        "subtitle": "Complete Action Comic Storyboard Book & Firearm Blueprints",
        "category": "Comic Storyboards & Manga Inking",
        "artwork_badge": "84.1 MB SCROLLABLE COMIC BOOK • 600 DPI INKS",
        "media_type": "pdf",
        "cover_image": "images/target_split_blast_rifle.png",
        "pdf_file": "aditya_project/2D/Target Practise/TARGET_PRACTISE.pdf",
        "pdf_size": "84.1 MB",
        "has_pdf": True,
        "tools": ["Clip Studio Paint", "Photoshop"],
        "description": (
            "Full 84.1 MB black-and-white comic book publication demonstrating intense sequential pacing, "
            "extreme perspective angles, firearm design blueprints (including the MDC Split-Blast rifle), "
            "and dynamic speedline choreography."
        ),
        "highlights": [
            "84.1 MB High-Resolution Comic Book",
            "MDC Split-Blast Weapon Blueprint",
            "Extreme Tactical Staging",
            "600 DPI High-Contrast Inks"
        ],
        "gallery_url": "gallery.html?sub=target-practise",
        "pdf_viewer_anchor": "#in-site-pdf-viewer",
        "folder_path": "Aditya project/2D/Target Practise/",
        "tags": ["Comic Storyboards", "Ink Drawing", "Weapon Design", "Scrollable PDF"]
    },
    {
        "id": "monkesh",
        "slug": "monkesh",
        "folder_cat": "preprod",
        "folder_sub": "monkesh",
        "title": "Monkesh — Character Design Package",
        "subtitle": "6 Production Plates, 8-Expression Grid & Model Sheets",
        "category": "Character Design & Model Sheets",
        "artwork_badge": "6 PRODUCTION PLATES • 8-EXPRESSION RIG",
        "media_type": "gallery",
        "cover_image": "aditya_project/Preprod/Monkesh/IMG_4719.PNG",
        "turnaround_image": "aditya_project/Preprod/Monkesh/IMG_4720.PNG",
        "tools": ["Photoshop", "Clip Studio Paint", "Illustrator"],
        "description": (
            "Comprehensive pre-production character design package for Monkesh: 6 full production "
            "plates including turnarounds, costume breakdown, dynamic gestures, an 8-expression model "
            "sheet on dark ink, and custom typography."
        ),
        "highlights": [
            "8-Expression Facial Acting Grid",
            "Orthographic Character Turnaround",
            "Costume Breakdown & Silhouette",
            "Dynamic Action & Gesture Poses"
        ],
        "gallery_url": "gallery.html?sub=monkesh",
        "folder_path": "Aditya project/Preprod/Monkesh/",
        "tags": ["Character Design", "Model Sheet", "Facial Expressions", "Turnaround"]
    },
    {
        "id": "3d-motion",
        "slug": "3d-motion",
        "folder_cat": "3d",
        "folder_sub": "cube",
        "title": "3D Motion Graphics & Isometric Physics",
        "subtitle": "Cube Shift, Cyberpunk Typography & Liquid Glass Morph",
        "category": "3D Motion Design & Simulation",
        "artwork_badge": "3 VIDEO RENDERS • ISOMETRIC PHYSICS • 24 FPS",
        "media_type": "video",
        "cover_image": "aditya_project/3D/cube/cube.png",
        "secondary_image": "aditya_project/3D/Cyberpunk/cyberpunk.png",
        "video_file": "aditya_project/3D/cube/Cube shift Final.mov",
        "tools": ["Blender", "After Effects", "Cinema 4D"],
        "description": (
            "Procedural isometric voxel transformation (Cube Shift), cyberpunk kinetic typography with "
            "glitch chromatic dispersion, and fluid liquid simulation tracking viscous glass morphing with caustics."
        ),
        "highlights": [
            "Cube Shift Isometric 3D Motion",
            "Cyberpunk Kinetic Typography Reel",
            "Wine Bottle Liquid Morph Simulation",
            "Procedural Physics & Lighting"
        ],
        "gallery_url": "gallery.html?cat=3d",
        "folder_path": "Aditya project/3D/",
        "tags": ["3D Motion", "Blender", "Physics Simulation", "Kinetic Typography"]
    },
    {
        "id": "non-narrative",
        "slug": "non-narrative",
        "folder_cat": "2d",
        "folder_sub": "non-narrative",
        "title": "Non Narrative — Anna Dominoes",
        "subtitle": "Rhythmic Chain Reaction & Kinetic Animation Short",
        "category": "2D Animation & Timing",
        "artwork_badge": "EXPERIMENTAL MOTION SHORT • 24 FPS",
        "media_type": "video",
        "cover_image": "aditya_project/2D/Non Narrative/nna.png",
        "video_file": "aditya_project/2D/Non Narrative/Anna Dominoes.mp4",
        "tools": ["After Effects", "Clip Studio Paint", "Blender"],
        "description": (
            "Kinetic animation exploration focusing on mechanical domino chain reactions, physics anticipation, "
            "timing charts, and synchronized musical cadence."
        ),
        "highlights": [
            "Rhythmic Chain Reaction Short",
            "Physics Anticipation & Timing",
            "24 FPS Fluid Motion",
            "Visual Pacing Study"
        ],
        "gallery_url": "gallery.html?sub=non-narrative",
        "folder_path": "Aditya project/2D/Non Narrative/",
        "tags": ["2D Animation", "Experimental Motion", "Physics", "Timing Charts"]
    },
    {
        "id": "xtra-work",
        "slug": "xtra-work",
        "folder_cat": "xtra-work",
        "folder_sub": "illustrations",
        "title": "Visual Development & Extra Works",
        "subtitle": "Book Covers, 4950x3450 Panoramas & Concept Studies",
        "category": "Visual Development & Illustration",
        "artwork_badge": "6 PRODUCTION PLATES • HIGH-RES ART",
        "media_type": "gallery",
        "cover_image": "aditya_project/Xtra work/FINAL 1.jpg",
        "secondary_image": "aditya_project/Xtra work/FINAL 2.jpg",
        "tools": ["Photoshop", "Clip Studio Paint", "Procreate"],
        "description": (
            "Diverse collection of visual development plates, high-resolution digital paintings "
            "(including an expansive 4950x3450 composition), editorial cover designs, and architectural thumbnail studies."
        ),
        "highlights": [
            "Editorial Cover Illustrations",
            "Stylized Character Digital Portrait",
            "4950x3450 Production Panorama",
            "Pre-Production Concept Thumbnails"
        ],
        "gallery_url": "gallery.html?sub=illustrations",
        "folder_path": "Aditya project/Xtra work/",
        "tags": ["Visual Development", "Illustration", "Book Cover", "Concept Art"]
    }
]

PROJECT_DOSSIERS = {
    "2d": {
        "slug": "2d",
        "title": "2D Animation Archive",
        "category_title": "2D Animation",
        "badge": "Sequential Animation, Titles & Comics",
        "tagline": "From Kinetic Title Sequences to High-Contrast Action Comics",
        "brief": (
            "Comprehensive 2D animation portfolio featuring the Jaimini title sequence reel (0:57), "
            "the Anna Dominoes rhythmic motion short, and the complete 84.1 MB Target Practise action comic book."
        ),
        "folder_cat": "2d",
        "subfolders": ["jaimini", "non-narrative", "target-practise"]
    },
    "preprod": {
        "slug": "preprod",
        "title": "Pre-Production Archive",
        "category_title": "Pre-Production",
        "badge": "Visual Development, Pitch Bibles & Animatics",
        "tagline": "Where the Soul of Animation is Born",
        "brief": (
            "The foundation of storytelling: The Bot and the Boy 1:49 animatic reel and 9-panel beat boards, "
            "the 32.7 MB Tale of Akkad production pitch bible, Beavis 3072x768 horizontal street pan & camera layouts, "
            "and Monkesh 8-expression character acting model sheet."
        ),
        "folder_cat": "preprod",
        "subfolders": ["bot-and-boy", "beavis", "akkad", "monkesh"]
    },
    "3d": {
        "slug": "3d",
        "title": "3D Motion & Design Archive",
        "category_title": "3D Motion Design",
        "badge": "Procedural Physics & Fluid Simulation",
        "tagline": "Dimensional Puzzles, Kinetic Typography & Fluid Dynamics",
        "brief": (
            "Hard-surface geometric voxel transformation (Cube Shift), broadcast cyberpunk kinetic typography "
            "with neon chromatic dispersion, and fluid liquid simulation tracking viscous glass morphing."
        ),
        "folder_cat": "3d",
        "subfolders": ["cube", "cyberpunk", "wine"]
    },
    "xtra-work": {
        "slug": "xtra-work",
        "title": "Extra Artwork & Visual Development",
        "category_title": "Visual Development",
        "badge": "Editorial Covers & Concept Studies",
        "tagline": "Exploratory Concept Plates & High-Resolution Paintings",
        "brief": (
            "Finished editorial book covers, high-resolution 4950x3450 composition plates, digital character portraits, "
            "and architectural thumbnail studies."
        ),
        "folder_cat": "xtra-work",
        "subfolders": ["illustrations"]
    },
    # Backward compatible aliases
    "jaimini": FEATURED_PROJECTS[0],
    "title-sequences": FEATURED_PROJECTS[0],
    "bot-and-boy": FEATURED_PROJECTS[1],
    "storyboarding": FEATURED_PROJECTS[1],
    "scene-layout": FEATURED_PROJECTS[2],
    "beavis": FEATURED_PROJECTS[2],
    "akkad": FEATURED_PROJECTS[3],
    "character-design": FEATURED_PROJECTS[3],
    "target-practise": FEATURED_PROJECTS[4],
    "comic-storyboards": FEATURED_PROJECTS[4],
    "monkesh": FEATURED_PROJECTS[5],
    "3d-motion": FEATURED_PROJECTS[6]
}

SKILLS_TOOLKIT = {
    "core_skills": [
        "2D Animation",
        "Motion Design",
        "Character Design",
        "Storyboarding & Animatic",
        "Illustration",
        "Pre-Production Art",
        "Visual Storytelling"
    ],
    "skills": [
        "2D Animation",
        "Motion Design",
        "Character Design",
        "Storyboarding & Animatic",
        "Illustration",
        "Pre-Production Art",
        "Visual Storytelling"
    ],
    "disciplines": [
        {"name": "2D Character Animation", "tag": "Frame-by-Frame Acting", "deliverables": "Keyframing • Timing Charts • Clean-up • In-betweens"},
        {"name": "Storyboarding & Animatics", "tag": "Cinematography & Sequence Pacing", "deliverables": "Beat Boards • Staging • Pitch Animatics • Audio Sync"},
        {"name": "Character Design", "tag": "Model Sheets & Anatomy", "deliverables": "Turnarounds • 8-Expression Grids • Mechanical Blueprints"},
        {"name": "Scene Layout & Backgrounds", "tag": "Perspective & Environment Design", "deliverables": "1/2/3-Point Grids • Color Keys • Day/Night Studies"},
        {"name": "Motion Graphics", "tag": "Kinetic Graphics & Titles", "deliverables": "Title Sequences • Procedural Loops • Compositing"},
        {"name": "Pre-Production Direction", "tag": "Narrative Conception", "deliverables": "Visual Scripts • Production Packets • Style Guides"}
    ],
    "tools": [
        {"name": "Blender", "icon": "blender", "spec": "3D Modeling & Motion", "level": "Advanced"},
        {"name": "Photoshop", "icon": "photoshop", "spec": "Concept Art & Texturing", "level": "Advanced"},
        {"name": "Illustrator", "icon": "illustrator", "spec": "Vector Art & Layouts", "level": "Advanced"},
        {"name": "After Effects", "icon": "aftereffects", "spec": "Compositing & Motion FX", "level": "Intermediate"},
        {"name": "Figma", "icon": "figma", "spec": "UI & Design System", "level": "Intermediate"},
        {"name": "Clip Studio", "icon": "clipstudio", "spec": "2D Inking & Animation", "level": "Advanced"},
        {"name": "Procreate", "icon": "procreate", "spec": "Digital Sketching & Gestures", "level": "Advanced"}
    ],
    "languages": [
        {"name": "Hindi", "level": "Native"},
        {"name": "English", "level": "Fluent"},
        {"name": "Marathi", "level": "Professional"},
        {"name": "Konkani", "level": "Native / Regional"},
        {"name": "French", "level": "A1 Elementary"}
    ]
}

TIMELINE = {
    "experience": [
        {
            "role": "Animation Intern",
            "period": "June 2025",
            "company": "Mediyum Studio • Goa",
            "description": "Assisted production on 2D character animation pipelines, asset preparation, and scene clean-up."
        },
        {
            "role": "Graphic Team Head",
            "period": "October 2025",
            "company": "Alumni Meet",
            "description": "Led visual identity and motion graphics collateral for the prestigious institute alumni gathering."
        },
        {
            "role": "Social Media Team Head",
            "period": "November 2025",
            "company": "Meraki",
            "description": "Directed visual narrative and short-form motion campaigns driving engagement across creative festivals."
        },
        {
            "role": "Graphic Team Illustrator",
            "period": "September 2024",
            "company": "Olio Folio",
            "description": "Created editorial illustrations and character assets for publications and digital media."
        },
        {
            "role": "Book Illustration",
            "period": "Publication",
            "company": "The Eventual Anthology",
            "description": "Illustrated key narrative chapters interpreting complex poetic themes into evocative visual compositions."
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Animation Design",
            "period": "2023 – 2027",
            "institution": "MIT Institute of Design • Pune, Maharashtra",
            "description": "Comprehensive training in 2D animation, storyboarding, cinematography, pre-production workflows, character acting, and design thinking."
        },
        {
            "degree": "Higher Secondary Education",
            "period": "2021 – 2022",
            "institution": "GVM's SNJA School",
            "description": "Focus on foundational art, literature, and analytical problem-solving."
        }
    ]
}

# ==============================================================================
# FOLDER-IN-FOLDER ARCHIVE DATA LAYER (MIRRORS EXACT ADITYA PROJECT DIRECTORY)
# ==============================================================================
FOLDER_ARCHIVES = [
    {
        "id": "2d",
        "slug": "2d",
        "name": "2D",
        "title": "2D Animation",
        "icon": "clapperboard",
        "cover_image": "aditya_project/2D/Jaimini Title Sequence/thumbnail.PNG",
        "description": "Sequential title sequences, non-narrative rhythmic motion, and complete action comic books.",
        "badge": "3 Projects • 6 Media Files",
        "subfolders": [
            {
                "id": "jaimini",
                "slug": "jaimini-title-sequence",
                "folder_name": "Jaimini Title Sequence",
                "title": "Jaimini — Title Sequence",
                "cover_image": "aditya_project/2D/Jaimini Title Sequence/thumbnail.PNG",
                "category": "Title Sequence & Worldbuilding",
                "description": "Fictional animated series about Jaimini Trivedi, the temple priest of Jagannath Puri who helped rebuild the city after a catastrophic nuclear war. Features full 0:57 title reel, calligraphic emblem, and priest character design.",
                "tools": ["After Effects", "Photoshop", "Blender", "Clip Studio Paint"],
                "badge": "1 Video Reel • 3 Production Plates",
                "items": [
                    {
                        "type": "video",
                        "title": "Jaimini — Official Title Sequence Reel",
                        "file_path": "aditya_project/2D/Jaimini Title Sequence/Title Card_Amogh _Jyotiraditya 1.mp4",
                        "poster": "aditya_project/2D/Jaimini Title Sequence/thumbnail.PNG",
                        "duration": "0:57 min",
                        "fps": "24 fps",
                        "badge": "1080p HD VIDEO • 24 FPS",
                        "caption": "Full production title sequence with kinetic typography, audio sync, and mythological post-nuclear citadel worldbuilding."
                    },
                    {
                        "type": "image",
                        "title": "Jaimini — Title Logo & Serpent Emblem",
                        "file_path": "aditya_project/2D/Jaimini Title Sequence/thumbnail.PNG",
                        "aspect": "contain",
                        "bg": "#0c0f17",
                        "badge": "TITLE CARD • EMBLEM",
                        "caption": "Ornate golden typography intertwined with coiled serpent emblem representing mythological continuity."
                    },
                    {
                        "type": "image",
                        "title": "Jaimini Trivedi — Character Turnaround & Model Sheet",
                        "file_path": "aditya_project/2D/Jaimini Title Sequence/jaimini_turnaround.png",
                        "aspect": "contain",
                        "bg": "#151821",
                        "badge": "ORTHOGRAPHIC TURNAROUND • MODEL SHEET",
                        "caption": "Orthographic 3-angle model sheet (front, three-quarter, and side profile) detailing anatomical proportions, lime-green dhoti drapery, and hair knot design."
                    },
                    {
                        "type": "image",
                        "title": "Jaimini Trivedi — Temple Priest Character Art",
                        "file_path": "aditya_project/2D/Jaimini Title Sequence/IMG_4671.PNG",
                        "aspect": "contain",
                        "bg": "#120e14",
                        "badge": "CHARACTER ART • LEAD PROTAGONIST",
                        "caption": "Full character painting of Jaimini Trivedi holding ceremonial bronze aarti lamp with sacred vermillion markings."
                    }
                ]
            },
            {
                "id": "non-narrative",
                "slug": "non-narrative",
                "folder_name": "Non Narrative",
                "title": "Non Narrative — Anna Dominoes",
                "cover_image": "aditya_project/2D/Non Narrative/nna.png",
                "category": "Rhythmic & Experimental Animation",
                "description": "Kinetic animation exploration focusing on mechanical domino chain reactions, physics anticipation, and musical cadence.",
                "tools": ["After Effects", "Clip Studio Paint", "Blender"],
                "badge": "1 Motion Reel (26 MB)",
                "items": [
                    {
                        "type": "video",
                        "title": "Anna Dominoes — Non Narrative Animation Short",
                        "file_path": "aditya_project/2D/Non Narrative/Anna Dominoes.mp4",
                        "poster": "aditya_project/2D/Non Narrative/nna.png",
                        "duration": "0:30 min",
                        "fps": "24 fps",
                        "badge": "EXPERIMENTAL MOTION • 24 FPS",
                        "caption": "Rhythmic chain reaction domino sequence exploring momentum, timing charts, and kinetic physical comedy."
                    }
                ]
            },
            {
                "id": "target-practise",
                "slug": "target-practise",
                "folder_name": "Target Practise",
                "title": "Target Practise — Action Comic Book",
                "cover_image": "images/target_split_blast_rifle.png",
                "category": "Comic Storyboards & Inking",
                "description": "Complete 84.1 MB black-and-white comic book publication exploring extreme camera angles, firearm engineering, speedlines, and sequential manga pacing.",
                "tools": ["Clip Studio Paint", "Photoshop"],
                "badge": "Complete 84.1 MB PDF Book",
                "has_pdf": True,
                "pdf_embed": {
                    "id": "pdf-target-practise-reader",
                    "title": "Target Practise — Action Comic Storyboard Book",
                    "file_path": "aditya_project/2D/Target Practise/TARGET PRACTISE.pdf",
                    "file_size": "84.1 MB",
                    "format": "Interactive Scrollable PDF Publication • 600 DPI Inks",
                    "summary": "Full black-and-white sequential action comic book publication with extreme camera choreography and firearm design.",
                    "highlights": [
                        "Complete High-Resolution B&W Storyboard Comic (84.1 MB)",
                        "MDC Split-Blast Rifle Ballistics Blueprint",
                        "Extreme Perspective & Wide-Angle Tactical Staging",
                        "Dynamic Speedline Motion & Inking Choreography"
                    ]
                },
                "items": [
                    {
                        "type": "pdf",
                        "title": "Target Practise — Complete Sequential Comic Publication",
                        "file_path": "aditya_project/2D/Target Practise/TARGET PRACTISE.pdf",
                        "file_size": "84.1 MB",
                        "badge": "84.1 MB SCROLLABLE PDF BOOK",
                        "caption": "Read and scroll the complete 84.1 MB high-contrast comic book directly inside the website viewer below."
                    }
                ]
            }
        ]
    },
    {
        "id": "preprod",
        "slug": "preprod",
        "name": "Preprod",
        "title": "Pre-Production",
        "icon": "pencil",
        "cover_image": "aditya_project/Preprod/bot and boy/IMG_4688.PNG",
        "description": "Visual development pitch bibles, scene layout camera studies, animatics, and character model sheets.",
        "badge": "4 Projects • 15 Media Files",
        "subfolders": [
            {
                "id": "akkad",
                "slug": "akkad",
                "folder_name": "Akkad",
                "title": "The Tale of Akkad — Production Bible",
                "cover_image": "images/akkad_thumbnail.png",
                "category": "Character Design & Worldbuilding",
                "description": "Complete 32.7 MB pre-production pitch bible featuring historical Mesopotamian fantasy, character sheets, costume silhouettes, and archery lesson sequence.",
                "tools": ["Photoshop", "Clip Studio Paint", "Blender"],
                "badge": "1 PDF Book • 1 Title Card Plate",
                "has_pdf": True,
                "pdf_embed": {
                    "id": "pdf-akkad-reader",
                    "title": "The Tale of Akkad — Full Production Art & Storyboard Book",
                    "file_path": "aditya_project/Preprod/Akkad/Akkad.pdf",
                    "file_size": "32.7 MB",
                    "format": "Interactive Scrollable PDF Presentation Book",
                    "summary": "Historical Mesopotamian worldbuilding, character turnarounds, costume silhouettes, and archery lesson beat boards.",
                    "highlights": [
                        "Full Archery Lesson Beat Boards Sequence",
                        "Mesopotamian Worldbuilding & Color Keys",
                        "Anatomical Poses & Archery Mechanics",
                        "Cinematic 2.39:1 Composition Studies"
                    ]
                },
                "items": [
                    {
                        "type": "image",
                        "title": "The Tale of Akkad — Official Title Calligraphy Logo",
                        "file_path": "images/akkad_thumbnail.png",
                        "aspect": "contain",
                        "bg": "#000000",
                        "badge": "TITLE LOGO • CALLIGRAPHY",
                        "caption": "Official crimson calligraphic title card logo featuring ancient Mesopotamian and cuneiform-inspired phonetic ligatures on deep black."
                    },
                    {
                        "type": "pdf",
                        "title": "The Tale of Akkad — Complete Production Pitch Bible",
                        "file_path": "aditya_project/Preprod/Akkad/Akkad.pdf",
                        "file_size": "32.7 MB",
                        "badge": "32.7 MB SCROLLABLE PDF BIBLE",
                        "caption": "Scroll through the full 32.7 MB visual development pitch book and character model sheets directly inside the site viewer below."
                    }
                ]
            },
            {
                "id": "beavis",
                "slug": "beavis",
                "folder_name": "Beavis",
                "title": "Scene Layout & Backgrounds",
                "cover_image": "aditya_project/Preprod/Beavis/hori pan lol.png",
                "category": "Scene Layout & Cinematography",
                "description": "Layout and camera choreography studies exploring horizontal tracking pans (3072x768), 3-stage camera staging cut-ins, animatics, and rendered animation shots.",
                "tools": ["Photoshop", "After Effects", "Blender"],
                "badge": "2 Videos • 2 Layout Plates",
                "items": [
                    {
                        "type": "video",
                        "title": "Scene Layout — Full Animatic Reel",
                        "file_path": "aditya_project/Preprod/Beavis/Animatic.MP4",
                        "poster": "aditya_project/Preprod/Beavis/laout pic.png",
                        "duration": "0:30 min",
                        "fps": "24 fps",
                        "badge": "ANIMATIC REEL • 24 FPS",
                        "caption": "Timing and camera pan animatic tracking character movement and scene transitions."
                    },
                    {
                        "type": "video",
                        "title": "Scene Layout — Rendered Animation Shot",
                        "file_path": "aditya_project/Preprod/Beavis/RENDERED SHOT.mp4",
                        "poster": "aditya_project/Preprod/Beavis/hori pan lol.png",
                        "duration": "0:15 min",
                        "fps": "24 fps",
                        "badge": "RENDERED CAMERA MOVE • 24 FPS",
                        "caption": "Finished 2D animation camera move over multi-plane urban background layout."
                    },
                    {
                        "type": "image",
                        "title": "Widescreen Panoramic Street Layout (3072x768)",
                        "file_path": "aditya_project/Preprod/Beavis/hori pan lol.png",
                        "aspect": "cover",
                        "bg": "#12151e",
                        "badge": "PANORAMA • 3072x768",
                        "caption": "Panoramic horizontal street tracking environment exploring multi-plane depth staging and nocturnal lighting."
                    },
                    {
                        "type": "image",
                        "title": "3-Stage Camera Pan Staging Layout Diagram",
                        "file_path": "aditya_project/Preprod/Beavis/laout pic.png",
                        "aspect": "contain",
                        "bg": "#ffffff",
                        "badge": "CAMERA BLUEPRINT • 3-STAGE",
                        "caption": "Production layout sheet detailing camera positions from Shot 1 to Shot 3 with field cut-in guides."
                    }
                ]
            },
            {
                "id": "bot-and-boy",
                "slug": "bot-and-boy",
                "folder_name": "bot and boy",
                "title": "The Bot and the Boy",
                "cover_image": "aditya_project/Preprod/bot and boy/IMG_4688.PNG",
                "category": "Storyboarding & Animatic",
                "description": "'A boy walks into a junkyard and finds a broken robot.' Features the full animatic reel, key art poster, and 9-panel cinematic desert chase beat boards.",
                "tools": ["Clip Studio Paint", "Photoshop", "After Effects"],
                "badge": "1 Video • 2 Artwork Plates",
                "items": [
                    {
                        "type": "video",
                        "title": "The Bot and the Boy — Animatic Short Reel",
                        "file_path": "aditya_project/Preprod/bot and boy/Jyotiraditya_Animatic2.mov",
                        "file_path_alt": "videos/bot_and_boy_animatic.mp4",
                        "poster": "aditya_project/Preprod/bot and boy/IMG_4688.PNG",
                        "duration": "1:49 min",
                        "fps": "24 fps",
                        "badge": "FULL ANIMATIC SHORT • 1:49 MIN",
                        "caption": "Emotional sequential narrative following the boy discovering the broken mechanical giant and their shared escape."
                    },
                    {
                        "type": "image",
                        "title": "The Bot and the Boy — Key Art Poster",
                        "file_path": "aditya_project/Preprod/bot and boy/IMG_4688.PNG",
                        "aspect": "contain",
                        "bg": "#141117",
                        "badge": "KEY ART POSTER • 2D COLOR CEL",
                        "caption": "Finished color key visual depicting the desert encounter between the youth and the towering bipedal protector."
                    },
                    {
                        "type": "image",
                        "title": "9-Panel Desert Chase Storyboard Beat Boards",
                        "file_path": "aditya_project/Preprod/bot and boy/IMG_4689.PNG",
                        "aspect": "contain",
                        "bg": "#ffffff",
                        "badge": "9-PANEL STORYBOARD BEATS",
                        "caption": "Dynamic camera choreography tracking evasive sprint, leap of faith, and defensive shield deployment."
                    }
                ]
            },
            {
                "id": "monkesh",
                "slug": "monkesh",
                "folder_name": "Monkesh",
                "title": "Monkesh — Character Design Package",
                "cover_image": "aditya_project/Preprod/Monkesh/IMG_4719.PNG",
                "category": "Character Design & Model Sheets",
                "description": "Comprehensive pre-production character design package for Monkesh: 6 full production plates including turnarounds, costume breakdown, dynamic gestures, an 8-expression model sheet on dark ink, and custom typography.",
                "tools": ["Photoshop", "Clip Studio Paint", "Illustrator"],
                "badge": "6 High-Res Production Plates",
                "items": [
                    {
                        "type": "image",
                        "title": "Monkesh — 8-Expression Facial Acting Sheet",
                        "file_path": "aditya_project/Preprod/Monkesh/IMG_4719.PNG",
                        "aspect": "contain",
                        "bg": "#15151b",
                        "badge": "8-EXPRESSION MODEL SHEET",
                        "caption": "Structured grid of 8 nuanced facial expressions on dark background illustrating character acting principles."
                    },
                    {
                        "type": "image",
                        "title": "Monkesh — Full Character Turnaround Sheet",
                        "file_path": "aditya_project/Preprod/Monkesh/IMG_4720.PNG",
                        "aspect": "contain",
                        "bg": "#1a1a24",
                        "badge": "ORTHOGRAPHIC TURNAROUND",
                        "caption": "Complete front, 3/4, side, and rear orthographic turnaround sequence for 2D character modeling."
                    },
                    {
                        "type": "image",
                        "title": "Monkesh — Character Silhouette & Proportions",
                        "file_path": "aditya_project/Preprod/Monkesh/IMG_4716.PNG",
                        "aspect": "contain",
                        "bg": "#1c1924",
                        "badge": "CHARACTER MODEL SHEET 01",
                        "caption": "Foundational silhouette, anatomy proportions, and gesture foundation studies."
                    },
                    {
                        "type": "image",
                        "title": "Monkesh — Costume Breakdown & Accessories",
                        "file_path": "aditya_project/Preprod/Monkesh/IMG_4717.PNG",
                        "aspect": "contain",
                        "bg": "#1c1924",
                        "badge": "CHARACTER MODEL SHEET 02",
                        "caption": "Costume layer details, drapery lines, tailoring seams, and utility accessories."
                    },
                    {
                        "type": "image",
                        "title": "Monkesh — Dynamic Action & Gesture Poses",
                        "file_path": "aditya_project/Preprod/Monkesh/IMG_4718.PNG",
                        "aspect": "contain",
                        "bg": "#1c1924",
                        "badge": "ACTION GESTURE SHEET",
                        "caption": "Agile parkour leaps, balance postures, and acrobatic character acting silhouettes."
                    },
                    {
                        "type": "image",
                        "title": "Monkesh — Title Typographic Design",
                        "file_path": "aditya_project/Preprod/Monkesh/IMG_4721.PNG",
                        "aspect": "contain",
                        "bg": "#18141f",
                        "badge": "TYPOGRAPHIC TITLE DESIGN",
                        "caption": "Custom stylized title branding and letterform design for the Monkesh franchise."
                    }
                ]
            }
        ]
    },
    {
        "id": "3d",
        "slug": "3d",
        "name": "3D",
        "title": "3D Motion & Design",
        "icon": "box",
        "cover_image": "aditya_project/3D/cube/cube.png",
        "description": "Looping isometric dimensional puzzles, cyberpunk kinetic typography, and fluid liquid glass morph animations.",
        "badge": "3 Projects • 3 Video Renders",
        "subfolders": [
            {
                "id": "cube",
                "slug": "cube",
                "folder_name": "cube",
                "title": "Cube Shift — Isometric 3D Motion",
                "cover_image": "aditya_project/3D/cube/cube.png",
                "category": "3D Motion Graphics",
                "description": "Looping isometric voxel cube animation featuring dynamic studio lighting, procedural rotation, and dimensional shift mechanics.",
                "tools": ["Blender", "After Effects", "Cinema 4D"],
                "badge": "1 Video Render (84.1 MB)",
                "items": [
                    {
                        "type": "video",
                        "title": "Cube Shift Final — 3D Motion Animation",
                        "file_path": "aditya_project/3D/cube/Cube shift Final.mov",
                        "file_path_alt": "videos/rendered_shot.mp4",
                        "poster": "aditya_project/3D/cube/cube.png",
                        "duration": "0:15 min",
                        "fps": "24 fps",
                        "badge": "ISOMETRIC 3D • 24 FPS",
                        "caption": "Hard-surface geometric voxel transformation and procedural isometric cube shift animation."
                    }
                ]
            },
            {
                "id": "cyberpunk",
                "slug": "cyberpunk",
                "folder_name": "Cyberpunk",
                "title": "Cyberpunk Typography — Motion Design",
                "cover_image": "aditya_project/3D/Cyberpunk/cyberpunk.png",
                "category": "Kinetic Typography & Broadcast",
                "description": "High-energy cyberpunk kinetic typography reel featuring stylized glitch distortion, neon chromatic dispersion, and synchronized audio pacing.",
                "tools": ["After Effects", "Illustrator", "Blender"],
                "badge": "1 Video Render (18.4 MB)",
                "items": [
                    {
                        "type": "video",
                        "title": "Cyberpunk Typography FINAL — Kinetic Reel",
                        "file_path": "aditya_project/3D/Cyberpunk/Cyberpunk Typography FINAL.mp4",
                        "poster": "aditya_project/3D/Cyberpunk/cyberpunk.png",
                        "duration": "0:25 min",
                        "fps": "24 fps",
                        "badge": "KINETIC TYPOGRAPHY • 1080p HD",
                        "caption": "Stylized broadcast kinetic typography exploration with sci-fi glitch transitions and procedural pacing."
                    }
                ]
            },
            {
                "id": "wine",
                "slug": "wine",
                "folder_name": "Wine",
                "title": "Wine Bottle Liquid Morph — 3D Simulation",
                "cover_image": "aditya_project/3D/Wine/bottle.png",
                "category": "3D Procedural & Fluid Dynamics",
                "description": "Fluid simulation and procedural glass shading study tracking viscous liquid morphing into bottle geometry with caustics and refraction.",
                "tools": ["Blender", "After Effects"],
                "badge": "1 Video Render (11.6 MB)",
                "items": [
                    {
                        "type": "video",
                        "title": "Wine Bottle Liquid Morph — 3D Simulation Reel",
                        "file_path": "aditya_project/3D/Wine/Wine Bottle Liquid Morph.mp4",
                        "poster": "aditya_project/3D/Wine/bottle.png",
                        "duration": "0:18 min",
                        "fps": "24 fps",
                        "badge": "FLUID DYNAMICS • CAUSTICS",
                        "caption": "Procedural fluid surface simulation with photorealistic glass dispersion, refraction, and surface tension."
                    }
                ]
            }
        ]
    },
    {
        "id": "xtra-work",
        "slug": "xtra-work",
        "name": "Xtra work",
        "title": "Extra Artwork & Visual Development",
        "icon": "palette",
        "cover_image": "aditya_project/Xtra work/FINAL 2.jpg",
        "description": "Diverse collection of visual development plates, high-resolution digital paintings, cover designs, and character concept illustrations.",
        "badge": "1 Collection • 6 Production Plates",
        "subfolders": [
            {
                "id": "illustrations",
                "slug": "illustrations",
                "folder_name": "Extra Work",
                "title": "Visual Development & Editorial Illustrations",
                "cover_image": "aditya_project/Xtra work/FINAL 1.jpg",
                "category": "Digital Illustration & Concept Art",
                "description": "Exploratory concept plates, finished book covers, and stylistic digital character studies.",
                "tools": ["Photoshop", "Clip Studio Paint", "Procreate"],
                "badge": "6 High-Res Illustrations",
                "items": [
                    {
                        "type": "image",
                        "title": "Editorial Cover Illustration — Final Composition 1",
                        "file_path": "aditya_project/Xtra work/FINAL 1.jpg",
                        "aspect": "contain",
                        "bg": "#12141a",
                        "badge": "COVER ILLUSTRATION 01",
                        "caption": "Finished book cover composition exploring poetic symbolism and atmospheric lighting."
                    },
                    {
                        "type": "image",
                        "title": "Editorial Cover Illustration — Final Composition 2",
                        "file_path": "aditya_project/Xtra work/FINAL 2.jpg",
                        "aspect": "contain",
                        "bg": "#12141a",
                        "badge": "COVER ILLUSTRATION 02",
                        "caption": "Alternative editorial color key exploring high-contrast emotional palette."
                    },
                    {
                        "type": "image",
                        "title": "Stylized Character Digital Portrait",
                        "file_path": "aditya_project/Xtra work/IMG_4722.PNG",
                        "aspect": "contain",
                        "bg": "#1c1822",
                        "badge": "CHARACTER PORTRAIT",
                        "caption": "Square format character lighting study focusing on facial planes and digital brush textures."
                    },
                    {
                        "type": "image",
                        "title": "High-Resolution Production Panorama",
                        "file_path": "aditya_project/Xtra work/IMG_4723.PNG",
                        "aspect": "contain",
                        "bg": "#161720",
                        "badge": "KEY VISUAL PLATE",
                        "caption": "Expansive 4950x3450 composition demonstrating complex spatial staging and background environment depth."
                    },
                    {
                        "type": "image",
                        "title": "Pre-Production Concept Study 01",
                        "file_path": "aditya_project/Xtra work/IMG_4724.PNG",
                        "aspect": "contain",
                        "bg": "#1b1a24",
                        "badge": "CONCEPT STUDY 01",
                        "caption": "Rough visual development thumbnail study testing architectural silhouettes and shadow balance."
                    },
                    {
                        "type": "image",
                        "title": "Pre-Production Concept Study 02",
                        "file_path": "aditya_project/Xtra work/IMG_4725.PNG",
                        "aspect": "contain",
                        "bg": "#1b1a24",
                        "badge": "CONCEPT STUDY 02",
                        "caption": "Atmospheric color key and environmental tonal balance study."
                    }
                ]
            }
        ]
    }
]
