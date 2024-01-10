import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const totalSteps = 5;

  const steps = [
    { number: 1, name: "Kategori Sec" },
    { number: 2, name: "Telefon onayi" },
    { number: 3, name: "Ilan Aciklamalari" },
    { number: 4, name: "Promosyon" },
    { number: 5, name: "Ilan Yayinla" },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
      setButtonClicked(true);
    }
  };

  const getProgressBarColor = (step) => {
    if (step < currentStep || (buttonClicked && step === currentStep)) {
      return "#3CB043"; // Completed steps are colored green, or current step if button clicked
    } else {
      return "#eee9e9"; // Future steps are greyed out
    }
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
              className="progress-step"
              style={{ backgroundColor: getProgressBarColor(step.number) }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-name">{step.name}</div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <button onClick={handleNext} disabled={currentStep === totalSteps}>
        Next
      </button>
    </div>
  );
};

export default ProgressBar;
