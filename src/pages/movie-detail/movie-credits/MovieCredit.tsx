import { icArrowLeft, icArrowRight } from "@/assets/icons";
import {
  Button,
  ItemActor,
  NoResult,
  Seperate,
  SwiperApp,
  Title,
} from "@/components";
import { funcs } from "@/constants";
import { useCallAPI } from "@/hooks/useCallAPI";
import { IActors } from "@/types";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Navigation } from "swiper";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { TProps } from "..";

export const MovieCredit: FunctionComponent<TProps.withType> = ({
  movie,
  type,
}) => {
  const refNext = useRef(null);
  const refPre = useRef(null);

  const [settingsSwiper, setSettingsSwiper] = useState<SwiperProps>(null);

  const credits: any = useCallAPI(
    funcs.getAPI(`/${type}/${movie.id}/credits?`, "&language=en-US"),
    movie
  );
  useEffect(() => {
    setSettingsSwiper({
      modules: [Navigation],
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
      slidesPerGroup: 2,
      direction: "horizontal",
      scrollbar: {
        draggable: true,
      },
    });
  }, [credits]);

  const handleSwiperApp = (swiper) => {
    if (swiper.isBeginning) {
      refPre.current.classList.add("opacity-30");
    } else {
      refPre.current.classList.remove("opacity-30");
    }
  };

  const casts: IActors[] = credits?.cast.slice(0, 15);
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
      {casts && casts.length > 0 ? (
        <div>
          <div className="mt-[1.2rem]">
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
          <Seperate />
        </div>
      ) : (
        <NoResult>We could not find any actors.</NoResult>
      )}
    </>
  );
};
// w-fit text-s18 font-bold cursor-pointer mt-[1rem] hover:text-orange hover:transition-all transition-all
