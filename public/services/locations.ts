import axios from "axios";

import { LOCATIONS_API_URL, LOCATIONS_API_KEY } from "@/constants";

export const apiService = axios.create({
  baseURL: LOCATIONS_API_URL,
  responseType: "json",
  headers: { "X-CSCAPI-KEY": LOCATIONS_API_KEY },
});
