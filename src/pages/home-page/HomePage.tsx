import React from "react";

import { TopBanner } from "./top-banner/TopBanner";
import { Introduction } from "./introduction/Introduction";
import { PopularMovies } from "./popular-movies/PopularMovies";
import { TrendingMovies } from "./trending-movies/TrendingMovies";
import { UpcommingMovies } from "./upcomming-movies/UpcommingMovies";

export const HomePage: React.FC = () => {
  return (
    <div className="mt-[-4.8rem] w-full">
      <TopBanner />
      <PopularMovies />
      <TrendingMovies />
      <UpcommingMovies />
      <Introduction />
    </div>
  );
};
