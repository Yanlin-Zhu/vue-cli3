# vue-3

## Project setup

```
npm install
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```


sass bem 命名
amfe-flexible
postcss-plugin-px2rem
postcss-px2rem
数据精度 math.js
多种布局
websorket
地图
埋点统计
上传七牛云/阿里云
1px的边框在转化为rem时，在andriod webview以及部分低版本ios webview 会看不到。处理方法——让1px在编译后，依然是1px


使用postcss-px2rem插件处理px时候，需要在使用时候注意每个属性后面的分号不能省略，默认是都转换为rem，

如若某个属性不需要转换为rem，需要按照dpr不同而分别设置大小，则在后面加上注释/*px*/，

如若需要原样输出，则在后面加上注释/*no*/，此处需要多加留意，对于刚接触的我们新手来说，是个坑啊！
当你遇到1px的边框时，通常容易发现页面缺失部分边框，这时你可以使用/*no*/语法来屏蔽该属性转换，例如：

border: 1px solid red; /*no*/
1
  由于字体的特殊性，我们在编译font-size属性时，通常不使用rem单位，这时候你可以这样使用：

font-size: 24px; /*px*/ 

PS:

.border_style{
    border-color: @border_color;
    border-style: solid;
    border-width: 1px;/*no*/
}
