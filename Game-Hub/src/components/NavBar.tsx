import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitcher from "./ThemeSwicher";
import SearchGames from "./SearchGames";

function NavBar() {
  return (
    <HStack justifyContent="space-between" paddingY="5px">
      <Image boxSize={{ lg: "65px", base: "75px" }} src={logo} />
      <SearchGames />
      <ThemeSwitcher />
    </HStack>
  );
}

export default NavBar;
