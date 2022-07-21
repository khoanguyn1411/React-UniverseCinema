import { icArrowLeft, icArrowRight } from "@/assets/icons";
import {
  Button,
  ItemActor,
  Loading,
  NoResult,
  Separate,
  SwiperApp,
  Title,
} from "@/components";
import { useCallAPI } from "@/hooks/useCallAPI";
import { IActors } from "@/types";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { TProps } from "..";

export const MovieCredit: FunctionComponent<TProps.withType> = ({
  movie,
  type,
}) => {
  const refNext = useRef(null);
  const refPre = useRef(null);

  const [settingsSwiper, setSettingsSwiper] = useState<SwiperProps>(null);

  const [result, isLoading] = useCallAPI(`/${type}/${movie.id}/credits`, null, [
    movie,
  ]);
  useEffect(() => {
    setSettingsSwiper({
      scrollbar: {
        draggable: true,
      },
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
    });
  }, [result]);

  const handleSwiperApp = (swiper: SwiperCore) => {
    if (swiper.isBeginning) {
      refPre.current.classList.add("opacity-30");
    } else {
      refPre.current.classList.remove("opacity-30");
    }
  };

  const casts: IActors[] = result?.cast?.slice(0, 15);
  return (
    <>
      <div className="flex justify-between items-center mt-[2rem] ">
        <Title>Casts</Title>
        {casts && casts.length > 0 && (
          <div>
            {casts.length > 15 && (
              <Button
                strokeBlack
                hover
                className="font-bold text-s16 w-fit py-[0.2rem] px-[1rem] cursor-pointer"
              >
                View all
              </Button>
            )}
            <Button
              iconOnly
              icon={icArrowLeft}
              rounded
              ref={refPre}
              className="h-[3rem] mx-5 w-[3rem]"
            />
            <Button
              iconOnly
              rounded
              icon={icArrowRight}
              ref={refNext}
              className="h-[3rem] w-[3rem]"
            />
          </div>
        )}
      </div>
      {isLoading && (
        <div className="h-[15rem] w-full">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <div>
          {casts && casts.length > 0 ? (
            <div>
              <div className="mt-[1.2rem] lg:mx-[-2rem]">
                <SwiperApp
                  data={casts}
                  settings={settingsSwiper}
                  onAppSwiper={handleSwiperApp}
                >
                  {casts.map((cast) => (
                    <SwiperSlide key={cast.id}>
                      <ItemActor actor={cast} />
                    </SwiperSlide>
                  ))}
                </SwiperApp>
              </div>
            </div>
          ) : (
            <NoResult>We could not find any actors.</NoResult>
          )}
        </div>
      )}

      <Separate />
    </>
  );
};
