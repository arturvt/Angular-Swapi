import { Injectable } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { map, Observable, Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PeoplePageResponse, PeoplePageSwapi, PeopleResponse, PeopleSwapi } from '../../model/peopleSwapi';

@Injectable({
  providedIn: 'root',
})
export class PeopleService extends SwapiService {
  private readonly peopleUrl = `${this.host}/people`;

  getPeopleList(page: number): Observable<PeoplePageResponse> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PeoplePageSwapi>(this.peopleUrl, options).pipe(map((peoplePage) => new PeoplePageResponse(peoplePage)));
  }

  getPeople(id: number): Observable<PeopleResponse> {
    return this.httpClient.get<PeopleSwapi>(`${this.peopleUrl}/${id}`).pipe(map((people: PeopleSwapi) => new PeopleResponse(people)));
  }

  getPeopleNames(ids: number[]): Observable<string> {
    const peopleNames = new Subject<string>();
    ids.forEach((id) => {
      this.getPeople(id).subscribe((people) => peopleNames.next(people.name));
    });
    return peopleNames.asObservable();
  }
}
