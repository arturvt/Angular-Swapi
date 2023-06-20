import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../../model/film';
import { FilmService } from '../../service/films/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
})
export class FilmPageComponent {
  constructor(private service: FilmService) {}

  films$: Observable<Film[]> = this.service.getFilmList();

  filmName(film: Film): string {
    return `Episode ${film.episodeId}: ${film.title}`;
  }
}
