import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, isLoading } = useGames(gameQuery);
  const skeletons: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid
      padding="10px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <CardContainer key={skeleton}>
            <GameCardSkeleton />
          </CardContainer>
        ))}
      {data.map((game) => (
        <CardContainer key={game.id}>
          <GameCard games={game} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
