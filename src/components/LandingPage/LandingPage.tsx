// LandingPage Component
// This is the hero/landing section of the portfolio homepage
// Features a full-screen section with animated marquee background and zooming hero
// Contains both the pinned scroll section and the zooming zoom effect

import * as React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import logoSvg from "../../images/logo.svg";
import logoTwoLines from "../../images/logo-2-lines.svg";
import "./LandingPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// React Functional Component with TypeScript
// React.FC (Function Component) ensures proper typing for React components
const LandingPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const logoOverlayRef = useRef<HTMLDivElement | null>(null);
  const [disableBackgroundAnimation, setDisableBackgroundAnimation] = useState(false);
  const animationPausedRef = useRef(false);

  const updateBackgroundPaused = (paused: boolean) => {
    if (animationPausedRef.current !== paused) {
      animationPausedRef.current = paused;
      setDisableBackgroundAnimation(paused);
    }
  };

  const updateGlow = (progress: number) => {
    if (!maskRef.current) return;

    const clamped = Math.min(Math.max(progress, 0), 1);
    const strength = 1 - clamped;

    const glowSize = 140 + strength * 240;
    const glowAlpha = 0.35 + strength * 0.7;
    const innerGlow = 14 + strength * 42;

    maskRef.current.style.boxShadow =
      `0 0 ${glowSize}px rgba(0, 244, 253, ${glowAlpha}), ` +
      `inset 0 0 ${innerGlow}px rgba(0, 244, 253, ${glowAlpha * 0.45}), ` +
      `0 40px 120px rgba(0, 0, 0, 0.35)`;
  };

  const updateLogoOverlay = (progress: number) => {
    if (!logoOverlayRef.current) return;

    // Logo overlay appears when zoom starts (progress > 0.01)
    const shouldShow = progress > 0.01;
    logoOverlayRef.current.style.opacity = shouldShow ? "1" : "0";
  };

  useLayoutEffect(() => {
    if (!sectionRef.current || !maskRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate(self) {
            const isAtTop = self.progress <= 0.001;
            updateBackgroundPaused(!isAtTop);
            updateGlow(self.progress);
            updateLogoOverlay(self.progress);
          },
          onRefresh(self) {
            const isAtTop = self.progress <= 0.001;
            updateBackgroundPaused(!isAtTop);
            updateGlow(self.progress);
            updateLogoOverlay(self.progress);
          },
        },
      }).to(maskRef.current, {
        scale: 0.35,
        ease: "power3.out",
        transformOrigin: "center center",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="landing-page">
      {/* Marquee background wrapper - contains animated text */}
      <div className="landing-page-marquee-wrapper" aria-hidden="true">
        <div className="landing-page-marquee-row landing-page-marquee-row-1">
          <div className="landing-page-marquee-track">
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
          </div>
        </div>
        <div className="landing-page-marquee-row landing-page-marquee-row-2">
          <div className="landing-page-marquee-track">
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
            <span>Think outside the box</span>
          </div>
        </div>
      </div>

      {/* Zooming mask - scales down as user scrolls */}
      <div ref={maskRef} className="landing-page-mask">
        {/* Thin frame that becomes visible only when the page is zoomed out */}
        <div className={`landing-page-frame ${disableBackgroundAnimation ? "is-visible" : ""}`} />

        {/* Background container - positioned absolutely to fill the section */}
        <div className="landing-page-background-wrapper">
          {/* Animated concentric circles background */}
          <AnimatedBackground disableAnimation={disableBackgroundAnimation} />
        </div>
        
        {/* Glassmorphic overlay - creates blurred effect over the background */}
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
        </div>
      </div>

      {/* Logo overlay for zoomed-out state - hidden initially, revealed during zoom */}
      <div ref={logoOverlayRef} className="landing-page-logo-overlay">
        <img src={logoTwoLines} alt="Maddy Design logo" />
      </div>
    </section>
  );
};

export default LandingPage;
