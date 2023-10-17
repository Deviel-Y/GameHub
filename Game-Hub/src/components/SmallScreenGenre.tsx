import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

function SmallScreenGenre() {
  const setSelectedGenre = useGameQueryStore((s) => s.setGenreId);
  const { data } = useGenres();

  return (
    <Menu>
      <MenuButton fontSize={14} as={Button} rightIcon={<BsChevronDown />}>
        Genre
      </MenuButton>
      <MenuList>
        {data?.results.map((genre) => (
          <MenuItem
            fontSize={18}
            onClick={() => setSelectedGenre(genre.id)}
            key={genre.id}
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SmallScreenGenre;
