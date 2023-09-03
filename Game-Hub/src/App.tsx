import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "250px 1fr",
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Genres />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
