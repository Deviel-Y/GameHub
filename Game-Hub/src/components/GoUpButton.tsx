import { Link } from "@chakra-ui/react";
import { BiArrowToTop } from "react-icons/bi";

const GoUpButton = () => {
  return (
    <Link
      _hover={{
        transform: "scale(1.2)",
        transition: "all 0.2s ease-in",
      }}
      href="#"
      variant={"solid"}
      backgroundColor={"green"}
      pos="fixed"
      borderRadius={10}
      bottom="20px"
      right="20px"
    >
      <BiArrowToTop size="40px" />
    </Link>
  );
};

export default GoUpButton;
