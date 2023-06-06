export interface PlanetResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

export interface Planet {
  name: string;
  population: string;
}
