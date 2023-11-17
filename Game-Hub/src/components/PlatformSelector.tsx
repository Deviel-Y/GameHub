import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFindPlatform from "../hooks/useFindPlatform";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

function PlatformSelector() {
  const { data } = usePlatform();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useFindPlatform(selectedPlatformId);

  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformId);

  return (
    <Menu>
      <MenuButton fontSize={14} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList fontSize={18}>
        <MenuItem onClick={() => setSelectedPlatform(selectedPlatformId!)}>
          All Platforms
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform.id)}
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
