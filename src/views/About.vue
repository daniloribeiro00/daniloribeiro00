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
            ? `Danilo Duarte Ribeiro, ${myAge()} anos, nascido em Volta Redonda - RJ, Brasil.\nDesenvolvedor front-end, amante de UI/UX e design, entusiasta de tecnologia e inovação, geek e apaixonado por café. ☕️`
            : `Danilo Duarte Ribeiro, ${myAge()} years old, born in Volta Redonda, Rio de Janeiro, Brazil.\nFront-end developer, UI/UX and design lover, technology and innovation enthusiast, geek and in love with coffee. ☕️`
        }}
      </p>
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
              : 'UniFOA (Volta Redonda University Center)'
          }} </a
        >{{ globalStore.language === 'pt-BR' ? '.' : ' in Brazil.' }}
      </p>
      <p
        class="whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:text-lg sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Curso de Hardware, Montagem e Manutenção de Computadores na '
            : 'Hardware, Assembly and Maintenance of Computers course at'
        }}
        <a
          href="https://microcamp.com.br"
          target="_blank"
          class="font-semibold transition-colors hover:text-violet-600 dark:font-bold dark:hover:text-violet-500"
        >
          MicroCamp</a
        >.
      </p>
      <p
        class="whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:text-lg sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Curso de inglês do básico ao avançado na '
            : 'English course from basic to advanced at '
        }}
        <a
          href="https://www.edidiomas.com.br"
          target="_blank"
          class="font-semibold transition-colors hover:text-violet-600 dark:font-bold dark:hover:text-violet-500"
        >
          {{
            globalStore.language === 'pt-BR' ? "Ed's Idiomas" : "Ed's School"
          }}</a
        >.
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
      <p
        class="whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:text-lg sm:leading-loose"
      >
        {{
          globalStore.language === 'pt-BR'
            ? 'Desenvolvedor Front-End Júnior na'
            : 'Junior Front-End Developer at'
        }}
        <a
          href="https://tecnospeed.com.br"
          target="_blank"
          class="font-semibold transition-colors hover:text-violet-600 dark:font-bold dark:hover:text-violet-500"
        >
          TecnoSpeed </a
        >｜
        {{
          globalStore.language === 'pt-BR'
            ? 'Julho 2021 - Agora'
            : 'July 2021 - Now'
        }}
      </p>
      <span
        class="flex flex-col items-center gap-8 whitespace-pre-line text-justify leading-relaxed text-gray-600 dark:text-white sm:flex-row sm:leading-loose"
      >
        <a
          href="https://tecnospeed.com.br"
          target="_blank"
          class="mt-4 font-semibold transition-colors hover:text-violet-600 dark:font-bold dark:hover:text-violet-500 sm:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420.27 95.67"
            class="h-12 dark:brightness-0 dark:invert"
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
        </a>
        {{
          globalStore.language === 'pt-BR'
            ? 'Responsável pela criação, manutenção e aprimoramento de aplicações front-end no DFe da TecnoSpeed, utilizando Vue.js 3 e Tailwind CSS, contribuindo para melhoria contínua dos sistemas fiscais utilizados em todo o Brasil.\nTambém atuei no SpeedLab, o laboratório de inovação da TecnoSpeed, seguindo o conceito de MVP (Minimum Viable Product) até a estruturação e lançamento do produto.\nAlém disso, responsável também por manter bibliotecas internas no NPM local da empresa bem como um dos principais contribuintes na criação do design system da TecnoSpeed.'
            : "Responsible for creating, maintaining and improving front-end applications in TecnoSpeed's fiscal documents sector, using Vue.js 3 and Tailwind CSS, contributing to the continuous improvement of the tax systems used throughout Brazil.\nI also worked in the TecnoSpeed's innovation lab following the MVP (Minimum Viable Product) until the later structuring and release of the product.\nIn addition, responsible for maintaining internal libraries in the local NPM and also one of the main creators of the TecnoSpeed's design system."
        }}
      </span>
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
            ? 'Sempre fui fascinado por tecnologia desde pequeno. Por diversas vezes mexia nas "entranhas" do Windows XP do computador dos meus pais na época e eles sempre tinham que pagar para formatar a máquina porque não conseguíamos reverter o que eu fazia...\nAté que numa dessas ocasiões, minha mãe disse que eu deveria aprender a como realmente mexer em computadores e me matriculou num curso de "Hardware, Montagem e Manutenção de Computadores" em 2014. Me interessei tanto que iniciei minha graduação em Sistemas de Informação logo assim que terminei meu ensino médio, em 2018.\nNo início da faculdade era difícil saber qual área da tecnologia seguir, mas ao longo do curso, aprendi muita coisa e consegui traçar um caminho pelo qual queria trilhar. Sempre fui uma pessoa que valoriza muito a estética e o visual das coisas, sempre gostei muito de cores e de desenhar (mesmo não sendo nada bom rsrs), e cheguei a fazer pequenos trabalhos de artes gráficas e algumas edições com Photoshop e outras coisas.\nEntão escolhi seguir como desenvolvedor front-end e, desde então, estudei bastante e não me arrependendo nem um pouquinho 😜. Sou atencioso, detalhista e extremamente perfeccionista (meus amigos dizem que tenho TOC rsrsrs) e acredito que isso veio a calhar, especialmente na atenção aos detalhes de interfaces e na experiência final do usuário.\nAcredito que construir boas interfaces que proporcionem ótimas UI e UX não é uma tarefa simples e não requer apenas habilidades técnicas; é necessário pensar fora da caixa e se colocar de fato no lugar do usuário para que ele se sinta satisfeito e tenha prazer em utilizar o sistema.\nPor isso, esse tornou-se o meu foco, e busco a cada dia mais me aprofundar no assunto e desenvolver habilidades que me permitam atingir esse objetivo.'
            : `I've always been fascinated by technology since I was very young. Several times I messed with the depths of Windows XP on my parents' computer at the time and they always had to pay to reset the machine because we couldn't fix what I've done...\nIn one of those occasions, my mother said that I should learn how to really work with computers and enrolled me in a "Hardware, Assembly and Maintenance of Computers" course in 2014. I got so interested that I ended up starting my degree in Information Systems as soon as I finished high school in 2018.\nAt the beginning of the college it was difficult to know which area of technology to follow, but throughout the course I learned a lot and managed to trace a path I wanted to take. I've always been a person who highly values the aesthetics, look and design of things, I've always liked colors and drawing a lot (even though I'm definitely not good in it lol), and I got to do small graphic arts works and some edits with Photoshop and a few other things.\nSo I chose to be a front-end developer and since then I've studied a lot and I don't regret not even a bit 😜. I'm attentive, detail-oriented and extremely perfectionist and I believe this came in handy, especially in the attention to detail of interfaces and the final user experience.\nI believe that building good interfaces that provide great UI and UX is not a simple task that only requires technical skills; it's necessary to think outside the box and actually put yourself in the user's shoes so that they feel satisfied and have pleasure when using the final result.\nThat's why this has become my main goal, and I seek to delve deeper in it every day and develop skills that allow me to achieve this goal.`
        }}
      </p>
    </div>
  </main>
</template>
