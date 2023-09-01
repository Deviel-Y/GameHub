import { Grid, GridItem, Show } from "@chakra-ui/react";

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
      <GridItem area={"nav"} bg="gold">
        Nav
      </GridItem>
      <Show below="base">
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
