<script setup lang="ts">
import Header from './components/Header.vue';
import { useGlobalStore } from './stores/globalStore';

const globalStore = useGlobalStore();

// language settings
if (!navigator.language.toLowerCase().startsWith('pt')) {
  globalStore.setLanguage('en');
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      'content',
      'Front-End Developer - Vue.js + React + Next.js + TypeScript + UI/UX'
    );
} else {
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      'content',
      'Desenvolvedor Front-End - Vue.js + React + Next.js + TypeScript + UI/UX'
    );
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute(
      'content',
      'Desenvolvedor Front-End - Vue.js + React + Next.js + TypeScript + UI/UX'
    );
}
</script>

<template>
  <body
    class="flex min-h-screen w-full flex-col items-center bg-gradient-to-bl from-violet-200/50 via-gray-100 to-violet-300/80 transition-all duration-200 dark:from-violet-900/5 dark:via-zinc-900/80 dark:to-violet-900/40"
  >
    <Header class="z-20" />
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </body>
</template>

<style>
html {
  scrollbar-width: thin;
}

.custom-scrollbar {
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  -moz-border-radius: 1rem;
  -webkit-border-radius: 1rem;
  background-color: #868686;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-leave-to {
  transform: translateY(-4rem);
}

.v-enter-from {
  transform: translateY(-4rem);
}
</style>
