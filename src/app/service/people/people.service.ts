import { Injectable } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { map, Observable } from 'rxjs';
import { People, PeoplePage, PeoplePageResponse, PeopleResponse } from '../model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService extends SwapiService {
  private readonly peopleUrl = `${this.host}/people`;

  getPeopleList(page: number): Observable<PeoplePageResponse> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PeoplePage>(this.peopleUrl, options).pipe(map((peoplePage) => new PeoplePageResponse(peoplePage)));
  }

  getPeople(id: number): Observable<PeopleResponse> {
    return this.httpClient.get<People>(`${this.peopleUrl}/${id}`).pipe(map((people) => new PeopleResponse(people)));
  }
}
