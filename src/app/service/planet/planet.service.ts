import { Injectable } from '@angular/core';

import { SwapiService } from '../swapi.service';
import { Observable } from 'rxjs';
import { PlanetResponse } from '../model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlanetService extends SwapiService {
  private readonly planetsUrl = `${this.host}/planets`;
  getPlanetsList(page: number): Observable<PlanetResponse> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PlanetResponse>(this.planetsUrl, options);
  }
}
