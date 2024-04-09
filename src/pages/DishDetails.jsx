import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useParams } from "react-router-dom";
const DishDetails = () => {
  const { slug } = useParams();
  return (
    <Container>
        <Row>
            <Col>
                <h1>Détails du plat : {slug}</h1>
            </Col>
        </Row>
    </Container>
  );
};
export default DishDetails;
