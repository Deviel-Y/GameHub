import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publishers } from "./Publishers";

export interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: Publishers[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
