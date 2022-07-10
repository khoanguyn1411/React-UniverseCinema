import {
  Button,
  ItemMovie,
  Loading,
  NoResult,
  SwiperApp,
  Title,
} from "@/components";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks";
import { IMovie } from "@/types";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { TProps } from "..";

import { icArrowLeft, icArrowRight } from "@/assets/icons";
import SwiperCore from "swiper";
import { SwiperProps, SwiperSlide } from "swiper/react";

export const MovieRecommendation: FunctionComponent<TProps.withType> = ({
  type,
  movie,
}) => {
  const refNext = useRef(null);
  const refPre = useRef(null);

  const [result, isLoading] = useCallAPI(
    `/${type}/${movie.id}/recommendations`,
    null,
    [movie]
  );

  const [settingsSwiper, setSettingsSwiper] = useState<SwiperProps>(null);

  useEffect(() => {
    setSettingsSwiper({
      navigation: {
        prevEl: refPre?.current,
        nextEl: refNext?.current,
      },
      onScrollbarDragMove(swiper) {
        if (swiper.isBeginning) {
          refPre.current.classList.add("opacity-30");
        } else {
          refPre.current.classList.remove("opacity-30");
        }

        if (swiper.isEnd) {
          refNext.current.classList.add("opacity-30");
        } else {
          refNext.current.classList.remove("opacity-30");
        }
      },
      onSlideChange(swiper) {
        if (swiper.isBeginning) {
          refPre.current.classList.add("opacity-30");
        } else {
          refPre.current.classList.remove("opacity-30");
        }

        if (swiper.isEnd) {
          refNext.current.classList.add("opacity-30");
        } else {
          refNext.current.classList.remove("opacity-30");
        }
      },
      scrollbar: {
        draggable: true,
      },
    });
  }, [result]);

  const recommendationList: IMovie[] = result?.results;
  const handleSwiperApp = (swiper: SwiperCore) => {
    if (swiper.isBeginning) {
      refPre.current.classList.add("opacity-30");
    } else {
      refPre.current.classList.remove("opacity-30");
    }
  };

  return (
    <div className="mb-[2rem]">
      <div className="justify-between mt-[2rem] flex items-center">
        <Title>Recommendation</Title>
        {recommendationList && recommendationList.length > 0 && (
          <div>
            <Button
              iconOnly
              icon={icArrowLeft}
              rounded
              ref={refPre}
              className="h-[3rem] w-[3rem]"
            />
            <Button
              iconOnly
              rounded
              icon={icArrowRight}
              ref={refNext}
              className="h-[3rem] w-[3rem] ml-5"
            />
          </div>
        )}
      </div>
      {!isLoading && (
        <div className="relative mt-4 lg:mx-[-2rem]">
          {recommendationList && recommendationList.length > 0 ? (
            <SwiperApp
              data={recommendationList}
              settings={settingsSwiper}
              noViewmore
              onAppSwiper={handleSwiperApp}
            >
              {recommendationList.map((item) => (
                <SwiperSlide key={type + item.id}>
                  <ItemMovie
                    size="small"
                    isSwiper
                    movie={item}
                    className="mx-0"
                  />
                </SwiperSlide>
              ))}
            </SwiperApp>
          ) : (
            <NoResult className="mt-[1rem] lg:mx-[2rem]">
              There is no recommendation for this{" "}
              {type === values.MEDIA_TYPE.MOVIE ? "movie." : "TV show."}
            </NoResult>
          )}
        </div>
      )}
      {isLoading && (
        <div className="mt-[2rem]">
          <Loading />
        </div>
      )}
    </div>
  );
};
