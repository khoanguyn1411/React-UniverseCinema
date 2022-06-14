import { ItemMovie, ItemsSlider, SwichCategories, Title } from "@/components";
import { IMovie } from "@/types";
import React, { useEffect, useState } from "react";
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
  const [movieList, setMovieList] = useState<IMovie[]>([]);

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
  };
  const getSize = () => {
    if (largeItem) {
      return "large";
    } else if (smallItem) {
      return "small";
    }
  };
  return (
    <div>
      <div className="max-w-[200rem] w-full m-auto">
        <div className="flex items-center wrapper justify-between mt-[1.5rem]">
          <Title className="flex-1">{title}</Title>

          {categories && categories.length > 0 && (
            <div className="flex-1 flex justify-end">
              <SwichCategories
                categories={categories}
                active={active}
                setActive={setActive}
              />
            </div>
          )}
        </div>
        <ItemsSlider slideDisplay={slideDisplay} settingConfig={settings}>
          {movieList.map((movie, index) => (
            <ItemMovie
              className={getClassname(index)}
              key={index}
              movie={movie}
              size={getSize()}
            />
          ))}
        </ItemsSlider>
      </div>
    </div>
  );
};
