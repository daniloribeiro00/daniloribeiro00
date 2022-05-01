<script setup lang="ts">
import { ref, watch } from 'vue';
import { Switch } from '@headlessui/vue';
import Button from '../components/Button.vue';

const darkMode = ref(false);

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkMode.value = true;
} else {
  darkMode.value = false;
}

const toggleTheme = () => {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f1f5f9');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#27272a');
  }
};

watch(darkMode, () => {
  toggleTheme();
});
</script>

<template>
  <header
    class="flex h-20 w-full items-center justify-between bg-slate-100 p-4 transition-colors duration-500 dark:bg-zinc-800"
  >
    <div class="flex h-full items-center gap-4">
      <img
        class="h-full rounded-full"
        src="https://avatars.githubusercontent.com/u/68981163?"
        alt="Danilo"
      />
      <h1 class="text-lg text-gray-600 dark:text-white">Danilo Ribeiro</h1>
    </div>
    <div class="flex h-full items-center gap-4">
      <Switch
        v-model="darkMode"
        :class="darkMode ? 'bg-slate-600' : 'bg-gray-300'"
        class="relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="darkMode ? 'translate-x-7' : 'translate-x-0'"
          class="pointer-events-none flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        >
          <svg
            v-if="!darkMode"
            class="h-5 w-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0
            11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414
            1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0
            011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0
            011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414
            8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1
            1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5 text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </span>
      </Switch>
      <Button><a href="mailto:danilo@duarteribeiro.com.br">Entrar em Contato</a></Button>
    </div>
  </header>
</template>
