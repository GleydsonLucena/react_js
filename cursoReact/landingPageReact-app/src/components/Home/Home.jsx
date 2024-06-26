import GamesList from './GamesList'
import "./Home.scss"
import data from "./data.json";

const Home = () => {
  return (
    <section className="homeContainer">

      <h1 className="tittle-Text">
        Lorem ipsum dolor sit amet.
      </h1>

      <div>
        <GamesList jogos={data.jogos} />
      </div>


    </section>
  )
}

export default Home