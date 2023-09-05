import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import NavButtonGenre from "./components/SmallScreenGenre";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(selectedGenre) =>
              setGameQuery({ ...gameQuery, genre: selectedGenre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack
          marginY={1}
          justifyContent={{
            base: "center",
            lg: "normal",
            md: "normal",
          }}
        >
          <PlatformSelector
            selectedPlatforms={gameQuery.platform}
            onSelectPlatform={(selectedPlatform) =>
              setGameQuery({ ...gameQuery, platform: selectedPlatform })
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
                setGameQuery({ ...gameQuery, genre: selectedGenre })
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
