import { type RemovableRef, useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

type State = {
  language: 'pt-BR' | 'en';
  theme: RemovableRef<string>;
};

export const useGlobalStore = defineStore('globalStore', {
  state: (): State => ({
    language: 'pt-BR',
    theme: useLocalStorage('theme', 'dark'),
  }),
  actions: {
    setLanguage(language: State['language']) {
      this.language = language;
    },
    setTheme(theme: 'light' | 'dark') {
      this.theme = theme;

      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute('content', '#27272a');
      } else {
        document.documentElement.classList.add('dark');
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute('content', '#f1f5f9');
      }
    },
  },
});
