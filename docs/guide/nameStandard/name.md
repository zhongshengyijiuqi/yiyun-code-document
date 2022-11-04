### 目录命名

  - 项目：`mobile-[name]    ||    web-[name]`
  - 项目文件夹：`projectname`
  - 样式文件夹`css || scss || sass`
  - 脚本文件夹`js`
  - 图片文件夹`images`

### 图片命名

1、图片名称必须小写，禁止使用特殊字符、中文
2、使用英文或拼音缩写，禁止特殊字符
3、名称间隔使用-符号
4、命名需要能体现图片的大概用途

### HTML/CSS文件命名

确保文件命名总是以字母开头而不是数字，如：

```
<!-- HTML -->
Project.vue
ProjectName.vue

<!-- css -->
project.css
Projectname.css
project.scss
Projectname.scss
project.sass
Projectname.sass
```
### ClassName命名

*推荐*

``` html
  <div class="demo"></div>
  <div class="demoDemo"></div>
  <div class="demo-demo"></div>
```

1、class、id都需小写

2、命名使用英文，禁止使用特殊字符

3、类名命名需要语义化

::: warning 注意

  ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此这种广告的英文或拼音类名不应该出现，另外，敏感不和谐字眼也不应该出现

:::

``` html 
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div> 
<div class="ass"></div> 
<div class="KMT"></div>
```
