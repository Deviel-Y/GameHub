import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons: number[] = [1, 2, 3, 4, 5, 6];

  const fetchedGames =
    data?.pages.reduce((total, pages) => total + pages.results.length, 0) || 0;

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchedGames}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          padding={2}
          columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <CardContainer key={skeleton}>
                <GameCardSkeleton />
              </CardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <CardContainer key={game.id}>
                  <GameCard games={game} />
                </CardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
}

export default GameGrid;
