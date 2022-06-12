import React from "react";
import {
  ItemMovie,
  ItemsSlider,
  SwichCategories,
  Title,
  ItemMovieXL,
} from "@/components";
import { TMovie } from "@/types";
import { useEffect, useState } from "react";
import { Settings } from "react-slick";

type TProps = {
  categories?: string[];
  fetchAPI: (type: string | null) => Promise<Response>;
  title: string;
  smallItem?: Boolean;
  largeItem?: Boolean;
  slideDisplay: number;
};

export const ItemScroller: React.FC<TProps> = ({
  categories,
  fetchAPI,
  title,
  smallItem,
  largeItem,
  slideDisplay,
}) => {
  const settings: Settings = {
    dots: false,
    autoplaySpeed: 4000,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    speed: 500,
    adaptiveHeight: true,
  };

  const [loading, setLoading] = useState<Boolean>(true);
  const [movieList, setMovieList] = useState<TMovie[]>([]);

  const [active, setActive] = useState<string>(
    (categories && categories[0]) || null
  );

  useEffect(() => {
    fetchAPI(active)
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setMovieList(data.results);
      })
      .catch((error) => {
        throw new Error("Invalid API:" + error);
      });
  }, [active, fetchAPI]);

  const getClassname = (index: number) => {
    if (index === 0) return "ml-0";
    else if (index === movieList.length - 1) return "mr-0";
  };

  return (
    <div>
      <div className="max-w-[200rem] w-full m-auto ">
        <div className="flex items-center wrapper justify-between mt-[1.5rem]">
          <Title>{title}</Title>
          {categories && categories.length > 0 && (
            <div>
              <SwichCategories
                categories={categories}
                active={active}
                setActive={setActive}
              />
            </div>
          )}
        </div>
        <ItemsSlider slideDisplay={slideDisplay} settingConfig={settings}>
          {smallItem &&
            movieList.map((movie, index) => (
              <ItemMovie
                className={getClassname(index)}
                key={index}
                movie={movie}
              />
            ))}

          {largeItem &&
            movieList.map((movie, index) => (
              <ItemMovieXL
                className={getClassname(index)}
                key={index}
                movie={movie}
              />
            ))}
        </ItemsSlider>
      </div>
    </div>
  );
};
