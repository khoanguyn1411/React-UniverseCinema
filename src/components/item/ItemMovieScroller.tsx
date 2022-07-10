import { icArrowLeft, icArrowRight, Icon } from "@/assets/icons";
import { appAxios } from "@/axios";
import {
  ItemMovie,
  Loading,
  SwichCategories,
  SwiperApp,
  Title,
} from "@/components";
import { IMovie } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { SwiperProps, SwiperSlide } from "swiper/react";

type TProps = {
  categories?: string[];
  getURL: (type?: string) => string;
  title: string;
  smallItem?: Boolean;
  largeItem?: Boolean;
  slideDisplay: number;
};

export const ItemScroller: React.FC<TProps> = ({
  categories,
  title,
  getURL,
  smallItem,
  largeItem,
  slideDisplay,
}) => {
  const refNext = useRef(null);
  const refPre = useRef(null);
  const [settingsSwiper, setSettingsSwiper] = useState<SwiperProps>(null);

  const [loading, setLoading] = useState<Boolean>(true);
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const [active, setActive] = useState<string>(
    (categories && categories[0]) || null
  );

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await appAxios.get(getURL(active));
      setMovieList(result.results);
      setLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  const getClassname = (index: number) => {
    if (index === 0) return "";
  };
  const getSize = () => {
    if (largeItem) {
      return "large";
    } else if (smallItem) {
      return "small";
    }
  };

  useEffect(() => {
    setSettingsSwiper({
      modules: [Navigation],
      navigation: {
        prevEl: refPre?.current,
        nextEl: refNext?.current,
      },
      onScrollbarDragMove(swiper) {
        if (swiper.isBeginning) {
          refPre.current.classList.add("opacity-30");
        } else {
          refPre.current.classList.remove("opacity-30");
        }

        if (swiper.isEnd) {
          refNext.current.classList.add("opacity-30");
        } else {
          refNext.current.classList.remove("opacity-30");
        }
      },
      onSlideChange(swiper) {
        if (swiper.isBeginning) {
          refPre.current.classList.add("opacity-30");
        } else {
          refPre.current.classList.remove("opacity-30");
        }

        if (swiper.isEnd) {
          refNext.current.classList.add("opacity-30");
        } else {
          refNext.current.classList.remove("opacity-30");
        }
      },
      centeredSlides: true,
      centeredSlidesBounds: true,
    });
  }, [movieList]);

  const handleSwiperApp = (swiper: SwiperCore) => {
    if (swiper.isBeginning) {
      refPre.current.classList.add("opacity-30");
      refNext.current.classList.remove("opacity-30");
    } else {
      refPre.current.classList.remove("opacity-30");
    }
  };

  return (
    <div className="relative mt-[-2rem]">
      <div className="max-w-[200rem] w-full m-auto">
        <div className="flex items-center wrapper justify-between mt-[1.5rem] lg:flex-col">
          <Title className="flex-1">{title}</Title>

          {categories && categories.length > 0 && (
            <div className="flex-1 flex justify-end lg:mb-[2rem]">
              <SwichCategories
                categories={categories}
                active={active}
                setActive={setActive}
              />
            </div>
          )}
        </div>

        <div className="wrapper lg:px-0 mt-[1rem] ">
          {!loading && movieList && movieList.length > 0 && (
            <SwiperApp
              data={movieList}
              settings={settingsSwiper}
              onAppSwiper={handleSwiperApp}
            >
              {movieList.map((movie, index) => (
                <SwiperSlide key={movie.id}>
                  <ItemMovie
                    className={getClassname(index)}
                    movie={movie}
                    isSwiper
                    size={getSize()}
                  />
                </SwiperSlide>
              ))}
            </SwiperApp>
          )}
          {loading && (
            <div className="flex justify-center items-center min-h-[23rem]">
              <Loading />
            </div>
          )}
        </div>
      </div>
      <button
        className="group absolute top-0 lg:hidden bottom-0 z-10 left-0 p-[1.5rem]"
        ref={refPre}
      >
        <span>
          <Icon
            className="text-black text-[3rem] group-hover:opacity-100 group-hover:transition-all"
            icon={icArrowLeft}
          />
        </span>
      </button>

      <button
        className="group absolute top-0 bottom-0 right-0 z-10 p-[1.5rem] lg:hidden"
        ref={refNext}
      >
        <span>
          <Icon
            className="text-black text-[3rem] group-hover:opacity-100 group-hover:transition-all"
            icon={icArrowRight}
          />
        </span>
      </button>
    </div>
  );
};
