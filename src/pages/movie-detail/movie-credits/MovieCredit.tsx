import { Title } from "@/components";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks/useCallAPI";
import { IMovie } from "@/types";
import { FunctionComponent } from "react";

type TProps = {
  movie: IMovie;
  type: string;
};

export const MovieCredit: FunctionComponent<TProps> = ({ movie, type }) => {
  const credits = useCallAPI(
    funcs.getAPI(
      `/${type === values.MEDIA_TYPE.MOVIE ? "movie" : "tv"}/${
        movie.id
      }/credits?`,
      "&language=en-US"
    )
  );
  const actors = credits?.cast;

  return (
    actors && (
      <div className="mt-[2rem]">
        <Title>Actors</Title>
      </div>
    )
  );
};
