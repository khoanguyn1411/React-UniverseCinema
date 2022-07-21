export interface IGenres {
  id: number;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: number;
  name: string;
}

export interface IProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface INetwork {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  networks: INetwork[];
  overview: string;
  poster_path: string;
  season_number: number;
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
  status: string;
  budget: number;
  revenue: number;
  spoken_languages: ISpokenLanguage[];
  production_companies: IProductionCompanies[];
  networks: INetwork[];
  homepage: string;
  seasons: ISeason[];
}
