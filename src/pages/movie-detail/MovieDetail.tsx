import { funcs, values } from "@/constants";
import { IMovie } from "@/types";
import { FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  if (arrChar.length > 2) {
    const sliceArr = arrChar.slice(2, arrChar.length);
    name = decodeURI(sliceArr.join("/"));
    // name = decodeURI(funcs.splitMulti(name, ["-"])[1]).toLowerCase();
    name = funcs
      .splitMulti(name, ["-"])
      .slice(1, funcs.splitMulti(name, ["-"]).length)
      .join("-")
      .toLowerCase();
  } else {
    name = decodeURI(funcs.splitMulti(arrChar[2], ["-"])[1]).toLowerCase();
  }

  const [movie, setMovie] = useState<IMovie>(null);
  const [type, setType] = useState<string>(values.MEDIA_TYPE.MOVIE);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        let url = funcs.getAPI(`/movie/${id}?`, "&language=en-US");
        let result: any;
        let res = await fetch(url);
        result = await res.json();
        // console.log(name);
        // console.log(result.name);
        // console.log(result.original_title);
        if (
          result.success === false ||
          (result.name?.toLowerCase() !== name &&
            result.original_title?.toLowerCase() !== name)
        ) {
          url = funcs.getAPI(`/tv/${id}?`, "&language=en-US");
          res = await fetch(url);
          result = await res.json();
          setType(values.MEDIA_TYPE.TVSHOWS);
        }
        setMovie(result);
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
    movie && (
      <div>
        <MovieInfo movie={movie} />
        <div className="wrapper flex">
          <div className="w-[75%] pr-[4rem] flex-1">
            <MovieCredit {...props} />
            <MovieSeasons movie={movie} />
            <MovieTrailers {...props} />
            <MovieRecommendation {...props} />
          </div>
          <div className="w-[25%]">
            <MovieOtherInfo {...props} />
          </div>
        </div>
      </div>
    )
  );
};
