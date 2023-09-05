import { Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function PlatformSelector({ onSelectGenre }: Props) {
  const { data } = useGenres();

  return (
    <Menu>
      <MenuButton>
        <Image src={logo} boxSize="80px" objectFit="contain" />
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

export default PlatformSelector;
