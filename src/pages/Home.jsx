import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DishCard from "../components/DishCard.jsx";
import React from "react";
import dishesData from "../datas/dishes.json";
import { useState, useEffect } from "react";
const Home = () => {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [dishes, setDishes] = useState([]);

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };

  useEffect(() => {
    let filteredDishes = dishesData.filter((dish) => dish.new === true);
    if (showNewOnly) {
      setDishes(filteredDishes);
    } else {
      setDishes(dishesData);
    }
  }, [showNewOnly]);

  return (
    <Container>
      <Row className="mb-2">
        <Col className="col-3">
          <Button variant="primary" onClick={handleShowNewOnly}>
            {!showNewOnly ? "Voir les nouveautés" : "Voir tous les plats"}
          </Button>
        </Col>
      </Row>
      <Row>
        {dishes &&
          dishes.map((dish, index) => {
            return (
              <Col key={index}>
                <DishCard
                  title={dish.title}
                  price={dish.price}
                  image={dish.image}
                  slug={dish.slug}
                  newDish={dish.new}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Home;
