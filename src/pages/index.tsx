// Portfolio Homepage
// Main landing page showcasing projects and skills

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import LandingPage from "../components/LandingPage/LandingPage";
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase";
import "../styles/global.css"; // Import global styles
import "./index.css"; // Import page-specific styles

// Main Index Page Component
// This is the root homepage of the portfolio
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      {/* Landing/Hero section with background image */}
      <LandingPage />
      
      {/* Projects section with control panel to switch between designs */}
      <ProjectShowcase />
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
