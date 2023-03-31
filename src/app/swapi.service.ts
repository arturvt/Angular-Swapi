import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  readonly baseUrl = '/api';
  readonly peopleUrl = `${this.baseUrl}/people`;
  readonly planetsUrl = `${this.baseUrl}/planets`;
  // people1 = /api/people/1
  // planet1 = /api/planet/1

  getPeople(id: number): Observable<any> {
    return of('imlpement me');
  }

  getPlanets(id: number): Observable<any> {
    return of('imlpement me');
  }
}
