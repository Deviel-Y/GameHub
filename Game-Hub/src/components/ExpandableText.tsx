import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface prop {
  children: string;
}

const ExpandableText = ({ children }: prop) => {
  const [isExpanded, setExpanded] = useState(false);

  const limit: number = 300;

  const summery: string = children.substring(0, limit) + "...";

  const textToShow = isExpanded ? children : summery;

  if (!children) return null;

  return (
    <>
      <Text>
        {textToShow}
        <Button
          colorScheme="yellow"
          size="xs"
          marginLeft={1}
          fontWeight="bold"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
