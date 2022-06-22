export const routesPathConfig = {
  homePage: "/",
  movieWithSuffix: "/movie/:filter",
  movieWithSuffixAndPage: "/movie/:filter/:page",

  movie: "/movie",
  all: "/all",
  allWithSuffix: "/all/:page",

  popular: "/popular",
  popularWithSuffix: "/popular/:page",

  nowplaying: "/nowplaying",
  nowplayingWithSuffix: "/nowplaying/:page",

  upcoming: "/upcoming",
  upcomingWithSuffix: "/upcoming/:page",

  toprated: "/toprated",
  topratedWithSuffix: "/toprated/:page",
  movieDetailWithSuffix: "/movie-detail/:movie/*",
  // movieDetailWithSuffix: "/:category/:movie/*",
  movieDetail: "/movie-detail",
  tvShow: "/tvshow",
  people: "/people",
  aboutUs: "/aboutus",
};
