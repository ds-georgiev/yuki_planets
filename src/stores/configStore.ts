import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', {
  state: () => ({
    apiUrl: 'https://swapi.dev/api', // Base API URL
    isLoading: false, // TODO: Use it for global loading indicator
  }),
  getters: {
    getApiUrl: (state) => state.apiUrl,
  },
  actions: {
    setApiUrl(url: string) {
      this.apiUrl = url;
    },
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    }
  },
});
