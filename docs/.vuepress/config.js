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
  base: '/db-lab6/', // Переконайтеся, що це співпадає з назвою репозиторія
  theme: 'vuepress-theme-cool',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }],
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Вступ',
        path: '/intro/', // Шлях до файлу README.md у папці docs/intro
      },
      {
        title: 'Розроблення загальних вимог до системи',
        path: '/requirements/',
        children: [
          '/requirements/state-of-the-art',
          '/requirements/stakeholders-needs',
        ],
      },
      {
        title: 'Розроблення вимог до функціональности системи',
        path: '/use-cases/', // Виправлено назву папки
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
    displayAllHeaders: true, // Відображати всі заголовки у sidebar
    nav: [
      { text: 'Початок', link: '/' }, // Головна сторінка
    ],
    lastUpdated: 'Останнє оновлення', // Відображати час останнього оновлення
    repo: 'https://github.com/MikhailoSafronov/db-lab6', // Посилання на репозиторій
    repoLabel: 'GitHub', // Текст для кнопки репозиторія
    docsDir: 'docs', // Директорія документації
    docsBranch: 'master', // Гілка документації
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
