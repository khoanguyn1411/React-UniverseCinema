import { apiURL } from "@/api";
import { ItemMovie, ItemsSlider, SwichCategories, Title } from "@/components";
import { TMovie } from "@/types";
import { useEffect, useState } from "react";
import { Settings } from "react-slick";

export const PopularMovies = () => {
  const TV_SHOWS = "TV shows";
  const MOVIES = "Movies";
  const categories = [TV_SHOWS, MOVIES];
  const [movieList, setMovieList] = useState<TMovie[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [active, setActive] = useState<string>(categories[0]);

  const fetchAPI = (type: string): Promise<Response> => {
    if (type === MOVIES) return fetch(apiURL.homeService.POPULAR_MOVIE_API);
    else return fetch(apiURL.homeService.POPULAR_TV_API);
  };

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
  }, [active]);

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

  const getClassname = (index: number) => {
    if (index === 0) return "ml-0";
    else if (index === movieList.length - 1) return "mr-0";
  };
  return (
    <div className="max-w-[200rem] w-full m-auto ">
      <div className="flex items-center wrapper justify-between mt-[1.5rem]">
        <Title>Popular Movies</Title>
        <div className="">
          <SwichCategories
            categories={categories}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
      <ItemsSlider settingConfig={settings}>
        {movieList.map((movie, index) => (
          <ItemMovie
            className={getClassname(index)}
            key={index}
            movie={movie}
          />
        ))}
      </ItemsSlider>
    </div>
  );
};
