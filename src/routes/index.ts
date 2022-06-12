import { configs } from "@/configs";
import { HomePage } from "@/pages";
import React from "react";

type TRoutes = {
  path: string;
  component: React.FC;
  layout?: React.FC;
};

// Chưa đăng nhập vẫn xem được
export const publicRoutes: TRoutes[] = [
  { path: configs.routes.homePage, component: HomePage },
];

// Khi nào đăng nhập mới xem được các trang này
export const privateRoutes: TRoutes[] = [];

export * from "./AppRoutes/AppRoutes";
