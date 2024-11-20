import { defineStore } from 'pinia';
import { useConfigStore } from './configStore';
import axios from 'axios';
import type { Character } from '@/types/common';
import { nameToImageUrl } from '@/utils/nameToImageUrl';

export const useCharacterStore = defineStore('people', {
  state: () => ({
  }),
  actions: {
    async fetchCharacterById(id: number) {
      const configStore = useConfigStore();
      const apiUrl = configStore.getApiUrl;
      try {
        const response = await axios.get(`${apiUrl}/people/${id}`);
        const character = await response.data as Character;

        return { ...character, img: nameToImageUrl(String(id), 'characters') };
      } catch (error) {
        console.error('Failed to fetch character:', error);
      }
    },
  },
});
