import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitcher from "./ThemeSwicher";
import SearchGames from "./SearchGames";
import NavButtonGenre from "./NavButtonGenre";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSearch: (searchedGame: string) => void;
  onSelectGenre: (selectedGenre: Genre) => void;
}

function NavBar({ onSearch, onSelectGenre }: Props) {
  return (
    <HStack justifyContent="space-between" paddingY="5px">
      <Show above="lg">
        <Image boxSize={{ lg: "65px", base: "70px" }} src={logo} />
      </Show>
      <Show below="lg">
        <NavButtonGenre
          onSelectGenre={(selectedGenre) => onSelectGenre(selectedGenre)}
        />
      </Show>
      <SearchGames onSearch={(searchedGame) => onSearch(searchedGame)} />
      <ThemeSwitcher />
    </HStack>
  );
}

export default NavBar;
