export interface FilmResponse {
  count: number;
  results: FilmContentResponse[];
}

export interface FilmContentResponse {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string; // Date
  characters: string[]; // People[]
  planets: string[]; // Planet[]
  starships: string[]; // Starship[]
  vehicles: string[]; // Vehicle[]
  species: string[]; // Species[]
  url: string;
}
