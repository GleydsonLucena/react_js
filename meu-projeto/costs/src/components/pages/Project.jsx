import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import styles from "../layout/module/Project.module.css";
import Message from '../layout/Message';
import ServiceForm from '../Service/ServiceForm';

import { parse, v4 as uuidv4 } from 'uuid';

const Project = () => {

  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');
  const [type, setType] = useState('');

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

  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  }

  const editPost = (data) => {

    setProjectMessage('Edit',);

    if (data.budgetProject < data.cost) {
      setProjectMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error');
      return;
    }

    fetch(`http://localhost:5000/project/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        setProject(data);
        toggleProjectForm(false);
        setProjectMessage('Projeto atualizado');
        setType('success');

      })
      .catch(err => console.error(err));
  }

  const createService = (project) => {
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4()
    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budgetProject)) {
      setProjectMessage('Orçamento ultrapassado, verifique o valor do serviço!');
      setType('error');
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/project/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then((data) => {
        setProjectMessage('Serviço adicionado com sucesso!');
        setType('success');
        console.log(data)
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      {project.nameProject ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            {projectMessage && <Message msg={projectMessage} type={type} />}
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
                  < ProjectForm
                    handleSubmit={editPost}
                    projectData={project}
                    btnText='Salvar edição'
                  />
                </div>)
              }
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço: </h2>
              <button onClick={toggleServiceForm} className={styles.btn}>
                {!showServiceForm
                  ? 'Adicionar serviço'
                  : 'Fechar'}
              </button>
              <div className={styles.project_info}>
                {showServiceForm &&
                  <ServiceForm
                    handleSubmmit={createService}
                    btnText='Adicionar Serviço'
                    projectData={project}
                  />}
              </div>
            </div>
            <h2>Serviços:</h2>
            <Container customClass='start'>
              <p>Serviços</p>
            </Container>
          </Container>
        </div>
      )
        : <Loading />}
    </>
  )
}

export default Project