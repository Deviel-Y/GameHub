import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchGames() {
  return (
    <form>
      <InputGroup>
        <InputLeftElement>
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          //   borderColor={"gray"}
          type="search"
          placeholder="Search For Games..."
          borderRadius="20px"
        />
      </InputGroup>
    </form>
  );
}

export default SearchGames;
