import styles from "./Home.module.css";
import "./Home.scss"

const Home = () => {
  return (
    <section className={styles.homeContainer}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus assumenda minima molestiae, iure pariatur voluptates exercitationem ducimus voluptatum natus ipsa. Ab explicabo vitae perferendis aperiam dicta incidunt at qui.</p>


        <div className="divTeste">
          Lorem ipsum dolor sit amet.
          <div className="divFilho">
            Lorem ipsum dolor sit amet.
            <div className="divNeto">
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home