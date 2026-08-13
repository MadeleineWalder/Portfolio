// LandingPage Component
// This is the hero/landing section of the portfolio homepage
// Features a full-screen section with animated marquee background and zooming hero
// Contains both the pinned scroll section and the zooming zoom effect

import * as React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import logoSvg from "../../images/logo.svg";
import logoTwoLines from "../../images/logo-2-lines.svg";
import emailButtonSvg from "../../images/email-button.svg";
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

// Define the full timeline range. 2027 is included as a trailing/faded endpoint marker.
const timelineStartYear = 2021;
const timelineEndYear = 2027;
const timelineUnitsPerYear = 24;

// Type-safe shape for each timeline bar item.
// start/end can include decimals so shorter periods can be represented precisely.
interface TimelineEntry {
  title: string;
  start: number;
  end: number;
  lane: number;
  color: string;
  edgeCut?: "left" | "right";
}

// Timeline rows are data-driven so future edits only require changing this array.
const timelineEntries: TimelineEntry[] = [
  { title: "Swedish Language and Civics Courses at Komvux Malmö", start: 2021, end: 2022.45, lane: 0, color: "rgba(216, 221, 230, 0.62)", edgeCut: "left" },
  { title: "Web Development Course at Code Institute", start: 2022.45, end: 2023.55, lane: 1, color: "rgba(255, 146, 154, 0.92)" },
  { title: "Live Streaming Platform Moderator (voluntary)", start: 2021, end: 2024, lane: 2, color: "rgba(255, 213, 143, 0.9)" },
  { title: "Web Design Course on Udemy", start: 2024.5, end: 2025.02, lane: 3, color: "rgba(41, 249, 191, 0.95)" },
  { title: "Freelance Web Designer & Developer", start: 2023.5, end: 2026.25, lane: 4, color: "rgba(246, 137, 232, 0.9)" },
  { title: "Web Developer Internship at 2Toucans", start: 2024.02, end: 2024.5, lane: 5, color: "rgba(148, 157, 255, 0.92)" },
  { title: "Creative Developer at Adnami", start: 2025.6, end: 2027, lane: 6, color: "rgba(0, 244, 253, 0.95)", edgeCut: "right" },
];

// Generate all axis years from the configured range.
const timelineYears = Array.from(
  { length: timelineEndYear - timelineStartYear + 1 },
  (_, index) => timelineStartYear + index
);

const timelineTotalUnits = (timelineEndYear - timelineStartYear) * timelineUnitsPerYear;
const businessInquiryEmail = "madeleinezoewalder@gmail.com";

