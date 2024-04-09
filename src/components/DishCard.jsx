
import Card from 'react-bootstrap/Card';
import "../assets/styles/dishcard.css"
import { Link } from 'react-router-dom';
const DishCard = ({title, price, image, slug}) => {

  return (
    <Link to={`/plat/${slug}`} className='link'>
      <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default DishCard