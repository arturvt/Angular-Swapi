import { PeoplePageResponse, PeopleResponse } from '@libs/swapi';
export class PeoplePage {
  count: number;
  next: string;
  previous: string;
  results: People[];

  constructor(peoplePage: PeoplePageResponse) {
    this.count = peoplePage.count;
    this.next = peoplePage.next;
    this.previous = peoplePage.previous;
    this.results = peoplePage.results.map((people) => new People(people));
  }
}

export class People {
  id: string;
  name: string;
  gender: string;
  homeWorld: string;

  constructor(people: PeopleResponse) {
    this.id = people.url.replace(/[^0-9]/g, '');
    this.name = people.name;
    this.gender = people.gender;
    this.homeWorld = people.homeworld;
  }
}
