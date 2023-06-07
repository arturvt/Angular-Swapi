import { Component } from '@angular/core';
import { FilmService } from '../../../service/films/film.service';
import { Observable } from 'rxjs';
import { Film } from '../../../model/film';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent {
  film$: Observable<Film | undefined> = this.service.getFilm(this.activeRoute.snapshot.params['episode_id']);

  constructor(private activeRoute: ActivatedRoute, private service: FilmService) {}
}
