<script setup lang="ts">
import { useGlobalStore } from './stores/globalStore';
import HeaderBar from './components/Header.vue';

const globalStore = useGlobalStore();

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
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

if (!navigator.language.toLowerCase().startsWith('pt')) {
  globalStore.setLanguage('en');
}
</script>

<template>
  <body
    class="flex min-h-screen w-full flex-col items-center bg-white transition-colors duration-500 dark:bg-zinc-800"
  >
    <HeaderBar />
    <Transition>
      <router-view />
    </Transition>
  </body>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
