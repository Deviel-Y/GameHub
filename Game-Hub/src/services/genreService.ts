import { Genre } from "./Genre";
import APIClient from "./api-client";

export default new APIClient<Genre>("/genre");
