// LandingPage Component
// This is the hero/landing section of the portfolio homepage
// Features a full-screen background with glassmorphic effect

import * as React from "react";
import AnimatedBackground from "./AnimatedBackground";
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
        {/* Content will be added here in future updates */}
      </div>
    </section>
  );
};

export default LandingPage;
