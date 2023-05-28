import { Injectable } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService extends SwapiService {
  private readonly peopleUrl = `${this.host}/people`;
  getPeopleList(page: number): Observable<PeopleResponse> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PeopleResponse>(this.peopleUrl, options);
  }
}
