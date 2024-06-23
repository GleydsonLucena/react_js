import './App.css';
import Condicional from './components/Condicional';

function App() {

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">

      <h1>Renderização condicional</h1>
      <Condicional />

    </div>
  );
}

export default App;
