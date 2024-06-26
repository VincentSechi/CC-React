import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import dishes from '../data/dishes.json'
import "../assets/styles/pages/dishDetails.scss"
const DishDetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState()
  useEffect(() => {
    setData(dishes.filter((dish) => dish.slug === slug)[0])
  }, [slug])
  return (
    <>
      {data && <Container>
          <Row>
              <Col className="col-6">
                <img src={data.image} alt={`image-${data.slug}`} />
              </Col>
              <Col className="col-6">
                <div className="content-container">
                  <h1 className="title">{data.title}</h1>
                  <p className="description">{data.description}</p>
                  <span className="price">{data.price}</span>
                  <Button>Commander</Button>
                </div>
              </Col>
          </Row>
      </Container>}
    </>
  );
};
export default DishDetails;
