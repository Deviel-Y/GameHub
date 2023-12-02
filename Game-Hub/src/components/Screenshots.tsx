import { Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useScreenshots from "../hooks/useScreenshots";
import useGameIdStore from "../gameIdStore";
import useGame from "../hooks/useGame";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  const gameSlug = useGameIdStore((store) => store.gameSlug);
  const { data: game } = useGame(gameSlug);

  const setGameId = useGameIdStore((store) => store.setGameId);
  setGameId(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid marginTop={2} columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Link
          key={screenshot.id}
          to={`/${game?.slug}/screenshot/${screenshot.id}`}
        >
          <Image
            borderRadius={5}
            _hover={{ transform: "scale(1.02)", transition: "all 0.2s" }}
            src={screenshot.image}
          />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
