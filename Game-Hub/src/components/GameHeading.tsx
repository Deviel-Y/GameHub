import { Heading } from "@chakra-ui/react";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";
import useGameQueryStore from "../store";

function GameHeading() {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platformId = useFindPlatform(selectedPlatformId);

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genreId = useFindGenre(selectedGenreId);
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
