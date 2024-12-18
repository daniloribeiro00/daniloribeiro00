<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();
</script>

<template>
  <main
    class="sm:flex-row md:justify-between md:px-12 mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col-reverse items-center justify-center gap-8 px-6"
  >
    <div class="flex h-full w-full flex-col gap-4">
      <p
        class="sm:text-justify sm:text-xl sm:leading-loose whitespace-pre-line text-center text-lg leading-relaxed text-gray-600 dark:text-white"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Fique à vontade para entrar em contato comigo :)'
            : 'Feel free to contact me :)'
        }}
      </p>
      <ul class="sm:ml-0 sm:gap-6 sm:pt-2 -ml-2 flex flex-col gap-8 pt-6">
        <li class="sm:justify-start flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/daniloribeiro00/"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              class="h-7 w-7"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#3375b0"
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
        <li class="sm:justify-start flex items-center justify-center">
          <a
            href="https://github.com/daniloribeiro00"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-[#1B1F23] dark:text-white"
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
        <li class="sm:justify-start -mt-0.5 flex items-center justify-center">
          <a
            href="mailto:danilo@duarteribeiro.com.br"
            target="_blank"
            class="flex items-center gap-2 whitespace-pre-line text-justify text-lg font-semibold text-gray-600 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-500"
          >
            <svg
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
            Email
          </a>
        </li>
      </ul>
    </div>
    <div>
      <img
        class="md:h-80 md:w-80 h-40 w-40 max-w-[none] rounded-full object-cover xs:h-60 xs:w-60"
        src="https://avatars.githubusercontent.com/u/68981163?"
        alt="Danilo Ribeiro"
      />
    </div>
  </main>
</template>
