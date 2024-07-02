import { useState, useEffect } from 'react';
import Input from "../form/Input";
import styles from "../layout/module/ProjectForm.module.css";
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

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

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  }

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  };



  const handleCategory = (e) => {
    setProject({
      ...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      }
    });
  };

  return (
    <form onSubmit={submit} className={styles.form_container}>

      <Input
        type='text'
        text='Nome do Projeto:'
        name='nameProject'
        placeholder='Digite o nome do projeto'
        handleOnChange={handleChange}
        value={project.nameProject ? project.nameProject : ''}
      />
      <Input
        type='number'
        text='Orçamento do Projeto:'
        name='budgetProject'
        placeholder='Digite o orçamento do projeto'
        handleOnChange={handleChange}
        value={project.budgetProject ? project.budgetProject : ''}


      />

      <Select
        nome={'category_id'}
        text={'Selecione a categoria'}
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />

      <SubmitButton text={btnText} />

    </form>
  )
}

export default ProjectForm