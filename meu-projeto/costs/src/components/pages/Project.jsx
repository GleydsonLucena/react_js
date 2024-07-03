import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import styles from "../layout/module/Project.module.css";

const Project = () => {

  const { id } = useParams();
  const [project, setProject] = useState([]);

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

  return (
    <>
      {project.nameProject ? (
        <Container customClass='column'>
          <div className={styles.project_container}>
            <div className={styles.project_content}>
              <h1>Projeto: {project.nameProject}</h1>
              <p><span>Categoria:</span> {project.category.name}</p>
              <p><span>Total do Orçamento:</span> R$ {project.budgetProject}</p>
              <p><span>Total Utilizado:</span> R$ {project.cost}</p>
            </div>
            <Link>Editar Projeto</Link>
          </div>
        </Container>
      )
        : <Loading />}
    </>
  )
}

export default Project