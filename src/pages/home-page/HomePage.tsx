import React, { useEffect } from "react";

import { TopBanner } from "./top-banner/TopBanner";
import { Introduction } from "./introduction/Introduction";
import { Popular } from "./popular/Popular";
import { Trending } from "./trending/Trending";
import { UpcommingMovies } from "./upcomming-movies/UpcommingMovies";
import { TopRate } from "./top-rate/TopRated";
import { OnAirTVs } from "./on-air-tvs/OnAirTVs";

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Universe Cinema";
  }, []);
  return (
    <div className="w-full mb-[3rem] ">
      <TopBanner />
      <Popular />
      <TopRate />
      <Trending />
      <UpcommingMovies />
      <OnAirTVs />
    </div>
  );
};
