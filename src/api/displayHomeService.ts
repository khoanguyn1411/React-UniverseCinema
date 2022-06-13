import { configs } from "@/configs";
import { funcs } from "@/constants";

export const POPULAR_MOVIE_API = funcs.getAPI(
  "/movie/popular?",
  "&language=en-US&page=1"
);

export const UPCOMMING_API = funcs.getAPI(
  "/movie/upcoming?",
  "&language=en-US&page=1"
);

export const TRENDING_WEEK_API = funcs.getAPI("/trending/all/week?", "");
export const TRENDING_DAY_API = funcs.getAPI("/trending/all/day?", "");
export const POPULAR_TV_API = funcs.getAPI(
  "/tv/popular?",
  "&language=en-US&page=1"
);
