import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    language: 'pt-BR',
  }),
  actions: {
    setLanguage(language: string) {
      this.language = language;
    },
  },
});
