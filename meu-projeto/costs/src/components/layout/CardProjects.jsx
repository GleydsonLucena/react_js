import { Link } from "react-router-dom";
import styles from "../layout/module/CardProjects.module.css";
import { FaTrashCan, FaPencil } from "react-icons/fa6";

const CardProjects = ({ id, name, budget, category, handleRemove }) => {


  return (
    <div className={styles.card_container}>
      <div className={styles.tittle_container}>
        <h2>{name}</h2>
      </div>
      <p><strong>Orçamento</strong>: R$ {budget} </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.btn_container}>
        <Link to='/'>
          <FaPencil />
          Editar
        </Link>
        <button onClick={handleRemove}>
          <FaTrashCan />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default CardProjects