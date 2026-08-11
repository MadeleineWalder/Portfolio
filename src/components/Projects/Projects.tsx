// Projects Component
// Full-viewport section where project cards slide in from the right as the user scrolls

import * as React from "react";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

// Start with the first card and a little of the second visible on the right.
// As the page scrolls, the whole cluster moves left until it settles centered under the title.
const cardData = [
  { left: "74%", top: "18%", width: "26%" },
  { left: "86%", top: "52%", width: "30%" },
  { left: "98%", top: "30%", width: "20%" },
  { left: "110%", top: "62%", width: "24%" },
  { left: "122%", top: "18%", width: "30%" },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1920;

    const ctx = gsap.context(() => {
      const cluster = sectionRef.current?.querySelector(".project-cluster") as HTMLElement | null;
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      if (!cluster || cards.length === 0) return;

      const totalCenter = cards.reduce((sum, card) => {
        return sum + card.offsetLeft + card.offsetWidth / 2;
      }, 0) / cards.length;

      const startX = viewportWidth * 0.18;
      const endX = viewportWidth * 0.5 - totalCenter;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=240%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Start with the first card and part of the second visible on the right,
      // then slide the entire cluster left until its center aligns with the viewport center.
      // Add a short hold at the end so the user can pause and look at the centered group
      // before the page naturally continues downwards.
      gsap.set(cluster, { x: startX });
      tl.to(cluster, {
        x: endX,
        ease: "none",
        duration: 1,
      });
      tl.to({}, { duration: 0.4 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Explore my <span className="projects-highlight">projects</span>
        </h2>

        <div className="project-cluster">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="project-card"
              style={{ left: card.left, top: card.top, width: card.width }}
            >
              <div className="project-card-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
