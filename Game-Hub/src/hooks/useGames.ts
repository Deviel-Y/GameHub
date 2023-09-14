import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import gameService, { Game } from "../services/gameService";

const httpGameService = gameService.getAll;

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      httpGameService({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.order,
          search: gameQuery?.searchGame,
          page: pageParam,
        },
      }),
    staleTime: ms("1h"),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });

export default useGames;
