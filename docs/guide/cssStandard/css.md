
### 布局风格


布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

2009年，W3C 提出了一种新的方案----[flex 布局](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

``` css
.box{
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-flow: <flex-direction> || <flex-wrap>;
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
### css规范

1、CSS类名命名参考[命名规范](../nameStandard/name.md)

2、禁止使用层级过深的选择器，最多3级。

错误示范：

``` css
  .field-display .people-checkbox .lock .img{}
  .field-display .people-checkbox .lock .right{}
  .field-display .people-checkbox .lock .left{}
  .field-display .people-checkbox .lock .btn{}
```
3、除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式

### 代码风格

样式书写一般有两种：一种是紧凑格式
``` css
.jdc{ display: block;width: 50px;}
```

一种是展开格式

``` css
.jdc{
    display: block;
    width: 50px;
}
```



#### 团队约定
统一使用展开格式书写样式（[reset除外](./appoint.md)）

``` css
/* 推荐 */
.jdc{
  display:block;
  width: 50px;
}
	
/* 不推荐 */
.JDC{
  DISPLAY:BLOCK;
  width: 50px;
}
```

### 属性书写顺序

建议遵循以下顺序：

1、布局定位属性：display / position / float / clear / visibility / overflow

2、自身属性：width / height / margin / padding / border / background

3、文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word

4、其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

``` css
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
[mozilla官方属性顺序推荐](https://www.mozilla.org/zh-CN/css/base/content.css)

### CSS3浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后

``` css
.jdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}

```