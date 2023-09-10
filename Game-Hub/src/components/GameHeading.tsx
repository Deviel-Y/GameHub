import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const platformId = useFindPlatform(gameQuery?.platformId);

  const genreId = useFindGenre(gameQuery?.genreId);
  1;
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
