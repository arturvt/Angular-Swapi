export const people01 = {
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  species: ['https://swapi.dev/api/species/2/'],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:10:51.357000Z',
  edited: '2014-12-20T21:17:50.309000Z',
  url: 'https://swapi.dev/api/people/2/',
};

export const people02 = {
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: [],
  starships: ['https://swapi.dev/api/starships/13/'],
  created: '2014-12-10T15:18:20.704000Z',
  edited: '2014-12-20T21:17:50.313000Z',
  url: 'https://swapi.dev/api/people/4/',
};

export const peoplePage01 = {
  count: 2,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [people01, people02],
};
