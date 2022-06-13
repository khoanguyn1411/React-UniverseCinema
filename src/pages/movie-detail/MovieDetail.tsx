import { ImageContainer } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { TMovie } from "@/types";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

type TProps = {
  data: TMovie;
};

export const MovieDetail: React.FC<TProps> = () => {
  const location = useLocation();
  const arrChar = funcs.splitMulti(location.pathname, ["/"]);
  const id = funcs.splitMulti(arrChar[2], ["-"])[0];
  const [movie, setMovie] = useState<TMovie>(null);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        let url = funcs.getAPI(`/movie/${id}?`, "&language=en-US");
        let result;
        let res = await fetch(url);
        result = await res.json();
        if (result?.success === false) {
          url = funcs.getAPI(`/tv/${id}?`, "&language=en-US");
          res = await fetch(url);
          result = await res.json();
        }
        setMovie(result);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAPI();
  }, [id]);
  return (
    <div className="relative bg-black -z-[20]">
      <ImageContainer
        className="absolute w-full h-full -z-10 "
        url={configs.api.IMAGE_URL_SMALL + movie?.backdrop_path}
      >
        <img
          src={configs.api.IMAGE_URL_SMALL + movie?.backdrop_path}
          alt={`bd_${movie?.name || movie?.original_title}`}
        />
      </ImageContainer>

      <div
        className="absolute h-full w-full -z-[5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #090909 150px, rgba(31.5, 31.5, 52.5, 0.84) 100%)",
        }}
      />

      <div className="wrapper h-full w-full py-[4rem] flex">
        <ImageContainer
          url={configs.api.IMAGE_URL_SMALL + movie?.poster_path}
          className="h-full w-[15rem] bg-orange flex-1 rounded-[1rem]"
        >
          <img
            src={configs.api.IMAGE_URL_SMALL + movie?.poster_path}
            alt={`${movie?.name || movie?.original_title}`}
          />
        </ImageContainer>
        <div className="flex-[2.5] text-white font-bold pl-[2rem]">
          <h1 className="text-[3rem]">
            {movie?.name || movie?.original_title}
          </h1>
        </div>
      </div>
    </div>
  );
};
