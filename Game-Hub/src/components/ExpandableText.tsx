import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface prop {
  children: string;
}

const ExpandableText = ({ children }: prop) => {
  const [isExpanded, setExpanded] = useState(false);

  const limit: number = 300;

  const summery: string = children.substring(0, limit) + "...";

  const textToShow = isExpanded ? summery : children;

  if (!children) return null;

  return (
    <>
      <Text>
        {textToShow}{" "}
        <Button
          colorScheme="yellow"
          size="xs"
          paddingLeft={1}
          fontWeight="bold"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Read More" : "Show Less"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
