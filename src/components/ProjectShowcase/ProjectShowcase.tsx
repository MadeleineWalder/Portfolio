// ProjectShowcase Component
// Full-screen section for displaying portfolio projects with a control panel
// Users can switch between different projects/designs (Home + 3 project examples)

import * as React from "react";
import { useState } from "react";
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
            <h2>Design Concepts</h2>
            <p>I'm a sucker for great design. Please let me make your website pretty.</p>
          </div>
        )}

        {/* Project 1 frame */}
        {activeFrame === 1 && (
          <div className="showcase-frame showcase-project">
            <img 
              src={projectExample1} 
              alt="Project 1 Example" 
              className="project-image"
            />
          </div>
        )}

        {/* Project 2 frame */}
        {activeFrame === 2 && (
          <div className="showcase-frame showcase-project">
            <img 
              src={projectExample2} 
              alt="Project 2 Example" 
              className="project-image"
            />
          </div>
        )}

        {/* Project 3 frame */}
        {activeFrame === 3 && (
          <div className="showcase-frame showcase-project">
            <img 
              src={projectExample3} 
              alt="Project 3 Example" 
              className="project-image"
            />
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
