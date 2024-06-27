import "./Home.scss"
import Imagem from "./Imagem";
import imagemHomem from "../../assets/img/men.png";
import HomeAside from './HomeAside';

const Home = () => {
  return (
    <div className="home-content">
      <HomeAside />
      <Imagem img={imagemHomem} className={'img-homem-png'} />
    </div>
  )
}

export default Home