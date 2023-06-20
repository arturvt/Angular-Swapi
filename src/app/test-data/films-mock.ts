import { FilmContentResponse, FilmResponse } from '@libs/swapi';

export const film01: FilmContentResponse = {
  title: 'A New Hope',
  episode_id: 4,
  opening_crawl: 'It is a period of civil war.',
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1970-01-01',
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  url: 'https://swapi.dev/api/films/1/',
};

export const film02: FilmContentResponse = {
  title: 'The Empire Strikes Back',
  episode_id: 5,
  opening_crawl: 'It is a dark time for the Rebellion.',
  director: 'Irvin Kershner',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1980-01-01',
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  url: 'https://swapi.dev/api/films/2/',
};

export const oneFilmResponse: FilmResponse = {
  count: 1,
  results: [film01],
};

export const twoFilmsResponse: FilmResponse = {
  count: 2,
  results: [film01, film02],
};

export const emptyResponse: FilmResponse = {
  count: 0,
  results: [],
};
