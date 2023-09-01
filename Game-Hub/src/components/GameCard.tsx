import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={games.background_image} />
      <Heading padding="5px" fontSize="2xl">
        {games.name}
      </Heading>
      <PlatformIconList
        platforms={games.parent_platforms.map((p) => p.platform)}
      />
    </Card>
  );
}

export default GameCard;
