<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col-reverse items-center justify-center gap-8 px-8 md:flex-row md:justify-between md:px-12"
  >
    <div class="flex flex-col gap-12">
      <div>
        <h1
          class="text-3xl font-bold text-gray-600 dark:text-white sm:text-5xl md:text-7xl"
        >
          {{ globalStore.language === 'pt-BR' ? 'Olá!' : 'Hi there!' }}
        </h1>
        <h1
          class="text-3xl font-bold text-gray-600 dark:text-white sm:text-5xl md:text-7xl"
        >
          {{ globalStore.language === 'pt-BR' ? 'Eu sou' : "I'm" }}
          <span class="text-violet-600 dark:text-violet-500">
            Danilo Ribeiro
          </span>
        </h1>
      </div>
      <div class="flex flex-col gap-6">
        <h2
          class="text-md font-bold tracking-wider text-gray-600 dark:text-white sm:text-xl md:text-3xl"
        >
          {{
            globalStore.language === 'pt-BR'
              ? 'DESENVOLVEDOR FRONT-END'
              : 'FRONT-END DEVELOPER'
          }}
        </h2>
        <ul class="flex flex-wrap gap-6 md:mt-0">
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
              Vue.js
            </a>
          </li>
          <li>
            <a
              href="https://nuxt.com"
              target="_blank"
              class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
            >
              <svg
                class="h-7 w-8 scale-125"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z"
                  fill="#00DC82"
                />
              </svg>
              Nuxt
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
                class="h-7 w-7 min-w-[1.75rem] rotate-180 scale-[-80%]"
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
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h3
          class="text-md font-bold tracking-wider text-gray-600 dark:text-white sm:text-lg md:text-xl"
        >
          {{ globalStore.language === 'pt-BR' ? 'CONTATO' : 'CONTACT ME' }}
        </h3>
        <ul class="flex gap-8 sm:ml-0 sm:gap-6 sm:pt-2">
          <li class="flex items-center justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/daniloribeiro00/"
              target="_blank"
              class="group flex items-center gap-2 whitespace-pre-line rounded-md text-justify text-lg font-semibold text-gray-600 underline-offset-2 outline-none ring-violet-600 ring-offset-2 ring-offset-white transition-all duration-200 ease-in-out hover:text-violet-600 hover:underline focus:ring dark:text-white dark:ring-offset-zinc-800 dark:hover:text-violet-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                class="h-7 w-7 text-[#3375b0] transition-all group-hover:brightness-[80%] dark:text-white dark:group-hover:text-violet-500"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M595 5109 c-151 -22 -270 -84 -386 -199 -69 -68 -94 -102 -127 -170 -84 -171 -77 29 -77 -2180 0 -2209 -7 -2009 77 -2180 59 -120 178 -239 298 -298 171 -84 -29 -77 2180 -77 2209 0 2009 -7 2180 77 68 33 102 59 171 127 68 69 94 103 127 171 84 171 77 -29 77 2180 0 2209 7 2009 -77 2180 -59 120 -178 239 -298 298 -172 84 35 77 -2145 78 -1072 1 -1967 -2 -2000 -7z m948 -969 c200 -62 335 -282 298 -485 -50 -275 -326 -435 -587 -342 -91 33 -190 121 -235 208 -111 218 -24 485 193 595 95 48 222 57 331 24z m1964 -1011 c370 -51 574 -294 629 -749 10 -86 13 -273 14 -738 l0 -624 -29 -29 -29 -29 -286 0 -286 0 -32 29 -33 29 -5 614 c-5 591 -6 615 -26 675 -58 170 -154 243 -319 243 -167 0 -281 -91 -343 -274 l-27 -81 -5 -588 -5 -589 -33 -29 -32 -29 -276 0 -276 0 -29 29 -29 29 0 1011 0 1011 29 32 29 33 269 3 c254 2 270 1 301 -18 43 -26 52 -54 52 -157 l0 -85 40 51 c149 188 422 274 737 230z m-1822 -35 c68 -32 65 25 65 -1064 0 -851 -2 -985 -15 -1010 -31 -59 -35 -60 -322 -60 -182 0 -270 4 -288 12 -57 26 -55 -19 -55 1063 0 685 3 1003 11 1016 5 11 25 29 42 39 29 18 52 20 280 20 206 0 255 -3 282 -16z"
                  />
                </g>
              </svg>
              LinkedIn
            </a>
          </li>
          <li class="flex items-center justify-center sm:justify-start">
            <a
              href="https://github.com/daniloribeiro00"
              target="_blank"
              class="group flex items-center gap-2 whitespace-pre-line rounded-md text-justify text-lg font-semibold text-gray-600 underline-offset-2 outline-none ring-violet-600 ring-offset-2 ring-offset-white transition-all duration-200 ease-in-out hover:text-violet-600 hover:underline focus:ring dark:text-white dark:ring-offset-zinc-800 dark:hover:text-violet-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 text-[#1B1F23] transition-all group-hover:text-gray-700 dark:text-white dark:group-hover:text-violet-500"
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
          <li class="-mt-0.5 flex items-center justify-center sm:justify-start">
            <a
              href="mailto:danilo@duarteribeiro.com.br"
              target="_blank"
              class="flex items-center gap-2 whitespace-pre-line rounded-md text-justify text-lg font-semibold text-gray-600 underline-offset-2 outline-none ring-violet-600 ring-offset-2 ring-offset-white transition-all duration-200 ease-in-out hover:text-violet-600 hover:underline focus:ring dark:text-white dark:ring-offset-zinc-800 dark:hover:text-violet-500"
            >
              <svg
                class="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              Email
            </a>
          </li>
        </ul>
      </div>
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
