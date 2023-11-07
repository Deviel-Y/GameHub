import Genre from "../Entities/Genre";
import APIClient from "./api-client";

export default new APIClient<Genre>("/genre");
