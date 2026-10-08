"""
Comprehensive Test Suite for Jyotiraditya Savaikar Portfolio
Tests Flask routes, static assets, portfolio data integrity, and QR code service.
"""

import os
import unittest
from app import app
from portfolio_data import ARTIST, WORK_CATEGORIES, FEATURED_PROJECTS, SKILLS_TOOLKIT, TIMELINE, PRODUCTION_DOCS
from qr_service import generate_svg_qr

class PortfolioTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        self.app_context = app.app_context()
        self.app_context.push()

    def tearDown(self):
        self.app_context.pop()

    def test_routes_status_code_200(self):
        """All main, gallery, and archive routes should return 200 OK."""
        routes = ["/", "/about", "/resume", "/gallery"]
        for cat in WORK_CATEGORIES:
            routes.append(f"/gallery/{cat['slug']}")

        for route in routes:
            response = self.client.get(route)
            self.assertEqual(response.status_code, 200, f"Route {route} failed with status {response.status_code}")
            self.assertIn(b"Jyotiraditya", response.data)

        # /intro redirects to /#intro
        intro_resp = self.client.get("/intro")
        self.assertEqual(intro_resp.status_code, 302)

    def test_artist_metadata(self):
        """Verify key artist specifications and contact data."""
        self.assertEqual(ARTIST["name"], "Jyotiraditya Savaikar")
        self.assertEqual(ARTIST["email"], "pa4589645@gmail.com")
        self.assertIn("8767937720", ARTIST["phone"])
        self.assertIn("Pune", ARTIST["location"])
        self.assertIn("MIT Institute of Design", ARTIST["institute"])

    def test_artwork_images_exist_on_disk(self):
        """All referenced artwork images in portfolio_data should exist on disk."""
        image_paths = [ARTIST["portrait_image"], ARTIST["intro_studio_image"]]
        for cat in WORK_CATEGORIES:
            image_paths.append(cat["thumbnail_image"])
        for proj in FEATURED_PROJECTS:
            if "artwork_image" in proj:
                image_paths.append(proj["artwork_image"])
            if "storyboard_image" in proj:
                image_paths.append(proj["storyboard_image"])
            if "mech_image" in proj:
                image_paths.append(proj["mech_image"])
            if "character_image" in proj:
                image_paths.append(proj["character_image"])
            if "weapons_image" in proj:
                image_paths.append(proj["weapons_image"])
            if "day_image" in proj:
                image_paths.append(proj["day_image"])

        for rel_path in set(image_paths):
            static_file = os.path.join("static", rel_path)
            self.assertTrue(os.path.exists(static_file), f"Missing image file: {static_file}")
            self.assertGreater(os.path.getsize(static_file), 10000, f"File too small: {static_file}")

    def test_videos_and_docs_exist_on_disk(self):
        """Verify that all production PDF books and videos exist on disk."""
        # PDF docs
        for doc in PRODUCTION_DOCS:
            static_doc = os.path.join("static", doc["file_path"])
            self.assertTrue(os.path.exists(static_doc), f"Missing PDF doc: {static_doc}")
            self.assertGreater(os.path.getsize(static_doc), 1000000, f"PDF too small: {static_doc}")

        # Showreel video
        if "showreel_video" in ARTIST:
            showreel = os.path.join("static", ARTIST["showreel_video"])
            self.assertTrue(os.path.exists(showreel), f"Missing showreel video: {showreel}")

        # Project videos
        for proj in FEATURED_PROJECTS:
            if "video_file" in proj:
                vid = os.path.join("static", proj["video_file"])
                self.assertTrue(os.path.exists(vid), f"Missing project video: {vid}")

    def test_featured_projects_count_and_titles(self):
        """Verify that all requested featured projects are represented."""
        project_ids = [p["id"] for p in FEATURED_PROJECTS]
        expected_ids = ["jaimini", "bot-and-boy", "beavis", "akkad", "target-practise", "monkesh", "3d-motion"]
        for eid in expected_ids:
            self.assertIn(eid, project_ids, f"Expected project {eid} not found in FEATURED_PROJECTS")

    def test_qr_generation(self):
        """QR service generates valid SVG QR code."""
        svg_code = generate_svg_qr("https://www.behance.net/jyotiradityasavaikar")
        self.assertTrue(svg_code.startswith("<svg"))
        self.assertIn("</svg>", svg_code)

if __name__ == "__main__":
    unittest.main()
