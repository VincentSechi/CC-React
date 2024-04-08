import styles from '../styles/_dishcard.module.scss'
const DishCard = ({title, price, image, slug}) => {

  return (
    <div className={`${styles.container}`}>
        <img className={styles.image} src={image} alt={`icon-${slug}`}/>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>{price}</span>
        {/* <p className={styles.description}>{data.description}</p> */}
        
    </div>
  )
}

export default DishCard