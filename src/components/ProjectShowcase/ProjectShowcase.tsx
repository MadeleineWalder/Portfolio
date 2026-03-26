// ProjectShowcase Component
// Full-screen section for displaying portfolio projects with a control panel
// Users can switch between different projects/designs (Home + 3 project examples)

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedLines from "./AnimatedLines";
import "./ProjectShowcase.css";

// Import project example images
import projectExample1 from "../../images/landing-p-example-1.jpg";
import projectExample2 from "../../images/landing-p-example-2.jpg";
import projectExample3 from "../../images/landing-p-example-3.jpg";

// Define the props interface for type safety
interface ProjectShowcaseProps {}

// React Functional Component with TypeScript
const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
  // State to track which frame is currently active (0 = home, 1-3 = project examples)
  const [activeFrame, setActiveFrame] = useState<number>(0);

  // Refs for each frame to animate them
  const homeFrameRef = useRef<HTMLDivElement>(null);
  const project1FrameRef = useRef<HTMLDivElement>(null);
  const project2FrameRef = useRef<HTMLDivElement>(null);
  const project3FrameRef = useRef<HTMLDivElement>(null);

  // Animate frame transition when activeFrame changes
  useEffect(() => {
    // Only animate example frames (1-3), not home frame (0)
    if (activeFrame === 0) return;

    // Get the current active frame element
    let currentFrame: HTMLDivElement | null = null;
    if (activeFrame === 1) currentFrame = project1FrameRef.current;
    else if (activeFrame === 2) currentFrame = project2FrameRef.current;
    else if (activeFrame === 3) currentFrame = project3FrameRef.current;

    // Animate the frame in with a smooth ripple/wave effect
    if (currentFrame) {
      gsap.fromTo(
        currentFrame,
        {
          opacity: 0,
          scale: 0.98, // More subtle scale change
          y: 10, // Reduced movement for minimal effect
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5, // Slightly faster for subtlety
          ease: "sine.out",
        }
      );
    }
  }, [activeFrame]); // Run this effect whenever activeFrame changes

  return (
    <section id="projects" className="project-showcase">
      {/* Background wrapper - contains animated lines for home frame */}
      <div className="project-showcase-background">
        {activeFrame === 0 && <AnimatedLines />}
      </div>

      {/* Glassmorphic overlay - creates blurred effect over background */}
      <div className="project-showcase-glass-overlay" />

      {/* Main display area */}
      <div className="project-showcase-display">
        {/* Home frame - matching website style */}
        {activeFrame === 0 && (
          <div ref={homeFrameRef} className="showcase-frame showcase-home">
            <h2>Design Concepts</h2>
            <p>I'm a sucker for great design. Please let me make your website pretty.</p>
          </div>
        )}

        {/* Project 1 frame */}
        {activeFrame === 1 && (
          <div ref={project1FrameRef} className="showcase-frame showcase-project">
            <img 
              src={projectExample1} 
              alt="Project 1 Example" 
              className="project-image project-image-1"
            />
          </div>
        )}

        {/* Project 2 frame */}
        {activeFrame === 2 && (
          <div ref={project2FrameRef} className="showcase-frame showcase-project">
            <img 
              src={projectExample2} 
              alt="Project 2 Example" 
              className="project-image project-image-2"
            />
          </div>
        )}

        {/* Project 3 frame */}
        {activeFrame === 3 && (
          <div ref={project3FrameRef} className="showcase-frame showcase-project">
            <img 
              src={projectExample3} 
              alt="Project 3 Example" 
              className="project-image project-image-3"
            />
          </div>
        )}

        {/* Control panel for switching between frames */}
        <div className="project-showcase-controls">
          <button
            className={`control-btn ${activeFrame === 0 ? "active" : ""}`}
            onClick={() => setActiveFrame(0)}
          >
            Home
          </button>
          <button
            className={`control-btn ${activeFrame === 1 ? "active" : ""}`}
            onClick={() => setActiveFrame(1)}
          >
            Example 1
          </button>
          <button
            className={`control-btn ${activeFrame === 2 ? "active" : ""}`}
            onClick={() => setActiveFrame(2)}
          >
            Example 2
          </button>
          <button
            className={`control-btn ${activeFrame === 3 ? "active" : ""}`}
            onClick={() => setActiveFrame(3)}
          >
            Example 3
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
