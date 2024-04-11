import { useState, useContext, useEffect } from "react";

import { ThemeContext } from "../context/ThemeContext";

const useCalculate = () => {
  const { cart } = useContext(ThemeContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newPrice = 0;
    cart.map((item) => (newPrice += item.quantity * item.price));
    setTotalPrice(newPrice);
  }, [cart]);

  return totalPrice;
};

export default useCalculate;
