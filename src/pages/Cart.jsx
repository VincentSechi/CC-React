import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import { useContext } from 'react'
import { ThemeContext } from "../utils/context/ThemeContext";
/* import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react" */

const Panier = () => {
  const cartContext = useContext(ThemeContext)
  const cart = cartContext.cart
  console.log(cart);
  return (
    <Container>
      <Row>
        <h1>Panier</h1>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.price}$</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Panier;
