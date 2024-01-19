// ProgressBar.js
import React, { useContext } from "react";
import "./ProgressBar.css";
import { AppContext } from "../ContextProvider";

const ProgressBar = () => {
  const { currentStep, buttonClicked } = useContext(AppContext);
  console.log("ProgressBar is rendering with currentStep:", currentStep);
  const steps = [
    { number: 1, name: "Kategori Sec" },
    { number: 2, name: "Telefon onayi" },
    { number: 3, name: "Ilan Aciklamalari" },
    { number: 4, name: "Promosyon" },
    { number: 5, name: "Ilan Yayinla" },
  ];

  const getProgressBarColor = (step) => {
    if (step < currentStep || (buttonClicked && step === currentStep)) {
      return "#00a32a"; // Completed steps are colored green, or current step if button clicked
    } else if (step === currentStep && !buttonClicked) {
      return "#00a32a"; // Color current step to green if not buttonClicked
    } else {
      return "#eee9e9"; // Future steps are greyed out
    }
  };

  const getProgressBarStyles = (step) => {
    const baseStyles = {
      backgroundColor: getProgressBarColor(step.number),
    };

    if (step.number === currentStep && !buttonClicked) {
      // Apply specific styles for the current step
      baseStyles.color = "#fff"; // Change color for the current step
      baseStyles.fontWeight = "bold"; // Change font weight for the current step
    }

    if (
      step.number < currentStep ||
      (buttonClicked && step.number === currentStep)
    ) {
      baseStyles.completed = true; // Add completed class for completed steps
    }

    return baseStyles;
  };

  return (
    <div>
      <div className="progress-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {index > 0 && (
              <div
                className="progress-bar"
                style={{
                  backgroundColor: getProgressBarColor(step.number - 1),
                }}
              />
            )}
            <div
              className={`progress-step${
                getProgressBarStyles(step).completed ? " completed" : ""
              }`}
              style={getProgressBarStyles(step)}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-name">{step.name}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
