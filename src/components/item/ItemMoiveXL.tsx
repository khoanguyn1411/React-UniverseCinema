import { configs } from "@/configs";
import { TMovie } from "@/types";
import classNames from "classnames";
import React from "react";
import { ImageContainer } from "../image-container/ImageContainer";

const classes = classNames;

type TProps = {
  movie: TMovie;
  className?: string;
};
export const ItemMovieXL: React.FC<TProps> = ({ movie, className }) => {
  const pathImg = `${configs.api.IMAGE_URL_SMALL}/${movie.poster_path}`;
  return (
    <div
      className={classes(
        `hover:transition-all mx-[5px] transition-all hover:scale-[1.05]`,
        className
      )}
    >
      <ImageContainer
        url={pathImg}
        className={classes(
          `bgImg rounded-[1rem] shadow-default cursor-pointer`
        )}
      >
        <img
          src={pathImg}
          alt={movie.name || movie.original_title}
          className="h-[35rem] w-[20rem]"
        />
      </ImageContainer>
      <div className="mt-[1rem] px-[0.3rem]">
        <h1 className="font-bold line-1 cursor-pointer hover:text-orange transition-all hover:transition-all">
          {movie.name || movie.original_title}
        </h1>
        <h1 className="text-s14 line-1">
          {movie.first_air_date || movie.release_date}
        </h1>
      </div>
    </div>
  );
};
