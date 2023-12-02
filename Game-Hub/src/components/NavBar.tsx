import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchGames from "./SearchGames";
import ThemeSwitcher from "./ThemeSwicher";

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
