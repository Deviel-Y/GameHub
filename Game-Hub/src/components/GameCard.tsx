import { Card, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";
import getCropedImageUrl from "../services/image-url";
import { Game } from "../services/gameService";
import { Link } from "react-router-dom";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  return (
    <Link to={"/games/" + games.slug}>
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
    </Link>
  );
}

export default GameCard;
