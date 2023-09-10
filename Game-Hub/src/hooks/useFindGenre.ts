import useGenres from "./useGenres";

const useFindGenre = (id?: number) => {
  const { data: genre } = useGenres();
  return genre.results.find((g) => g.id === id);
};

export default useFindGenre;
