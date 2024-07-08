import Container from "./layout/Container";
import { CiSearch } from "react-icons/ci";

import "../assets/styles/Header.sass";

const Header = () => {
  return (
    <header className="header-container">
      <Container>
        <h1><a href="/">GameStore</a></h1>
        <form className="form">
          <input type="text" placeholder="Nome do jogo" />
          <button className="btn-search">
            <CiSearch />
          </button>
        </form>
      </Container>
    </header >
  )
}

export default Header