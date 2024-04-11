import React, { useState, createContext } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (e) => {
    let newCart = [...cart];
    if (!newCart.includes(e)) {
      newCart.push(e);
    } else if (newCart.includes(e)) {
      const product = newCart.filter((p) => p.title === e.title);
      product[0].quantity += 1;
    }
    setCart(newCart);
  };

  const decreaseProduct = (e) => {
    let newCart = [...cart];
    if (newCart.includes(e)) {
      const product = newCart.filter((p) => p.title === e.title);
      if (product[0].quantity <= 1) {
        const remainingProducts = newCart.filter((p) => p.title !== e.title);
        setCart(remainingProducts);
      } else {
        product[0].quantity -= 1;
        setCart(newCart);
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ cart, addToCart, decreaseProduct }}>
      {children}
    </ThemeContext.Provider>
  );
};
