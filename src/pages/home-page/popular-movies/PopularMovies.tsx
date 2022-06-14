import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const PopularMovies = () => {
  const TV_SHOWS = "TV shows";
  const MOVIES = "Movies";
  const categories = [TV_SHOWS, MOVIES];

  const fetchAPI = (type: string): Promise<Response> => {
    if (type === MOVIES) return fetch(apiURL.displayService.POPULAR_MOVIE_API);
    else return fetch(apiURL.displayService.POPULAR_TV_API);
  };

  return (
    <div className="mt-[3rem]">
      <ItemScroller
        title="Popular films"
        smallItem
        categories={categories}
        slideDisplay={7}
        fetchAPI={fetchAPI}
      />
    </div>
  );
};
