import React from 'react'
import styles from '../styles/_header.module.css'
import Logo from '../assets/images/logo.webp'
const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.headerImg} src={Logo} alt='img' />
      <nav>
        <li>
          <a href="/">Accueil</a>
        </li>
      </nav>
    </header>
  )
}

export default Header