import { ImageContainer } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { IMovie } from "@/types";
import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";

type TProps = {
  movie: IMovie;
  className?: string;
  size?: string;
  isSwiper?: Boolean;
};

export const ItemMovie: React.FC<TProps> = ({
  movie,
  className,
  size,
  isSwiper = false,
}) => {
  const pathImg = `${configs.api.IMAGE_URL_SMALL}/${
    movie.poster_path || movie.backdrop_path
  }`;
  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  const handleSwitchToDetailMovie = () => {
    navigate(
      `${configs.routes.movieDetail}/${movie.id}-${
        (movie.name && encodeURI(movie.name)) ||
        (movie.original_title && encodeURI(movie.original_title))
      }`
    );
    dispacth(updateActivePage());
  };
  const getHeight = () => {
    if (size === "small") {
      return "h-[23rem] w-[20rem]";
    } else if (size === "large") {
      return "h-[35rem] w-[20rem]";
    }
  };
  return (
    <div
      className={classNames(
        `hover:transition-all mx-[5px] transition-all hover:scale-[1.05]`,
        className
      )}
    >
      <ImageContainer
        onclick={handleSwitchToDetailMovie}
        url={pathImg}
        className={classNames(`rounded-[1rem] shadow-default cursor-pointer`)}
      >
        <img
          src={pathImg}
          alt={movie.name || movie.original_title}
          className={getHeight()}
        />
      </ImageContainer>
      <div className="mt-[1rem] px-[0.3rem]">
        <h1
          onClick={handleSwitchToDetailMovie}
          className={`font-bold ${
            isSwiper ? "line-1-wrap" : "line-1"
          } cursor-pointer hover:text-orange transition-all hover:transition-all`}
        >
          {movie.name || movie.original_title}
        </h1>
        {(movie.first_air_date || movie.release_date) && (
          <h1 className={`text-s14 ${isSwiper ? "line-1-wrap" : "line-1"}`}>
            {funcs.formatDate(movie.first_air_date || movie.release_date)}
          </h1>
        )}
      </div>
    </div>
  );
};
