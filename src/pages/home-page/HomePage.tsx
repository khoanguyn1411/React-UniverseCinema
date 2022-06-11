import React from "react";

import { TopBanner } from "./top-banner/TopBanner";
import { MovieCates } from "./movie-cates/MovieCates";
import { Promotions } from "./promotions/Promotions";
import { BlogHome } from "./blogs-home/BlogHome";
import { Introduction } from "./introduction/Introduction";

export const HomePage: React.FC = () => {
  return (
    <div className="mt-[-4.8rem] w-full">
      <TopBanner />
      <MovieCates />
      <Promotions />
      <BlogHome />
      <Introduction />
    </div>
  );
};
