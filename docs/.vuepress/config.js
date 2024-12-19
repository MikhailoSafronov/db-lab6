module.exports = {
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/pwa', 
    {
      serviceWorker: true,
      updatePopup: true
    },
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ],
  port: 3030,
  base: '/db-lab6/',
  theme: 'cool',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }],
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Вступ',
        path: '/intro/',
      },
      {
        title: 'Розроблення загальних вимог до системи',
        path: '/requirements/',
        children: [
          '/requirements/state-of-the-art.md',
          '/requirements/stakeholders-needs.md',
        ],
      },
      {
        title: 'Розроблення вимог до функціональності системи',
        path: '/use-cases/', // Назва папки змінена на use-cases для уникнення проблем із пробілами
      },
      {
        title: 'Проектування інформаційного забезпечення',
        path: '/design/',
      },
      {
        title: 'Реалізація інформаційного та програмного забезпечення',
        path: '/software/',
      },
      {
        title: 'Тестування працездатності системи',
        path: '/test/',
      },
      {
        title: 'Висновки',
        path: '/conclusion/',
      },
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    nav: [
      { text: 'Початок', link: '/' },
    ],
    lastUpdated: 'Останнє оновлення',
    repo: 'https://github.com/boldak/edu-db-cw',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'master',
  },
  title: 'Система управління відкритими даними',
  description: 'Курсова робота з дисципліни "Бази даних"',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img',
      },
    },
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-plantuml'));
      md.use(require('markdown-it-admonition'));
    },
  },
};
