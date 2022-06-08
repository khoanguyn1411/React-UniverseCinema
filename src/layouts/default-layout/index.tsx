import { Footer, Navbar, SearchBar } from "@/components";
import { setIsFixedNav } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import React, { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
};

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  const refSearchBar = useRef<HTMLDivElement>();
  const isFixedNav = useAppSelector((state) => state.isFixedNav.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const searchBarElement = refSearchBar.current;
    const searchBarHeight = searchBarElement.offsetHeight;
    const handleSetFixedNavbar = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (searchBarElement) {
        if (scrollPosition > searchBarHeight) {
          dispatch(setIsFixedNav(true));
        } else {
          dispatch(setIsFixedNav(false));
        }
      }
    };
    document.addEventListener("scroll", handleSetFixedNavbar);
    return () => {
      document.removeEventListener("scroll", handleSetFixedNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div ref={refSearchBar}>
        <SearchBar />
      </div>
      <div className="h-[5rem] relative">
        <div
          className={
            isFixedNav ? "fixed top-0 w-full z-10" : "absolute w-full z-10"
          }
        >
          <Navbar />
        </div>
      </div>
      <div className="min-h-[78vh]">{children}</div>
      <Footer />
    </div>
  );
};
