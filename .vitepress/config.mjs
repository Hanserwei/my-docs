import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-docs/",
  head: [['link',{rel:'icon',herf:'/image/head.svg'}]],
  markdown: {lineNumbers: true},
  title: "Hanser的笔记网站",
  description: "一个基于vitepress的站点",
  plugins: {
    mdEnhance: {
      markmap: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search:{
      provider:'algolia',
      options:{
        appId: 'DN7ZDFZX2K',
        apiKey: '4667ad9c068fa580730d6fb4a1e345a5',
        indexName: 'hanserweiio'
      }
    },
    logo: '/image/logo.svg',
    outlineTitle: "文章目录📚",
    outline: [2,4],
    nav: [
      { text: '家🏠', link: '/' },
    ],

    footer:{
      copyright: "Copyright@ 2024 Hanser Wei"
    },
    
    sidebar: [
      {
        text: '千里之行🕖',
        items: [
          { text: '', link: '/guide/index' }
        ]
      },
      {
        text: 'Python学习🐍',
        items: [
          { text: '基础语法', link: '/guide/Python/基础语法部分/Python基础学习' },
          { text: '进阶语法', link: '/guide/Python/进阶语法部分/Python进阶学习' },
          { text: '第三方包', link: '/guide/Python/第三方包/index' },
        ]
      },
      {
        text: 'Java学习🧱',
        items: [
          { text: '', link: '/guide/index' }
        ]
      },
      {
        text: '数据库🚀',
        items: [
          {text:'SQL基础',link:'/guide/数据库相关/SQL基础.md'}
        ]
      },
      {
        text: 'PVE学习🛜',
        items: [
          { text: 'PVE简介', link: '/guide/PVE/PVE简介' },
          { text: 'PVE安装教程', link: '/guide/PVE/PVE安装教程' },
          { text: 'PVE使用技巧', link: '/guide/PVE/PVE使用技巧' },
        ]
      },
      {
        text: '科学上网篇🪜',
        items: [
          {text:'科学上网教程',link:'/guide/科学上网/科学上网'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hanserwei' }
    ]
  }
})
