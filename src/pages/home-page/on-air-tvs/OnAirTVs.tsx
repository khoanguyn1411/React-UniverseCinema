import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const OnAirTVs = () => {
  const fetchAPI = (): Promise<Response> => {
    return fetch(apiURL.displayService.ON_AIR_API);
  };

  return (
    <div>
      <ItemScroller
        title="On air TV shows"
        fetchAPI={fetchAPI}
        slideDisplay={5}
        largeItem
      />
    </div>
  );
};
