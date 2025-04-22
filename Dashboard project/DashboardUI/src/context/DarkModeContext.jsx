import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create the provider component
export const DarkThemProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <MyContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </MyContext.Provider>
  );
};
