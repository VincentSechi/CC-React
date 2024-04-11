import React from "react";
import '../assets/styles/header.scss'
import Logo from "../assets/images/logo.webp";
import { Navbar } from "react-bootstrap";

import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import useGetTotal from "../utils/hooks/useGetTotal";
const Header = () => {

  const totalCart = useGetTotal();
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
            <NavLink to="/panier" className="nav-link ms-auto">Panier ({totalCart})</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
