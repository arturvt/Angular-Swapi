import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { People, PeopleResponse, Planet } from './model';
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
    // Add safe, URL encoded search parameter if there is a search term
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PeopleResponse>(this.peopleUrl, options);
  }

  getPlanetsList(): Observable<Planet[]> {
    return combineLatest([this.getPlanets(1), this.getPlanets(2)]).pipe(map(([plane1, plane2]) => [plane1, plane2]));
  }

  private getPeople(id: number): Observable<People> {
    return this.httpClient.get<People>(this.peopleUrl + `/${id}`);
  }

  private getPlanets(id: number): Observable<Planet> {
    return this.httpClient.get<Planet>(this.planetsUrl + `/${id}`);
  }
}
