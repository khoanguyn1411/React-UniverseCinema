import {
  icArrowDown,
  icArrowRight,
  icArrowUp,
  icMenu,
  Icon,
  icRemove,
} from "@/assets/icons";
import { imgLogoDark, imgLogoLight } from "@/assets/images";
import { WrapperDefault, WrapperModule } from "@/components";
import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { TTabs } from "@/types";
import classNames from "classnames";
import React, {
  FunctionComponent,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

const LeftNavigationBarInit: React.FC = () => {
  const tabs = useMemo(() => {
    return configs.tabs;
  }, []);
  const activePage = useAppSelector((state) => state.activePage.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChangePage = (
    tab: TTabs.ITabsObject | TTabs.ITabsChild
  ): void => {
    if (tab.to) {
      navigate(tab.to);
      dispatch(updateActivePage());
    } else {
      return;
    }
  };

  useEffect(() => {
    window.onpopstate = function (event: PopStateEvent): void {
      if (event) {
        dispatch(updateActivePage());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoveToHome = () => {
    navigate(configs.routes.homePage);
    setIsOpenNav(false);
    dispatch(updateActivePage());
  };

  const [isOpenNav, setIsOpenNav] = useState<Boolean>(false);

  const UILargeScreen = () => {
    return (
      <>
        <WrapperModule className="flex flex-row w-fit items-center flex-1">
          <div
            className="h-[3rem] mt-[-1.3rem] mr-[2rem] cursor-pointer"
            onClick={handleMoveToHome}
          >
            <img src={imgLogoLight} alt="logoApp" className="h-full" />
          </div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="group cursor-pointer flex h-[5rem] items-center relative underlineNav transition-[0.3s ease-in] min-lg:hover:text-orange"
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
                    }
                  )}
                >
                  <li>{tab.title}</li>
                  {!tab.to && (
                    <Icon icon={icArrowDown} className="ml-[0.5rem]" />
                  )}
                </ul>
                {!tab.to && (
                  <WrapperDefault className="p-0 hidden w-max rounded-default mt-[1.4rem] z-50 absolute bg-white text-black group-hover:block">
                    {tab.children.map((item, index) => (
                      <div
                        className="cursor-pointer px-[1.5rem] py-[0.3rem] font-semibold hover:bg-orange w-full"
                        key={index}
                        onClick={() => handleChangePage(item)}
                      >
                        <Icon className="mr-[1rem]" icon={icArrowRight} />
                        {item.title}
                      </div>
                    ))}
                  </WrapperDefault>
                )}
              </div>
            </div>
          ))}
        </WrapperModule>
      </>
    );
  };

  type TProps = {
    tab: TTabs.ITabsObject;
  };
  const ItemTab: FunctionComponent<TProps> = memo(({ tab }) => {
    const handleChangePage = (
      tab: TTabs.ITabsObject | TTabs.ITabsChild
    ): void => {
      if (tab.to) {
        navigate(tab.to);
        dispatch(updateActivePage());
        setIsOpenNav(false);
      } else {
        return;
      }
    };
    const [isShowChildren, setIsShowChildren] = useState<Boolean>(false);

    return (
      <>
        <div
          className={`px-[2rem] py-[0.8rem] flex flex-row w-full justify-between items-center ${
            activePage === tab.root ? "bg-orange font-bold" : "bg-white"
          }`}
          onClick={() => {
            handleChangePage(tab);
            setIsShowChildren(!isShowChildren);
          }}
        >
          <h1 className="text-center uppercase">{tab.title}</h1>
          {tab.children && (
            <Icon icon={!isShowChildren ? icArrowDown : icArrowUp} />
          )}
        </div>
        {tab.children && isShowChildren && (
          <div className="mt-[0.3rem]">
            {tab.children.map((item, index) => (
              <h1
                key={index}
                onClick={() => handleChangePage(item)}
                className="pl-[4rem] px-[2rem] py-[0.2rem] text-s14"
              >
                {item.title}
              </h1>
            ))}
          </div>
        )}
      </>
    );
  });

  const UIMobileScreen = () => {
    const mobileRef = useRef(null);
    const toggleRef = useRef(null);
    useEffect(() => {
      const elementList = mobileRef?.current;
      const elementDisplay = toggleRef?.current;
      if (elementList && elementDisplay) {
        const handleCloseListDiv = (event: Event) => {
          if (
            !elementList.contains(event.target) &&
            !elementDisplay.contains(event.target)
          ) {
            setIsOpenNav(false);
          }
        };
        document.addEventListener("mousedown", handleCloseListDiv);
        return () => {
          document.removeEventListener("mousedown", handleCloseListDiv);
        };
      }
    }, []);

    return (
      <div className="">
        <div ref={toggleRef}>
          <Icon
            icon={icMenu}
            className="h-[2rem] w-fit"
            onClick={() => setIsOpenNav(!isOpenNav)}
          />
        </div>

        <div
          ref={mobileRef}
          className={classNames(
            "w-[20rem] h-screen  bg-white border-r-[1px] overflow-auto text-black fixed top-0 transition-all pb-[2rem]",
            isOpenNav ? "left-0" : " left-[-25rem]"
          )}
        >
          <div className="w-full mt-[1.5rem] mb-[1.2rem]  flex justify-end py-[0.7rem]">
            <div className="bg-black w-[2.5rem] h-[2.5rem] flex items-center justify-center mr-[1.2rem] rounded-[9999px]">
              <Icon
                className=" text-white"
                icon={icRemove}
                onClick={() => setIsOpenNav(!isOpenNav)}
              />
            </div>
          </div>
          <div className="px-[1.5rem] mb-[2rem]">
            <img onClick={handleMoveToHome} src={imgLogoDark} alt="Logo Dark" />
          </div>
          {tabs.map((tab, index) => (
            <ItemTab key={index} tab={tab} />
          ))}
        </div>
      </div>
    );
  };

  const getLayout = () => {
    if (window.innerWidth > 767) {
      return <UILargeScreen />;
    } else {
      return <UIMobileScreen />;
    }
  };

  return getLayout();
};

export const LeftNavigationBar = memo(LeftNavigationBarInit);
