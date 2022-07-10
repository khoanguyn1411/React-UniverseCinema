import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const Trending = () => {
  const TODAY = "Today";
  const THIS_WEEK = "This week";
  const categories = [TODAY, THIS_WEEK];

  const getUrl = (type: string) => {
    if (type === TODAY) return apiURL.displayService.TRENDING_DAY_API;
    else return apiURL.displayService.TRENDING_WEEK_API;
  };

  return (
    <div>
      <ItemScroller
        title="Trending"
        categories={categories}
        getURL={getUrl}
        slideDisplay={7}
        smallItem
      />
    </div>
  );
};
