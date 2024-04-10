import React, { useState, createContext } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (e, count) => {
        if(!cart.includes(e)){
            setCart(prevState => [...prevState, e])
        }else if(cart.includes(e)){
            const quantity = cart.filter((c) => c.title === e.title)
            quantity[0].quantity = count;
        }
    }
  return (
    <ThemeContext.Provider value={{ cart, addToCart }}>
      {children}
    </ThemeContext.Provider>
  );
};
