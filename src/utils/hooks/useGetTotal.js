import { useState, useContext, useEffect } from "react";

import { ThemeContext } from "../context/ThemeContext";

const useGetTotal = () => {
  const { cart } = useContext(ThemeContext);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    let newCart = 0;
    cart.map((item) => (newCart += item.quantity));
    setTotalCart(newCart);
  }, [cart]);

  return totalCart;
};

export default useGetTotal;
