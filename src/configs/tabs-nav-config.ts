import { TTabs } from "@/types";
import { routesPathConfig } from "./routes-config";

const routes = routesPathConfig;

export const tabsNavConfig: TTabs.tabsObject[] = [
  {
    title: "Trang chủ",
    to: routes.homePage,
    root: routes.homePage,
  },
  {
    title: "Mua vé",
    to: routes.bookTickedPage,
    root: routes.bookTickedPage,
  },
  {
    title: "Phim",
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
    title: "Góc điện ảnh",
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
