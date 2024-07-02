import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import CardProjects from '../layout/CardProjects';

import styles from "../layout/module/Projects.module.css";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/project', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(err => console.error(err));
  }, []);

  const location = useLocation();
  let messages;
  if (location.state) {
    messages = location.state.message
  }

  const handleRemove = () => {
    const newProjects = [...projects]
    newProjects.splice(index, 1);

    setProjects(newProjects);
  };

  return (
    <div className={styles.projects_container}>
      <div className={styles.tittle_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Novo Projeto' />
      </div>
      {messages && <Message msg={messages} type="success" />}
      <Container customClass='start' >{
        projects.map((project, index) => (
          <CardProjects
            name={project.nameProject}
            id={project.id}
            budget={project.budgetProject}
            category={project.category.name}
            handleRemove={handleRemove}
          />
        ))
      }</Container>


    </div>
  )
}

export default Projects