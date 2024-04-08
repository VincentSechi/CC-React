import React from 'react'
import styles from '../styles/_header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.headerImg} src='https://cdn.pixabay.com/photo/2018/03/26/14/18/man-
3262834_960_720.png' alt='img' />
      <nav>
        <li>
          <a href="/">Accueil</a>
        </li>
      </nav>
    </header>
  )
}

export default Header