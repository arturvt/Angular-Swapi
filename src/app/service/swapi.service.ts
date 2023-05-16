import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Data, People, Planet } from './model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  readonly host = `${environment.hostSWAPI}api`;
  readonly peopleUrl = `${this.host}/people`;
  readonly planetsUrl = `${this.host}/planets`;

  constructor(private httpClient: HttpClient) {
    console.table({ host: this.host, planet: this.planetsUrl });
  }

  getPeopleList(): Observable<People[]> {
    return combineLatest([
      this.getPeople(0),
      this.getPeople(1),
      this.getPeople(2),
    ]).pipe(map(([people0, people1, people2]) => [people0, people1, people2]));
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
