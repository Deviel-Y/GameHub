import { Link } from "@chakra-ui/react";
import { BiArrowToTop } from "react-icons/bi";
import { useState, useEffect } from "react";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="#"
      variant={"solid"}
      backgroundColor={"green"}
      pos="fixed"
      borderRadius={10}
      bottom={showButton ? "20px" : "-60px"} // Adjust the position based on showButton state
      right="20px"
      opacity={showButton ? 1 : 0} // Show/hide the button based on showButton state
      transition="bottom 0.5s, opacity 0.5s" // Smooth transition for bottom and opacity changes
      _hover={{
        transform: "scale(1.2)",
        transition: "all 0.2s ease-in",
      }}
    >
      <BiArrowToTop size="40px" />
    </Link>
  );
};

export default GoUpButton;
