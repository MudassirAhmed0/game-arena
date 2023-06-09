import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main" ` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={"16px"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} paddingX={4}>
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={2} marginBottom={5}>
          <PlatformSelector
            onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(order) =>
              setGameQuery({ ...gameQuery, ordering: order })
            }
            sortOrder={gameQuery.ordering}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
