export interface PlanePageResponse {
  count: number;
  next: string;
  previous: string;
  results: PlanetResponse[];
}

export class PlanetPage {
  count: number;
  next: string;
  previous: string;
  results: Planet[];

  constructor(planetPage: PlanePageResponse) {
    this.count = planetPage.count;
    this.next = planetPage.next;
    this.previous = planetPage.previous;
    this.results = planetPage.results.map((planet) => new Planet(planet));
  }
}

export interface PlanetResponse {
  name: string;
  population: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  residents: string[];
  url: string;
}

export class Planet {
  id: string;
  name: string;
  population: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: number;

  constructor(planet: PlanetResponse) {
    this.id = planet.url.replace(/[^0-9]/g, '');
    this.name = planet.name;
    this.population = planet.population;
    this.rotationPeriod = planet.rotation_period;
    this.orbitalPeriod = planet.orbital_period;
    this.diameter = planet.diameter;
    this.climate = planet.climate;
    this.gravity = planet.gravity;
    this.terrain = planet.terrain;
    this.surfaceWater = planet.surface_water;
  }
}

export class PlanetDetails extends Planet {
  residents: number[];

  constructor(planet: PlanetResponse) {
    super(planet);
    this.residents = planet.residents.map((url: string) => {
      return Number(url.replace(/[^0-9]/g, ''));
    });
  }
}
