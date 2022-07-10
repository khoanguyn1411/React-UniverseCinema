import { apiURL } from "@/api";
import { UPCOMMING_API } from "@/api/displayService";
import { ItemScroller } from "@/components";

export const UpcommingMovies = () => {
  const getUrl = () => {
    return apiURL.displayService.UPCOMMING_API;
  };

  return (
    <div>
      <ItemScroller title="Upcomming movies" getURL={getUrl} slideDisplay={5} />
    </div>
  );
};
