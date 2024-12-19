<script setup lang="ts">
import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();

const myAge = () => {
  const now = new Date();
  const birth = new Date(2000, 11, 13);
  const age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
    return age - 1;
  }
  return age;
};
</script>

<template>
  <main
    class="mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col items-center justify-center gap-12 px-8 sm:py-12 md:px-12"
  >
    <div class="flex w-full flex-col gap-2">
      <h2
        class="text-xl font-bold text-violet-600 dark:text-violet-500 sm:text-2xl"
      >
        {{ globalStore.language === 'pt-BR' ? 'RESUMO' : 'TL;DR' }}
      </h2>
      <p
        class="whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:text-lg sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? `Danilo Duarte Ribeiro, ${myAge()} anos, nascido em Volta Redonda - RJ, Brasil.\nDesenvolvedor front-end, amante de UI/UX e design, entusiasta de tecnologia e inovação, nerd e apreciador de café. ☕️`
            : `Danilo Duarte Ribeiro, ${myAge()} years old, born in Volta Redonda, Rio de Janeiro, Brazil.\nFront-end developer, UI/UX and design lover, technology and innovation enthusiast, nerd and coffee lover. ☕️`
        }}
      </p>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2
        class="text-xl font-bold text-violet-600 dark:text-violet-500 sm:text-2xl"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'EXPERIÊNCIA PROFISSIONAL'
            : 'PROFESSIONAL EXPERIENCE'
        }}
      </h2>
      <div class="flex gap-2">
        <p
          class="whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:text-lg sm:leading-loose"
        >
          {{ globalStore.language === 'pt-BR' ? 'Saiba mais:' : 'Learn more:' }}
        </p>
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
      </div>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2
        class="text-xl font-bold text-violet-600 dark:text-violet-500 sm:text-2xl"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'FORMAÇÃO ACADÊMICA'
            : 'EDUCATIONAL BACKGROUND'
        }}
      </h2>
      <p
        class="whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:text-lg sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Bacharel em Sistemas de Informação pelo '
            : 'Bachelor o Information Systems at'
        }}
        <a
          href="https://www.unifoa.edu.br"
          target="_blank"
          class="font-semibold transition-colors hover:text-violet-600 dark:font-bold dark:hover:text-violet-500"
        >
          {{
            globalStore.language === 'pt-BR'
              ? 'UniFOA (Centro Universitário de Volta Redonda - RJ)'
              : 'UniFOA'
          }}
        </a>
        {{
          globalStore.language === 'pt-BR'
            ? '.'
            : ' in Volta Redonda, Rio de Janeiro, Brazil.'
        }}
      </p>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2
        class="text-xl font-bold text-violet-600 dark:text-violet-500 sm:text-2xl"
      >
        BIO
      </h2>
      <p
        class="whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:text-lg sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Sempre fui fascinado por tecnologia desde pequeno. Por diversas vezes mexia nas "entranhas" do Windows XP do computador dos meus pais na época e eles sempre tinham que pagar para formatar a máquina porque não conseguíamos reverter o que eu fazia...\n\nAté que numa dessas ocasiões, minha mãe disse que eu deveria aprender a como realmente mexer em computadores e me matriculou num curso de "Montagem e Manutenção de Computadores" em 2014. Me interessei tanto que iniciei minha graduação em Sistemas de Informação logo assim que terminei meu ensino médio, em 2018.\n\nNo início da faculdade era difícil saber qual área da tecnologia seguir, mas ao longo do curso, aprendi muita coisa e consegui traçar um caminho pelo qual queria trilhar. Sempre fui uma pessoa que valoriza muito a estética e o visual das coisas, sempre gostei muito de cores e de desenhar (mesmo não sendo nada bom rsrs), e cheguei a fazer pequenos trabalhos de artes gráficas e algumas edições com Photoshop e outras coisas.\n\nEntão escolhi seguir como desenvolvedor front-end e, desde então, estudei bastante e não me arrependendo nem um pouco. Sou atencioso, detalhista e extremamente perfeccionista, e acredito que isso veio a calhar, especialmente na atenção aos detalhes de interfaces e na experiência final do usuário.\n\nAcredito que construir boas interfaces que proporcionem ótimas UI e UX não é uma tarefa simples e não requer apenas habilidades técnicas; é necessário pensar fora da caixa e se colocar de fato no lugar do usuário para que ele se sinta satisfeito e tenha prazer em utilizar o produto final.\n\nPor isso, esse tornou-se o meu foco, e busco a cada dia mais me aprofundar no assunto e desenvolver habilidades que me permitam atingir esse objetivo.'
            : `I've always been fascinated by technology since I was very young. Several times I messed with the depths of Windows XP on my parents' computer at the time and they always had to pay to reset the machine because we couldn't fix what I've done...\n\nIn one of those occasions, my mother said that I really should learn how to work with computers and enrolled me in a "Hardware and Maintenance of Computers" course in 2014. I got so interested that I ended up starting my degree in Information Systems as soon as I finished high school in 2018.\n\nAt the beginning of the college it was difficult to know which area of technology to follow, but throughout the course I learned a lot and managed to trace a path I wanted to take. I've always been a person who highly values the design and aesthetics of things, I've always liked colors and drawing a lot (even though I'm definitely not good in it lol), and I got to do small graphic arts works and some edits with Photoshop and a few other things.\n\nSo I chose to be a front-end developer and since then I've studied a lot and I don't regret it one bit. I'm attentive, detail-oriented and extremely perfectionist and I believe this came in handy, especially in the attention to detail of interfaces and the final user experience.\n\nI believe that building good interfaces that provide great UI and UX is not a simple task that only requires technical skills; it's necessary to think outside the box and actually put yourself in the user's shoes so that they feel satisfied and have pleasure when using the final result.\n\nThat's why this has become my main goal, and I seek to delve deeper in it every day and develop skills that allow me to achieve this goal.`
        }}
      </p>
    </div>
  </main>
</template>
