import React from "react";

import { TopBanner } from "./top-banner/TopBanner";
import { Introduction } from "./introduction/Introduction";
import { PopularMovies } from "./popular-movies/PopularMovies";

export const HomePage: React.FC = () => {
  return (
    <div className="mt-[-4.8rem] w-full">
      <TopBanner />
      <PopularMovies />
      <Introduction />
    </div>
  );
};
