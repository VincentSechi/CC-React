import React from 'react'
import styles from '../styles/pages/home.module.scss'
import DishCard from '../components/DishCard';
const Home = () => {
    const foods = [
        {
            title:"Tacos",
            description:"Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique",
            price: 3,
            image:"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
            slug: "tacos-a-l-unite"
        },
        {
            title:"Enchiladas",
            description:"Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus",
            price: 12,
            image:"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
            slug: "enchiladas"
        },
        {
            title:"Mole poblano",
            description:"Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise.",
            price: 15,
            image:"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
            slug: "mole-poblano"
        },
    ]
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