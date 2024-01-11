// ContextProvider.js
import React, { createContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastname, setUserLastname] = useState("");

  // Progress bar-related state and functions
  const [currentStep, setCurrentStep] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const totalSteps = 5; // Ensure totalSteps is defined here

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
      setButtonClicked(true);
    }
  };

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
