import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  return (
    <Heading
      paddingX={2}
      marginBottom="25px"
      fontSize={{ base: "35px", lg: "5xl" }}
      as="h1"
    >{`${gameQuery.platform?.name || ""} ${
      gameQuery.genre?.name || ""
    } Games`}</Heading>
  );
}

export default GameHeading;
