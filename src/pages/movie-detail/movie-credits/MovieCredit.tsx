import { ItemActor, NoResult, Seperate, SwiperApp, Title } from "@/components";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks/useCallAPI";
import { IActors } from "@/types";
import { FunctionComponent } from "react";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { TProps } from "..";

export const MovieCredit: FunctionComponent<TProps.withType> = ({
  movie,
  type,
}) => {
  const settingsSwiper: SwiperProps = {
    direction: "horizontal",
    slidesPerView: "auto",
    scrollbar: {
      draggable: true,
    },
  };

  const credits: any = useCallAPI(
    funcs.getAPI(`/${type}/${movie.id}/credits?`, "&language=en-US"),
    movie
  );
  const casts: IActors[] = credits?.cast.slice(0, 15);
  return (
    <>
      <div className="flex justify-between items-center mt-[2rem] ">
        <Title>Casts</Title>
        <h1 className="font-bold text-s16 w-fit mt-[1rem] cursor-pointer underline italic hover:text-orange hover:transition-all transition-all">
          View all casts and crews
        </h1>
      </div>
      {casts && casts.length > 0 ? (
        <div>
          <div className="mt-[1.2rem]">
            <SwiperApp length={casts.length} settings={settingsSwiper}>
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
