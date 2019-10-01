module.exports = {
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'}],
        ['link', { rel: 'apple-touch-icon-precomposed', href: '/apple-icon-precomposed.png'}],
    ],
    locales: {
        '/': {
            lang: 'ru-RU',
            title: 'Майк Вазовзки',
            description: 'Профиль вэб разработчика (fullstack)'
        },
        '/en/': {
            lang: 'en-EN',
            title: 'Mike Wazovzky',
            description: 'Web Development Professional'
        }
    },
    themeConfig: {
        lastUpdated: 'Last Updated',
        locales: {
            '/': {
                selectText: 'Язык',
                label: 'Русский',
                nav: [
                    { text: 'Главная', link: '/' },
                    { text: 'Обзор', link: '/about/' },
                    { text: 'Образование', link: '/education' },
                    { text: 'Опыт работы', link: '/jobs' },
                    { text: 'Проекты', link: '/projects' },
                ],
                sidebar: [
                    ['/', 'Главная'],
                    ['/about/', 'Обо мне'],
                    ['/education', 'Образование'],
                    ['/jobs', 'Опыт работы'],
                    ['/projects', 'Проекты'],
                ],
                sidebarDepth: 2
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Overview', link: '/en/about/' },
                    { text: 'Education', link: '/en/education' },
                    { text: 'Experience', link: '/en/jobs' },
                    { text: 'Projects', link: '/en/projects' },
                ],
                sidebar: [
                    '/en/',
                    '/en/about/',
                    ['/en/education', 'Education'],
                    ['/en/jobs', 'Jobs Experience'],
                    ['/en/projects', 'Projects'],
                ],
                sidebarDepth: 2
            },
        }
    }
}
