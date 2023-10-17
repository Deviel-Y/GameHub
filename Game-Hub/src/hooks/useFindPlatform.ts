import usePlatform from "./usePlatform";

const useFindPlatform = (id?: number | null) => {
  const { data: platform } = usePlatform();
  return platform.results.find((p) => p.id === id);
};

export default useFindPlatform;
