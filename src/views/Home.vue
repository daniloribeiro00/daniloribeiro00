<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';
import Button from '../components/Button.vue';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="mb-10 flex h-full w-full flex-1 items-center justify-between gap-16 px-32"
  >
    <div>
      <h1 class="text-7xl font-bold text-gray-600 dark:text-white">
        {{ globalStore.language === 'pt-BR' ? 'Olá!' : 'Hi,' }}
      </h1>
      <h1 class="text-7xl font-bold text-gray-600 dark:text-white">
        {{ globalStore.language === 'pt-BR' ? 'Eu sou' : "I'm" }}
        <span class="text-violet-600">Danilo Ribeiro</span>.
      </h1>
      <h2
        class="mt-6 text-3xl font-bold tracking-wider text-gray-600 dark:text-white"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'DESENVOLVEDOR FRONT-END'
            : 'FRONT-END DEVELOPER'
        }}
      </h2>
      <Button class="mt-8">
        <router-link
          to="/contact"
          class="flex items-center justify-center gap-2"
        >
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {{ globalStore.language === 'pt-BR' ? 'CONTATO' : 'CONTACT' }}
        </router-link>
      </Button>
    </div>
    <div>
      <img
        class="h-80 w-80 rounded-full"
        src="https://avatars.githubusercontent.com/u/68981163?"
        alt="Danilo"
      />
    </div>
  </main>
</template>
