import { configs } from "@/configs";

const getAPI = (ROOT_API: string, SUFFIX: string) =>
  configs.api.BASE_URL + ROOT_API + configs.api.API_KEY + SUFFIX;

export const POPULAR_MOVIE_API = getAPI(
  "/movie/popular?",
  "&language=en-US&page=1"
);

export const UPCOMMING_API = getAPI(
  "/movie/upcoming?",
  "&language=en-US&page=1"
);

export const TRENDING_WEEK_API = getAPI("/trending/all/week?", "");
export const TRENDING_DAY_API = getAPI("/trending/all/day?", "");
export const POPULAR_TV_API = getAPI("/tv/popular?", "&language=en-US&page=1");
