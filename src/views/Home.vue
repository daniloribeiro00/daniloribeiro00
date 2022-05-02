<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';
import Button from '../components/Button.vue';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col-reverse items-center justify-center gap-8 px-6 sm:flex-row md:justify-between md:px-12"
  >
    <div>
      <h1
        class="text-3xl font-bold text-gray-600 dark:text-white sm:text-5xl md:text-7xl"
      >
        {{ globalStore.language === 'pt-BR' ? 'Olá!' : 'Hi,' }}
      </h1>
      <h1
        class="text-3xl font-bold text-gray-600 dark:text-white sm:text-5xl md:text-7xl"
      >
        {{ globalStore.language === 'pt-BR' ? 'Eu sou' : "I'm" }}
        <span class="text-violet-600 dark:text-violet-500">Danilo Ribeiro</span
        >.
      </h1>
      <h2
        class="text-md mt-6 font-bold tracking-wider text-gray-600 dark:text-white sm:text-xl md:text-3xl"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'DESENVOLVEDOR FRONT-END'
            : 'FRONT-END DEVELOPER'
        }}
      </h2>
      <Button class="mt-8 w-full sm:w-auto">
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
        class="h-40 w-40 max-w-[none] rounded-full object-cover xs:h-60 xs:w-60 md:h-80 md:w-80"
        src="https://avatars.githubusercontent.com/u/68981163?"
        alt="Danilo Ribeiro"
      />
    </div>
  </main>
</template>
