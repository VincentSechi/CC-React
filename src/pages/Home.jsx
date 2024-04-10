import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DishCard from "../components/DishCard.jsx";

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import dishesData from '../data/dishes.json'
const Home = () => {
  const [dishes, setDishes] = useState([])
  const [showNewOnly, setShowNewOnly] = useState(false);
  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
    
  };
  useEffect(() => {
    const filteredDished = dishesData.filter((dish) => dish.new === true);
    if (showNewOnly) {
      setDishes(filteredDished);
    } else {
      setDishes(dishesData);
    }
  }, [showNewOnly])
  
  return (
    <Container>
      <Row className="mb-3">
        <Col className="col-3">
          <Button variant="primary" onClick={handleShowNewOnly}>
            {!showNewOnly ? "Nouveautés uniquement" : "Voir tous les plats"}
          </Button>
        </Col>
      </Row>
      <Row>
        {dishes &&
          dishes.map((dish, index) => {
            return (
              <Col>
                <DishCard
                  title={dish.title}
                  price={dish.price}
                  image={dish.image}
                  slug={dish.slug}
                  newDish={dish.new}
                  key={index}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Home;
