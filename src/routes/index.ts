import { configs } from "@/configs";
import { HomePage, BookTicketPage } from "@/pages";
import { PlayingMovie, UpcommingMovies } from "@/pages";
import React from "react";
type ObjectRoutes = {
  path: string;
  component: React.FC;
  layout?: React.FC;
};

// Chưa đăng nhập vẫn xem được
export const publicRoutes: ObjectRoutes[] = [
  { path: configs.routes.homePage, component: HomePage },
  { path: configs.routes.bookTickedPage, component: BookTicketPage },
  { path: configs.routes.aboutUs, component: BookTicketPage },
  { path: "/phim/phim-sap-chieu", component: UpcommingMovies },
  { path: "/phim/phim-dang-chieu", component: PlayingMovie },
];

// Khi nào đăng nhập mới xem được các trang này
export const privateRoutes: ObjectRoutes[] = [];
