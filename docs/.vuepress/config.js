

module.exports = {
  // base: "./",
  title: '亦云应用前端代码规范',
  description: 'HTML 规范、图片规范、CSS 规范、命名规范、JS 规范、特殊规范',
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2, 3] },
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  configureWebpack: {
    node: {
      global: true,
      process: true
    },
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Aotu.io', link: 'https://guide.aotu.io/docs/' },
      { text: 'Tgideas', link: 'https://tgideas.qq.com/doc/index.html' },
      { text: 'Standard', link: 'https://github.com/standard/standard' },
    ],
    sidebar: [
      {
        title: '开始使用',
        collapsable: false,
        children: [
          ['/guide/common/summarize', '概况'],
          ['/guide/common/directoryStructure', '结构目录'],
        ]
      },
      {
        title: 'HTML规范',
        collapsable: false,
        children: [
          ['/guide/htmlStandard/html', '代码规范'],
          ['/guide/htmlStandard/appoint', '团队约定'],
        ]
      },
      {
        title: '图片规范',
        collapsable: false,
        children: [
          ['/guide/imgStandard/img', '图片引入'],
          ['/guide/imgStandard/appoint', '团队约定'],
        ]
      },
      {
        title: 'CSS规范',
        collapsable: false,
        children: [
          ['/guide/cssStandard/css', '代码规范'],
          ['/guide/cssStandard/sass', 'SASS规范'],
          ['/guide/cssStandard/appoint', '团队约定'],
        ]
      },
      {
        title: '命名规范',
        collapsable: false,
        children: [
          ['/guide/nameStandard/name', '命名规范'],
          ['/guide/nameStandard/appoint', '团队约定'],
        ]
      },
      {
        title: 'JavaScript规范',
        collapsable: false,
        children: [
          ['/guide/jsStandard/js', '语言规范'],
          ['/guide/jsStandard/code', '编码规范'],
          ['/guide/jsStandard/react', 'React&JSX 书写规范'],
        ]
      },
    ]
  }
}