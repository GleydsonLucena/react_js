import React from 'react'
import styles from "../layout/module/Home.module.css";
import savings from "../../assets/img/savings.svg";
import LinkButton from '../layout/LinkButton';

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gatantir os seus projetos agora mesmo!</p>

      <LinkButton
        to={'/newproject'}
        text={'Novo Projeto'}
      />

      <img src={savings} alt="Costs imagem ilustrativa, cofrinho" />
    </section>
  )
}

export default Home