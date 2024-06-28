import Imagem from "./Imagem";
import imagemHomem from "../../assets/";

const Home = () => {
  return (
    <section className="home-container">
      <Imagem img={imagemHomem} />
    </section>
  )
}

export default Home