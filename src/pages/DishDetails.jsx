import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import dishData from "../datas/dishes.json";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "../assets/styles/pages/_dishDetails.module.scss"
import { ThemeContext } from "../utils/context/ThemeContext.js";
import { createDefineEnv } from "next/dist/build/swc";
const DishDetails = () => {

  const cart = useContext(ThemeContext);
  const [countProduct, setCountProduct] = useState(1)

  const { slug } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    setData(dishData.filter((dish) => dish.slug === slug)[0]);
  }, [slug]);


  const addToCart = (item) => {
    if(!cart.cart.includes(item)){
      cart.addToCart(item);
    }else{
      console.log(cart)
    }
  };


  const handleIncrease = () => {
    setCountProduct(prevState => prevState += 1)
  }
  const handleDecrease = () => {
    setCountProduct(prevState => prevState -= 1)
  }
  const handleReset = () => {
    setCountProduct(1)
  }

  return (
    <>
      {data && (
        <Container>
          <Row>
            <Col>
              <h1>Détails du plat : {slug}</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <img src={data.image} alt={`img-${data.slug}`} className={styles.img} />
            </Col>
            <Col className={styles.content}>
              <h2>{data.title}</h2>
              <p className="mb-5">{data.description}</p>
              <span className="mb-2">{data.price}</span>

              <div className={styles.buttonsContainer}>
                <div className={styles.buttonsHandler}>
                  <div className={styles.buttonDecrease} onClick={handleDecrease}>-</div>
                  <div className={styles.count}>{countProduct}</div>
                  <div className={styles.buttonIncrease} onClick={handleIncrease}>+</div>
                  <div className={styles.buttonReset} onClick={handleReset}>Réinitialiser</div>
                </div>
                <Button onClick={() => addToCart(data, countProduct)} variant="primary">Commander</Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default DishDetails;
