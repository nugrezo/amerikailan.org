// ProgressBar.js
import React, { useContext } from "react";
import "./ProgressBar.css";
import { AppContext } from "../ContextProvider";

const ProgressBar = () => {
  const { currentStep, buttonClicked } = useContext(AppContext);

  const steps = [
    { number: 1, name: "Kategori Sec" },
    { number: 2, name: "Telefon onayi" },
    { number: 3, name: "Ilan Aciklamalari" },
    { number: 4, name: "Promosyon" },
    { number: 5, name: "Ilan Yayinla" },
  ];

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
    </div>
  );
};

export default ProgressBar;
