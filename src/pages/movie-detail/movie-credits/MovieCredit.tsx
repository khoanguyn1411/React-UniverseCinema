import { ItemActor, SwiperApp, Title } from "@/components";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks/useCallAPI";
import { IActors, IMovie } from "@/types";
import { FunctionComponent } from "react";
import { SwiperSlide } from "swiper/react";

type TProps = {
  movie: IMovie;
  type: string;
};

export const MovieCredit: FunctionComponent<TProps> = ({ movie, type }) => {
  const credits: any = useCallAPI(
    funcs.getAPI(
      `/${type === values.MEDIA_TYPE.MOVIE ? "movie" : "tv"}/${
        movie.id
      }/credits?`,
      "&language=en-US"
    )
  );
  const actors: IActors[] = credits?.cast.slice(0, 15);
  return (
    actors && (
      <div className="mt-[2rem]">
        <Title>Actors</Title>
        <div className="mt-[1.2rem]">
          <SwiperApp length={actors.length}>
            {actors.map((actor) => (
              <SwiperSlide key={actor.id}>
                <ItemActor actor={actor} />
              </SwiperSlide>
            ))}
          </SwiperApp>
        </div>
      </div>
    )
  );
};
