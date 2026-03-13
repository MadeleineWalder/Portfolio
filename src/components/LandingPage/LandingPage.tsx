// LandingPage Component
// This is the hero/landing section of the portfolio homepage
// Features a full-screen background with glassmorphic effect

import * as React from "react";
import AnimatedBackground from "./AnimatedBackground";
import logoSvg from "../../images/logo.svg";
import "./LandingPage.css";

// Define the props interface for type safety
// Currently no props needed, but this makes the component extensible
interface LandingPageProps {}

// React Functional Component with TypeScript
// React.FC (Function Component) ensures proper typing for React components
const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <section className="landing-page">
      {/* Background container - positioned absolutely to fill the section */}
      <div className="landing-page-background-wrapper">
        {/* Animated concentric circles background */}
        <AnimatedBackground />
      </div>
      
      {/* Glassmorphic overlay - creates blurred effect over background */}
      <div className="landing-page-glass-overlay" />
      
      {/* Content overlay container - for text/content on top */}
      <div className="landing-page-content">
        {/* Logo SVG */}
        <img src={logoSvg} alt="Maddy Design" className="landing-page-logo" />
        
        {/* Main headline with colored keywords */}
        <h2 className="landing-page-headline">
          Need a <span className="highlight-purple">modern,</span>
          <br />
          <span className="highlight-cyan">professional</span> website?
        </h2>
        
        {/* Subline/services list */}
        <p className="landing-page-subline">
          Custom websites - Brand identity - Photo editing
        </p>
        
        {/* Call-to-action button */}
        <button className="landing-page-cta">Begin</button>
      </div>
    </section>
  );
};

export default LandingPage;
