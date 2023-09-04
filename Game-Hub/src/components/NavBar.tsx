import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitcher from "./ThemeSwicher";

function NavBar() {
  return (
    <HStack justifyContent="space-between" paddingY="5px">
      <Image boxSize={{ lg: "80px", base: "70px" }} src={logo} />
      <ThemeSwitcher />
    </HStack>
  );
}

export default NavBar;
