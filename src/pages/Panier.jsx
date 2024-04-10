import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Table from "react-bootstrap/Table";
const Panier = ({cart}) => {
  return (
    <Container>
      <Row>
        <h1 className="title">Panier</h1>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {cart && cart.map((item,index) => {
                return(
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Panier;
