import React from 'react'
import styles from "../layout/module/CardProjects.module.css";
import { FaTrashCan, FaPencil } from "react-icons/fa6";
import Button from './Button';

const CardProjects = ({ id, name, budget, category, handleRemove }) => {


  return (
    <div className={styles.card_container}>
      <div className={styles.tittle_container}>
        <h2>{name}</h2>
      </div>
      <p><strong>Orçamento</strong>: R$ {budget},00 </p>
      <p><span></span> {category}</p>
      <div className={styles.btn_container}>
        <Button icon={<FaPencil />} text='Editar' />
        <Button handleRemove={handleRemove} icon={<FaTrashCan />} text='Excluir' />
      </div>
    </div>
  )
}

export default CardProjects