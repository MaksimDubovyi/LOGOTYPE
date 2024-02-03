"use client";
import React from "react";
import { createContext, useContext, useState } from "react";

// type ThemeContextType = {
//   theme: string;
//   toggleTheme: () => void;
// };

// Використовуйте тип як параметр createContext
const ThemeContext = createContext<any>(undefined);

// type ThemeProviderProps = {
//   children: React.ReactNode;
// };

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
