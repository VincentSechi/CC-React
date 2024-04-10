import "./App.css";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import DishDetails from "./pages/DishDetails";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Panier from "./pages/Panier";
import { useContext, useState } from "react";
import { ThemeContext } from "./utils/context/ThemeContext.js";
function App() {

  const [cart, setCart] = useState(0)

  const addToCart = (data) => {
    setCart(prevState => [...prevState, data])
  }
  

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout cart={cart.cart} />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/panier" element={<Panier cart={cart.cart} />} />
          <Route
            path="/plat/:slug"
            element={<DishDetails onClick={addToCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
