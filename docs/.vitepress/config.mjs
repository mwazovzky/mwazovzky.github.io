import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', href: '/apple-icon-precomposed.png' }],
  ],
  locales: {
    root: {
      lang: 'ru-RU',
      label: 'Русский',
      title: 'Майк Вазовзки',
      description: 'Профиль вэб разработчика (fullstack)',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Обзор', link: '/about' },
          { text: 'Образование', link: '/education' },
          { text: 'Опыт работы', link: '/jobs' },
          { text: 'Проекты', link: '/projects' },
        ],
        sidebar: [
          { text: 'Главная', link: '/' },
          { text: 'Обо мне', link: '/about' },
          { text: 'Образование', link: '/education' },
          { text: 'Опыт работы', link: '/jobs' },
          { text: 'Проекты', link: '/projects' },
        ],
      },
    },
    en: {
      lang: 'en',
      label: 'English',
      title: 'Mike Wazovzky',
      description: 'Web Development Professional',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Overview', link: '/en/about' },
          { text: 'Education', link: '/en/education' },
          { text: 'Experience', link: '/en/jobs' },
          { text: 'Projects', link: '/en/projects' },
        ],
        sidebar: [
          { text: 'Home', link: '/en/' },
          { text: 'General Information', link: '/en/about' },
          { text: 'Education', link: '/en/education' },
          { text: 'Jobs Experience', link: '/en/jobs' },
          { text: 'Projects', link: '/en/projects' },
        ],
      },
    },
  },
  lastUpdated: true,
})
