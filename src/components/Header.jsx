import React from 'react'
import styles from '../styles/_header.module.scss'
import Logo from '../assets/images/logo.webp'
import { Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.headerImg} src={Logo} alt='img' />
        <Navbar className={styles.navbar}>
          <ul className=''>
            <li>
              <a href="/">Accueil</a>
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  )
}

export default Header