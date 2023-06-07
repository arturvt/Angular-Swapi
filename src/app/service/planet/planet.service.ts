import { Injectable } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PlanePageResponse, PlanetDetails, PlanetPage, PlanetResponse } from '../../model/planetResponse';
import { PeopleService } from '../people/people.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetService extends SwapiService {
  constructor(private peopleService: PeopleService, httpClient: HttpClient) {
    super(httpClient);
  }

  private readonly planetsUrl = `${this.host}/planets`;

  getPlanetsList(page: number): Observable<PlanetPage> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PlanePageResponse>(this.planetsUrl, options).pipe(map((planetPage) => new PlanetPage(planetPage)));
  }

  getPlanet(id: number): Observable<PlanetDetails> {
    return this.httpClient.get<PlanetResponse>(`${this.planetsUrl}/${id}`).pipe(map((planet) => new PlanetDetails(planet)));
  }
}
