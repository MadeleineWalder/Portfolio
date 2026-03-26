// AnimatedLines Component
// Creates horizontal flowing lines with GSAP animations
// Uses PNG images from Figma for exact shapes

import * as React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import line1 from "../../images/line-1.png";
import line2 from "../../images/line-2.png";
import line3 from "../../images/line-3.png";
import line4 from "../../images/line-4.png";
import line5 from "../../images/line-5.png";
import line6 from "../../images/line-6.png";
import line7 from "../../images/line-7.png";
import "./AnimatedLines.css";

// Define the props interface for type safety
interface AnimatedLinesProps {}

// React Functional Component with TypeScript
const AnimatedLines: React.FC<AnimatedLinesProps> = () => {
  // Create refs for each line to animate with GSAP
  const line1Ref = useRef<HTMLImageElement>(null);
  const line2Ref = useRef<HTMLImageElement>(null);
  const line3Ref = useRef<HTMLImageElement>(null);
  const line4Ref = useRef<HTMLImageElement>(null);
  const line5Ref = useRef<HTMLImageElement>(null);
  const line6Ref = useRef<HTMLImageElement>(null);
  const line7Ref = useRef<HTMLImageElement>(null);

  // useLayoutEffect runs before the browser paints - ideal for animations
  useLayoutEffect(() => {
    // Create a GSAP context for better cleanup and scoping
    const ctx = gsap.context(() => {
      // Animate each line with subtle vertical floating motion
      // Only y-axis movement to maintain 100% width positioning
      // Different durations and directions create an organic, flowing feel
      
      gsap.to(line1Ref.current, {
        y: 20, // Vertical movement only
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(line2Ref.current, {
        y: -25,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(line3Ref.current, {
        y: 30,
        duration: 8.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(line4Ref.current, {
        y: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(line5Ref.current, {
        y: 25,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(line6Ref.current, {
        y: -30,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(line7Ref.current, {
        y: 20,
        duration: 8.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Cleanup function - runs when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <div className="animated-lines">
      {/* Horizontal flowing lines using PNG images from Figma */}
      <img ref={line1Ref} src={line1} alt="" className="line line-1" />
      <img ref={line2Ref} src={line2} alt="" className="line line-2" />
      <img ref={line3Ref} src={line3} alt="" className="line line-3" />
      <img ref={line4Ref} src={line4} alt="" className="line line-4" />
      <img ref={line5Ref} src={line5} alt="" className="line line-5" />
      <img ref={line6Ref} src={line6} alt="" className="line line-6" />
      <img ref={line7Ref} src={line7} alt="" className="line line-7" />
    </div>
  );
};

export default AnimatedLines;