// React Functional Component with TypeScript
// React.FC (Function Component) ensures proper typing for React components
const LandingPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const logoOverlayRef = useRef<HTMLDivElement | null>(null);
  const projectsLayerRef = useRef<HTMLDivElement | null>(null);
  const timelineLayerRef = useRef<HTMLDivElement | null>(null);
  const inquiriesLayerRef = useRef<HTMLDivElement | null>(null);
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
      const inquiriesLayer = sectionRef.current?.querySelector(
        ".landing-page-inquiries-layer"
      ) as HTMLElement | null;
      const projectCards = gsap.utils.toArray<HTMLElement>(".landing-page-project-card-shell");
      if (
        !projectsTitle ||
        !projectsCluster ||
        !projectsLayer ||
        !timelineLayer ||
        !timelineTrack ||
        !timelineViewport ||
        !inquiriesLayer ||
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

      // Calculate the x position for the true end of timeline scrubbing.
      // This aligns the track's right edge with the viewport right edge,
      // so users can scroll through the full horizontal timeline.
      const getTimelineFinalX = () => {
        const viewportWidth = timelineViewport.clientWidth;
        const trackWidth = timelineTrack.scrollWidth;
        return Math.min(0, viewportWidth - trackWidth);
      };

      // Keep vertical scroll length proportional to horizontal distance so
      // long timelines feel scrubby and readable instead of finishing too early.
      const getSceneScrollDistance = () => {
        const baseSceneDuration = 5.62;
        const inquiriesPhaseDuration = 1;
        const durationScale = (baseSceneDuration + inquiriesPhaseDuration) / baseSceneDuration;
        const baseDistance = window.innerHeight * 4.3;
        const timelineTravel = Math.abs(getTimelineFinalX());
        const timelineDistance = baseDistance + timelineTravel * 1.3;
        return Math.round(timelineDistance * durationScale);
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

      // Keep the inquiries layer below the viewport until the timeline phase finishes.
      gsap.set(inquiriesLayer, {
        y: riseDistance,
        autoAlpha: 1,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getSceneScrollDistance()}`,
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
        )
        .to(
          timelineLayer,
          {
            yPercent: -120,
            ease: "power2.inOut",
            duration: 1,
          },
          ">"
        )
        .to(
          inquiriesLayer,
          {
            y: 0,
            ease: "power2.out",
            duration: 1,
          },
          "<"
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
        <div className="landing-page-timeline-center-stack">
          <h2 className="landing-page-timeline-title">
            Education & work <span className="landing-page-projects-highlight">overview</span>
          </h2>
          <div className="landing-page-timeline-viewport">
            <div className="landing-page-timeline-track">
              <div
                className="landing-page-timeline-content"
                style={
                  {
                    "--timeline-total-years": String(timelineEndYear - timelineStartYear),
                    "--timeline-total-units": String(timelineTotalUnits),
                  } as React.CSSProperties
                }
              >
                {timelineEntries.map((entry) => {
                  const startUnit = Math.round((entry.start - timelineStartYear) * timelineUnitsPerYear);
                  const endUnit = Math.max(
                    startUnit + 1,
                    Math.round((entry.end - timelineStartYear) * timelineUnitsPerYear)
                  );
                  const barRow = 7 - entry.lane;

                  return (
                    <div
                      key={entry.title}
                      // Use stable metadata for edge cuts so text edits do not break styling.
                      className={`landing-page-timeline-item ${
                        entry.edgeCut === "left" ? "is-high-school" : ""
                      } ${
                        entry.edgeCut === "right" ? "is-adnami" : ""
                      }`}
                      style={
                        {
                          gridColumn: `${startUnit + 1} / ${endUnit + 1}`,
                          gridRow: `${barRow}`,
                          "--item-color": entry.color,
                        } as React.CSSProperties
                      }
                    >
                      <span className="landing-page-timeline-item-label">{entry.title}</span>
                    </div>
                  );
                })}

                <div className="landing-page-timeline-axis-line" />

                {timelineYears.map((year) => {
                  const yearUnit = (year - timelineStartYear) * timelineUnitsPerYear + 1;

                  return (
                    <div
                      key={year}
                      className={`landing-page-timeline-year-marker ${
                        year === timelineEndYear ? "is-muted" : ""
                      }`}
                      data-timeline-year={year}
                      style={
                        {
                          gridColumn: `${yearUnit} / ${yearUnit}`,
                          gridRow: "9",
                        } as React.CSSProperties
                      }
                    >
                      <span className="landing-page-timeline-year-tick" />
                      <span className="landing-page-timeline-year-label">{year}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={inquiriesLayerRef} className="landing-page-inquiries-layer">
        <div className="landing-page-inquiries-content">
          <h2 className="landing-page-inquiries-title">
            Business <span className="landing-page-projects-highlight">inquiries</span>
          </h2>
          <a className="landing-page-inquiries-email" href={`mailto:${businessInquiryEmail}`}>
            <img
              src={emailButtonSvg}
              alt=""
              aria-hidden="true"
              className="landing-page-inquiries-email-icon"
            />
            {businessInquiryEmail}
          </a>
          <p className="landing-page-inquiries-note">
            Why don't I have a contact form?
            <br />
            Because it gets spammed by bots and ironically people asking me if I need a website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
