import { Card, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";
import getCropedImageUrl from "../services/image-url";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  return (
    <Card>
      <Image src={getCropedImageUrl(games.background_image)} />
      <Heading
        paddingX={5}
        paddingY={2}
        fontSize={{ base: "23px", md: "2xl", lg: "2xl" }}
      >
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
