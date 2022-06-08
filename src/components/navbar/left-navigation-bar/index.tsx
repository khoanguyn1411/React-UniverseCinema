import { icArrowDown, Icon } from "@/assets/icons";
import { DefaultWrapper } from "@/components";
import { configs } from "@/configs";
import { updateActivePage } from "@/features/activePage-slice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { tabTypes } from "@/types";
import classNames from "classnames";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  isHomePage: Boolean;
};

export const LeftNavigationBar: React.FC<Props> = ({ isHomePage }) => {
  const tabs = configs.tabs;
  const activePage = useAppSelector((state) => state.activePage.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChangePage = (tab: tabTypes.tabsObject | tabTypes.tabsChild) => {
    if (tab.to) {
      navigate(tab.to);
      dispatch(updateActivePage());
    } else {
      return;
    }
  };

  useEffect(() => {
    window.onpopstate = function (event: PopStateEvent) {
      if (event) {
        dispatch(updateActivePage());
      }
    };
  });

  return (
    <ul className="flex flex-row w-fit">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className="group cursor-pointer flex h-[5rem] items-center relative underlineNav transition-[0.3s ease-in] hover:text-orange  hover:transition-[0.3s ease-in]"
          onClick={() => {
            handleChangePage(tab);
          }}
        >
          <div className=" mr-[2rem] h-max ">
            <ul
              className={classNames(
                "flex flex-row justify-center items-center w-max font-bold ",
                {
                  "text-orange": tab.root === activePage,
                  "text-shadow-sm": isHomePage,
                }
              )}
            >
              <li>{tab.title}</li>
              {!tab.to && <Icon icon={icArrowDown} className="ml-[0.5rem]" />}
            </ul>
            {!tab.to && (
              <DefaultWrapper classes="p-0 hidden w-max rounded-default mt-[1.4rem] absolute bg-white text-black group-hover:block">
                {tab.children.map((item, index) => (
                  <li
                    className="cursor-pointer px-[1.5rem] py-[0.3rem] font-semibold hover:bg-orange w-full"
                    key={index}
                    onClick={() => handleChangePage(item)}
                  >
                    {item.title}
                  </li>
                ))}
              </DefaultWrapper>
            )}
          </div>
        </div>
      ))}
    </ul>
  );
};
