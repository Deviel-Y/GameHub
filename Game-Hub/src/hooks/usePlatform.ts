import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import platformService from "../services/platformService";

const apiClient = platformService.getAll;

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient,
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
