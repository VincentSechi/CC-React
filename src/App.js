import "./App.css";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import DishDetails from "./pages/DishDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plat/:slug" element={<DishDetails />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
