import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props) {
  const { data, isLoading } = useGames(selectedGenre);
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
