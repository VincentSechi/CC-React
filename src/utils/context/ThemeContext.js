import React, { useState, createContext } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [cart, setCart] = useState("");
  const [countProduct, setCountProduct] = useState(0);
  const addToCart = (item) => {
    setCart((prevState) => [...prevState, item]);
  };
  return (
    <ThemeContext.Provider
      value={{ cart, addToCart, countProduct, setCountProduct }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
