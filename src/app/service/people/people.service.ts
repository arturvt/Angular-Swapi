import { Injectable } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { map, Observable, Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { People, PeoplePage } from 'src/app/model/peopleSwapi';
import { PeoplePageResponse, PeopleResponse } from '@libs/swapi';

@Injectable({
  providedIn: 'root',
})
export class PeopleService extends SwapiService {
  private readonly peopleUrl = `${this.host}/people`;

  getPeopleList(page: number): Observable<PeoplePage> {
    const options = page ? { params: new HttpParams().set('page', page) } : {};
    return this.httpClient.get<PeoplePageResponse>(this.peopleUrl, options).pipe(map((peoplePage) => new PeoplePage(peoplePage)));
  }

  getPeople(id: number): Observable<People> {
    return this.httpClient.get<PeopleResponse>(`${this.peopleUrl}/${id}`).pipe(map((people: PeopleResponse) => new People(people)));
  }

  getPeopleNames(ids: number[]): Observable<string> {
    const peopleNames = new Subject<string>();
    ids.forEach((id) => {
      this.getPeople(id).subscribe((people) => peopleNames.next(people.name));
    });
    return peopleNames.asObservable();
  }
}
