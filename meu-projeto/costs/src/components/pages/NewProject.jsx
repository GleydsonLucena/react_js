import React from 'react'
import styles from "../layout/module/NewProject.module.css";
import ProjectForm from '../project/ProjectForm';

const NewProject = () => {
  return (
    <section className={styles.newProject_container}>
      <h1>Criar Projetos</h1>
      <p>Crie projetos para depois adicionar serviços</p>
      <ProjectForm btnText='Criar Projeto' />
    </section>
  )
}

export default NewProject