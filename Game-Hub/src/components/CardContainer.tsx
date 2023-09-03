import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Probs {
  children: ReactNode;
}

function CardContainer({ children }: Probs) {
  return (
    <Box borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
}

export default CardContainer;
