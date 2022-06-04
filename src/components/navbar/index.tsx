import React from "react";

import { changeActivePage } from "@/features/activePage-slice";
import { useAppDispatch, useAppSelector } from "@/hooks";

export const Navbar: React.FC = () => {
  const value = useAppSelector((state) => state.activePage.value);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(changeActivePage("gggg"));
  };
  return <div className="bg-orange wrapper">Navbar</div>;
};
