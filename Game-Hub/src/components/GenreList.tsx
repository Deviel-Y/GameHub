import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <Heading fontSize="25px" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Image
                borderRadius="10px"
                boxSize="35px"
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
