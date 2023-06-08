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
  url: string;
}
