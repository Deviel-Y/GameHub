import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function SmallScreenGenre({ onSelectGenre }: Props) {
  const { data } = useGenres();

  return (
    <Menu>
      <MenuButton fontSize={15} as={Button} rightIcon={<BsChevronDown />}>
        Genre
      </MenuButton>
      <MenuList>
        {data.map((genre) => (
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
