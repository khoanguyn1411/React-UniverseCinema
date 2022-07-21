import React, { useEffect } from "react";

import { OnAirTVs } from "./on-air-tvs/OnAirTVs";
import { Popular } from "./popular/Popular";
import { TopBanner } from "./top-banner/TopBanner";
import { TopRate } from "./top-rate/TopRated";
import { Trending } from "./trending/Trending";
import { UpcommingMovies } from "./upcomming-movies/UpcommingMovies";

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Universe Cinema";
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
