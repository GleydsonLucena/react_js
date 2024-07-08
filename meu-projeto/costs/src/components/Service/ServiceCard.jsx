import styles from '../layout/module/CardProjects.module.css';
import { FaTrashCan } from "react-icons/fa6";


const ServiceCard = ({ id, name, description, cost, handleRemove }) => {

  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  }

  return (
    <div className={styles.card_container}>
      <div className={styles.tittle_container}>
        <h3>{name}</h3>
      </div>
      <p><span>Custo total: </span> {cost}</p>
      <p>{description}</p>
      <div className={styles.btn_container}>
        <button onClick={remove}>
          <FaTrashCan />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard