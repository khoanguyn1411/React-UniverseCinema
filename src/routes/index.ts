import { configs } from "@/configs";
import { HomePage, Movie, MovieDetail } from "@/pages";
import React from "react";

type TRoutes = {
  path: string;
  component: React.FC;
  layout?: React.FC;
};

// Chưa đăng nhập vẫn xem được
export const publicRoutes: TRoutes[] = [
  { path: configs.routes.homePage, component: HomePage },
  { path: configs.routes.movieDetailWithSuffix, component: MovieDetail },

  {
    path: configs.routes.movieWithSuffix,
    component: Movie,
  },
  { path: configs.routes.movieWithSuffixAndPage, component: Movie },
];

// Khi nào đăng nhập mới xem được các trang này
export const privateRoutes: TRoutes[] = [];

export * from "./AppRoutes/AppRoutes";
