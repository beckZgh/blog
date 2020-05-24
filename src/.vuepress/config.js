module.exports = {
    base: process.env.NODE_ENV === 'production' ? '/blog/' : '/',
    theme: 'antdocs',
    title: 'NoteBook',
    description: "Just playing around",
    head: [
        ['link', { rel: 'icon', href: '/logo.ico' }]
    ],
    themeConfig: {
        logo: '/logo.png',
        backToTop: true,
        nav: [
            { text: '🐌Home', link: '/' },
            { text: '🧭Navigation', link: '/navigation/' },
            { text: '🌳FrontEnd', link: '/front-end/' },
        ],
        sidebar: 'auto',
        sidebarDepth: 2
    }
}
