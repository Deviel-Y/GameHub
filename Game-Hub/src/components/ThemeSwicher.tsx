import { Switch, HStack, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={4}>
      <BsSun />
      <Switch
        colorScheme="green"
        size="md"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <BsMoon />
    </HStack>
  );
}

export default ThemeSwitcher;
