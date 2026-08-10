// AnimatedBackground Component
// Creates a pulsing concentric circle design with 17 circles
// Positioned to show only a quarter of the circles (upper right area)
// Colors match exact Figma design

import * as React from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./AnimatedBackground.css";

// Define the props interface for type safety
interface AnimatedBackgroundProps {
  disableAnimation?: boolean;
}

// React Functional Component with TypeScript
const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ disableAnimation = false }) => {
  // Create refs for each of the 17 circles to animate with GSAP
  // Refs allow us to target specific DOM elements for animation
  const tweensRef = useRef<gsap.core.Tween[]>([]);
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
    const ctx = gsap.context(() => {
      const circleTargets = [
        circle1Ref.current,
        circle2Ref.current,
        circle3Ref.current,
        circle4Ref.current,
        circle5Ref.current,
        circle6Ref.current,
        circle7Ref.current,
        circle8Ref.current,
        circle9Ref.current,
        circle10Ref.current,
        circle11Ref.current,
        circle12Ref.current,
        circle13Ref.current,
        circle14Ref.current,
        circle15Ref.current,
        circle16Ref.current,
        circle17Ref.current,
      ];

      const configs = [
        { scale: 1.05, duration: 6.5 },
        { scale: 1.06, duration: 6.3 },
        { scale: 1.07, duration: 6.1 },
        { scale: 1.055, duration: 5.9 },
        { scale: 1.065, duration: 5.7 },
        { scale: 1.08, duration: 5.5 },
        { scale: 1.07, duration: 5.3 },
        { scale: 1.09, duration: 5.1 },
        { scale: 1.08, duration: 4.9 },
        { scale: 1.09, duration: 4.7 },
        { scale: 1.1, duration: 4.5 },
        { scale: 1.09, duration: 4.3 },
        { scale: 1.11, duration: 4.1 },
        { scale: 1.1, duration: 3.9 },
        { scale: 1.11, duration: 3.7 },
        { scale: 1.115, duration: 3.5 },
        { scale: 1.12, duration: 3.3 },
      ];

      tweensRef.current = circleTargets.map((target, index) =>
        gsap.to(target, {
          scale: configs[index].scale,
          duration: configs[index].duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          paused: disableAnimation,
        })
      );
    });

    // Cleanup function - runs when component unmounts
    return () => {
      ctx.revert();
      tweensRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!tweensRef.current.length) return;

    tweensRef.current.forEach((tween) => {
      if (disableAnimation) {
        tween.pause();
      } else {
        tween.play();
      }
    });
  }, [disableAnimation]);

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
