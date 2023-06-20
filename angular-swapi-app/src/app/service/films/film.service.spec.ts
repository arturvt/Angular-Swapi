import { FilmService } from './film.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { emptyResponse, oneFilmResponse, twoFilmsResponse } from '../../test-data/films-mock';

describe('FilmService', () => {
  let service: FilmService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new FilmService(httpClientSpy);
  });

  it('when empty response', (done) => {
    httpClientSpy.get.and.returnValue(of(emptyResponse));
    expect(service).toBeTruthy();
    service
      .getFilmList()
      .pipe()
      .subscribe((films) => {
        expect(films.length).toBe(0);
        done();
      });
  });

  it('when response with one film', (done) => {
    httpClientSpy.get.and.returnValue(of(oneFilmResponse));
    expect(service).toBeTruthy();
    service
      .getFilmList()
      .pipe()
      .subscribe((films) => {
        expect(films.length).toBe(1);
        expect(films[0].title).toBe('A New Hope');
        expect(films[0].episodeId).toBe(4);
        expect(films[0].openingCrawl).toBe('It is a period of civil war.');
        expect(films[0].director).toBe('George Lucas');
        expect(films[0].producer).toBe('Gary Kurtz, Rick McCallum');
        expect(films[0].releaseDate).toBe('1970-01-01');
        done();
      });
  });

  it('get film by id non exist film', (done) => {
    httpClientSpy.get.and.returnValue(of(twoFilmsResponse));
    expect(service).toBeTruthy();
    // id doesn't exist
    service.getFilm(1).subscribe((film) => {
      expect(film).toBeFalsy();
      done();
    });
  });

  it('get film by film exist', (done) => {
    httpClientSpy.get.and.returnValue(of(twoFilmsResponse));
    expect(service).toBeTruthy();
    // Id exist
    service.getFilm(4).subscribe((film) => {
      expect(film).toBeTruthy();
      done();
    });
  });
});
