import { defineStore } from 'pinia';
import { useConfigStore } from './configStore';
import { useCharacterStore } from './characters';
import axios from 'axios';
import type { Character, Planet, Planets } from '@/types/common';
import { nameToImageUrl } from '@/utils/nameToImageUrl';

export const usePlanetsStore = defineStore('planets', {
  state: () => ({
    planets: [] as Planet[],
    pagesCount: 0 as number,
  }),
  actions: {
    async fetchPlanets(page = 1 as number) {
      const configStore = useConfigStore();
      const apiUrl = configStore.getApiUrl;
      try {
        const response = await axios.get(`${apiUrl}/planets?page=${page}`);
        const data = await response.data as Planets;
        this.pagesCount = Math.ceil(data.count / 10);
        data.results.forEach((planet: Planet) => {
          planet.img = nameToImageUrl(planet.name, 'planets');
        });

        this.planets = data.results.filter((planet: Planet) => planet.name !== 'unknown');

      } catch (error) {
        console.error('Failed to fetch films:', error);
      }
    },
    async fetchPlanetById(id: number) {
      const configStore = useConfigStore();
      const apiUrl = configStore.getApiUrl;
      try {
        const response = await axios.get(`${apiUrl}/planets/${id}`);
        const planet = await response.data as Planet;

        return { ...planet, img: nameToImageUrl(planet.name, 'planets') };
      } catch (error) {
        console.error('Failed to fetch films:', error);
      }
    },

    async setResidents(planet: Planet) {
      const charactersStore = useCharacterStore();

      const residentsData = await Promise.all(planet.residents.map(async (resident: string) => {
        const id = resident.match(/\d+/g);
        return await charactersStore.fetchCharacterById(Number(id));
      }));

      planet.residentsData = residentsData as Character[];
      return planet.residentsData
    }
  },
});


