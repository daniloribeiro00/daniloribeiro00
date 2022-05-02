<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';
import Button from '../components/Button.vue';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col items-center justify-center gap-16 px-8 sm:py-12 md:px-12"
  >
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        PLUG4MARKET
      </h2>
      <div class="flex w-full flex-col gap-8 md:flex-row">
        <div
          class="flex aspect-video w-full items-center justify-center rounded-xl border border-violet-600 bg-white md:w-1/2"
        >
          <img class="w-full" src="/plug4market.png" alt="Plug4Market" />
        </div>
        <div class="flex w-full flex-col gap-4 md:w-1/2">
          <p
            class="whitespace-pre-line text-justify text-xl leading-relaxed text-gray-600 dark:text-white"
          >
            {{
              globalStore.language === 'pt-BR'
                ? 'Interface do sistema de integração de ERPs com marketplaces da TecnoSpeed.'
                : "UI from TecnoSpeed's system for integrating ERP with marketplaces."
            }}
          </p>
          <p
            class="whitespace-pre-line text-justify text-xl leading-relaxed text-gray-600 dark:text-white"
          >
            {{
              globalStore.language === 'pt-BR'
                ? 'Construído com:'
                : 'Built with:'
            }}
          </p>
          <div
            class="flex flex-col flex-wrap items-start gap-x-8 gap-y-4 sm:flex-row sm:items-center"
          >
            <a
              href="https://vuejs.org"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                class="logo"
                viewBox="0 0 128 128"
                width="30"
                height="30"
                data-v-1c32dc7e=""
              >
                <path
                  fill="#42b883"
                  d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                  data-v-1c32dc7e=""
                />
                <path
                  fill="#35495e"
                  d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                  data-v-1c32dc7e=""
                />
              </svg>
              Vue.js 3
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                width="30"
                height="30"
                fill="none"
                version="1.1"
                viewBox="0 0 512 512"
              >
                <title>TypeScript logo</title>
                <rect width="512" height="512" rx="50" fill="#3178c6" />
                <path
                  d="m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z"
                  clip-rule="evenodd"
                  fill="#fff"
                  fill-rule="evenodd"
                  style="fill: #fff"
                />
              </svg>
              TypeScript
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 63 63"
                fill="#38bdf8"
              >
                <path
                  d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                  fill="url(#A)"
                  fill-rule="evenodd"
                />
              </svg>
              Tailwind CSS
            </a>
          </div>
          <Button class="mt-4" type="button">
            <a
              href="https://speedlab.tecnospeed.com.br/plug4market"
              target="_blank"
              class="flex items-center justify-center gap-2 whitespace-pre-line text-justify leading-relaxed text-white"
            >
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                />
              </svg>
              {{
                globalStore.language === 'pt-BR' ? 'Saiba mais' : 'Learn more'
              }}
            </a>
          </Button>
          <Button class="mt-2" type="button">
            <a
              href="https://www.youtube.com/watch?v=HHE_MAep810"
              target="_blank"
              class="group flex items-center justify-center gap-2 whitespace-pre-line text-justify leading-relaxed text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 170 120"
                class="h-6 w-6 text-violet-600 group-hover:text-violet-700"
              >
                <path
                  d="m154 17.5c-1.82-6.73-7.07-12-13.8-13.8-9.04-3.49-96.6-5.2-122 0.1-6.73 1.82-12 7.07-13.8 13.8-4.08 17.9-4.39 56.6 0.1 74.9 1.82 6.73 7.07 12 13.8 13.8 17.9 4.12 103 4.7 122 0 6.73-1.82 12-7.07 13.8-13.8 4.35-19.5 4.66-55.8-0.1-75z"
                  fill="#fff"
                />
                <path d="m105 55-40.8-23.4v46.8z" fill="currentColor" />
              </svg>
              {{
                globalStore.language === 'pt-BR'
                  ? 'Assistir apresentação'
                  : 'Watch presentation'
              }}
            </a>
          </Button>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        PLUG4FOODS
      </h2>
      <div class="flex w-full flex-col gap-8 md:flex-row">
        <div
          class="flex aspect-video w-full items-center justify-center rounded-xl border border-violet-600 bg-white md:w-1/2"
        >
          <img class="h-5/6" src="/plug4foods.png" alt="Plug4Foods" />
        </div>
        <div class="flex w-full flex-col gap-4 md:w-1/2">
          <p
            class="whitespace-pre-line text-justify text-xl leading-relaxed text-gray-600 dark:text-white"
          >
            {{
              globalStore.language === 'pt-BR'
                ? 'Interface do hub de integração de ERPs com food deliveries da TecnoSpeed. Semelhante ao Plug4Market.'
                : "UI from TecnoSpeed's hub for integrating ERP with food deliveries. Similar to Plug4Market."
            }}
          </p>
          <p
            class="whitespace-pre-line text-justify text-xl leading-relaxed text-gray-600 dark:text-white"
          >
            {{
              globalStore.language === 'pt-BR'
                ? 'Construído com:'
                : 'Built with:'
            }}
          </p>
          <div
            class="flex flex-col flex-wrap items-start gap-x-8 gap-y-4 sm:flex-row sm:items-center"
          >
            <a
              href="https://vuejs.org"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                class="logo"
                viewBox="0 0 128 128"
                width="30"
                height="30"
                data-v-1c32dc7e=""
              >
                <path
                  fill="#42b883"
                  d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                  data-v-1c32dc7e=""
                />
                <path
                  fill="#35495e"
                  d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                  data-v-1c32dc7e=""
                />
              </svg>
              Vue.js 3
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                width="30"
                height="30"
                fill="none"
                version="1.1"
                viewBox="0 0 512 512"
              >
                <title>TypeScript logo</title>
                <rect width="512" height="512" rx="50" fill="#3178c6" />
                <path
                  d="m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z"
                  clip-rule="evenodd"
                  fill="#fff"
                  fill-rule="evenodd"
                  style="fill: #fff"
                />
              </svg>
              TypeScript
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 63 63"
                fill="#38bdf8"
              >
                <path
                  d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                  fill="url(#A)"
                  fill-rule="evenodd"
                />
              </svg>
              Tailwind CSS
            </a>
          </div>
          <Button class="mt-4" type="button">
            <a
              href="https://speedlab.tecnospeed.com.br/plug4foods"
              target="_blank"
              class="flex items-center justify-center gap-2 whitespace-pre-line text-justify leading-relaxed text-white"
            >
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                />
              </svg>
              {{
                globalStore.language === 'pt-BR' ? 'Saiba mais' : 'Learn more'
              }}
            </a>
          </Button>
          <Button class="mt-2" type="button">
            <a
              href="https://www.youtube.com/watch?v=HHE_MAep810"
              target="_blank"
              class="group flex items-center justify-center gap-2 whitespace-pre-line text-justify leading-relaxed text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 170 120"
                class="h-6 w-6 text-violet-600 group-hover:text-violet-700"
              >
                <path
                  d="m154 17.5c-1.82-6.73-7.07-12-13.8-13.8-9.04-3.49-96.6-5.2-122 0.1-6.73 1.82-12 7.07-13.8 13.8-4.08 17.9-4.39 56.6 0.1 74.9 1.82 6.73 7.07 12 13.8 13.8 17.9 4.12 103 4.7 122 0 6.73-1.82 12-7.07 13.8-13.8 4.35-19.5 4.66-55.8-0.1-75z"
                  fill="#fff"
                />
                <path d="m105 55-40.8-23.4v46.8z" fill="currentColor" />
              </svg>
              {{
                globalStore.language === 'pt-BR'
                  ? 'Assistir apresentação'
                  : 'Watch presentation'
              }}
            </a>
          </Button>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        {{
          globalStore.language === 'pt-BR'
            ? 'DESIGN SYSTEM TECNOSPEED'
            : 'TECNOSPEED DESIGN SYSTEM'
        }}
      </h2>
      <div class="flex w-full flex-col gap-8 md:flex-row">
        <div
          class="flex aspect-video w-full items-center justify-center rounded-xl border border-violet-600 bg-white md:w-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420.27 95.67"
            class="w-full px-16"
          >
            <g id="Camada_2" data-name="Camada 2">
              <g id="Camada_1-2" data-name="Camada 1">
                <g id="Logo_TecnoSpeed" data-name="Logo TecnoSpeed">
                  <path
                    class="cls-1"
                    fill="#18a4e1"
                    fill-rule="evenodd"
                    d="M363.07,37.08l-6.83,8.44a3.6,3.6,0,0,0-.09,4.54c2.28,2.92,4.55,5.51,6.83,8.43a3.62,3.62,0,0,0,5.7,0c2.27-2.91,4.53-5.61,6.8-8.43a3.63,3.63,0,0,0,0-4.56l-6.87-8.42A3.6,3.6,0,0,0,363.07,37.08Z"
                  />
                </g>
                <path
                  class="cls-1"
                  fill="#18a4e1"
                  fill-rule="evenodd"
                  d="M384.54,5h-2.17a1.16,1.16,0,0,0-.9,1.89Q389.21,16.49,397,26.2q7,8.84,14,17.63a6.45,6.45,0,0,1,0,8L397.07,69.32q-7.79,9.75-15.61,19.48a1.16,1.16,0,0,0,.91,1.89h2.17a6.92,6.92,0,0,0,5.4-2.6l28.81-36a6.91,6.91,0,0,0,0-8.66l-28.8-35.9A6.91,6.91,0,0,0,384.54,5Z"
                />
                <path
                  class="cls-2"
                  fill="#0353b4"
                  fill-rule="evenodd"
                  d="M368.57,0H352.45a3.87,3.87,0,0,0-3.12,6.15c9.58,13.17,20.55,26.34,30.28,39.51a3.68,3.68,0,0,1,0,4.35c-9.73,13.17-20.7,26.34-30.28,39.51a3.87,3.87,0,0,0,3.12,6.15h16.12a7.75,7.75,0,0,0,6-2.9l32.15-40.14a7.72,7.72,0,0,0,0-9.67L374.6,2.89A7.72,7.72,0,0,0,368.57,0Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M25.68,47.8C28.08,35.33,34.29,30,45.49,30c10,0,14.08,5.41,11.94,16.21l-.17.95a4.14,4.14,0,0,1-4.07,3.39H34.82c-.26,5,2.2,7.13,6.81,7.13A17.84,17.84,0,0,0,47,56.86a3.64,3.64,0,0,1,4.64,3.67h0a3.63,3.63,0,0,1-2.14,3.17,22.49,22.49,0,0,1-9.35,1.84C28.35,65.54,23.22,60.34,25.68,47.8Zm10.08-2.73h12.8c.94-4.81-.6-7.21-4.87-7.21S37.09,40.06,35.76,45.07Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M60,47.8C62.37,35.33,68.71,30,80.25,30a17.5,17.5,0,0,1,7.45,1.55,3.53,3.53,0,0,1,1.75,4.33l-.37,1.07A3.54,3.54,0,0,1,84.21,39a12.19,12.19,0,0,0-5.49-1.14c-5.21,0-8,2.94-9.34,9.94s.26,9.87,5.47,9.87a15.26,15.26,0,0,0,5.26-.87,3.55,3.55,0,0,1,4.69,3.53h0a3.5,3.5,0,0,1-1.84,3,20.72,20.72,0,0,1-9.71,2.25C61.71,65.54,57.5,60.28,60,47.8Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M99.09,30.73h.6a4.12,4.12,0,0,1,4.13,4v.07a11.58,11.58,0,0,1,9.8-4.8c8.54,0,11.41,3.87,9.67,12.94l-3.62,18.6a4.12,4.12,0,0,1-4.05,3.35H115a4.13,4.13,0,0,1-4-4.92l2.91-15c.94-4.87-.53-6.67-3.87-6.67-3.87,0-6.53,2.8-8.27,8.07l-3,15.2a4.13,4.13,0,0,1-4.06,3.35H89l6-30.81A4.13,4.13,0,0,1,99.09,30.73Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M126.6,47.8C129,35.33,135.14,30,146.35,30s15.27,5.41,12.87,17.81-8.6,17.74-19.81,17.74S124.13,60.34,126.6,47.8ZM141,57.67c4.8,0,7.47-2.93,8.8-9.87s-.13-9.94-4.93-9.94S137.34,40.8,136,47.8,136.14,57.67,141,57.67Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M160.07,59A3.89,3.89,0,0,1,165,56.75a21.48,21.48,0,0,0,7.05,1.32c3.47,0,5.47-1.33,5.8-3.26,1.13-5.81-17-.8-14.41-14.41,1.4-7.21,6.87-10.41,15.61-10.41a27.71,27.71,0,0,1,7.27,1,3.89,3.89,0,0,1,2.61,5.14h0a3.88,3.88,0,0,1-4.88,2.3,18.64,18.64,0,0,0-5.87-.95c-3.06,0-4.93.87-5.27,2.87-1.2,6,17.08.67,14.35,14.68-1.41,7.2-6.87,10.53-15.81,10.53a31.92,31.92,0,0,1-8.91-1.23A3.88,3.88,0,0,1,160,59.2Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M198.92,30.73h1.21A3.88,3.88,0,0,1,204,34.46h0A13.58,13.58,0,0,1,214.4,30c9.81,0,13.28,5.34,10.88,17.81s-7.94,17.74-17.75,17.74c-4.13,0-6.93-1.33-8.67-3.93L196.6,72.55a4.13,4.13,0,0,1-4,3.33h-5.68l8.25-42A3.87,3.87,0,0,1,198.92,30.73ZM200.6,52.4c.26,3.47,2.4,5.27,6.2,5.27,5.07,0,7.74-2.93,9.07-9.87s-.2-9.94-5.2-9.94c-3.8,0-6.67,2-8.41,5.94Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M228.08,47.8C230.48,35.33,236.69,30,247.89,30c10,0,14.08,5.41,11.94,16.21l-.25,1.35a3.65,3.65,0,0,1-3.58,3H237.22c-.27,5,2.2,7.13,6.8,7.13a17.86,17.86,0,0,0,5.39-.81,3.63,3.63,0,0,1,4.64,3.67h0a3.64,3.64,0,0,1-2.15,3.17,22.41,22.41,0,0,1-9.34,1.84C230.75,65.54,225.61,60.34,228.08,47.8Zm10.07-2.73H251c.94-4.81-.6-7.21-4.87-7.21S239.49,40.06,238.15,45.07Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M262.37,47.8C264.77,35.33,271,30,282.18,30c10,0,14.08,5.41,11.94,16.21l-.25,1.35a3.65,3.65,0,0,1-3.59,3H271.51c-.27,5,2.2,7.13,6.8,7.13a17.86,17.86,0,0,0,5.39-.81,3.63,3.63,0,0,1,4.64,3.67h0a3.64,3.64,0,0,1-2.15,3.17,22.41,22.41,0,0,1-9.34,1.84C265,65.54,259.9,60.34,262.37,47.8Zm10.07-2.73h12.81c.93-4.81-.6-7.21-4.87-7.21S273.78,40.06,272.44,45.07Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M296.66,47.8C299.06,35.33,304.6,30,314.4,30c4.27,0,7,1.54,8.61,4.27L325.23,23a4.14,4.14,0,0,1,4.06-3.34H335l-8.23,42.2a3.76,3.76,0,0,1-3.68,3h-1.37a3.75,3.75,0,0,1-3.74-3.47h0a14.4,14.4,0,0,1-10.47,4.13C297.66,65.54,294.26,60.21,296.66,47.8Zm14.61,9.87a8.08,8.08,0,0,0,8.5-6.8c.61-3,1.21-6.07,1.82-9.1a8.88,8.88,0,0,0-6.45-3.91A7.79,7.79,0,0,0,310.67,39c-2.3,1.44-3.74,4.29-4.61,8.81C304.73,54.74,306.2,57.67,311.27,57.67Z"
                />
                <path
                  class="cls-3"
                  fill="#0353b4"
                  d="M25.33,32.16h0a3.78,3.78,0,0,0-3.08-1.36H14.43L15.63,24a3.91,3.91,0,0,0-3.56-4.57H12a5.16,5.16,0,0,0-3.33,1.23,4.93,4.93,0,0,0-1.83,2.89L5.39,30.79H1.79a1.08,1.08,0,0,0-1.07.86L.08,34.71a5.16,5.16,0,0,0-.08.84,3.6,3.6,0,0,0,.78,2.28,3.88,3.88,0,0,0,2.83,1.4L.72,52.79a19.17,19.17,0,0,0-.45,3.92,8.26,8.26,0,0,0,2.37,6.35c1.93,1.82,5.19,2.71,10,2.71a29.23,29.23,0,0,0,3.8-.27,5.64,5.64,0,0,0,4.8-4.41,4.28,4.28,0,0,0,.12-1c0-1.13-.52-3-4-3h-.16a22.06,22.06,0,0,1-3.25.26c-2.83,0-3.72-.47-4-.68A2.11,2.11,0,0,1,9.45,55a8.59,8.59,0,0,1,.22-1.8l3-14H24.33a1.1,1.1,0,0,0,1.07-.86l.67-3.05a4.91,4.91,0,0,0,.08-.86A3.75,3.75,0,0,0,25.33,32.16Z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="flex w-full flex-col gap-4 md:w-1/2">
          <p
            class="whitespace-pre-line text-justify text-xl leading-relaxed text-gray-600 dark:text-white"
          >
            {{
              globalStore.language === 'pt-BR'
                ? 'Principal responsável pelo Design System da empresa, que contempla diversos documentos  teóricos bem como componentes reutilizáveis e videoaulas.'
                : "Main responsible for the company's Design System which includes several theoretical documents as well as reusable components and video lessons."
            }}
          </p>
          <p
            class="whitespace-pre-line text-justify text-xl leading-relaxed text-gray-600 dark:text-white"
          >
            {{
              globalStore.language === 'pt-BR'
                ? 'Construído com:'
                : 'Built with:'
            }}
          </p>
          <div
            class="flex flex-col flex-wrap items-start gap-x-8 gap-y-4 sm:flex-row sm:items-center"
          >
            <a
              href="https://vuejs.org"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                class="logo"
                viewBox="0 0 128 128"
                width="30"
                height="30"
                data-v-1c32dc7e=""
              >
                <path
                  fill="#42b883"
                  d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                  data-v-1c32dc7e=""
                />
                <path
                  fill="#35495e"
                  d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                  data-v-1c32dc7e=""
                />
              </svg>
              Vue.js 3
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                width="30"
                height="30"
                fill="none"
                version="1.1"
                viewBox="0 0 512 512"
              >
                <title>TypeScript logo</title>
                <rect width="512" height="512" rx="50" fill="#3178c6" />
                <path
                  d="m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z"
                  clip-rule="evenodd"
                  fill="#fff"
                  fill-rule="evenodd"
                  style="fill: #fff"
                />
              </svg>
              TypeScript
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              class="text-md flex items-center gap-2 whitespace-nowrap text-justify font-semibold text-gray-600 dark:text-white md:text-sm lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 63 63"
                fill="#38bdf8"
              >
                <path
                  d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                  fill="url(#A)"
                  fill-rule="evenodd"
                />
              </svg>
              Tailwind CSS
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
