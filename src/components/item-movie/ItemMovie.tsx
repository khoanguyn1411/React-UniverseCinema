import { configs } from "@/configs";
import { TMovie } from "@/types";
import classNames from "classnames";
import React from "react";

const classes = classNames;

type TProps = {
  movie: TMovie;
  className: string;
};

export const ItemMovie: React.FC<TProps> = ({ movie, className }) => {
  const pathImg = `${configs.api.IMAGE_URL_SMALL}/${movie.poster_path}`;
  return (
    <div
      className={classes(
        `bgImg mx-[5px] rounded-[1rem] hover:transition-all transition-all hover:scale-[1.05] cursor-pointer`,
        className
      )}
      style={{
        backgroundImage: `url(${pathImg})`,
      }}
    >
      <img src={pathImg} alt={movie.name} className="h-[25rem] w-[20rem]" />
    </div>
  );
};
