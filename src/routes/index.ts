import { routesPath } from "@/configs";
import { HomePage, BookTicketPage } from "@/pages";
import { FunctionComponent } from "react";
type ObjectRoutes = {
  path: string;
  component: FunctionComponent;
  layout?: JSX.Element;
};

// Chưa đăng nhập vẫn xem được
export const publicRoutes: ObjectRoutes[] = [
  { path: routesPath.homePage, component: HomePage },
  { path: routesPath.booktickedPage, component: BookTicketPage },
];

// Khi nào đăng nhập mới xem được các trang này
export const privateRoutes: ObjectRoutes[] = [];
