<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="mb-10 flex h-full w-full flex-1 flex-col items-center justify-center gap-10 px-32"
  >
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        {{ globalStore.language === 'pt-BR' ? 'RESUMO' : 'TL;DR' }}
      </h2>
      <p
        class="whitespace-pre-line text-xl leading-loose text-gray-600 dark:text-white"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Desenvolvedor front-end, amante de UI/UX e design, entusiasta de tecnologia e inovação, geek e apaixonado por café. ☕️'
            : 'Front-end developer, UI/UX and design lover, technology and innovation enthusiast, geek and in love with coffee. ☕️'
        }}
      </p>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        {{
          globalStore.language === 'pt-BR'
            ? 'FORMAÇÃO ACADÊMICA'
            : 'EDUCATIONAL BACKGROUND'
        }}
      </h2>
      <p
        class="whitespace-pre-line text-xl leading-loose text-gray-600 dark:text-white"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Bacharel em Sistemas de Informação pelo UniFOA (Centro Universitário de Volta Redonda - RJ).'
            : 'Bachelor in Information Systems at UniFOA (Volta Redonda University Center) in Brazil.'
        }}
      </p>
    </div>
  </main>
</template>
