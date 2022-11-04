### 团队约定
 
 ::: tip 提示

  可通过编辑器的语法高亮功能，确保注释语法正确

:::
首页头部需要添加制作时间等信息。

``` html
<!-- 项目名称：XXXX | 创建：2022-09-09  -->

<template>
  <div class="app"></div>
</template>
```

合理的注释有助于后期维护。


较长的的HTML文件，请在板块之间加入注释，使得结构更清晰：

``` html
<!-- 筛选 -->
<div class="filter">
...
</div>
<!-- 列表 -->
```


*推荐*

``` html
<!-- Comment Text -->
<div>...</div>
```

*不推荐*

``` html
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
    ...
</div>
```