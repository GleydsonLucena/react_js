import { useState, useEffect } from 'react';
import './assets/styles/global.css';
import Img from './componetes/img';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/games', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((responseData) => {
        setGames(responseData);
        console.log(games);
      })
      .catch((error) => console.error(error));
    return;
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {games.map((game) => {
        return (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <p>{ }</p>
            <p>{ }</p>
            <Img url={game.release_year} description={game.description} />
          </div>
        );
      })}

    </div>
  )
}

export default App
