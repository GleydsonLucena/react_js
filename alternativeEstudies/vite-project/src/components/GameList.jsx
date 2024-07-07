import {useState, useEffect} from 'react'

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/src/assets/data/games.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        return response.json();
      })
      .then(data => {
        setGames(data);
        console.log(data);
      })
      .catch(error => console.error('Erro ao carregar jogos:', error));
  }, []);

  return (
    <div>
      {
        games.map(game => (
          <div key={game.id}>
            <h2>{game.nome}</h2>
            <p>{game.descricao}</p>
            <img src={game.capa} alt={`${game.nome} ${game.descricao}`} />
            <p>{game.anoLancamento}</p>
            <p>R$ <span>{game.valorVenda}</span></p>
          </div>
        ))
      }
    </div>
  )
}

export default GameList