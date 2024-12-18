<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="sm:gap-12 sm:py-12 md:px-12 mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col items-center justify-center gap-y-12 px-8"
  >
    <div class="flex h-full w-full flex-col gap-4">
      <h2
        class="sm:text-2xl text-xl font-bold text-violet-600 dark:text-violet-500"
      >
        {{ globalStore.language === 'pt-BR' ? 'LINGUAGENS' : 'LANGUAGES' }}
      </h2>
      <ul
        class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid grid-cols-1 gap-x-4 gap-y-6 xs:grid-cols-2"
      >
        <li>
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 630 630"
              class="h-7 w-7 min-w-[1.75rem]"
            >
              <rect
                width="630"
                height="630"
                fill="#f7df1e"
              />
              <path
                d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
              />
            </svg>
            JavaScript
          </a>
        </li>
        <li>
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              class="h-7 w-7 min-w-[1.75rem]"
              fill="none"
              version="1.1"
              viewBox="0 0 512 512"
            >
              <rect
                width="512"
                height="512"
                rx="50"
                fill="#3178c6"
              />
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
        </li>
      </ul>
    </div>
    <div class="flex h-full w-full flex-col gap-4">
      <h2
        class="sm:text-2xl text-xl font-bold text-violet-600 dark:text-violet-500"
      >
        FRAMEWORKS / LIBRARIES
      </h2>
      <ul
        class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid grid-cols-1 gap-x-4 gap-y-6 xs:grid-cols-2"
      >
        <li>
          <a
            href="https://vuejs.org"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              class="h-7 w-7 min-w-[1.75rem]"
              viewBox="0 0 128 128"
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
        </li>
        <li>
          <a
            href="https://reactjs.org"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 min-w-[1.75rem]"
              viewBox="-11.5 -10.23174 23 20.46348"
            >
              <circle
                cx="0"
                cy="0"
                r="2.05"
                fill="#61dafb"
              />
              <g
                stroke="#61dafb"
                stroke-width="1"
                fill="none"
              >
                <ellipse
                  rx="11"
                  ry="4.2"
                />
                <ellipse
                  rx="11"
                  ry="4.2"
                  transform="rotate(60)"
                />
                <ellipse
                  rx="11"
                  ry="4.2"
                  transform="rotate(120)"
                />
              </g>
            </svg>
            React
          </a>
        </li>
        <li>
          <a
            href="https://nextjs.org"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="mt-0.5 h-7 w-7 min-w-[1.75rem] text-black dark:text-white"
              viewBox="0 0 207 124"
              version="1.1"
              fill="currentColor"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="currentColor"
                fill-rule="evenodd"
              >
                <g
                  id="Black-Next.js"
                  transform="translate(-247.000000, -138.000000)"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <g
                    id="next-black"
                    transform="translate(247.000000, 138.000000)"
                  >
                    <g id="EXT-+-Type-something">
                      <path
                        d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                        id="EXT"
                      />
                      <polygon
                        id="Type-something"
                        points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                      />
                    </g>
                    <path
                      d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                      id=".JS"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Next.js
          </a>
        </li>
      </ul>
    </div>
    <div class="flex h-full w-full flex-col gap-4">
      <h2
        class="sm:text-2xl text-xl font-bold text-violet-600 dark:text-violet-500"
      >
        AGILE
      </h2>
      <ul
        class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid grid-cols-1 gap-x-4 gap-y-6 xs:grid-cols-2"
      >
        <li>
          <a
            :href="
              globalStore.language === 'pt-BR'
                ? 'https://www.atlassian.com/br/agile/kanban'
                : 'https://www.atlassian.com/agile/scrum'
            "
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              class="h-7 w-7 min-w-[1.75rem]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
              />
            </svg>
            Kanban
          </a>
        </li>
        <li>
          <a
            :href="
              globalStore.language === 'pt-BR'
                ? 'https://www.atlassian.com/br/agile/scrum'
                : 'https://www.atlassian.com/agile/scrum'
            "
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              class="mb-0.5 h-7 w-7 min-w-[1.75rem]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              />
            </svg>
            Scrum
          </a>
        </li>
      </ul>
    </div>
    <div class="flex h-full w-full flex-col gap-4">
      <h2
        class="sm:text-2xl text-xl font-bold text-violet-600 dark:text-violet-500"
      >
        {{ globalStore.language === 'pt-BR' ? 'OUTROS' : 'OTHERS' }}
      </h2>
      <ul
        class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid grid-cols-1 gap-x-4 gap-y-6 xs:grid-cols-2"
      >
        <li>
          <a
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
            :href="
              globalStore.language === 'pt-BR'
                ? 'https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos?gclid=Cj0KCQjwmuiTBhDoARIsAPiv6L9Bd3281c2nKnTKuntbA7W87rXx0h6SNRct-1e5rLtJr7LzraqnRhUaAhwLEALw_wcB'
                : 'https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/'
            "
            target="_blank"
          >
            <svg
              class="h-7 w-7 min-w-[1.75rem]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clip-rule="evenodd"
              />
            </svg>
            UI/UX
          </a>
        </li>
        <li>
          <a
            href="https://git-scm.com"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              class="h-7 w-7 min-w-[1.75rem]"
              viewBox="0 0 97 97"
              enable-background="new 0 0 97 97"
              xml:space="preserve"
            >
              <g>
                <path
                  fill="#F05133"
                  d="M92.71,44.408L52.591,4.291c-2.31-2.311-6.057-2.311-8.369,0l-8.33,8.332L46.459,23.19   c2.456-0.83,5.272-0.273,7.229,1.685c1.969,1.97,2.521,4.81,1.67,7.275l10.186,10.185c2.465-0.85,5.307-0.3,7.275,1.671   c2.75,2.75,2.75,7.206,0,9.958c-2.752,2.751-7.208,2.751-9.961,0c-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997   c0.67,0.332,1.303,0.774,1.861,1.332c2.75,2.75,2.75,7.206,0,9.959c-2.75,2.749-7.209,2.749-9.957,0c-2.75-2.754-2.75-7.21,0-9.959   c0.68-0.679,1.467-1.193,2.307-1.537V36.369c-0.84-0.344-1.625-0.853-2.307-1.537c-2.083-2.082-2.584-5.14-1.516-7.698   L31.798,16.715L4.288,44.222c-2.311,2.313-2.311,6.06,0,8.371l40.121,40.118c2.31,2.311,6.056,2.311,8.369,0L92.71,52.779   C95.021,50.468,95.021,46.719,92.71,44.408z"
                />
              </g>
            </svg>
            Git
          </a>
        </li>
        <li>
          <a
            href="http://github.com"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 min-w-[1.75rem] text-[#1B1F23] dark:text-white"
              viewBox="0 0 1024 1024"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
                fill="currentColor"
              />
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              data-v-5a86f8c0=""
              class="h-7 w-7 min-w-[1.75rem]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <path
                d="M31.4618 12.7787L31.417 12.6641L27.0667 1.31308C26.9783 1.09046 26.8218 0.90145 26.6197 0.773028C26.416 0.644476 26.1775 0.582308 25.937 0.595107C25.6965 0.607906 25.4659 0.695039 25.277 0.844481C25.0899 0.994513 24.955 1.1998 24.8915 1.43106L21.9503 10.4324H10.0509L7.10976 1.43106C7.04625 1.1998 6.91133 0.994513 6.72425 0.844481C6.53618 0.694035 6.30572 0.606246 6.06523 0.593431C5.82473 0.580616 5.58625 0.64342 5.38326 0.773028C5.18023 0.900924 5.02312 1.09005 4.9346 1.31308L0.579314 12.679L0.534448 12.792C-0.0907536 14.429 -0.167604 16.2247 0.315452 17.9091C0.798508 19.5935 1.81536 21.0756 3.21309 22.1324L3.22971 22.144L3.26793 22.1739L9.90306 27.1407L13.1832 29.625L15.1773 31.1354C15.4115 31.3124 15.6971 31.4082 15.9907 31.4082C16.2842 31.4082 16.5698 31.3124 16.8041 31.1354L18.7981 29.625L22.0799 27.1407L28.7533 22.144L28.7715 22.1307C30.174 21.0749 31.1949 19.5916 31.6802 17.9045C32.1656 16.2175 32.0889 14.4184 31.4618 12.7787Z"
                fill="#E24329"
              />
              <path
                d="M31.462 12.7787L31.4172 12.6641C29.2955 13.1013 27.2962 14.0005 25.5614 15.2978L16.0083 22.5378C19.2652 25.0005 22.1001 27.1407 22.1001 27.1407L28.7734 22.144L28.7917 22.1307C30.1907 21.0723 31.2076 19.5877 31.6893 17.9009C32.171 16.214 32.0912 14.4163 31.462 12.7787Z"
                fill="#FC6D26"
              />
              <path
                d="M9.9082 27.1407L13.1834 29.625L15.1774 31.1354C15.4117 31.3124 15.6972 31.4082 15.9908 31.4082C16.2844 31.4082 16.57 31.3124 16.8042 31.1354L18.7982 29.625L22.0801 27.1407C22.0801 27.1407 19.2452 25.0005 15.9883 22.5378L9.9082 27.1407Z"
                fill="#FCA326"
              />
              <path
                d="M6.43513 15.3045C4.70076 14.0067 2.70123 13.108 0.579333 12.6724L0.534467 12.7854C-0.0923403 14.4232 -0.170036 16.2203 0.313079 17.9061C0.796194 19.5919 1.81396 21.0751 3.21311 22.1324L3.22973 22.144L3.26795 22.1739L9.90307 27.1407L16.0081 22.5378L6.43513 15.3045Z"
                fill="#FC6D26"
              />
            </svg>
            GitLab
          </a>
        </li>
        <li>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="h-7 w-7 min-w-[1.75rem]"
              viewBox="0 0 54 33"
            >
              <g clip-path="url(#prefix__clip0)">
                <path
                  fill="#38bdf8"
                  fill-rule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clip-rule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path
                    fill="#fff"
                    d="M0 0h54v32.4H0z"
                  />
                </clipPath>
              </defs>
            </svg>
            Tailwind CSS
          </a>
        </li>
      </ul>
    </div>
    <div class="col-span-2 flex h-full w-full flex-col gap-4">
      <h2
        class="sm:text-2xl text-xl font-bold text-violet-600 dark:text-violet-500"
      >
        {{ globalStore.language === 'pt-BR' ? 'INTERESSES' : 'INTERESTS' }}
      </h2>
      <ul
        class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid grid-cols-1 gap-x-4 gap-y-6 xs:grid-cols-2"
      >
        <li>
          <a
            href="https://flutter.dev"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="h-7 w-7 min-w-[1.75rem]"
              viewBox="0 0 65 65"
            >
              <g transform="matrix(.061615 0 0 .061615 -1.430818 -1.2754)">
                <defs>
                  <path
                    id="A"
                    d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                  />
                </defs>
                <clipPath id="B"><use xlink:href="#A" /></clipPath>
                <g clip-path="url(#B)">
                  <path
                    d="M360.3 779.7L520 939.5 959.4 500H639.9z"
                    fill="#39cefd"
                  />
                </g>
                <defs>
                  <path
                    id="C"
                    d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                  />
                </defs>
                <clipPath id="D"><use xlink:href="#C" /></clipPath>
                <path
                  clip-path="url(#D)"
                  d="M639.9 20.7h319.5l-679 679.1L120.6 540z"
                  fill="#39cefd"
                />
                <defs>
                  <path
                    id="E"
                    d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                  />
                </defs>
                <clipPath id="F"><use xlink:href="#E" /></clipPath>
                <path
                  clip-path="url(#F)"
                  d="M520 939.5l119.9 119.8h319.5L679.8 779.7z"
                  fill="#03569b"
                />
                <defs>
                  <path
                    id="G"
                    d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                  />
                </defs>
                <clipPath id="H"><use xlink:href="#G" /></clipPath>
                <linearGradient
                  id="I"
                  gradientUnits="userSpaceOnUse"
                  x1="566.635"
                  y1="970.339"
                  x2="685.65"
                  y2="851.324"
                >
                  <stop
                    offset="0"
                    stop-color="#1a237e"
                    stop-opacity=".4"
                  />
                  <stop
                    offset="1"
                    stop-color="#1a237e"
                    stop-opacity="0"
                  />
                </linearGradient>
                <path
                  clip-path="url(#H)"
                  d="M757 857.4l-77.2-77.7L520 939.5z"
                  fill="url(#I)"
                />
                <defs>
                  <path
                    id="J"
                    d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                  />
                </defs>
                <clipPath id="K"><use xlink:href="#J" /></clipPath>
                <g clip-path="url(#K)">
                  <path
                    d="M360.282 779.645L520.086 619.84 679.9 779.645 520.086 939.45z"
                    fill="#16b9fd"
                  />
                </g>
                <radialGradient
                  id="L"
                  cx="7824.659"
                  cy="-2855.979"
                  r="5082.889"
                  gradientTransform="matrix(0.25,0,0,-0.25,-1812,-622.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0"
                    stop-color="#fff"
                    stop-opacity=".1"
                  />
                  <stop
                    offset="1"
                    stop-color="#fff"
                    stop-opacity="0"
                  />
                </radialGradient>
                <path
                  d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
                  fill="url(#L)"
                />
              </g>
            </svg>
            Flutter
          </a>
        </li>
        <li>
          <a
            href="https://v3.nuxtjs.org"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mb-0.5 h-7 w-7 min-w-[1.75rem]"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z"
                fill="#80EEC0"
              />
              <path
                d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z"
                fill="#00DC82"
              />
            </svg>
            Nuxt.js
          </a>
        </li>
        <li>
          <a
            href="https://aws.amazon.com"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              class="mt-0.5 w-7 min-w-[1.75rem]"
              viewBox="0 0 304 182"
              xml:space="preserve"
            >
              <g>
                <path
                  class="st0 text-[#252f3e] dark:text-white"
                  fill="currentColor"
                  d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2   c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8   c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8   c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4   c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1   c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6   c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7   c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6   C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4   c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1   h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5   c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1   c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8   c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3   c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5   c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1   c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1   c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2   c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1   c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6   c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z"
                />
                <g>
                  <path
                    class="st1"
                    fill="#ff9900"
                    d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4    c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z"
                  />
                  <path
                    class="st1"
                    fill="#ff9900"
                    d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5    c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z"
                  />
                </g>
              </g>
            </svg>
            AWS
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>
