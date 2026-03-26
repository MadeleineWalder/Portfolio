// ProjectShowcase Component
// Full-screen section for displaying portfolio projects with a control panel
// Users can switch between different projects/designs (Home + 3 project examples)

import * as React from "react";
import { useState } from "react";
import AnimatedLines from "./AnimatedLines";
import "./ProjectShowcase.css";

// Define the props interface for type safety
interface ProjectShowcaseProps {}

// React Functional Component with TypeScript
const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
  // State to track which frame is currently active (0 = home, 1-3 = project examples)
  const [activeFrame, setActiveFrame] = useState<number>(0);

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
          <div className="showcase-frame showcase-home">
            <h2>Home Frame</h2>
            <p>Content will go here</p>
          </div>
        )}

        {/* Project example frames 1-3 will go here */}
        {activeFrame >= 1 && activeFrame <= 3 && (
          <div className="showcase-frame showcase-project">
            <p>Project {activeFrame} frame</p>
          </div>
        )}
      </div>

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
          Project 1
        </button>
        <button
          className={`control-btn ${activeFrame === 2 ? "active" : ""}`}
          onClick={() => setActiveFrame(2)}
        >
          Project 2
        </button>
        <button
          className={`control-btn ${activeFrame === 3 ? "active" : ""}`}
          onClick={() => setActiveFrame(3)}
        >
          Project 3
        </button>
      </div>
    </section>
  );
};

export default ProjectShowcase;
