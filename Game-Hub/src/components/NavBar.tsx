import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitcher from "./ThemeSwicher";
import SearchGames from "./SearchGames";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack justifyContent="space-between" paddingY="5px">
      <Link to="/">
        <Image
          boxSize={{ lg: "65px", base: "75px" }}
          src={logo}
          objectFit="cover"
        />
      </Link>
      <SearchGames />
      <ThemeSwitcher />
    </HStack>
  );
}

export default NavBar;
