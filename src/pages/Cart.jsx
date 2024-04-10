import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Panier = () => {
  const cartContext = useContext(ThemeContext);
  const cart = cartContext.cart;
  const handleIncrease = (item) => {
    cartContext.addToCart(item);
  };

  const handleDecrease = (item) => {
    cartContext.decreaseProduct(item);
  };

  const getTotalPrice = () => {
    let tmpTotal = 0;
    cart &&
      cart.map((product) => (
        tmpTotal += product.quantity * product.price
      ));
    return tmpTotal;
  };
  let totalPrice = getTotalPrice();
  return (
    <>
      <Helmet>
        <title>Panier</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h1>Panier ({cartContext.total ? cartContext.total : 0})</h1>
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
                        <Button
                          onClick={() => handleDecrease(item)}
                          variant="danger"
                          className="me-2"
                        >
                          -
                        </Button>
                        <Button onClick={() => handleIncrease(item)}>+</Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default Panier;
