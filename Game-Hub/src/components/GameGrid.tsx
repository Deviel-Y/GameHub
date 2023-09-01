import useGames from "../hooks/useGames";

function GameGrid() {
  const { games } = useGames();

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
}

export default GameGrid;
