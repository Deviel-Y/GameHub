import { useParams } from "react-router-dom";
import useGameIdStore from "../gameIdStore";
import useScreenshots from "../hooks/useScreenshots";
import { Image } from "@chakra-ui/react";

const ViewScreenshot = () => {
  const screenshotId = useParams();
  const gameId = useGameIdStore((s) => s.gameId);
  const { data } = useScreenshots(gameId);

  const foundScreenshot = data?.results.find(
    (screenshot) => screenshot.id === parseInt(screenshotId.id!)
  );

  if (!foundScreenshot) {
    return <p>Sorry, screenshot not found</p>;
  }

  return (
    <Image
      src={foundScreenshot.image}
      alt={"game Screenshot"}
      width={"100%"}
      borderRadius={10}
    />
  );
};

export default ViewScreenshot;
