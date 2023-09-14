import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useFindPlatform from "../hooks/useFindPlatform";
import { Platform } from "../services/platformService";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatformsId?: number;
}

function PlatformSelector({ onSelectPlatform, selectedPlatformsId }: Props) {
  const { data } = usePlatform();

  const selectedPlatform = useFindPlatform(selectedPlatformsId);

  return (
    <Menu>
      <MenuButton fontSize={14} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList fontSize={18}>
        <MenuItem onClick={() => onSelectPlatform(null)}>
          All Platforms
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
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
