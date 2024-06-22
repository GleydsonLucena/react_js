import './App.css';

function App() {

  const name = 'Gleydson';

  const newName = name.toUpperCase();

  const url = 'https://via.placeholder.com/200';

  return (
    <div className="App">
      <h1>Meu primeiro projeto</h1>
      <p>Olá, {newName}</p>
      <img src={url} alt="minha imagem" />
    </div>
  );
}

export default App;
