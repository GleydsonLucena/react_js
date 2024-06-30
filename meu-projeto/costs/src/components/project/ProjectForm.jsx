import { useState, useEffect } from 'react';
import Input from "../form/Input";
import styles from "../layout/module/ProjectForm.module.css";
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  }

  useEffect(() => {
    fetch('http://localhost:5000/categories/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then(data => {
        setCategories(data)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <form onSubmit={submit} className={styles.form_container}>

      <Input
        type='text'
        text='Nome do Projeto:'
        name='NameProject'
        placeholder='Digite o nome do projeto'
      />
      <Input
        type='number'
        text='Orçamento do Projeto:'
        name='budgetProject'
        placeholder='Digite o orçamento do projeto'
      />

      <Select
        nome={'category_id'}
        text={'Selecione a categoria'}
        options={categories}
      />

      <SubmitButton text={btnText} />

    </form>
  )
}

export default ProjectForm