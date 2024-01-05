import React, { createContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastname, setUserLastname] = useState("");

  const updateUserEmail = (email) => {
    console.log("Updating User Email:", email);
    setUserEmail(email);
  };

  const updateUserName = (name) => {
    console.log("Updating User Name:", name);
    setUserName(name);
  };

  const updateUserLastname = (lastname) => {
    console.log("Updating User Lastname:", lastname);
    setUserLastname(lastname);
  };

  return (
    <AppContext.Provider
      value={{
        userEmail,
        updateUserEmail,
        userName,
        updateUserName,
        userLastname,
        updateUserLastname,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
