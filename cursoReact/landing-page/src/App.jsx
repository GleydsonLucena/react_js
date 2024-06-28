import "./assets/scss/global.scss";
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {

  return (
    <>

      <main className="main-container">
        <section className="home-container">
          <Header />
          <Home />
        </section>
      </main>

    </>
  );
}

export default App