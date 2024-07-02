import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import CardProjects from '../layout/CardProjects';

import styles from "../layout/module/Projects.module.css";

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      fetch('http://localhost:5000/project', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(data => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch(err => console.error(err));
    }, 500);
  }, []);

  const location = useLocation();
  let messages;
  if (location.state) {
    messages = location.state.message
  }

  const handleRemove = () => {
    const newProjects = [...projects]
    newProjects.splice(newProjects.indexOf, 1);

    setProjects(newProjects);
  };

  return (
    <div className={styles.projects_container}>
      <div className={styles.tittle_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Novo Projeto' />
      </div>
      {messages && <Message msg={messages} type="success" />}
      <Container customClass='start' >
        {
          projects.length > 0 &&
          projects.map((project) => (
            <CardProjects
              key={project.id}
              id={project.id}
              name={project.nameProject}
              budget={project.budgetProject}
              category={project.category.name}
              handleRemove={handleRemove}
            />))}
        {!removeLoading && < Loading />}
        {
          removeLoading && projects.length === 0 &&
          <p>Não há projetos cadastrados!</p>
        }
      </Container>
    </div>
  )
}

export default Projects