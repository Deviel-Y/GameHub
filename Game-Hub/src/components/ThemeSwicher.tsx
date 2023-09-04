import { Switch, HStack, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={4}>
      <BsSun size="30" />
      <Switch
        colorScheme="green"
        size={{ lg: "md", base: "lg" }}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <BsMoon size="30" />
    </HStack>
  );
}

export default ThemeSwitcher;
