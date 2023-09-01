import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={games.background_image} />
      <Heading fontSize="2xlg">{games.name}</Heading>
    </Card>
  );
}

export default GameCard;
