import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
  window.addEventListener("scroll", function () {
    const aside = document.querySelector("aside");
    const offset = aside?.offsetTop || 10;
    const desiredOffset = 80;

    if (window.scrollY >= offset) {
      aside?.classList.add("stickOnTop");
    }

    if (window.scrollY < desiredOffset) {
      aside?.classList.remove("stickOnTop");
    }
  });

  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const SelectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <aside>
      {isLoading && <Spinner />}
      <Heading fontSize="25px" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
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
                fontWeight={SelectedGenreId === genre.id ? "bold" : "normal"}
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </aside>
  );
}

export default GenreList;
