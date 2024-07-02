import styles from '../layout/module/Button.module.css';

const Button = ({ icon, text, handleRemove }) => {
  return (
    <div>
      <button onclick={handleRemove} className={styles.btn}>
        {icon}{text}
      </button>
    </div>
  )
}

export default Button