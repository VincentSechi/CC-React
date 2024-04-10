import "./App.css";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import DishDetails from "./pages/DishDetails";
import Panier from "./pages/Panier";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([])
  const addToCart = (item) => {
    setCart(prevState => [...prevState, item])
  }
  return (
    <div className="App">
        <Routes>
          <Route element={<Layout cart={cart}/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plat/:slug" element={<DishDetails onClick={addToCart}/>} />
            <Route path="/panier" element={<Panier cart={cart} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
