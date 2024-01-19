// ContextProvider.js
import React, { createContext, useState, useEffect, useCallback } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastname, setUserLastname] = useState("");

  // Progress bar-related state and functions
  const [currentStep, setCurrentStep] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  //prevent handleback state

  const totalSteps = 5; // Ensure totalSteps is defined here

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
      setButtonClicked(true);
    }
  };

  const handleBack = useCallback(() => {
    if (currentStep > 0 && !formSubmitted) {
      setCurrentStep((prevStep) => prevStep - 1);
      console.log("currentStep when the back is clicked:", currentStep);
      setButtonClicked(false);
    }
  }, [currentStep, setButtonClicked, formSubmitted]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (currentStep > 0 && !formSubmitted) {
        const message =
          "Are you sure you want to leave? Your progress will be lost.";
        event.returnValue = message; // Standard for most browsers

        return message; // For some older browsers
      }
    };

    const handlePopstate = () => {
      // Handle popstate event (user clicks back button)
      handleBack();
    };
    const handleHashchange = () => {
      // Handle hashchange event (user navigates using anchor links)
      handleBack();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopstate);
    window.addEventListener("hashchange", handleHashchange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopstate);
      window.removeEventListener("hashchange", handleHashchange);
    };
  }, [currentStep, formSubmitted, handleBack]);

  return (
    <AppContext.Provider
      value={{
        userEmail,
        updateUserEmail: (email) => {
          console.log("Updating User Email:", email);
          setUserEmail(email);
        },
        userName,
        updateUserName: (name) => {
          console.log("Updating User Name:", name);
          setUserName(name);
        },
        userLastname,
        updateUserLastname: (lastname) => {
          console.log("Updating User Lastname:", lastname);
          setUserLastname(lastname);
        },
        // Progress bar-related state and functions
        currentStep,
        totalSteps,
        buttonClicked,
        handleNext,
        handleBack,
        formSubmitted,
        setFormSubmitted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
