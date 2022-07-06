import { Loading } from "@/components";
import { funcs, values } from "@/constants";
import { IMovie } from "@/types";
import { FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ErrorPage } from "../error-page/ErrorPage";
import { MovieCredit } from "./movie-credits/MovieCredit";
import { MovieInfo } from "./movie-info/MovieInfo";
import { MovieOtherInfo } from "./movie-other-info/MovieOtherInfo";
import { MovieRecommendation } from "./movie-recomendation/MovieRecommendation";
import { MovieSeasons } from "./movie-seasons/MovieSeasons";
import { MovieTrailers } from "./movie-trailers/MovieTrailers";

export const MovieDetail: FunctionComponent = () => {
  const location = useLocation();
  const arrChar = funcs.splitMulti(location.pathname, ["/"]);

  const id = funcs.splitMulti(arrChar[2], ["-"])[0];
  let name: string;
  name = funcs.splitMulti(arrChar[2], ["-"]).splice(1).join("-");

  const [movie, setMovie] = useState<IMovie>(null);
  const [type, setType] = useState<string>(values.MEDIA_TYPE.MOVIE);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        let url = funcs.getAPI(`/movie/${id}?`, "&language=en-US");
        setIsLoading(true);
        let result: any;
        let res = await fetch(url);
        result = await res.json();
        if (
          result.success === false ||
          (funcs.removeAccent(
            result.original_title ? result.original_title : ""
          ) !== name &&
            funcs.removeAccent(result.name ? result.name : "") !== name)
        ) {
          url = funcs.getAPI(`/tv/${id}?`, "&language=en-US");
          res = await fetch(url);
          result = await res.json();

          if (
            result.success === false ||
            (funcs.removeAccent(
              result.original_title ? result.original_title : ""
            ) !== name &&
              funcs.removeAccent(result.name ? result.name : "") !== name)
          ) {
            setIsLoading(false);
            return;
          }
          setType(values.MEDIA_TYPE.TVSHOWS);
        }
        setMovie(result);
        setIsLoading(false);
        document.title =
          (result.name || result.original_title) + " | Universe Cinema";
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const props = {
    movie,
    type,
  };

  return (
    <>
      {isLoading && (
        <div className="h-screen bg-black opacity-90">
          <Loading />
        </div>
      )}
      {movie && !isLoading && (
        <div className="mb-[1.5rem]">
          <MovieInfo {...props} />
          <div className="flex flex-row-reverse lg:flex-col wrapper lg:px-[0rem]">
            <div className="w-[25%] lg:w-full">
              <MovieOtherInfo {...props} />
            </div>
            <div className="w-[75%] lg:w-full pr-[4rem] lg:px-[2rem] flex-1">
              <MovieCredit {...props} />
              <MovieSeasons movie={movie} />
              <MovieTrailers {...props} />
              <MovieRecommendation {...props} />
            </div>
          </div>
        </div>
      )}
      {!movie && !isLoading && (
        <div className="mt-[10rem]">
          <ErrorPage />
        </div>
      )}
    </>
  );
};
