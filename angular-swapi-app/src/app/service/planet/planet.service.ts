import { Injectable } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PlanePageResponse, PlanetDetails, PlanetPage, PlanetResponse } from '../../model/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService extends SwapiService {
  private readonly planetsUrl = `${this.host}/planets`;

  getPagePlanet(page: number): Observable<PlanetPage> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PlanePageResponse>(this.planetsUrl, options).pipe(map((planetPage) => new PlanetPage(planetPage)));
  }

  getPlanet(id: number): Observable<PlanetDetails> {
    return this.httpClient.get<PlanetResponse>(`${this.planetsUrl}/${id}`).pipe(map((planet) => new PlanetDetails(planet)));
  }
}
