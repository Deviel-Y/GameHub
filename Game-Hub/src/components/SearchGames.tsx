import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchedGame: string) => void;
}

function SearchGames({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          type="search"
          placeholder="Search For Games..."
          borderRadius="20px"
        />
      </InputGroup>
    </form>
  );
}

export default SearchGames;
