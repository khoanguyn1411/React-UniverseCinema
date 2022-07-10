import { apiURL } from "@/api";
import { ItemScroller } from "@/components";

export const OnAirTVs = () => {
  const getUrl = () => {
    return apiURL.displayService.ON_AIR_API;
  };

  return (
    <div>
      <ItemScroller title="On air TV shows" getURL={getUrl} slideDisplay={5} />
    </div>
  );
};
