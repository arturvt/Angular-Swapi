export interface PeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: People[];
}
export interface People {
  name: string;
  gender: string;
  homeworld: string;
}

export interface Planet {
  name: string;
  population: number;
}

export interface Data {
  people: PeopleResponse;
  planets: Planet[];
}
