<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col items-center justify-center gap-12 px-6 md:px-12"
  >
    <h1 class="text-8xl font-bold text-gray-600 dark:text-white">404</h1>
    <h2 class="text-center text-4xl font-bold text-gray-600 dark:text-white">
      {{
        globalStore.language === 'pt-BR'
          ? 'Página não encontrada'
          : 'Page not found'
      }}
    </h2>
  </main>
</template>
