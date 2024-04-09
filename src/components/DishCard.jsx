
import Card from 'react-bootstrap/Card';
import "../styles/dishcard.css"
const DishCard = ({title, price, image}) => {

  return (
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DishCard