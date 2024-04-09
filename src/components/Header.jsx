import React from "react";
import styles from '../assets/styles/_header.module.scss'
import Logo from "../assets/images/logo.webp";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar className="bg-body-tertiary">
        <Container>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          <Navbar.Brand href="/" className={"justify-content-end"}>
            Accueil
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
