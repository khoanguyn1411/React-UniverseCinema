import { configs } from "@/configs";
import { useAppSelector } from "@/hooks";
import classNames from "classnames";
import React from "react";
import { LeftNavigationBar } from "./left-navigation-bar/LeftNavigationBar";
import { SearchBar } from "./search-bar/SearchBar";
import { UserBar } from "./user-bar/UserBar";

export const Navbar: React.FC = () => {
  const activePage = useAppSelector((state) => state.activePage.value);
  const isFixedNav = useAppSelector((state) => state.isFixedNav.value);
  const isHomePage: Boolean =
    activePage === configs.routes.homePage ||
    activePage === configs.routes.movieDetail;
  return (
    <div
      className={classNames(
        "w-full h-[7rem] flex justify-center select-none relative",
        {
          "text-white": isHomePage,
          "bg-gradient-to-t from from-transparent to-black":
            isHomePage && !isFixedNav,
          "bg-black ": isFixedNav && isHomePage,
          "text-white bg-black border-box shadow-default": !isHomePage,
        }
      )}
    >
      <div className="wrapper flex flex-row justify-between items-center">
        <LeftNavigationBar />
        <div className="flex">
          <UserBar />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
