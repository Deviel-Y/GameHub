import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f84c6dd82d4402d869e56c8d662858b",
  },
});

class APIClient<T> {
  constructor(private endpoist: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoist, config)
      .then((res) => res.data);
  };
}

export default APIClient;
