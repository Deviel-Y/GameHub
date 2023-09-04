import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  return (
    <Heading paddingX={2} marginBottom="45px" fontSize="5xl" as="h1">{`${
      gameQuery.platform?.name || ""
    } ${gameQuery.genre?.name || ""} Games`}</Heading>
  );
}

export default GameHeading;
