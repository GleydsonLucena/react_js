import React from 'react'
import Container from './Container'
import styles from "./module/Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2024</p>
    </footer>
  )
}

export default Footer