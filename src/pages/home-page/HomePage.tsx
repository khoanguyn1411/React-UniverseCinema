import React from "react";

import { TopBanner } from "./top-banner/TopBanner";
import { Introduction } from "./introduction/Introduction";
import { Popular } from "./popular/Popular";
import { Trending } from "./trending/Trending";
import { UpcommingMovies } from "./upcomming-movies/UpcommingMovies";
import { TopRate } from "./top-rate/TopRated";

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <TopBanner />
      <Popular />
      <Trending />
      <TopRate />
      <UpcommingMovies />
      <Introduction />
    </div>
  );
};
