export interface PeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: People[];
}

export interface PlanetResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}
export interface People {
  name: string;
  gender: string;
  homeworld: string;
}

export interface Planet {
  name: string;
  population: string;
}

export interface Data {
  people: PeopleResponse;
  planets: Planet[];
}
