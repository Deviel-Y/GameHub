import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f84c6dd82d4402d869e56c8d662858b",
  },
});
