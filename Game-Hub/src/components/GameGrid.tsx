import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games } = useGames();

  return (
    <SimpleGrid
      padding="10px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={10}
    >
      {games.map((game) => (
        <GameCard games={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
