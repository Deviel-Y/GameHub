import { Platform } from "../Entities/Platform";
import APIClient from "./api-client";

export default new APIClient<Platform>("/platforms/lists/parents");
