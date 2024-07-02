import styles from '../layout/module/Loading.module.css';
import loading from '../../assets/img/loading.svg';

const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.laoder} src={loading} alt='loading' />
    </div>
  )
}

export default Loading