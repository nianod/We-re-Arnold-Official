import React from "react";
import { useTheme } from "./Theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
       {theme === "dark" ? "light" : "dark"}  
    </button>
  );
};

export default ThemeToggle;
