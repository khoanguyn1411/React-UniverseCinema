import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const PopularMovies = () => {
  const TV_SHOWS = "TV shows";
  const MOVIES = "Movies";
  const categories = [TV_SHOWS, MOVIES];

  const fetchAPI = (type: string): Promise<Response> => {
    if (type === MOVIES) return fetch(apiURL.homeService.POPULAR_MOVIE_API);
    else return fetch(apiURL.homeService.POPULAR_TV_API);
  };

  return (
    <ItemScroller
      title="Popular films"
      categories={categories}
      fetchAPI={fetchAPI}
    />
  );
};
