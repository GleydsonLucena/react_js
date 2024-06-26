
import Foto from './Foto';

const GamesList = ({ jogos }) => {
  return (
    <div className="games-list">
      {jogos.map((jogo, index) => (
        <div key={index} className="game-item">
          <h2>{jogo.nome}</h2>
          <p>Empresa: {jogo.empresa}</p>
          <p>Ano de Lançamento: {jogo.ano_lancamento}</p>
          {/* Verifique se a URL da imagem está correta e acessível */}
          <Foto />
        </div>
      ))}
    </div>
  );
};

export default GamesList;

