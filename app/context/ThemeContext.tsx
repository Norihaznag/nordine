"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextType = [boolean, (theme: boolean) => void];

// Create the context with default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [Theme, setTheme] = useState<boolean>(false); // default Theme

  const changeTheme = (theme: boolean = false) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={[Theme, changeTheme]}>
      <div className={`${Theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
