import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Gleydson';

  const newName = name.toUpperCase();

  return (
    <div className="App">
      <HelloWorld />
      <p>Olá {newName}</p>
    </div>
  );
}

export default App;
