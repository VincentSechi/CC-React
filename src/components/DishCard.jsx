
import Card from 'react-bootstrap/Card';
import "../assets/styles/dishcard.css"
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
const DishCard = ({title, price, image, slug, newDish = false}) => {

  return (
    <Link to={`/plat/${slug}`} className='link'>
      <Card style={{ width: 'auto' }}>
        <div>
          {newDish && <Badge className='position-absolute top-0 end-0 mt-3 me-3'>Nouveauté</Badge>} 
          <Card.Img variant="top" src={image}/>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default DishCard