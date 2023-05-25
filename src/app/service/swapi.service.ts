import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { People, PeopleResponse, Planet, PlanetResponse } from './model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  readonly host = `${environment.hostSWAPI}api`;
  readonly peopleUrl = `${this.host}/people`;
  readonly planetsUrl = `${this.host}/planets`;

  constructor(private httpClient: HttpClient) {}

  getPeopleList(page: number): Observable<PeopleResponse> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PeopleResponse>(this.peopleUrl, options);
  }

  getPlanetsList(page: number): Observable<PlanetResponse> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PlanetResponse>(this.planetsUrl, options);
  }

  private getPeople(id: number): Observable<People> {
    return this.httpClient.get<People>(this.peopleUrl + `/${id}`);
  }

  private getPlanet(id: number): Observable<Planet> {
    return this.httpClient.get<Planet>(this.planetsUrl + `/${id}`);
  }
}
