import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2><a href="#">LOGO</a></h2>
        <nav>

          <ul className={styles.navContainer}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Galeria</a></li>
          </ul>

        </nav>

        <button>Contato</button>
      </div>

    </header>
  )
}

export default Header