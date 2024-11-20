import { defineStore } from 'pinia';
import { useConfigStore } from './configStore';
import axios from 'axios';
import type { Specie } from '@/types/common';
import { nameToImageUrl } from '@/utils/nameToImageUrl';

export const useSpeciesStore = defineStore('species', {
  state: () => ({
  }),
  actions: {
    async fetchSpecieById(id: number) {
      const configStore = useConfigStore();
      const apiUrl = configStore.getApiUrl;
      try {
        const response = await axios.get(`${apiUrl}/species/${id}`);
        const specie = await response.data as Specie;

        return { ...specie, img: nameToImageUrl(String(id), 'species') };
      } catch (error) {
        console.error('Failed to fetch specie:', error);
      }
    },
  },
});
