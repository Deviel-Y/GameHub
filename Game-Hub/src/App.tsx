import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import NavButtonGenre from "./components/SmallScreenGenre";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        md: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        md: "200px 1fr",
        lg: "250px 1fr",
        base: "1fr",
      }}
      templateRows={{ lg: "80px", base: "80px" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
            <NavButtonGenre />
          </Show>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
