
### HTMl标签

1、标签必须合法且闭合、嵌套正确，标签名需小写

2、标签语法无错误，需要符合语义化

3、标签的自定义属性以data-开头，如：`<a href="#" data-num='18'></a>`

4、除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式

### 链接

1、给 `<a>` 标签加上title属性

2、`<a`>标签的href属性必须写上链接地址，暂无的加上`javascript:return false`

3、非本专题的页面间跳转，采用打开新窗口模式：`target="_blank"`


### 书写风格

HTML标签名、类名、标签属性和大部分属性值统一用小写

*推荐*

``` html
  <div class="demo"></div>
  <div class="demoDemo"></div>
  <div class="demo-demo"></div>
 ```

*不推荐*

``` html
  <div class="DEMO"></div>
  <DIV CLASS="DEMO"></DIV>
 ```

 ### 语义化

 为什么要语义化

1、为了在没有CSS的情况下，页面也能呈现出很好的内容结构和代码结构。

2、用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用

3、有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息（爬虫依赖于标签来确定上下文和各个关键字和权重）

4、方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页

5、便于团队开发和维护，语义化更具可读性，是下一步网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化

*推荐*

``` html
  <header>我是头</header>
  <nav>
      <a href="javascript:return false"> 导航1 </a>
      <a href="javascript:return false"> 导航2 </a>
      <a href="javascript:return false"> 导航3 </a>
  </nav>
  <aside>侧边栏</aside>
  <article>我是文章</article>
  <footer>我是页脚</footer>
 ```

*不推荐*

``` html
  <div>标题</div>
  <div>
      <p> 导航1 </p>
      <p> 导航2 </p>
      <p> 导航3 </p>
  </div>
  <div>侧边栏</div>
  <div>我是文章</div>
  <div>我是页脚</div>
 ```

::: warning 注意

  要是只想用div大法请尽量用class属性值做贴合

:::

*推荐*

``` html
  <div class="header">标题</div>
  <div class="nav">
      <p> 导航1 </p>
      <p> 导航2 </p>
      <p> 导航3 </p>
  </div>
  <div class="aside">侧边栏</div>
  <div class="article">我是文章</div>
  <div class="footer">我是页脚</div>
 ```

### flash

 ::: warning 注意

  页面禁止使用flash，动画使用video、CSS3、canvas等方式实现。

:::