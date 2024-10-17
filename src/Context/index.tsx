import { createContext, useContext, useEffect, useState } from "react";
import { ModeContextType } from "../components/MyTypes";

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = "white";
      }
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
};
