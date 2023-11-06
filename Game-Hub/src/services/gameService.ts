import { Game } from "../Entities/Game";
import APIClient from "./api-client";

export default new APIClient<Game>("/games");
