import './assets/scss/global.scss';
import AllKeys from './components/AllKeys';
import Display from './components/Display/Display';

const App = () => {
  return (
    <main className="container flex">
      <Display />
      <section className="operators-container grid">
      <AllKeys />
      </section>
    </main>
  )
}

export default App