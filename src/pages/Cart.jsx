import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import { useContext } from 'react'
import { ThemeContext } from "../utils/context/ThemeContext";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap";

const Panier = () => {
  const cartContext = useContext(ThemeContext)
  const cart = cartContext.cart

  const handleIncrease = (item) => {
    cartContext.addToCart(item, (item.quantity+1))
  }
  const handleDecrease = (item) => {
    if(item.quantity > 0){
      cartContext.addToCart(item, (item.quantity-1))
    }
  }
  let totalPrice = 0;
  const getTotalPrice = () => {
    cartContext.cart.map((item) => {
      if(item.quantity){
        totalPrice+=item.quantity*item.price
      }
    })
  }
  getTotalPrice()
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Panier ({cartContext.total})</h1>
        </Col>
        <Col>
          <span>Prix total: {totalPrice} $</span>
        </Col>
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
                    <td>
                      <Button onClick={() => handleDecrease(item)} variant="danger" className="me-2">-</Button> 
                      <Button onClick={() => handleIncrease(item)}>+</Button>
                    </td>
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
