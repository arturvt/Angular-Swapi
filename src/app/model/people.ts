export class PeoplePageResponse {
  count: number;
  next: string;
  previous: string;
  results: PeopleResponse[];

  constructor(peoplePage: PeoplePage) {
    this.count = peoplePage.count;
    this.next = peoplePage.next;
    this.previous = peoplePage.previous;
    this.results = peoplePage.results.map((people) => new PeopleResponse(people));
  }
}

export interface PeoplePage {
  count: number;
  next: string;
  previous: string;
  results: People[];
}

export interface People {
  name: string;
  gender: string;
  homeworld: string;
  url: string;
}

export class PeopleResponse {
  id: string;
  name: string;
  gender: string;
  homeWorld: string;

  constructor(people: People) {
    this.id = people.url.replace(/[^0-9]/g, '');
    this.name = people.name;
    this.gender = people.gender;
    this.homeWorld = people.homeworld;
  }
}
