import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../Entities/Game";
import DefinitionItems from "./DefinitionItems";
import Metacritic from "./Metacritic";

interface Prop {
  game: Game;
}

const GameAttributes = ({ game }: Prop) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItems term="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Metascore">
        <Metacritic score={game?.metacritic!} />
      </DefinitionItems>
      <DefinitionItems term="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Publishers">
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
