import styles from '../layout/module/Button.module.css';

const Button = ({ icon, text }) => {
  return (
    <div>
      <button className={styles.btn}>
        {icon}{text}
      </button>
    </div>
  )
}

export default Button