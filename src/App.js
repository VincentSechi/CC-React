import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DishCard from "./components/DishCard.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container className="p-5">
          <Row>
            <Col className="justify-content-center">
              <DishCard
                title={"Enchiladas"}
                price={"12$"}
                image={
                  "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                }
                slug={"enchiladas"}
              />
            </Col>
            <Col>
              <DishCard
                title={"Tacos"}
                price={"3$"}
                image={
                  "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                }
                slug={"tacos-a-l-unite"}
              />
            </Col>
            <Col>
              <DishCard
                title={"Mole poblano"}
                price={"15$"}
                image={
                  "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                }
                slug={"mole-poblano"}
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
