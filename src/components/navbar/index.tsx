import { configs } from "@/configs";
import { useAppSelector } from "@/hooks";
import classNames from "classnames";
import React from "react";
import { LeftNavigationBar } from "./left-navigation-bar";
import { UserBar } from "./user-bar";

export const Navbar: React.FC = () => {
  const activePage = useAppSelector((state) => state.activePage.value);
  const isFixedNav = useAppSelector((state) => state.isFixedNav.value);
  const isHomePage: Boolean = activePage === configs.routes.homePage;
  return (
    <div
      className={classNames("w-full h-[5rem] flex justify-center select-none", {
        "text-white": isHomePage,
        "bg-gradient-to-t from from-transparent to-black":
          isHomePage && !isFixedNav,
        "bg-black": isFixedNav && isHomePage,
        "text-black bg-white border-box shadow-default": !isHomePage,
      })}
    >
      <div className="wrapper flex flex-row justify-between items-center">
        <LeftNavigationBar isHomePage={isHomePage} />
        <UserBar isHomePage={isHomePage} />
      </div>
    </div>
  );
};
