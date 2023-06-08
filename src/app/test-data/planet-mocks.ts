import { PlanePageResponse, PlanetResponse } from '../model/planetResponse';

export const planet01: PlanetResponse = {
  name: 'Dagobah',
  rotation_period: '23',
  orbital_period: '341',
  diameter: '8900',
  climate: 'murky',
  gravity: 'N/A',
  terrain: 'swamp, jungles',
  surface_water: '8',
  population: 'unknown',
  residents: [],
  films: ['https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/'],
  url: 'https://swapi.dev/api/planets/5/',
};

export const planet02: PlanetResponse = {
  name: 'Bespin',
  rotation_period: '12',
  orbital_period: '5110',
  diameter: '118000',
  climate: 'temperate',
  gravity: '1.5 (surface), 1 standard (Cloud City)',
  terrain: 'gas giant',
  surface_water: '0',
  population: '6000000',
  residents: ['https://swapi.dev/api/people/26/'],
  films: ['https://swapi.dev/api/films/2/'],
  url: 'https://swapi.dev/api/planets/6/',
};
export const getPlanetsResponse: PlanePageResponse = {
  count: 2,
  next: 'https://swapi.dev/api/planets/?page=2',
  results: [planet01, planet02],
};
