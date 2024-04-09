import React from "react";
import styles from '../assets/styles/_header.module.scss'
import Logo from "../assets/images/logo.webp";
import { Navbar } from "react-bootstrap";

import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar className="bg-body-tertiary">
        <Container>
          <img
            src={Logo}
            alt="mexicano"
          />
          <Nav>
            <Nav.Link href="/" className="ms-auto">Accueil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
