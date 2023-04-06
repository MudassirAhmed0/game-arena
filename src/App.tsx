import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main" ` }}
    >
      <GridItem area={"nav"} bg="orange.300">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="blue.300">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="green.300">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
