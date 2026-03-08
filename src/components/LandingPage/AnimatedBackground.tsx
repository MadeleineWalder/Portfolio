// AnimatedBackground Component
// Creates a pulsing concentric circle design with 17 circles
// Positioned to show only a quarter of the circles (upper right area)
// Colors match exact Figma design

import * as React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./AnimatedBackground.css";

// Define the props interface for type safety
interface AnimatedBackgroundProps {}

// React Functional Component with TypeScript
const AnimatedBackground: React.FC<AnimatedBackgroundProps> = () => {
  // Create refs for each of the 17 circles to animate with GSAP
  // Refs allow us to target specific DOM elements for animation
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  const circle4Ref = useRef<HTMLDivElement>(null);
  const circle5Ref = useRef<HTMLDivElement>(null);
  const circle6Ref = useRef<HTMLDivElement>(null);
  const circle7Ref = useRef<HTMLDivElement>(null);
  const circle8Ref = useRef<HTMLDivElement>(null);
  const circle9Ref = useRef<HTMLDivElement>(null);
  const circle10Ref = useRef<HTMLDivElement>(null);
  const circle11Ref = useRef<HTMLDivElement>(null);
  const circle12Ref = useRef<HTMLDivElement>(null);
  const circle13Ref = useRef<HTMLDivElement>(null);
  const circle14Ref = useRef<HTMLDivElement>(null);
  const circle15Ref = useRef<HTMLDivElement>(null);
  const circle16Ref = useRef<HTMLDivElement>(null);
  const circle17Ref = useRef<HTMLDivElement>(null);

  // useLayoutEffect runs before the browser paints - ideal for animations
  useLayoutEffect(() => {
    // Create a GSAP context for better cleanup and scoping
    const ctx = gsap.context(() => {
      // Animate each circle with a slow pulsing scale effect
      // Different durations create an organic, flowing feel
      
      gsap.to(circle1Ref.current, {
        scale: 1.02,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle2Ref.current, {
        scale: 1.025,
        duration: 7.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle3Ref.current, {
        scale: 1.03,
        duration: 7.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle4Ref.current, {
        scale: 1.025,
        duration: 7.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle5Ref.current, {
        scale: 1.03,
        duration: 7.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle6Ref.current, {
        scale: 1.035,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle7Ref.current, {
        scale: 1.03,
        duration: 6.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle8Ref.current, {
        scale: 1.04,
        duration: 6.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle9Ref.current, {
        scale: 1.035,
        duration: 6.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle10Ref.current, {
        scale: 1.04,
        duration: 6.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle11Ref.current, {
        scale: 1.045,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle12Ref.current, {
        scale: 1.04,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle13Ref.current, {
        scale: 1.05,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle14Ref.current, {
        scale: 1.045,
        duration: 5.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle15Ref.current, {
        scale: 1.05,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle16Ref.current, {
        scale: 1.055,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(circle17Ref.current, {
        scale: 1.06,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Cleanup function - runs when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <div className="animated-background">
      {/* 17 concentric circles - exact colors from Figma design */}
      {/* Positioned to show only upper-right quarter */}
      
      {/* Outermost circles */}
      <div ref={circle1Ref} className="circle circle-1" />
      <div ref={circle2Ref} className="circle circle-2" />
      <div ref={circle3Ref} className="circle circle-3" />
      <div ref={circle4Ref} className="circle circle-4" />
      <div ref={circle5Ref} className="circle circle-5" />
      <div ref={circle6Ref} className="circle circle-6" />
      <div ref={circle7Ref} className="circle circle-7" />
      <div ref={circle8Ref} className="circle circle-8" />
      <div ref={circle9Ref} className="circle circle-9" />
      <div ref={circle10Ref} className="circle circle-10" />
      <div ref={circle11Ref} className="circle circle-11" />
      <div ref={circle12Ref} className="circle circle-12" />
      <div ref={circle13Ref} className="circle circle-13" />
      <div ref={circle14Ref} className="circle circle-14" />
      <div ref={circle15Ref} className="circle circle-15" />
      <div ref={circle16Ref} className="circle circle-16" />
      <div ref={circle17Ref} className="circle circle-17" />
      {/* Innermost circle */}
    </div>
  );
};

export default AnimatedBackground;
