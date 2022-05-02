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
    class="mb-10 flex h-full w-full max-w-[1200px] flex-1 flex-col items-center justify-center gap-8 px-8 sm:py-12 md:px-12"
  >
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        {{ globalStore.language === 'pt-BR' ? 'RESUMO' : 'TL;DR' }}
      </h2>
      <p
        class="whitespace-pre-line text-justify text-lg leading-relaxed text-gray-600 dark:text-white sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? `Danilo Duarte Ribeiro, ${myAge()} anos, nascido em Volta Redonda - RJ, Brasil.\nDesenvolvedor front-end, amante de UI/UX e design, entusiasta de tecnologia e inovação, geek e apaixonado por café. ☕️`
            : `Danilo Duarte Ribeiro, ${myAge()} years old, born in Volta Redonda, Rio de Janeiro, Brazil.\nFront-end developer, UI/UX and design lover, technology and innovation enthusiast, geek and in love with coffee. ☕️`
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
        class="whitespace-pre-line text-justify text-lg leading-relaxed text-gray-600 dark:text-white sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Bacharel em Sistemas de Informação pelo UniFOA (Centro Universitário de Volta Redonda - RJ).'
            : 'Bachelor in Information Systems at UniFOA (Volta Redonda University Center) in Brazil.'
        }}
      </p>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        {{
          globalStore.language === 'pt-BR'
            ? 'EXPERIÊNCIA PROFISSIONAL'
            : 'PROFESSIONAL EXPERIENCE'
        }}
      </h2>
      <p
        class="whitespace-pre-line text-justify text-lg leading-relaxed text-gray-600 dark:text-white sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Desenvolvedor Front-End Júnior na'
            : 'Junior Front-End Developer at'
        }}
        <a
          href="https://www.linkedin.com/company/tecnospeed-ti/"
          target="_blank"
          class="font-semibold"
        >
          TecnoSpeed</a
        >.
      </p>
      <span
        class="ml-8 whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Responsável pela criação, manutenção e aprimoramento de aplicações front-web no SpeedLab, o laboratório de inovação da TecnoSpeed, utilizando Vue.js 3 e Tailwind CSS, seguindo o conceito de MVP (Minimum Viable Product) até a estruturação e lançamento do produto.\nAlém disso, responsável também por manter bibliotecas internas no NPM local da empresa bem como um dos principais contribuintes na criação do design system da TecnoSpeed.'
            : "Responsible for creating, maintaining and improving front-web application in the TecnoSpeed's innovation lab using Vue.js 3 and Tailwind CSS following the MVP (Minimum Viable Product) until the later structuring and release of the product.\nIn addition, also responsible for maintaining internal libraries in the local NPM and one of the main creators of the TecnoSpeed's design system."
        }}
      </span>
    </div>
    <div class="flex w-full flex-col gap-2">
      <h2 class="text-2xl font-bold text-violet-600 dark:text-violet-500">
        BIO
      </h2>
      <p
        class="whitespace-pre-line text-justify text-lg leading-relaxed text-gray-600 dark:text-white sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Sempre fui fascinado por tecnologia desde pequeno. Por diversas vezes mexia nas "entranhas"" do Windows XP do computador dos meus pais na época e eles sempre tinham que pagar para formatar a máquina porque não conseguíamos reverter o que eu fazia...\nAté que numa dessas ocasiões, minha mãe me disse que eu deveria aprender a como realmente mexer em computadores e me matriculou num curso de "Hardware, Montagem e Manutenção de Computadores" em 2014. Me interessei tanto que acabei iniciando minha graduação em Sistemas de Informação logo assim que terminei meu ensino médio, em 2018.\nNo início da faculdade era difícil saber por que área da tecnologia seguir, mas ao longo do curso, aprendi muita coisa e conseguir traçar um caminho pelo qual queria trilhar. Sempre fui uma pessoa que valoriza muito a estética e o visual das coisas, sempre gostei muito de cores e de desenhar (mesmo não sendo nada bom rsrsrs), e cheguei a fazer pequenos trabalhos de artes gráficas e algumas edições com Photoshop e algumas outras coisas.\nEntão escolhi seguir como desenvolvedor front-end e, desde então, estudei bastante e não me arrependendo nem um pouquinho 😜. Sou atencioso, detalhista e extremamente perfecionista (meus amigos dizem que tenho TOC rsrsrs) e acredito que isso veio a calhar, especialmente na atenção aos detalhes de interfaces e na experiência final do usuário.\nAcredito que construir boas interfaces que proporcionem ótimas UI e UX não é uma tarefa simples e que requer apenas habilidades técnicas; é necessário pensar fora da caixa e se colocar de fato no lugar do usuário para que ele se sinta satisfeito e tenha prazer em utilizar o sistema.\nPor isso, esse se tornou o meu foco, e busco a cada dia mais me aprofundar no assunto e desenvolver habilidades que me permitam atingir esse objetivo.'
            : `I've always been fascinated by technology since I was very young. Several times I messed with the "guts" of Windows XP on my parents' computer at the time and they always had to pay to reset the machine because we couldn't fix what I've done...\nIn one of those occasions, my mother said that I should learn how to really work with computers and enrolled me in a "Hardware, Assembly and Maintenance of Computers" course in 2014. I got so interested that I ended up starting my degree in Information Systems as soon as I finished high school in 2018.\nAt the beginning of the college it was difficult to know which area of technology to follow, but throughout the course I learned a lot and managed to trace a path I wanted to follow. I've always been a person who highly values the aesthetics, look and design of things, I've always liked colors and drawing a lot (even though I'm definitely not good in it lol), and I got to do small graphic arts works and some edits with Photoshop and a few other things.\nSo I chose to be a front-end developer and since then I've studied a lot and I don't regret not even a bit 😜. I'm attentive, detail-oriented and extremely perfectionist and I believe this came in handy, especially in the attention to detail of interfaces and the final user experience.\nI believe that building good interfaces that provide great UI and UX is not a simple task that only requires technical skills; it's necessary to think outside the box and actually put yourself in the user's shoes so that they feel satisfied and have pleasure in using the final result.\nThat's why this has become my main goal, and I seek to delve deeper in it every day and develop skills that allow me to achieve this goal.`
        }}
      </p>
    </div>
  </main>
</template>
