import { funcs } from "@/constants";

export const POPULAR_MOVIE_API = funcs.getAPI(
  "/movie/popular?",
  "&language=en-US&page=1"
);

export const TOP_RATED_MOVIE_API = funcs.getAPI(
  "/movie/top_rated?",
  "&language=en-US&page=1"
);

export const TOP_RATED_TV_API = funcs.getAPI(
  "/tv/top_rated?",
  "&language=en-US&page=1"
);

export const LATEST_MOVIE_API = funcs.getAPI("/movie/latest?", "");

export const LATEST_TV_API = funcs.getAPI("/tv/latest?", "");

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

export const BANNERS_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=ad594c18ac8497b51d812bbbd1bbefe1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
