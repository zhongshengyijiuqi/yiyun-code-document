```
.
│───dist
│───public
│───src
│   │───assets
│   │   │───images
│   │   └───scss
│   │───components
│   │   └───index.js
│   │───extend
│   │   └───directives.js
│   │───plugins
│   │   └───index.js
│   │───request
│   │   └───api
│   │   │   │───BaseRequest.js
│   │   │   └───index.js       
│   │   │──interceptors.js
│   │   └──methods.js
│   │───store
│   │   │───common
│   │   │   │───actions.js
│   │   │   │───getters.js
│   │   │   │───index.js
│   │   │   │───mutations.js
│   │   │   └───state.js          
│   │   └───index.js  
│   │───utils      
│   │   └───index.js
│   │───views
│   │───App.vue
│   │───config.js
│   │───main.js
│   │───router.js
│   └───temp.scss
│─── .env
│─── .env.production
│─── .env.staging
│─── .eslintrc.js
│─── .gitignore
│─── babel.config.js
│─── package-lock.json
│─── package.json
│─── postcss.config.js
│─── README.md
└─── vue.config.js
```

::: warning 注意

请留意目录名的大小写。

:::

- `dist` : build打包文件。
 
- `public` : index.html
 
- `src/assets` : 静态资源。

- `src/components` : 用于存放全局组件。

- `src/components/index.js` : 用于注册全局组件。

- `src/extend/directives.js` : 全局指令注册。

- `src/plugins` : 存放第三方框架、插件、js。

- `src/request/api/index.js` : 接口封装。

- `src/request/interceptors.js` : axios 拦截器。

- `src/request/methods.js` : get,post 封装。

- `src/store` :统一状态管理器。

- `src/utils` : 公共函数封装。

- `.env` : 开发环境变量。