import { Link } from "@chakra-ui/react";
import { BiArrowToTop } from "react-icons/bi";
import { useState, useEffect, useCallback } from "react";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollThreshold = 350;

  const handleScroll = useCallback(() => {
    setShowButton(window.scrollY > scrollThreshold);
  }, [scrollThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Link
      href="#"
      role="button"
      aria-label="Scroll back to top"
      opacity={showButton ? "1" : "0"}
      backgroundColor="green"
      pos="fixed"
      borderRadius={10}
      bottom={showButton ? "20px" : "-60px"}
      right="20px"
      zIndex={1}
      transition="bottom 0.3s ease, opacity 0.3s ease"
      _hover={{
        transform: "scale(1.2)",
        transition: "transform 0.2s ease-in-out",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Programmatically handle scroll to top
    >
      <BiArrowToTop size="40px" />
    </Link>
  );
};

export default GoUpButton;
