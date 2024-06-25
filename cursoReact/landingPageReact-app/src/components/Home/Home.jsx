import "./Home.scss"
import svg from "./img.svg";

const Home = () => {
  return (
    <section className="homeContainer">

      <h1 className="tittle-Text">
          Lorem ipsum dolor sit amet.
      </h1>

      <div>
        <img src={svg} alt="nada" />
      </div>
      
    </section>
  )
}

export default Home