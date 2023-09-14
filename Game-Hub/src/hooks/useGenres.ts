import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import genreService from "../services/genreService";

const httpGenreService = genreService.getAll;

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: httpGenreService,
    staleTime: ms("24h"),
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
