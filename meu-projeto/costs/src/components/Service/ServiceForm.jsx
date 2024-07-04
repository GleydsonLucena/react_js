import { useState } from 'preact/hooks';

import styles from '../layout/module/ProjectForm.module.css';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

const ServiceForm = ({ handleSubmmit, btnText, projectData }) => {

  const [service, setService] = useState({});

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  const Submit = (e) => {
    e.preventDefault();
    projectData.services.push(service)
    handleSubmmit(projectData);
  }
  return (
    <form onSubmit={Submit} className={styles.form_container}>
      <Input
        type='text'
        text='Nome do serviço'
        name='name'
        placeholder='insira o nome do serviço'
        handleOnChange={handleChange}
        value={service.name}
      />

      <Input
        type='number'
        text='Cursto do serviço'
        name='cost'
        placeholder='insira o valor total'
        handleOnChange={handleChange}
        value={service.cost}
      />

      <Input
        type='text'
        text='Descrição do serviço'
        name='description'
        placeholder='Descreva o serviço'
        handleOnChange={handleChange}
        value={service.description}
      />

      <SubmitButton text={btnText} onSubmit={handleSubmmit} />
    </form>
  )
}

export default ServiceForm