import { Switch, HStack, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={1}>
      <BsSun size="20" />
      <Switch
        colorScheme="green"
        size={{ lg: "md", base: "md" }}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <BsMoon size="20" />
    </HStack>
  );
}

export default ThemeSwitcher;
