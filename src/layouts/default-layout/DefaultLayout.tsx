import { Footer, Navbar } from "@/components";
import { configs } from "@/configs";
import { setIsFixedNav } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import React, { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const activePage = useAppSelector((state) => state.activePage.value);

  useEffect(() => {
    const handleSetFixedNavbar = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition > 0) {
        dispatch(setIsFixedNav(true));
      } else {
        dispatch(setIsFixedNav(false));
      }
    };
    document.addEventListener("scroll", handleSetFixedNavbar);
    return () => {
      document.removeEventListener("scroll", handleSetFixedNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`flex flex-col justify-between min-h-h100`}>
      <div>
        <div className={`fixed top-0 w-full z-50 `}>
          <Navbar />
        </div>
        <div
          className={`${
            activePage === configs.routes.homePage ||
            activePage === configs.routes.movieDetail
              ? ""
              : "mt-[10rem]"
          }`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
