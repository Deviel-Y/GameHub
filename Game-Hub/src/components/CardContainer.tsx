import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Probs {
  children: ReactNode;
}

function CardContainer({ children }: Probs) {
  return (
    <Box
      _hover={{
        transform: "scale(1.04)",
        transition: "all 0.1s ease-in",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default CardContainer;
