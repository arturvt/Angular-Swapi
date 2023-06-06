export interface FilmResponse {
  count: number;
  results: FilmContentResponse[];
}

export interface FilmContentResponse {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string; // Date
  characters: string[]; // People[]
  planets: string[]; // Planet[]
  starships: string[]; // Starship[]
  vehicles: string[]; // Vehicle[]
  species: string[]; // Species[]
  created: string; // Date
  edited: string; // Date
  url: string;
}

export class Film {
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string; // Date
  characters: string[]; // People[]
  planets: string[]; // Planet[]
  starships: string[]; // Starship[]
  vehicles: string[]; // Vehicle[]
  species: string[]; // Species[]
  created: string; // Date
  edited: string; // Date
  url: string;
  image: string;
  imageBanner: string;

  constructor(filmResponse: FilmContentResponse) {
    this.title = filmResponse.title;
    this.episodeId = filmResponse.episode_id;
    this.openingCrawl = filmResponse.opening_crawl;
    this.director = filmResponse.director;
    this.producer = filmResponse.producer;
    this.releaseDate = filmResponse.release_date;
    this.characters = filmResponse.characters;
    this.planets = filmResponse.planets;
    this.starships = filmResponse.starships;
    this.vehicles = filmResponse.vehicles;
    this.species = filmResponse.species;
    this.created = filmResponse.created;
    this.edited = filmResponse.edited;
    this.url = filmResponse.url;
    this.image = getImage(filmResponse.title);
    this.imageBanner = getImageBanner(filmResponse.title);
  }
}

const getImageBanner = (title: string) => {
  return getImageMap(title, 'banner');
};

const getImage = (title: string) => {
  return getImageMap(title, 'image');
};

const getImageMap = (title: string, type: 'banner' | 'image') => {
  switch (title) {
    case 'A New Hope':
      return type === 'image'
        ? 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
        : 'https://cdn.shopify.com/s/files/1/1057/4964/t/27/assets/star-wars-banner.jpeg?v=80624120874934922901668841836';
    case 'The Empire Strikes Back':
      return type === 'image'
        ? 'https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg'
        : 'https://assets.londonist.com/uploads/2015/03/sc-rebellion-banner-image_12.jpg';
    case 'Return of the Jedi':
      return 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg';
    case 'The Phantom Menace':
      return 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg';
    case 'Attack of the Clones':
      return 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg';
    case 'Revenge of the Sith':
      return 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg';
    case 'The Force Awakens':
      return 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg';
    case 'The Last Jedi':
      return 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg';
    case 'The Rise of Skywalker':
      return 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg';
    default:
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png';
  }
};
