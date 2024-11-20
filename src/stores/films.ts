import { defineStore } from 'pinia';
import { useConfigStore } from './configStore';
import axios from 'axios';
import type { Film, Films } from '@/types/common';
import { nameToImageUrl } from '@/utils/nameToImageUrl';

export const useFilmsStore = defineStore('films', {
  state: () => ({
    films: [] as Film[],
  }),
  actions: {
    async fetchFilms() {
      const configStore = useConfigStore();
      const apiUrl = configStore.getApiUrl;
      try {
        const response = await axios.get(`${apiUrl}/films`);
        const data = await response.data as Films;

        data.results.forEach((film: Film) => {
          film.img = nameToImageUrl(film.title, 'films');
        });

        this.films = data.results;
      } catch (error) {
        console.error('Failed to fetch films:', error);
      }
    },
    async fetchFilmById(id: number) {
      const configStore = useConfigStore();
      const apiUrl = configStore.getApiUrl;
      try {
        const response = await axios.get(`${apiUrl}/films/${id}`);
        const film = await response.data as Film;

        return { ...film, img: nameToImageUrl(film.title, 'films') };
      } catch (error) {
        console.error('Failed to fetch films:', error);
      }
    },
  },
});
