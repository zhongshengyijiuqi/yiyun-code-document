 ### 图片引入

  #### 线上图片

 ::: warning 注意

  本公司因为图片是上传到oss上面。引入时请勿写原地址，请根据oss参数引入，有放大功能的图片在写原地址

:::

oss官网：[https://www.alibabacloud.com](https://www.alibabacloud.com/help/zh/object-storage-service/latest/image-processing-overview)

实例：

``` html
<img src="https://dl-platform.effio.cn/1604735120579.png
        ?x-oss-process=image/resize,limit_0,m_fill,w_60,h_60/quality,q_100" 
        alt="头像"/>
 ```

 #### 本地图片

 用绝对路径，不用相对路径

*推荐*

 ``` html
  <img src="@/assets/images/common/avatar.png" alt="头像"/>
 ```

 ``` js
  let avatar = require('@/assets/images/common/avatar.png')
 ```

 ``` css
  .bg{
    background: url("~@/assets/images/common/avatar.png") no-repeat;
  }
 ```

*不推荐*

 ``` html
  <img src="../assets/images/common/avatar.png" width="" height="" alt="头像"/>
 ```

 ``` js
  let avatar = require('../assets/images/common/avatar.png')
 ```

 ``` css
  .bg{
    background: url("../assets/images/common/avatar.png") no-repeat;
  }
 ```