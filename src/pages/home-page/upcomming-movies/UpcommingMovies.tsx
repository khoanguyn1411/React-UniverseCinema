import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const UpcommingMovies = () => {
  const fetchAPI = (): Promise<Response> => {
    return fetch(apiURL.homeService.UPCOMMING_API);
  };

  return (
    <div>
      <ItemScroller
        title="Upcomming movies"
        fetchAPI={fetchAPI}
        slideDisplay={5}
        largeItem
      />
    </div>
  );
};
