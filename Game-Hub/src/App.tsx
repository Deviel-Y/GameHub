import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="red">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}
export default App;
