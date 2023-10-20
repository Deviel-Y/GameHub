import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import SmallScreenGenre from "../components/SmallScreenGenre";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        lg: ` "aside main"`,
        md: ` "aside main"`,
        base: `"main"`,
      }}
      templateColumns={{
        md: "200px 1fr",
        lg: "250px 1fr",
        base: "1fr",
      }}
      templateRows={{ lg: "80px", base: "80px" }}
    >
      <Show above="md">
        <GridItem area="aside" paddingX={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <HStack
          paddingX={{ base: 0, md: 2, lg: 2 }}
          marginY={1}
          justifyContent={{
            base: "center",
            lg: "normal",
            md: "normal",
          }}
        >
          <PlatformSelector />

          <SortSelector />

          <Show below="md">
            <SmallScreenGenre />
          </Show>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
