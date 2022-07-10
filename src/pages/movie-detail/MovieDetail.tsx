import { appAxios } from "@/axios";
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
    const getData = async () => {
      let result: any;
      try {
        setIsLoading(true);
        result = await appAxios.get(`/movie/${id}`);
      } catch (error: unknown) {
        result = error as Error;
      }
      if (
        result instanceof Error ||
        (funcs.removeAccent(
          result.original_title ? result.original_title : ""
        ) !== name &&
          funcs.removeAccent(result.name ? result.name : "") !== name)
      ) {
        try {
          result = await appAxios.get(`/tv/${id}`);
        } catch (error: unknown) {
          result = error as Error;
        }
        if (
          result instanceof Error ||
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
    };
    getData();
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
