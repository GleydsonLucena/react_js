import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">

      <HelloWorld />

      <SayMyName nome="Gleydson" />
      <SayMyName nome="João" />

      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto={url}
      />

      <List />

      <Evento />

      <Form />
    </div>
  );
}

export default App;
