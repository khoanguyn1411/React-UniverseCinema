import { TTabs } from "@/types";
import { routesPathConfig } from "./routes-config";

const routes = routesPathConfig;

export const tabsNavConfig: TTabs.tabsObject[] = [
  {
    title: "Home",
    to: routes.homePage,
    root: routes.homePage,
  },
  {
    title: "TV show",
    to: routes.bookTickedPage,
    root: routes.bookTickedPage,
  },
  {
    title: "Quốc gia",
    root: "/phim",
    children: [
      {
        title: "Phim sắp chiếu",
        to: routes.movieIncomingPage,
      },
      {
        title: "Phim đang chiếu",
        to: routes.movieOnplayingPage,
      },
    ],
  },
  {
    title: "Diễn viên",
    to: routes.cinemaCornerPage,
    root: routes.cinemaCornerPage,
  },
  {
    title: "Sự kiện",
    to: routes.eventPage,
    root: routes.eventPage,
  },
  {
    title: "Hỗ trợ",
    to: routes.supportPage,
    root: routes.supportPage,
  },
];
