import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";

function GameGrid() {
  const { games, isLoading } = useGames();
  const skeletons: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid
      padding="10px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <CardContainer>
            <GameCardSkeleton key={skeleton} />
          </CardContainer>
        ))}
      {games.map((game) => (
        <CardContainer>
          <GameCard games={game} key={game.id} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
