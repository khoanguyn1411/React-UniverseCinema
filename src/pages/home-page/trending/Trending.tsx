import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const Trending = () => {
  const TODAY = "Today";
  const THIS_WEEK = "This week";
  const categories = [TODAY, THIS_WEEK];

  const fetchAPI = (type: string): Promise<Response> => {
    if (type === TODAY) return fetch(apiURL.displayService.TRENDING_DAY_API);
    else return fetch(apiURL.displayService.TRENDING_WEEK_API);
  };

  return (
    <div>
      <ItemScroller
        title="Trending"
        categories={categories}
        fetchAPI={fetchAPI}
        slideDisplay={7}
        smallItem
      />
    </div>
  );
};
