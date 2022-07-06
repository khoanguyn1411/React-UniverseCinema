import { configs } from "@/configs";
import { ErrorPage, HomePage, LoginPage, Movie, MovieDetail } from "@/pages";
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
  {
    path: configs.routes.loginPage,
    component: LoginPage,
  },
  { path: "*", component: ErrorPage },
];

// Khi nào đăng nhập mới xem được các trang này
export const privateRoutes: TRoutes[] = [];

export * from "./AppRoutes/AppRoutes";
