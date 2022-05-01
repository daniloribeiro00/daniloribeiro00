<script setup lang="ts">
import HeaderBar from './components/Header.vue';
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f1f5f9');
} else {
  document.documentElement.classList.remove('dark');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#27272a');
}

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme');
</script>

<template>
  <HeaderBar />
  <body class="min-h-screen bg-slate-100 transition-colors duration-500 dark:bg-zinc-800">
    <router-view />
  </body>
</template>
