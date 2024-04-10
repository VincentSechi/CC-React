import React from "react";
import '../assets/styles/header.scss'
import Logo from "../assets/images/logo.webp";
import { Navbar } from "react-bootstrap";

import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from "../utils/context/ThemeContext";
const Header = () => {
  const cartContext = useContext(ThemeContext)
  let total = 0;
  const getQuantity = () => {
    cartContext.cart.map((item) => {
      if(item.quantity){
        total+=item.quantity
      }else{
        total+=1;
      }
    })
  }
  getQuantity()
  return (
    <header className="header">
      <Navbar className="bg-body-tertiary">
        <Container>
          <img
            src={Logo}
            alt="mexicano"
          />
          <Nav>
            <NavLink to="/" className="nav-link ms-auto">Accueil</NavLink>
            <NavLink to="/about" className="nav-link ms-auto">A propos</NavLink>
            <NavLink to="/panier" className="nav-link ms-auto">Panier ({total})</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
