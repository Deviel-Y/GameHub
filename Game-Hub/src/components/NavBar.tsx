import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitcher from "./ThemeSwicher";

function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <Image boxSize="60px" src={logo} />
      <ThemeSwitcher />
    </HStack>
  );
}

export default NavBar;
