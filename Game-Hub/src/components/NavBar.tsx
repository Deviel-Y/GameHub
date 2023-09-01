import { HStack, Image, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <Image boxSize="60px" src={logo} />
    </HStack>
  );
}

export default NavBar;
