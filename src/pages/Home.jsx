import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DishCard from "../components/DishCard.jsx";

import React from 'react'

const Home = () => {
  const dishes = [
    {
      title:"Enchiladas",
      price:"12$",
      image:"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      slug:"enchiladas",
      new:true,
    },
    {
      title:"Tacos",
      price:"3$",
      image:"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      slug:"tacos-a-l-unite",
      new:false
    },
    {
      title:"Mole poblano",
      price:"15$",
      image:"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      slug:"mole-poblano",
      new:false
    },

  ]
  return (
    <Container>
          <Row>
            {dishes && dishes.map((dish, index) => {
              return(
                <Col>
                  <DishCard title={dish.title} price={dish.price} image={dish.image} slug={dish.slug} newDish={dish.new} key={index} />
                </Col>
              )
            })}
          </Row>
        </Container>
  )
}

export default Home