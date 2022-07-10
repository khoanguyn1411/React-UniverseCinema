import { apiURL } from "@/api";
import { ItemScroller } from "@/components";
import { FunctionComponent } from "react";

export const OnAirTVs: FunctionComponent = () => {
  const getUrl = () => {
    return apiURL.displayService.ON_AIR_API;
  };

  return (
    <div>
      <ItemScroller
        title="On air TV shows"
        largeItem
        getURL={getUrl}
        slideDisplay={5}
      />
    </div>
  );
};
