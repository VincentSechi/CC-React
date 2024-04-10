import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout({ children, cart }) {
  return (
    <>
      <Header cart={cart.length} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
