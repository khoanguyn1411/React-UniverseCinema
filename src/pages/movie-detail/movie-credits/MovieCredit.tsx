import { ItemActor, SwiperApp, Title } from "@/components";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks/useCallAPI";
import { IActors } from "@/types";
import { FunctionComponent } from "react";
import { SwiperSlide } from "swiper/react";
import { TProps } from "..";

export const MovieCredit: FunctionComponent<TProps.withType> = ({
  movie,
  type,
}) => {
  const credits: any = useCallAPI(
    funcs.getAPI(
      `/${type === values.MEDIA_TYPE.MOVIE ? "movie" : "tv"}/${
        movie.id
      }/credits?`,
      "&language=en-US"
    )
  );
  const casts: IActors[] = credits?.cast.slice(0, 15);
  return (
    casts && (
      <div className="mt-[2rem]">
        <div className="flex justify-between items-baseline ">
          <Title>Casts</Title>
          <h1 className="font-bold text-s16 w-fit cursor-pointer  underline italic hover:text-orange hover:transition-all transition-all">
            View all casts and crews
          </h1>
        </div>
        <div className="mt-[1.2rem]">
          <SwiperApp length={casts.length}>
            {casts.map((cast) => (
              <SwiperSlide key={cast.id}>
                <ItemActor actor={cast} />
              </SwiperSlide>
            ))}
          </SwiperApp>
        </div>
      </div>
    )
  );
};
// w-fit text-s18 font-bold cursor-pointer mt-[1rem] hover:text-orange hover:transition-all transition-all
