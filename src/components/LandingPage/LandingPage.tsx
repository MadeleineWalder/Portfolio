// LandingPage Component
// This is the hero/landing section of the portfolio homepage
// Features a full-screen background image with modern, minimal styling

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"; // Gatsby's optimized image component
import "./LandingPage.css";

// Define the props interface for type safety
// Currently no props needed, but this makes the component extensible
interface LandingPageProps {}

// React Functional Component with TypeScript
// React.FC (Function Component) ensures proper typing for React components
const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <section className="landing-page">
      {/* Background image wrapper - positioned absolutely to fill the section */}
      <div className="landing-page-background-wrapper">
        <StaticImage
          src="../../images/background-1.jpg"
          alt="Portfolio background"
          className="landing-page-background-image"
          placeholder="blurred" // Shows blurred placeholder while loading
          layout="fullWidth" // Makes image fill its container
          objectFit="cover" // Ensures image covers the area without distortion
        />
      </div>
      
      {/* Glassmorphic overlay - creates blurred effect over background image */}
      <div className="landing-page-glass-overlay" />
      
      {/* Content overlay container - for future text/content on top of the image */}
      <div className="landing-page-content">
        {/* Content will be added here in future updates */}
      </div>
    </section>
  );
};

export default LandingPage;
