import React, { createContext, useState } from "react";
import i18n from "../localization/i18n";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [user, setUser] = useState(null);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <AppContext.Provider value={{ user, setUser, language, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
