import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const renderCircles = () => {
    const circles = [];
    for (let i = 1; i <= totalSteps; i++) {
      circles.push(
        <div key={i} className={`circle ${i === currentStep ? "active" : ""}`}>
          {i}
        </div>
      );
    }
    return circles;
  };

  return <div className="progress-bar">{renderCircles()}</div>;
};

export default ProgressBar;
