import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import NavButtonGenre from "./components/SmallScreenGenre";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  order: string | null;
  searchGame: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchedGame) =>
            setGameQuery({ ...gameQuery, searchGame: searchedGame })
          }
        />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" paddingX={2}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(selectedGenre) =>
              setGameQuery({ ...gameQuery, genreId: selectedGenre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack
          paddingX={{ base: 0, md: 2, lg: 2 }}
          marginY={1}
          justifyContent={{
            base: "center",
            lg: "normal",
            md: "normal",
          }}
        >
          <PlatformSelector
            selectedPlatformsId={gameQuery.platformId}
            onSelectPlatform={(selectedPlatform) =>
              setGameQuery({ ...gameQuery, platformId: selectedPlatform?.id })
            }
          />

          <SortSelector
            selectedOrder={gameQuery.order}
            onOrderSelect={(selectedOrder) =>
              setGameQuery({ ...gameQuery, order: selectedOrder })
            }
          />

          <Show below="md">
            <NavButtonGenre
              onSelectGenre={(selectedGenre) =>
                setGameQuery({ ...gameQuery, genreId: selectedGenre.id })
              }
            />
          </Show>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
