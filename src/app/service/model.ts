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
  people: People[];
  planets: Planet[];
}
