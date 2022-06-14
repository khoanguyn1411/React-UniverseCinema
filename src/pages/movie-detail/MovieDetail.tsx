import { funcs, values } from "@/constants";
import { IMovie } from "@/types";
import { FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieCredit } from "./movie-credits/MovieCredit";
import { MovieInfo } from "./movie-info/MovieInfo";

export const MovieDetail: FunctionComponent = () => {
  const location = useLocation();
  const arrChar = funcs.splitMulti(location.pathname, ["/"]);

  const id = funcs.splitMulti(arrChar[2], ["-"])[0];

  let name: string;
  if (arrChar.length > 2) {
    const spliceArr = arrChar.slice(2, arrChar.length);
    name = decodeURI(spliceArr.join("/"));
    name = decodeURI(funcs.splitMulti(name, ["-"])[1]);
  } else {
    name = decodeURI(funcs.splitMulti(arrChar[2], ["-"])[1]);
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
        if (
          result.success === false ||
          (result.name !== name && result.original_title !== name)
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
  }, [id]);

  return (
    movie && (
      <>
        <MovieInfo movie={movie} />
        <div className="wrapper flex">
          <div className="w-[75%]">
            <MovieCredit movie={movie} type={type} />
          </div>
          <div className="w-[25%]"></div>
        </div>
      </>
    )
  );
};
