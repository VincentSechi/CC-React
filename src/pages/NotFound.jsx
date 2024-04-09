import React from 'react'

import styles from '../assets/styles/pages/_notFound.module.scss'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
        <Row className='justify-content-center'>
            <Col className='col-6'>
                <h1 className={styles.title}>Page non trouvée</h1>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col className='col-6'>
                <Link to="/" className={styles.link}>
                    Retour à l'accueil
                </Link>
            </Col>
        </Row>
    </Container>
  )
}

export default NotFound