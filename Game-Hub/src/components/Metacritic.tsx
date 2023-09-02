import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function Metacritic({ score }: Props) {
  return (
    <Badge
      fontSize="14px"
      colorScheme={score > 85 ? "green" : score > 70 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
}

export default Metacritic;
