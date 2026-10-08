#!/usr/bin/env python3
"""
Jyotiraditya Savaikar - Animation & Pre-Production Portfolio Web App
Written in Python using Flask and Jinja2.
"""

import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

from flask import Flask, render_template, request, jsonify, Response, abort, redirect, url_for
from portfolio_data import (
    ARTIST, WORK_CATEGORIES, FEATURED_PROJECTS, SKILLS_TOOLKIT,
    TIMELINE, INTRO_CONFIG, PRODUCTION_DOCS, PROJECT_DOSSIERS, FOLDER_ARCHIVES
)
from qr_service import generate_svg_qr

app = Flask(__name__, static_folder='static', template_folder='templates')
app.config['SECRET_KEY'] = 'jyotiraditya-savaikar-portfolio-key-2026'

# Context processor to inject artist data globally across all templates
@app.context_processor
def inject_global_data():
    return {
        'artist': ARTIST,
        'toolkit': SKILLS_TOOLKIT,
        'timeline': TIMELINE,
        'intro_config': INTRO_CONFIG,
        'production_docs': PRODUCTION_DOCS,
        'project_dossiers': PROJECT_DOSSIERS,
        'folder_archives': FOLDER_ARCHIVES
    }

# --------------------------------------------------------------------------
# ROUTES
# --------------------------------------------------------------------------

@app.route('/')
def home():
    """Renders the main single-page Framer portfolio with all sections."""
    return render_template(
        'index.html',
        categories=WORK_CATEGORIES,
        featured_projects=FEATURED_PROJECTS
    )

@app.route('/intro')
def intro():
    """Direct route to the atmospheric 2D Animation Intro page."""
    return redirect(url_for('home') + '#intro')

@app.route('/about')
def about():
    """Renders the deep-dive narrative About page."""
    return render_template('about.html')

@app.route('/resume')
def resume():
    """Renders the print-ready, downloadable resume view."""
    return render_template('resume.html')

@app.route('/gallery')
def gallery_all():
    """Renders the comprehensive gallery archive featuring all project artwork and production PDF books."""
    return render_template(
        'gallery.html',
        category={
            'title': 'Master Production Gallery & Archives',
            'description': 'Full high-resolution visual development, beat boards, character model sheets, and complete production PDF books.'
        },
        matching_projects=FEATURED_PROJECTS,
        active_docs=PRODUCTION_DOCS,
        active_dossier=None
    )

@app.route('/gallery/<category_slug>')
def gallery_view(category_slug):
    """Renders dedicated category gallery archives."""
    slug_alias_map = {
        'title-sequences': '2d',
        'comic-storyboards': '2d',
        'storyboarding': 'preprod',
        'character-design': 'preprod',
        'scene-layout': 'preprod',
        '3d-motion': '3d',
        'illustrations': 'xtra-work'
    }
    resolved_slug = slug_alias_map.get(category_slug, category_slug)
    category = next((c for c in WORK_CATEGORIES if c['slug'] == resolved_slug), None)
    if not category:
        category = next((c for c in WORK_CATEGORIES if c['id'] == resolved_slug), None)
    if not category:
        abort(404)

    # Filter projects associated with this category
    matching_projects = [
        p for p in FEATURED_PROJECTS
        if category['title'].lower() in p['category'].lower() or p['category'].lower() in category['title'].lower()
    ]

    # Filter relevant docs
    relevant_docs = [
        d for d in PRODUCTION_DOCS
        if category['title'].lower() in d['category'].lower() or d['category'].lower() in category['title'].lower()
    ]

    active_dossier = PROJECT_DOSSIERS.get(category_slug)

    return render_template(
        'gallery.html',
        category=category,
        matching_projects=matching_projects,
        active_docs=relevant_docs if relevant_docs else PRODUCTION_DOCS,
        active_dossier=active_dossier
    )

# --------------------------------------------------------------------------
# API ENDPOINTS
# --------------------------------------------------------------------------

@app.route('/api/projects', methods=['GET'])
def api_projects():
    """Returns the JSON list of featured projects."""
    return jsonify({
        'status': 'success',
        'projects': FEATURED_PROJECTS,
        'count': len(FEATURED_PROJECTS)
    })

@app.route('/api/contact', methods=['POST'])
def api_contact():
    """Handles inquiry and collaboration form submissions."""
    data = request.get_json() or request.form
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    message = data.get('message', '').strip()
    role_type = data.get('role_type', 'Internship / Freelance')

    if not email or '@' not in email:
        return jsonify({
            'success': False,
            'error': 'Please provide a valid email address.'
        }), 400

    # In production, integrate with SendGrid, SES, or SMTP.
    print(f"[NEW INQUIRY] From: {name} <{email}> | Role: {role_type} | Message: {message}", file=sys.stderr)

    return jsonify({
        'success': True,
        'message': f'Thank you {name or "there"}! Your message has been received. Jyotiraditya will reply to {email} shortly.'
    })

@app.route('/api/qr/<link_id>')
def api_qr_code(link_id):
    """Dynamically generates and returns an SVG QR code for social/project links."""
    link_map = {
        'behance': ARTIST['behance_url'],
        'linkedin': ARTIST['linkedin_url'],
        'email': f"mailto:{ARTIST['email']}",
        'phone': f"tel:{ARTIST['phone_clean']}"
    }

    url = link_map.get(link_id.lower(), ARTIST['behance_url'])
    svg_content = generate_svg_qr(url, size=200)

    return Response(svg_content, mimetype='image/svg+xml')

# --------------------------------------------------------------------------
# APPLICATION ENTRYPOINT
# --------------------------------------------------------------------------

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"[OK] Launching Jyotiraditya Savaikar Portfolio on http://localhost:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)
