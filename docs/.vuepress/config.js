module.exports = {
    theme: 'yubisaki',
    title: 'HOME', 
    description: `vuepress blog`,
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    base: '/blog/',
    repo: 'https://github.com/snowerskk/snowerskk.github.io.git',
    dest: './docs/.vuepress/dist',
    ga: '',
    serviceWorker: true,
    evergreen: true,
    themeConfig: {
        background: `/img/`,
        github: 'snowerskk',
        logo: '/img/logo.png',
        accentColor: '#ac3e40',
        per_page: 6,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        tags: true,
        comment: {
            clientID: '',
            clientSecret: '',
            repo: '',  // blog of repo name
            owner: '',  // github of name
            admin: '', // github of name
            distractionFreeMode: false
        },
        nav: [
            {text: 'Blog', link: '/blog/', root: true},
            {text: 'About', link: '/about/'},
            {text: 'CSDN', link: 'https://me.csdn.net/sinat_37881704'},
            {text: 'Github', link: 'https://github.com/snowerskk'},
            {text: '码云', link: 'https://gitee.com/snowerskk'},
            {text: 'TAGS', link: '/tags/', tags: true},
        ]
    },
    markdown: {
        anchor: {
            permalink: true
        },
        toc: {
            includeLevel: [1, 2]
        },
        config: md => {
            // 使用更多 markdown-it 插件！
            md.use(require('markdown-it-task-lists'))
            .use(require('markdown-it-imsize'), { autofill: true })
        }
    },
    postcss: {
        plugins: [require('autoprefixer')]
    },
}

