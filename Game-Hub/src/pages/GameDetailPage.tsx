import { Heading, Image, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import Screenshots from "../components/Screenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Image
        src={game?.background_image}
        borderRadius={15}
        paddingBottom={5}
        objectFit={"cover"}
      />
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw!}</ExpandableText>
      <GameAttributes game={game!} />
      <GameTrailer gameId={game?.id!} />
      <Screenshots gameId={game?.id!} />
    </>
  );
};

export default GameDetailPage;
