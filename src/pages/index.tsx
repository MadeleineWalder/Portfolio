// Portfolio Homepage
// Main landing page showcasing projects and skills

import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import LandingPage from "../components/LandingPage/LandingPage";
import LandingPageZoomedOut from "../components/LandingPageZoomedOut/LandingPageZoomedOut";
import "../styles/global.css"; // Import global styles
import "./index.css"; // Import page-specific styles

// Main Index Page Component
// This is the root homepage of the portfolio
const IndexPage: React.FC<PageProps> = () => {
  const [showZoomedOut, setShowZoomedOut] = useState(false);

  return (
    <main>
      <LandingPageZoomedOut active={showZoomedOut} />
      {/* Landing/Hero section with background image */}
      <LandingPage onZoomReveal={setShowZoomedOut} />

      {/* Scroll target section after the landing animation completes */}
      <section id="projects" className="page-section">
        <div className="page-section-content">
          <h2>Explore the portfolio</h2>
          <p>
            Scroll down to continue building the website and reveal the next section.
          </p>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

// Head component for SEO and metadata
// This populates the <head> tag with proper meta information
export const Head: HeadFC = () => (
  <>
    <title>Portfolio | MaddyDesign</title>
    <meta name="description" content="Modern portfolio showcasing web development projects and skills" />
  </>
);
