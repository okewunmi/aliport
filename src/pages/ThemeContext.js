// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext({
//   isDarkMode: false,
//   toggleTheme: () => {},
// });
// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// import React, { createContext, useContext, useState, useEffect } from "react";

// const ThemeContext = createContext({
//   isDarkMode: false,
//   toggleTheme: () => {},
// });

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setDarkMode] = useState(
//     () => localStorage.getItem("theme") === "dark" || false // Use localStorage to get initial value
//   );

//   useEffect(() => {
//     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => {
      // Access localStorage within a function to ensure it's available
      if (typeof window !== 'undefined' && localStorage) {
        return localStorage.getItem("theme") === "dark";
      } else {
        return false; // Default to false if localStorage is unavailable
      }
    }
  );

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

