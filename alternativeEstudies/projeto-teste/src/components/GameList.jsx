import { useEffect, useState } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/src/assets/database/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        return response.json();
      })
      .then(data => {
        setGames(data);
      })
      .catch(error => console.error('Erro ao carregar jogos:', error));
  }, []);

  return (
    <div>
      {games.length > 0 ? (
        games.map(game => (
          <div key={game.id}>
            <h2>{game.nome}</h2>
            <img src={game.capa} alt={`${game.nome} capa`} />
            <p>{game.descricao}</p>
            <p>Ano de Lançamento: {game.anoLancamento}</p>
            <p>Desenvolvedora: {game.desenvolvedora}</p>
            <p>Preço: ${game.valorVenda.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>Carregando jogos...</p>
      )}
    </div>
  );
};

export default GameList;
