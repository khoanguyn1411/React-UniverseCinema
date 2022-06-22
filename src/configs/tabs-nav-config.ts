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
        title: "All movies",
        to: routes.movie + routes.all,
      },
      {
        title: "Now playing",
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
        title: "Top rated",
        to: routes.movie + routes.toprated,
      },
    ],
  },
];
