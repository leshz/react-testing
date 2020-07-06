export type Router = {
  path?: string;
  default?: boolean;
  uri?: string;
};
export interface Data {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  add?: (data: unknown) => void;
}
export interface dataItem {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}
