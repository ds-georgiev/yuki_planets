export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
  img?: string;
  charactersData?: Character[];
  planetsData?: Planet[];
  speciesData?: Specie[];
};

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  img?: string;
  residentsData?: Character[];
  filmsData?: Film[];
};


export type Films = {
  count: number;
  next: string;
  previous: string;
  results: Film[];
}

export type Planets = {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

export type Character = {
  name: string;
  img: string;
}

export type Specie = {
  name: string;
  img: string;
}
