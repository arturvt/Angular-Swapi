import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';

export interface People {
  name: string;
  gender: string;
}

export interface Planet {
  name: string;
  population: number;
}

export interface Data {
  people: People[];
  planets: Planet[];
}

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  readonly baseUrl = '/api';
  readonly peopleUrl = `${this.baseUrl}/people`;
  readonly planetsUrl = `${this.baseUrl}/planets`;

  constructor(private httpClient: HttpClient) {}

  getPeopleList(): Observable<People[]> {
    return combineLatest([this.getPeople(1), this.getPeople(2)]).pipe(
      map(([people1, people2]) => [people1, people2])
    );
  }

  getPlanetsList(): Observable<Planet[]> {
    return combineLatest([this.getPlanets(1), this.getPlanets(2)]).pipe(
      map(([plane1, plane2]) => [plane1, plane2])
    );
  }

  getData(): Observable<Data> {
    return combineLatest([this.getPeopleList(), this.getPlanetsList()]).pipe(
      map(([people, planets]) => ({ people, planets }))
    );
  }

  private getPeople(id: number): Observable<People> {
    return this.httpClient.get<People>(this.peopleUrl + `/${id}`);
  }

  private getPlanets(id: number): Observable<Planet> {
    return this.httpClient.get<Planet>(this.planetsUrl + `/${id}`);
  }
}
