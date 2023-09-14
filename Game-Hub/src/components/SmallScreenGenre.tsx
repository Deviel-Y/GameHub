import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";
import { Genre } from "../services/genreService";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function SmallScreenGenre({ onSelectGenre }: Props) {
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
            onClick={() => onSelectGenre(genre)}
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
