import './assets/styles/global.sass';
// import GameList from "./components/GameList";
import Container from "./components/layout/Container";
import Header from "./components/Header";


function App() {

  return (
    <>
      <Header />
      <Container customClass='opa'>
        <h1>Opa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et ullam libero iusto aperiam! Delectus, totam accusamus voluptate repellat, officia fugit deleniti quae aliquid explicabo quibusdam quo et incidunt dolorem?q</p>
      </Container>
    </>
  )
}

export default App
