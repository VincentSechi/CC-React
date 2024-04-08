import styles from '../styles/_dishcard.module.scss'
import { useState } from 'react'
const DishCard = ({data,cardIndex}) => {

    const [isHovered, setIsHovered] = useState("");

    const handleEnter = () => {
        setIsHovered(cardIndex)
    }
    const handleLeave = () => {
        setIsHovered("")
    }

  return (
    <div className={`${styles.container} ${isHovered === cardIndex ? styles.isHovered : ""}`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <h2 className={styles.title}>{data.title}<span className={styles.price}>{data.price}$</span></h2>
        <img className={styles.image} src={data.image} alt={`icon-${data.slug}`}/>
        <p className={styles.description}>{data.description}</p>
        
    </div>
  )
}

export default DishCard