import React from 'react'
import styles from '../styles/pages/home.module.scss'
import DishCard from '../components/DishCard';
const Home = () => {
    
  return (
    <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <DishCard title={"Enchiladas"} price={"12$"} image={"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"} slug={"enchiladas"}/>
          <DishCard title={"Tacos"} price={"3$"} image={"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"} slug={"tacos-a-l-unite"}/>
          <DishCard title={"Mole poblano"} price={"15$"} image={"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"} slug={"mole-poblano"}/>
      </div>
    </div>
  )
}

export default Home