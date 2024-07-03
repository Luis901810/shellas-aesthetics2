import {Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import { useState } from "react"
import logoNav from "../../assets/shellas.jpeg"
const NavBar = () =>{
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () =>{
    setIsMenuOpen(false)
  }

  return(
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navBar}>
          <Link to="/" >
            <img src={logoNav} className={styles.logo} alt="logonav" />
          </Link>
          <div className={styles.menu} onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
        </div>
     

      
        <ul className={`${styles.link} ${isMenuOpen ? styles.open : ""}`}>
          <li className={styles.list}>
            <Link to="/" onClick={closeMenu} className={styles.lista}>Home</Link>
          </li>
          <li className={styles.list}>
            <Link to="/ofert" onClick={closeMenu}  className={styles.lista}>Ofert</Link>
          </li>
          <li className={styles.list}>
            <Link to="/about" onClick={closeMenu}  className={styles.lista}>About</Link>
          </li>
          <li className={styles.list}>
            <Link to="/service" onClick={closeMenu} className={styles.lista}>Service</Link>
          </li>
          <li className={styles.list}>
            <Link to="/contact" onClick={closeMenu} className={styles.lista}>Contact</Link>
          </li>
        </ul>
        <button className={styles.btn}>book now</button>
        </div>
      </div>
   
  )
}


export default NavBar;