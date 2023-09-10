import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genre } = useGenres();
  const { data: platform } = usePlatform();
  const genreId = genre.results.find((g) => g.id === gameQuery.genreId);
  const platformId = platform.results.find(
    (p) => p.id === gameQuery.platformId
  );

  return (
    <Heading
      paddingX={2}
      marginBottom="25px"
      fontSize={{ base: "35px", lg: "5xl" }}
      as="h1"
    >{`${platformId?.name || ""} ${genreId?.name || ""} Games`}</Heading>
  );
}

export default GameHeading;
