import { TTabs } from "@/types";
import { routesPathConfig } from "./routes-config";

const routes = routesPathConfig;

export const tabsNavConfig: TTabs.ITabsObject[] = [
  {
    title: "Home",
    to: routes.homePage,
    root: routes.homePage,
  },
  {
    title: "Movie",
    root: routes.movie,
    children: [
      {
        title: "All Movies",
        to: routes.movie + routes.all,
      },
      {
        title: "Now Playing",
        to: routes.movie + routes.nowplaying,
      },
      {
        title: "Popular",
        to: routes.movie + routes.popular,
      },
      {
        title: "Upcoming",
        to: routes.movie + routes.upcoming,
      },
      {
        title: "Top Rated",
        to: routes.movie + routes.toprated,
      },
    ],
  },
  {
    title: "TV Shows",
    root: routes.tvShow,
    children: [
      {
        title: "All TV Shows",
        to: routes.tvShow + routes.all,
      },
      {
        title: "Airing Today",
        to: routes.tvShow + routes.airingToday,
      },
      {
        title: "On TV",
        to: routes.tvShow + routes.onTV,
      },
      {
        title: "Top rated",
        to: routes.tvShow + routes.toprated,
      },
    ],
  },
];
