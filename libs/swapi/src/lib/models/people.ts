export interface PeoplePageResponse {
  count: number;
  next: string;
  previous: string;
  results: PeopleResponse[];
}

export interface PeopleResponse {
  name: string;
  gender: string;
  homeworld: string;
  birth_year: string;
  url: string;
}
