const markdownRender = require('markdown-it')()
const mdContainer = require('markdown-it-container')
module.exports = {
  title: "Tsunami's blog",
  description: 'Tsunami的个人博客',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  host: '192.168.1.59',
  port: '5000',

  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: 'js基础',
        items: [
          { text: 'JavaScript', link: '/basis/javaScript/' },
          { text: 'HTML', link: '/basis/html/' },
          { text: 'CSS', link: '/basis/css/' },
          { text: 'TypeScript', link: '/basis/typeScript/' }
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'Vue', link: '/frame/vue/' },
          { text: 'React', link: '/frame/react/' },
          { text: 'Angular', link: '/frame/angular/' },
          { text: 'Flutter', link: '/frame/flutter/' },
          { text: 'React-Native', link: '/frame/react-native/' }
        ]
      },
      { text: '工作笔记', link: '/work/' },
      { text: '前端可视化', link: '/visualization/' },
      { text: '环境配置', link: '/devconfig/' },
      { text: 'Github', link: 'https://github.com/mebius6' }
    ]
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule('md')
  //     .test(/\.md$/)
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .end()
  //     .use('vue-markdown-loader')
  //     .loader('vue-markdown-loader/lib/markdown-compiler')
  //     .options({
  //       raw: true,
  //       use: [
  //         [
  //           mdContainer,
  //           'demo',
  //           {
  //             validate: function(params) {
  //               return params.trim().match(/^demo\s*(.*)$/)
  //             },
  //             render: function(tokens, idx) {
  //               // 1.获取第一行的内容使用markdown渲染html作为组件的描述
  //               const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
  //               if (tokens[idx].nesting === 1) {
  //                 const description = m && m.length > 1 ? m[1] : ''
  //                 let descriptionHTML = description
  //                   ? markdownRender.render(description)
  //                   : ''
  //                 // 2.获取代码块内的html和js代码
  //                 let content = tokens[idx + 1].content
  //                 // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
  //                 return `<demo-block>
  //                 <div slot="source">${content}</div>
  //                 ${descriptionHTML}
  //                 <div slot="highlight">`
  //               }
  //               return '</demo-block>'
  //             }
  //           }
  //         ],
  //         [mdContainer, 'tip'],
  //         [mdContainer, 'warning']
  //       ]
  //     })
  // }
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     config.entry.app = ['babel-polyfill', './src/main.js']
  //   }
  // }
}

function getSidebar(barName) {
  const sidebar = {
    frame: ['/frame/', '/frame/vue/', '/frame/react/', '/frame/angular/'],
    blog: ['/blog/'],
    basis: []
  }
  return sidebar[barName]
}
