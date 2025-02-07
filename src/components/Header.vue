<script setup lang="ts">
import { Switch } from '@headlessui/vue';
import { ref, watch } from 'vue';

import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();

const darkMode = ref(false);

darkMode.value = globalStore.theme === 'dark';

if (darkMode.value) {
  document.documentElement.classList.add('dark');
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', '#f1f5f9');
} else {
  document.documentElement.classList.remove('dark');
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', '#27272a');
}

const setLanguage = () => {
  if (globalStore.language === 'pt-BR') globalStore.setLanguage('en');
  else globalStore.setLanguage('pt-BR');
};

watch(darkMode, () => {
  globalStore.setTheme(darkMode.value ? 'dark' : 'light');
});
</script>

<template>
  <header class="flex w-full flex-col p-6">
    <div
      class="relative flex w-full items-center justify-between transition-colors duration-500"
    >
      <div class="z-10 flex h-full w-40 items-center gap-4">
        <button
          type="button"
          class="rounded-md outline-none ring-violet-600 ring-offset-4 ring-offset-white transition-all duration-200 ease-in-out focus:ring dark:ring-offset-zinc-800"
        >
          <RouterLink
            to="/"
            tabindex="-1"
            class="whitespace-nowrap text-xl font-semibold leading-none text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            Danilo Ribeiro
          </RouterLink>
        </button>
      </div>
      <nav
        class="hidden h-full w-1/3 items-center justify-center gap-3 lg:gap-4"
      >
        <button
          v-for="link in [
            { to: '/', text: 'HOME' },
            {
              to: '/about',
              text: globalStore.language === 'pt-BR' ? 'SOBRE' : 'ABOUT',
            },
            {
              to: '/skills',
              text: globalStore.language === 'pt-BR' ? 'HABILIDADES' : 'SKILLS',
            },
            {
              to: '/works',
              text: globalStore.language === 'pt-BR' ? 'TRABALHOS' : 'WORKS',
            },
          ]"
          :key="link.to"
          type="button"
          class="rounded-lg p-1 outline-none ring-violet-600 ring-offset-2 ring-offset-white transition-all duration-200 ease-in-out focus:ring dark:ring-offset-zinc-800"
        >
          <RouterLink
            :to="link.to"
            tabindex="-1"
            class="border-y-2 border-transparent py-1 text-xs font-semibold tracking-wider text-gray-600 transition-colors hover:border-b-violet-600 dark:text-white"
            activeClass="border-b-violet-600 dark:border-b-violet-500 text-violet-600 dark:text-violet-500 hover:border-b-violet-600"
          >
            {{ link.text }}
          </RouterLink>
        </button>
      </nav>
      <div class="z-10 flex h-full w-40 items-center justify-end gap-4">
        <button
          aria-label="{{ globalStore.language === 'pt-BR' ? 'Change to English' : 'Mudar para português' }}"
          type="button"
          class="flex items-center justify-center gap-1.5 rounded-full text-gray-600 outline-none ring-violet-600 ring-offset-2 ring-offset-white transition-all duration-200 ease-in-out hover:text-violet-600 focus:ring dark:text-white dark:ring-offset-zinc-800 dark:hover:text-violet-500"
          @click="setLanguage"
        >
          <span class="hidden pl-1 text-xs xs:block">
            {{ globalStore.language === 'pt-BR' ? 'Português' : 'English' }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <Switch
          v-model="darkMode"
          :class="darkMode ? 'bg-violet-500' : 'bg-gray-300'"
          class="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent outline-none ring-violet-600 ring-offset-2 ring-offset-white transition-all duration-200 ease-in-out focus:ring dark:ring-offset-zinc-800 sm:h-7 sm:w-14"
        >
          <span class="sr-only">Dark mode</span>
          <span
            aria-hidden="true"
            :class="
              darkMode ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0'
            "
            class="pointer-events-none flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out sm:h-6 sm:w-6"
          >
            <svg
              v-if="!darkMode"
              class="h-4 w-4 text-gray-600 sm:h-5 sm:w-5"
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
              class="h-4 w-4 text-gray-800 sm:h-5 sm:w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </span>
        </Switch>
      </div>
    </div>
    <nav
      class="mt-3 flex h-full w-full items-center justify-center gap-6 md:absolute md:top-2 md:-ml-4 md:h-auto"
    >
      <button
        v-for="link in [
          { to: '/', text: 'HOME' },
          {
            to: '/about',
            text: globalStore.language === 'pt-BR' ? 'SOBRE' : 'ABOUT',
          },
        ]"
        :key="link.to"
        type="button"
        class="rounded-lg p-1 outline-none ring-violet-600 ring-offset-2 ring-offset-white transition-all duration-200 ease-in-out focus:ring dark:ring-offset-zinc-800"
      >
        <RouterLink
          :to="link.to"
          tabindex="-1"
          class="border-y-2 border-transparent py-1 text-xs font-semibold tracking-wider text-gray-600 transition-colors hover:border-b-violet-600 dark:text-white"
          activeClass="border-b-violet-600 dark:border-b-violet-500 text-violet-600 dark:text-violet-500 hover:border-b-violet-600"
        >
          {{ link.text }}
        </RouterLink>
      </button>
    </nav>
  </header>
</template>
