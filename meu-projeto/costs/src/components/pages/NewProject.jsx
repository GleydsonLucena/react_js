import { useNavigate } from 'react-router-dom';
import styles from "../layout/module/NewProject.module.css";
import ProjectForm from '../project/ProjectForm';

const NewProject = () => {
  const navigate = useNavigate();

  const createPost = (project) => {
    // initialization cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // redirect
      })
      .catch(err => console.error(err));
  }

  return (
    <section className={styles.newProject_container}>
      <h1>Criar Projetos</h1>
      <p>Crie projetos para depois adicionar serviços</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
    </section>
  )
}

export default NewProject