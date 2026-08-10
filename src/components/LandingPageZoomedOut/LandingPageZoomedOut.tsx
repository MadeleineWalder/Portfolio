import * as React from "react";
import logoTwoLines from "../../images/logo-2-lines.svg";
import "./LandingPageZoomedOut.css";

interface LandingPageZoomedOutProps {
  active?: boolean;
}

const LandingPageZoomedOut: React.FC<LandingPageZoomedOutProps> = ({ active = false }) => {
  return (
    <div className={`landing-page-zoomed-out ${active ? "is-active" : ""}`}>
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
      <div className="landing-page-zoomed-out-logo">
        <img src={logoTwoLines} alt="Maddy Design logo" />
      </div>
    </div>
  );
};

export default LandingPageZoomedOut;
