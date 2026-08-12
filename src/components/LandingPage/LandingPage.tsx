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

const projectCardData = [
  { left: "6%", width: "28%", bottom: "23%", enterOrder: 0 },
  { left: "24%", width: "24%", bottom: "43%", enterOrder: 3 },
  { left: "44%", width: "30%", bottom: "29%", enterOrder: 2 },
  { left: "66%", width: "22%", bottom: "50%", enterOrder: 4 },
  { left: "80%", width: "20%", bottom: "25%", enterOrder: 1 },
];

const orderedProjectCardData = [...projectCardData].sort((a, b) => a.enterOrder - b.enterOrder);

// Timeline years for the Work Experience section.
// We keep labels simple for now and can add detailed content later.
const timelineYearData = ["2021", "2022", "2023", "2024", "2025", "2026"];

// React Functional Component with TypeScript
// React.FC (Function Component) ensures proper typing for React components
const LandingPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const logoOverlayRef = useRef<HTMLDivElement | null>(null);
  const projectsLayerRef = useRef<HTMLDivElement | null>(null);
  const timelineLayerRef = useRef<HTMLDivElement | null>(null);
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

    // Keep logo pinned and visible through the full scroll scene once interaction begins.
    const shouldShow = progress > 0.001;
    logoOverlayRef.current.style.opacity = shouldShow ? "1" : "0";
  };

  useLayoutEffect(() => {
    if (!sectionRef.current || !maskRef.current) return;

    const ctx = gsap.context(() => {
      const projectsTitle = sectionRef.current?.querySelector(
        ".landing-page-projects-title"
      ) as HTMLElement | null;
      const projectsCluster = sectionRef.current?.querySelector(
        ".landing-page-projects-cluster"
      ) as HTMLElement | null;
      const projectsLayer = sectionRef.current?.querySelector(
        ".landing-page-projects-layer"
      ) as HTMLElement | null;
      const timelineLayer = sectionRef.current?.querySelector(
        ".landing-page-timeline-layer"
      ) as HTMLElement | null;
      const timelineTrack = sectionRef.current?.querySelector(
        ".landing-page-timeline-track"
      ) as HTMLElement | null;
      const timelineViewport = sectionRef.current?.querySelector(
        ".landing-page-timeline-viewport"
      ) as HTMLElement | null;
      const projectCards = gsap.utils.toArray<HTMLElement>(".landing-page-project-card-shell");
      if (
        !projectsTitle ||
        !projectsCluster ||
        !projectsLayer ||
        !timelineLayer ||
        !timelineTrack ||
        !timelineViewport ||
        projectCards.length === 0
      ) {
        return;
      }

      const centerProjectCluster = () => {
        let minLeft = Number.POSITIVE_INFINITY;
        let maxRight = Number.NEGATIVE_INFINITY;

        projectCards.forEach((card) => {
          const cardLeft = card.offsetLeft;
          const cardRight = card.offsetLeft + card.offsetWidth;
          minLeft = Math.min(minLeft, cardLeft);
          maxRight = Math.max(maxRight, cardRight);
        });

        const groupCenter = (minLeft + maxRight) / 2;
        const viewportCenter = window.innerWidth / 2;
        gsap.set(projectsCluster, { x: viewportCenter - groupCenter });
      };

      // Calculate the x position that centers the final year (2026) in the viewport.
      // This value is used for the long horizontal scrub phase.
      const getTimelineFinalX = () => {
        const finalYearNode = timelineTrack.querySelector(
          '[data-timeline-year="2026"]'
        ) as HTMLElement | null;

        if (!finalYearNode) return 0;

        const viewportWidth = timelineViewport.offsetWidth;
        const finalNodeCenter = finalYearNode.offsetLeft + finalYearNode.offsetWidth / 2;
        return viewportWidth / 2 - finalNodeCenter;
      };

      centerProjectCluster();

      // Start all project items fully below the viewport so they rise up with scroll.
      const riseDistance = window.innerHeight * 1.15;

      gsap.set(projectsTitle, {
        y: riseDistance,
        autoAlpha: 1,
      });

      gsap.set(projectCards, {
        y: riseDistance,
        autoAlpha: 1,
      });

      // Keep the timeline fully off-screen to the right until the projects phase is complete.
      gsap.set(timelineLayer, {
        xPercent: 110,
        autoAlpha: 1,
      });

      gsap.set(timelineTrack, {
        x: 0,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=430%",
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
            centerProjectCluster();
          },
        },
      })
        .to(maskRef.current, {
          scale: 0.35,
          ease: "power3.out",
          transformOrigin: "center center",
          duration: 1,
        })
        .to(
          [maskRef.current, marqueeRef.current],
          {
            yPercent: -72,
            ease: "none",
            duration: 1,
          },
          ">"
        )
        .to(
          projectsTitle,
          {
            y: 0,
            ease: "power2.out",
            duration: 1.25,
          },
          "<"
        )
        .to(
          projectCards,
          {
            y: 0,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.12,
              from: "start",
            },
          },
          "<"
        )
        // Intentional pause in scroll-progress after cards settle in the center.
        .to({}, { duration: 0.32 })
        .to(
          projectsLayer,
          {
            x: () => -window.innerWidth * 1.15,
            ease: "power2.inOut",
            duration: 1,
          },
          ">"
        )
        .to(
          timelineLayer,
          {
            xPercent: 0,
            ease: "power2.inOut",
            duration: 1,
          },
          "<"
        )
        // Scrub horizontally through the timeline until 2026 sits in the center.
        .to(
          timelineTrack,
          {
            x: () => getTimelineFinalX(),
            ease: "none",
            duration: 2.3,
          },
          ">"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="landing-page">
      {/* Marquee background wrapper - contains animated text */}
      <div ref={marqueeRef} className="landing-page-marquee-wrapper" aria-hidden="true">
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

      <div ref={projectsLayerRef} className="landing-page-projects-layer">
        <h2 className="landing-page-projects-title">
          Explore my <span className="landing-page-projects-highlight">projects</span>
        </h2>
        <div className="landing-page-projects-cluster">
          {orderedProjectCardData.map((card, index) => (
            <div
              key={index}
              className="landing-page-project-card-shell"
              style={{
                left: card.left,
                width: card.width,
                bottom: card.bottom,
                zIndex: card.enterOrder + 1,
                opacity: 0,
              }}
            >
              <div className="landing-page-project-card">
                <div className="landing-page-project-card-image" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={timelineLayerRef} className="landing-page-timeline-layer">
        <h2 className="landing-page-timeline-title">
          Work <span className="landing-page-projects-highlight">Experience</span>
        </h2>
        <div className="landing-page-timeline-viewport">
          <div className="landing-page-timeline-track">
            <div className="landing-page-timeline-line" />
            {timelineYearData.map((year) => (
              <div key={year} className="landing-page-timeline-year" data-timeline-year={year}>
                <span className="landing-page-timeline-dot" />
                <span className="landing-page-timeline-label">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
