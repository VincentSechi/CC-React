import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import dishes from "../data/dishes.json";
import "../assets/styles/pages/dishDetails.scss";
import { ThemeContext } from "../utils/context/ThemeContext";
import { Helmet } from "react-helmet";

const DishDetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    setData(dishes.filter((dish) => dish.slug === slug)[0]);
  }, [slug]);

  const handleClick = (item) => {
    cartContext.addToCart(item, item.quantity+1);
  }
  const cartContext = useContext(ThemeContext);


  return (
    <>
    <Helmet>
      <title>{data ? data.title : "Mexican Food"}</title>
    </Helmet>
      {data && (
        <Container>
          <Row>
            <Col className="col-6">
              <img src={data.image} alt={`${data.slug}`} />
            </Col>
            <Col className="col-6">
              <div className="content-container">
                <h1 className="title">{data.title}</h1>
                <p className="description">{data.description}</p>
                <span className="price">{data.price}$</span>
                <Button onClick={() => handleClick(data)}>Commander</Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default DishDetails;
