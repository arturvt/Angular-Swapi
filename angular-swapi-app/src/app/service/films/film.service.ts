import { Injectable } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { map, Observable, shareReplay } from 'rxjs';
import { Film } from '../../model/film';
import { FilmResponse, FilmContentResponse } from '@libs/swapi';

@Injectable({
  providedIn: 'root',
})
export class FilmService extends SwapiService {
  films$: Observable<Film[]> | undefined;

  getFilmList(): Observable<Film[]> {
    if (!this.films$) {
      this.films$ = this.httpClient.get<FilmResponse>(this.host + '/films/').pipe(
        map((filmResponse: FilmResponse) =>
          filmResponse.results.map((filmContentResponse: FilmContentResponse) => new Film(filmContentResponse))
        ),
        shareReplay()
      );
    }
    return this.films$;
  }

  getFilm(id: number): Observable<Film | undefined> {
    return this.getFilmList().pipe(map((films: Film[]) => films.find((film: Film) => +film.episodeId === +id)));
  }
}
