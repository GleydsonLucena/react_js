import React from 'react'
import Input from "../form/Input";
import styles from "../layout/module/ProjectForm.module.css";
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

const ProjectForm = ({ btnText }) => {
  return (
    <form className={styles.form_container}>

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
        nome={'category_id'} text={'Selecione a categoria'}
      />

      <SubmitButton text={btnText} />

    </form>
  )
}

export default ProjectForm