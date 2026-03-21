import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', href: '/apple-icon-precomposed.png' }],
  ],
  locales: {
    root: {
      lang: 'en',
      label: 'English',
      title: 'Mike Wazovzky',
      description: 'Web Development Professional',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Overview', link: '/about' },
          { text: 'Education', link: '/education' },
          { text: 'Experience', link: '/jobs' },
          { text: 'Projects', link: '/projects' },
        ],
        sidebar: [
          { text: 'Home', link: '/' },
          { text: 'General Information', link: '/about' },
          { text: 'Education', link: '/education' },
          { text: 'Jobs Experience', link: '/jobs' },
          { text: 'Projects', link: '/projects' },
        ],
      },
    },
    ru: {
      lang: 'ru-RU',
      label: 'Русский',
      title: 'Майк Вазовзки',
      description: 'Профиль вэб разработчика (fullstack)',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Обзор', link: '/ru/about' },
          { text: 'Образование', link: '/ru/education' },
          { text: 'Опыт работы', link: '/ru/jobs' },
          { text: 'Проекты', link: '/ru/projects' },
        ],
        sidebar: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Обо мне', link: '/ru/about' },
          { text: 'Образование', link: '/ru/education' },
          { text: 'Опыт работы', link: '/ru/jobs' },
          { text: 'Проекты', link: '/ru/projects' },
        ],
      },
    },
  },
  lastUpdated: true,
})
