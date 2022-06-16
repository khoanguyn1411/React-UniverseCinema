import { IMovie } from "@/types";

export type noType = {
  movie: IMovie;
};

export type withType = {
  movie: IMovie;
  type: string;
};
