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
      description: 'Senior Backend Engineer | Tech Lead',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Experience', link: '/experience' },
          { text: 'Education', link: '/education' },
        ],
        sidebar: [
          { text: 'Home', link: '/' },
          { text: 'Experience', link: '/experience' },
          { text: 'Education', link: '/education' },
        ],
      },
    },
    ru: {
      lang: 'ru-RU',
      label: 'Русский',
      title: 'Майк Вазовзки',
      description: 'Senior Backend Engineer | Tech Lead',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Опыт работы', link: '/ru/experience' },
          { text: 'Образование', link: '/ru/education' },
        ],
        sidebar: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Опыт работы', link: '/ru/experience' },
          { text: 'Образование', link: '/ru/education' },
        ],
      },
    },
  },
  lastUpdated: true,
})
