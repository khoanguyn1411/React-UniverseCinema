import { configs } from "@/configs";
import { funcs } from "@/constants";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailMoviePage = () => {
  const { movie } = useParams();
  const data = configs.mockDataMovie.allMovies.find(
    (item) => funcs.removeAccent(item.nameVi) === funcs.removeAccent(movie)
  );
  return <div>{data.nameVi}</div>;
};
