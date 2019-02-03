module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/mlab32.png'}]
    ],
    locales: {
        '/': {
            title: 'Майк Вазовзки',
            lang: 'ru-RU',
            description: 'Профиль вэб разработчика (fullstack)'
        },
        '/en/': {
            title: 'Mike Wazovzky',
            lang: 'en-EN',
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
                    { text: 'Опыт работы', link: '/jobs' },
                    { text: 'Образование', link: '/education' },
                    { text: 'Проекты', link: '/projects' },
                ],
                sidebar: [
                    ['/', 'Главная'],
                    ['/about/', 'Обо мне'],
                    ['/jobs', 'Опыт работы'],
                    ['/education', 'Образование'],
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
                    { text: 'Experience', link: '/en/jobs' },
                    { text: 'Education', link: '/en/education' },
                    { text: 'Projects', link: '/en/projects' },
                ],
                sidebar: [
                    '/en/',
                    '/en/about/',
                    ['/en/jobs', 'Jobs Experience'],
                    ['/en/education', 'Education'],
                    ['/en/projects', 'Projects'],
                ],
                sidebarDepth: 2
            },
        }
    }
}
