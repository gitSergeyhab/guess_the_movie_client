


export interface Audience {
  count:   number;
  country: string;
}

export interface Backdrop {
  url:        string;
  previewUrl: string;
}

export interface Budget {
  value:    number;
  currency: string;
}

export interface Country {
  name: string;
}

export interface ExternalID {
  kpHD: string;
  imdb: string;
  tmdb: number;
}

export interface Fact {
  value:   string;
  type:    string;
  spoiler: boolean;
}

export interface Fees {
  world:  Budget;
  russia: Budget;
  usa:    Budget;
}

export interface ImagesInfo {
  postersCount:   number;
  backdropsCount: number;
  framesCount:    number;
}

export interface Logo {
  url: string;
}

export interface Name {
  name:     string;
  language: string;
  type:     string;
}

export interface Person {
  id:           number;
  photo:        string;
  name:         string;
  enName:       string;
  description:  string;
  profession:   string;
  enProfession: string;
}

export interface Premiere {
  country: string;
  world:   Date;
  russia:  Date;
  digital: string;
  cinema:  Date;
  bluray:  string;
  dvd:     string;
}

export interface ProductionCompany {
  name:       string;
  url:        string;
  previewUrl: string;
}

export interface Rating {
  kp:                 number;
  imdb:               number;
  tmdb:               number;
  filmCritics:        number;
  russianFilmCritics: number;
  await:              number;
}

export interface ReleaseYear {
  start: number;
  end:   number;
}

export interface ReviewInfo {
  count:         number;
  positiveCount: number;
  percentage:    string;
}

export interface SeasonsInfo {
  number:        number;
  episodesCount: number;
}

export interface SequelsAndPrequel {
  id:              number;
  name:            string;
  enName:          string;
  alternativeName: string;
  type:            string;
  poster:          Backdrop;
}



export interface Teaser {
  url:  string;
  name: string;
  site: string;
  type: string;
  size: number;
}

export interface Videos {
  trailers: Teaser[];
  teasers:  Teaser[];
}

export interface Votes {
  kp:                 string;
  imdb:               string;
  tmdb:               number;
  filmCritics:        number;
  russianFilmCritics: number;
  await:              number;
}

export interface Item {
  name: string;
  logo: Logo;
  url:  string;
}


export interface Watchability {
  items: Item[];
}

export interface Doc {
  id:                  number;
  externalId:          ExternalID;
  name:                string;
  alternativeName:     string;
  enName:              string;
  names:               Name[];
  type:                string;
  typeNumber:          number;
  year:                number;
  description:         string;
  shortDescription:    string;
  slogan:              string;
  status:              string;
  rating:              Rating;
  votes:               Votes;
  movieLength:         number;
  ratingMpaa:          string;
  ageRating:           number;
  logo:                Logo;
  poster:              Backdrop;
  backdrop:            Backdrop;
  videos:              Videos;
  genres:              Country[];
  countries:           Country[];
  persons:             Person[];
  reviewInfo:          ReviewInfo;
  seasonsInfo:         SeasonsInfo[];
  budget:              Budget;
  fees:                Fees;
  premiere:            Premiere;
  similarMovies:       SequelsAndPrequel[];
  sequelsAndPrequels:  SequelsAndPrequel[];
  watchability:        Watchability;
  releaseYears:        ReleaseYear[];
  top10:               number;
  top250:              number;
  ticketsOnSale:       boolean;
  totalSeriesLength:   number;
  seriesLength:        number;
  isSeries:            boolean;
  audience:            Audience[];
  facts:               Fact[];
  imagesInfo:          ImagesInfo;
  productionCompanies: ProductionCompany[];
}

export interface MovieData {
  docs:  Doc[];
  total: number;
  limit: number;
  page:  number;
  pages: number;
}



export interface DownloadStatus {
  isError: boolean;
  isLoading: boolean;
}
