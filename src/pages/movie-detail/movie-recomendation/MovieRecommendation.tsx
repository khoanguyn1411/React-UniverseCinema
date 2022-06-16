import { ItemMovie, NoResult, SwiperApp, Title } from "@/components";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks";
import { IMovie } from "@/types";
import { FunctionComponent } from "react";
import { TProps } from "..";

import { SwiperProps, SwiperSlide } from "swiper/react";

export const MovieRecommendation: FunctionComponent<TProps.withType> = ({
  type,
  movie,
}) => {
  const result = useCallAPI(
    funcs.getAPI(
      `/${type}/${movie.id}/recommendations?`,
      "&language=en-US&page=1"
    ),
    movie
  );

  const settingsSwiper: SwiperProps = {
    direction: "horizontal",
    slidesPerView: "auto",
    scrollbar: {
      draggable: true,
    },
  };

  const recomendationList: IMovie[] = result?.results;
  return (
    <div className="mb-[2rem]">
      <Title className="mt-[2rem]">Recommendation</Title>

      <div className="relative">
        {recomendationList && recomendationList.length > 0 ? (
          <SwiperApp
            settings={settingsSwiper}
            noViewmore
            length={recomendationList.length}
          >
            {recomendationList.map((item) => (
              <SwiperSlide key={type + item.id}>
                <ItemMovie movie={item} className="mx-0" />
              </SwiperSlide>
            ))}
          </SwiperApp>
        ) : (
          <NoResult>
            There is no Recommendation for this{" "}
            {type === values.MEDIA_TYPE.MOVIE ? "movie." : "TV show."}
          </NoResult>
        )}
      </div>
    </div>
  );
};
