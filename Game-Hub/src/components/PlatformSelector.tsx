import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatforms: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatforms }: Props) {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton
        fontSize={{ base: 20, md: 17, lg: 17 }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatforms ? selectedPlatforms.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            fontSize={18}
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
