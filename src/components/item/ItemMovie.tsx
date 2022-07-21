import { ImageContainer, TextHover } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { IMovie } from "@/types";
import classNames from "classnames";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

type TProps = {
  movie: IMovie;
  className?: string;
  size?: string;
  isSwiper?: Boolean;
  noLineLimit?: Boolean;
  noFixedWidth?: Boolean;
};

export const ItemMovie: React.FC<TProps> = ({
  movie,
  className,
  size,
  isSwiper = false,
  noLineLimit = false,
  noFixedWidth = false,
}) => {
  const pathImg = useMemo(() => {
    return `${configs.api.IMAGE_URL_SMALL}${movie.poster_path}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSwitchToDetailMovie = () => {
    navigate(
      `${configs.routes.movieDetail}/${movie.id}-${
        (movie.name && funcs.removeAccent(movie.name)) ||
        (movie.original_title && funcs.removeAccent(movie.original_title))
      }`
    );
    dispatch(updateActivePage());
  };
  const getHeight = () => {
    if (size === "small") {
      return "w-[15.1rem] h-[22rem]";
    } else if (size === "large") {
      return "h-[22rem] w-[15.1rem]";
    }
  };
  return (
    <div
      className={classNames(
        `min-lg:hover:transition-all transition-all hover:scale-[1.05] ${
          !noFixedWidth && "w-[15.1rem]"
        }`,
        className
      )}
    >
      <ImageContainer
        onclick={handleSwitchToDetailMovie}
        url={pathImg}
        className={classNames(
          `rounded-[1rem] shadow-default cursor-pointer min-h-[20rem]`
        )}
      >
        <img
          src={pathImg}
          alt={movie.name || movie.original_title}
          className={getHeight()}
        />
      </ImageContainer>
      <div className="mt-[1rem] px-[0.3rem]">
        <TextHover
          onClick={handleSwitchToDetailMovie}
          className={`font-bold ${
            !noLineLimit && (isSwiper ? "line-1-wrap" : "line-1")
          } cursor-pointer hover:text-orange transition-all hover:transition-all`}
        >
          {movie.name || movie.original_title}
        </TextHover>
        {(movie.first_air_date || movie.release_date) && (
          <h1 className={`text-s14 ${isSwiper ? "line-1-wrap" : "line-1"}`}>
            {funcs.formatDate(movie.first_air_date || movie.release_date)}
          </h1>
        )}
      </div>
    </div>
  );
};
