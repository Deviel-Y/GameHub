import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitcher from "./ThemeSwicher";
import SearchGames from "./SearchGames";

interface Props {
  onSearch: (searchedGame: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent="space-between" paddingY="5px">
      <Image boxSize={{ lg: "65px", base: "70px" }} src={logo} />
      <SearchGames onSearch={(searchedGame) => onSearch(searchedGame)} />
      <ThemeSwitcher />
    </HStack>
  );
}

export default NavBar;
