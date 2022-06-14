export interface IGenres {
  id: number;
  name: string;
}

export interface IMovie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  original_title: string;
  release_date: string;
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  genres: IGenres[];
  poster_path: string;
  vote_average: number;
  vote_count: number;
  tagline: string;
  episode_run_time: number;
  runtime: number;
}
