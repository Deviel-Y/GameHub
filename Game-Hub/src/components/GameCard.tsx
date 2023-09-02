import { Card, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={games.background_image} />
      <Heading paddingX={5} paddingY={1} fontSize="2xl">
        {games.name}
      </Heading>
      <HStack justifyContent={"space-between"} paddingX={5}>
        <PlatformIconList
          platforms={games.parent_platforms.map((p) => p.platform)}
        />
        <Metacritic score={games.metacritic} />
      </HStack>
    </Card>
  );
}

export default GameCard;
