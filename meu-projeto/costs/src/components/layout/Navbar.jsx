import React from 'react'
import { Link } from "react-router-dom";
import styles from "./module/Navbar.module.css";
import Logo from "../../assets/img/costs_logo.png";
import Container from "./Container";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container customClass="navbar">
        <Link to='/'><img src={Logo} alt="Logo do site Costs" /></Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/">Home</Link></li>
          <li className={styles.item}><Link to="/projects">Projetos</Link></li>
        </ul>
      </Container>
    </nav >
  )
}

export default NavBar