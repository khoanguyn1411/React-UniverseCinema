import { configs } from "@/configs";
import {
  HomePage,
  BookTicketPage,
  DetailMoviePage,
  PlayingMovie,
  UpcommingMovies,
} from "@/pages";
import React from "react";

type TRoutes = {
  path: string;
  component: React.FC;
  layout?: React.FC;
};

// Chưa đăng nhập vẫn xem được
export const publicRoutes: TRoutes[] = [
  { path: configs.routes.homePage, component: HomePage },
  { path: configs.routes.bookTickedPage, component: BookTicketPage },
  { path: configs.routes.aboutUs, component: BookTicketPage },
  { path: configs.routes.movieIncomingPage, component: UpcommingMovies },
  { path: configs.routes.movieOnplayingPage, component: PlayingMovie },
  {
    path: configs.routes.detailMoviePageWithSuffix,
    component: DetailMoviePage,
  },
];

// Khi nào đăng nhập mới xem được các trang này
export const privateRoutes: TRoutes[] = [];

export * from "./AppRoutes/AppRoutes";
