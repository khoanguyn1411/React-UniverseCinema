import React from "react";

import { TopBanner } from "./top-banner/TopBanner";
import { Introduction } from "./introduction/Introduction";
import { Popular } from "./popular/Popular";
import { Trending } from "./trending/Trending";
import { UpcommingMovies } from "./upcomming-movies/UpcommingMovies";

export const HomePage: React.FC = () => {
  return (
    <div className="mt-[-4.8rem] w-full">
      <TopBanner />
      <Popular />
      <Trending />
      <UpcommingMovies />
      <Introduction />
    </div>
  );
};
