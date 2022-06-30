import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const TopRate = () => {
  const TV_SHOWS = "TV shows";
  const MOVIES = "Movies";
  const categories = [TV_SHOWS, MOVIES];

  const fetchAPI = (type: string): Promise<Response> => {
    if (type === MOVIES)
      return fetch(apiURL.displayService.TOP_RATED_MOVIE_API);
    else return fetch(apiURL.displayService.TOP_RATED_TV_API);
  };

  return (
    <ItemScroller
      title="Top rated"
      smallItem
      categories={categories}
      slideDisplay={7}
      fetchAPI={fetchAPI}
    />
  );
};
