// --- Swapi Models ---
export interface PeoplePageSwapi {
  count: number;
  next: string;
  previous: string;
  results: PeopleSwapi[];
}

export interface PeopleSwapi {
  name: string;
  gender: string;
  homeworld: string;
  url: string;
}

// --- App Models -----
export class PeoplePageResponse {
  count: number;
  next: string;
  previous: string;
  results: PeopleResponse[];

  constructor(peoplePage: PeoplePageSwapi) {
    this.count = peoplePage.count;
    this.next = peoplePage.next;
    this.previous = peoplePage.previous;
    this.results = peoplePage.results.map((people) => new PeopleResponse(people));
  }
}

export class PeopleResponse {
  id: string;
  name: string;
  gender: string;
  homeWorld: string;

  constructor(people: PeopleSwapi) {
    this.id = people.url.replace(/[^0-9]/g, '');
    this.name = people.name;
    this.gender = people.gender;
    this.homeWorld = people.homeworld;
  }
}
