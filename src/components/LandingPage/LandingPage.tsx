// LandingPage Component
// This is the hero/landing section of the portfolio homepage
// Features a full-screen background with glassmorphic effect

import * as React from "react";
import { useLayoutEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import logoSvg from "../../images/logo.svg";
import "./LandingPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Define the props interface for type safety
// Currently no props needed, but this makes the component extensible
interface LandingPageProps {}

// React Functional Component with TypeScript
// React.FC (Function Component) ensures proper typing for React components
const LandingPage: React.FC<LandingPageProps> = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }).to(sectionRef.current, {
        scale: 0.35,
        ease: "power3.out",
        transformOrigin: "center center",
        borderRadius: "2rem",
        boxShadow: "0 40px 120px rgba(0, 0, 0, 0.35)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth scroll function to navigate to projects section
  // scrollIntoView provides smooth scrolling behavior
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: "smooth", // Smooth scroll animation
        block: "start" // Align to top of viewport
      });
    }
  };

  return (
    <section ref={sectionRef} className="landing-page">
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
        
        {/* Call-to-action button - scrolls to projects section on click */}
        <button className="landing-page-cta" onClick={scrollToProjects}>
          Begin
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
