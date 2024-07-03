import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import styles from "../layout/module/Project.module.css";

const Project = () => {

  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/project/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(data => setProject(data))
        .catch(err => console.error(err));
    }, 200);
  }, []);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.nameProject ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            <div className={styles.details_container}>
              <h1>Projeto: {project.nameProject}</h1>
              <button onClick={toggleProjectForm} className={styles.btn}>
                {!showProjectForm
                  ? 'Editar Projeto'
                  : 'Fechar'}
              </button>
              {!showProjectForm
                ? (<div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total do Orçamento:</span> R$ {project.budgetProject}
                  </p>
                  <p>
                    <span>Total Utilizado :</span> R$ {project.cost}
                  </p>
                </div>)
                : (<div className={styles.project_info}>
                  <p>editar projeto</p>
                </div>)
              }
            </div>
          </Container>
        </div>
      )
        : <Loading />}
    </>
  )
}

export default Project