import { apiURL } from "@/api";
import { ItemScroller } from "@/components";
import { FunctionComponent } from "react";

export const Popular: FunctionComponent = () => {
  const TV_SHOWS = "TV shows";
  const MOVIES = "Movies";
  const categories = [TV_SHOWS, MOVIES];

  const getUrl = (type: string) => {
    if (type === MOVIES) return apiURL.displayService.POPULAR_MOVIE_API;
    else return apiURL.displayService.POPULAR_TV_API;
  };

  return (
    <div className="mt-[3rem]">
      <ItemScroller
        title="Popular"
        smallItem
        categories={categories}
        slideDisplay={7}
        getURL={getUrl}
      />
    </div>
  );
};
