import { apiURL } from "@/api";
import { ItemScroller } from "@/components";
import { FunctionComponent } from "react";

export const UpcommingMovies: FunctionComponent = () => {
  const getUrl = () => {
    return apiURL.displayService.UPCOMMING_API;
  };

  return (
    <div>
      <ItemScroller
        title="Upcomming movies"
        largeItem
        getURL={getUrl}
        slideDisplay={5}
      />
    </div>
  );
};
