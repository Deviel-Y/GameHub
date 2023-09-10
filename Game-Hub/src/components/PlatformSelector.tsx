import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatforms: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatforms }: Props) {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton fontSize={14} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatforms ? selectedPlatforms.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
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
