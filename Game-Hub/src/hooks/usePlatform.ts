import useData from "./useData";
import { Platform } from "./useGames";

function usePlatform() {
  return useData<Platform>("/platforms/lists/parents");
}

export default usePlatform;
