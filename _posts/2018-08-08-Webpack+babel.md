---
layout: post
title:  "Webpack"
date:   2018-08-08
tags:  js 工具

color: 'rgb(154,133,255)'

---
#### Webpack
##### [前端模块系统的演进](http://zhaoda.net/webpack-handbook/module-system.html)
##### webpack解决了现存模块打包器的两个痛点：
- 1 Code Spliting - 代码分离
- 2 静态资源的模块化处理方案
- 在webpack看来：所有的静态资源都是模块
- webpack 模块能够识别以下等形式的模块之间的依赖：
- JS的模块化规范：
  - ES2015 import export
  - CommonJS require() module.exports
  - AMD define 和 require
- 非JS等静态资源：
  - css/sass/less 文件中的 @import
  - 图片连接，比如：样式 url(...) 或 HTML <img src=...>
  - 字体 等
##### webpack文档和资源
[webpack 中文网](https://doc.webpack-china.org/)
[webpack 1.0](http://webpack.github.io/docs/what-is-webpack.html)
[webpack 2.x+](https://webpack.js.org/)
[入门Webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f#)
##### 安装webpack
- 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
##### webpack的作用：对整个代码库中的模块进行静态分析、编译打包，合并文件，压缩文件，处理文件的依赖关系
###### 它是高度可配置的，但是，在开始前你需要先理解四个核心概念：
- 入口(entry):告诉 webpack 要在哪里打包..要处理哪些文件; 
- 输出(output):告诉 webpack 要把处理后的文件放到哪里
- loader:处理一些非. js 的特殊文件(.css .less .html .svg),   转换器 (webpack 默认只处理 js 模块的文件,不识别其他后缀的文件)
- 插件(plugins)：是对 loader 的一个补充,处理 loader 不能处理的文件,压缩 抽离 等等

- 全局安装：npm i -g webpack
  - 目的：在任何目录中通过CLI使用 webpack 这个命令
- 项目安装：npm i -D webpack
  - 目的：执行当前项目的构建
##### webpack的基本使用
- 安装：npm i -D webpack
- webpack的两种使用方式：1 命令行 2 配置文件（webpack.config.js）

##### 命令行方式演示 - 案例：隔行变色

- 1 使用npm init -y 初始package.json，使用npm来管理项目中的包
- 2 新建index.html和main.js，实现隔行变色功能
- 3 运行webpack src/js/main.js dist/bundle.js进行打包构建，语法是：webpack 入口文件 输出文件
- 4 注意：需要在页面中引入 输出文件 的路径（此步骤可通过配置webpack去掉）
##### 配置文件方式（推荐）
```js
/*
  webpack.config.js

  运行命令：webpack

  entry 入口的配置说明：
  https://doc.webpack-china.org/concepts/entry-points
*/
const webpack = require("webpack");
const path = require('path')
// 导入 自动生成页面、自动引入js、css文件 插件
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口文件
  entry: path.join(__dirname, 'src/js/index.js'),

  // 输出文件
  output: {
    path: path.join(__dirname, './dist'),   // 输出文件的路径
    filename: 'bundle.js'                 // 输出文件的名称
  }
}
```
##### webpack-dev-server
- 安装：npm i -D webpack-dev-server
- 作用：配合webpack，创建开发环境（启动服务器、监视文件变化、自动编译、刷新浏览器等），提高开发效率
- 注意：无法直接在终端中执行 webpack-dev-server，需要通过 package.json 的 scripts 实现
- 使用方式：npm run dev

```js
"scripts": {
  "dev": "webpack-dev-server"
}
```

-  使用说明:
    - 注意：webpack-dev-server将打包好的文件存储在内存中，提高编译和加载速度，效率更高
    - 注意：输出的文件被放到项目根目录中
      - 命令行中的提示：webpack output is served from /
      - 在index.html页面中直接通过 /bundle.js 来引入内存中的文件

- --contentBase ：告诉服务器在哪个目录中提供服务（可以理解为：打开哪个目录中的index.html）
  - --contentBase ./：当前工作目录
  - --contentBase ./src：当前目录下的src文件夹
- --open ：自动打开浏览器
- --port ：端口号
- --hot ：热更新，只加载修改的文件(按需加载修改的内容)，而非全部加载
```js
    /* package.json */
    /* 运行命令：npm run dev */
    
    {
      "scripts": {
        "dev": "webpack-dev-server --contentBase ./src --open --port 8888 --hot"
      }
    }
```
##### 配置说明 - webpack.config.js

```js
const webpack = require('webpack')

devServer: {
  // 服务器的根目录 Tell the server where to serve content from
  // https://webpack.js.org/configuration/dev-server/#devserver-contentbase
  contentBase: path.join(__dirname, './'),
  // 自动打开浏览器
  open: true,
  // 端口号
  port: 8888,

  // --------------- 1 热更新 -----------------
  hot: true
},

plugins: [
  // ---------------- 2 启用热更新插件 ----------------
  new webpack.HotModuleReplacementPlugin()
]
```

##### html-webpack-plugin 插件

- 安装：npm i -D html-webpack-plugin
- 作用：根据模板，自动生成html页面
- 优势：页面存储在内存中，自动引入bundle.js、css等文件

```js
/* webpack.config.js */
const htmlWebpackPlugin = require('html-webpack-plugin')

// ...
plugins: [
  new htmlWebpackPlugin({
    // 模板页面路径
    template: path.join(__dirname, './index.html'),
    // 在内存中生成页面路径，默认值为：index.html
    filename: 'index.html'
  })
]
```

##### Loaders（加载器）

[webpack - Loaders](https://webpack.js.org/loaders/)
[webpack - 管理资源示例](https://doc.webpack-china.org/guides/asset-management)

- webpack只能处理JavaScript资源
- webpack通过loaders(加载器)处理非JavaScript静态资源

###### CSS打包

- 1 CSS打包文件（加载）
- 2 SASS打包文件（编译为CSS）

###### 使用webpack打包CSS
- 安装：npm i -D style-loader css-loader
- 注意：use中模块的顺序不能颠倒，加载顺序：从右向左加载

```js
/* index.js */

// 导入 css 文件
import './css/app.css'


/* webpack.config.js */

// 配置各种资源文件的loader加载器
module: {
  // 配置匹配规则
  rules: [
    // test 用来配置匹配文件规则（正则）
    // use  是一个数组，按照从后往前的顺序执行加载
    {test: /\.css$/, use: ['style-loader', 'css-loader']},
  ]
}
```

###### 使用webpack打包sass文件
- 安装：npm i -D sass-loader node-sass
- 注意：sass-loader 依赖于 node-sass 模块

```js
/* webpack.config.js */

// 参考：https://webpack.js.org/loaders/sass-loader/#examples
// "style-loader"  ：creates style nodes from JS strings 创建style标签
// "css-loader"    ：translates CSS into CommonJS 将css转化为CommonJS代码
// "sass-loader"   ：compiles Sass to CSS 将Sass编译为css

module:{
  rules:[
    {test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
  ]
}
```

###### 图片和字体打包
- 安装：npm i -D url-loader file-loader
- file-loader：加载并重命名文件（图片、字体 等）
- url-loader：将图片或字体转化为base64编码格式的字符串，嵌入到样式文件中

```js
    /* webpack.config.js */
    
    module: {
      rules:[
        // 打包 图片文件
        { test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader' },
    
        // 打包 字体文件
        { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
      ]
    }
```

###### 图片打包细节
- limit参数的作用：（单位为：字节(byte)）
  - 当图片文件大小（字节）小于指定的limit时，图片被转化为base64编码格式
  - 当图片文件大小（字节）大于等于指定的limit时，图片被重命名以url路径形式加载（此时，需要file-loader来加载图片）
- 图片文件重命名，保证相同文件不会被加载多次。例如：一张图片（a.jpg）拷贝一个副本（b.jpg），同时引入这两张图片，重命名后只会加载一次，因为这两张图片就是同一张
- 文件重命名以后，会通过MD5加密的方式，来计算这个文件的名称

```js
/* webpack.config.js */

module: {
  rules: [
    // {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=100'},
    {
      test: /\.(jpg|png|gif|jpeg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }
  ]
}
```

###### 字体文件打包说明
- 处理方式与图片相同，可以使用：file-loader或url-loader
##### webpack发布项目
- 项目开发期间配置文件：‘webpack.config.js’
- 项目发布配置文件：‘webpack.prod.js’（文件名称非固定）
      - display-error-details错误信息详细提示


#### babel(js文件处理)
- [babel](https://babeljs.io/)
- [es2015-loose](http://2ality.com/2015/12/babel6-loose-mode.html)
- [babel全家桶](https://github.com/brunoyang/blog/issues/20)
- 安装：npm i -D babel-core babel-loader
- 安装：npm i -D babel-preset-env
##### 基本使用（两步）
- ###### 第一步：

```js
/* webpack.config.js */

module: {
  rules: [
    // exclude 排除，不需要编译的目录，提高编译速度
    {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
  ]
}
```

- ###### 第二步：在项目根目录中新建.babelrc配置文件

```js
/* .babelrc */

// 将来babel-loader运行的时候，会检查这个配置文件，并读取相关的语法和插件配置
//env  解析 ES6\ES7\ES8的代码
{
  "presets": ["env"]
}
```

##### babel的说明
- ###### babel的作用：

- 1 语法转换：将新的ES语法转化为浏览器能识别的语法（babel-preset-*）
- 2 polyfill浏览器兼容：让低版本浏览器兼容最新版ES的API
##### babel-preset-*
- ###### Babel通过语法转换器，能够支持最新版本的JavaScript语法  
- ###### babel-preset-* 用来指定我们书写的是什么版本的JS代码
[ES6语法提案的批准流程](http://es6.ruanyifeng.com/#docs/intro#语法提案的批准流程)

- ES2015 也就是 ES6, 下一个版本是ES7, 从 ES6 到 ES7之间经历了 5 个阶段
- babel-preset-es2015 转换es6的语法
- babel-preset-stage-0 转换比es6更新的语法

```js
Stage 0 - Strawman（展示阶段）
Stage 1 - Proposal（征求意见阶段）
Stage 2 - Draft（草案阶段）
Stage 3 - Candidate（候选人阶段）
Stage 4 - Finished（定案阶段）

Stage 0 is "i've got a crazy idea",
stage 1 is "this idea might not be stupid",
stage 2 is "let's use polyfills and transpilers to play with it",
stage 3 is "let's let browsers implement it and see how it goes",
stage 4 is "now it's javascript".

```

##### babel-polyfill 和 transform-runtime
- 作用：实现浏览器对不支持API的兼容（兼容旧环境、填补）
  - 在低版本浏览器中使用高级的ES6或ES7的方法或函数，比如：'abc'.padStart(10)
- 方式一  [polyfill](https://babeljs.io/docs/usage/polyfill/#usage-in-node-browserify-webpack)
- 方式二  [transform-runtime](https://babeljs.io/docs/plugins/transform-runtime/)
    - 方式一：npm i -S babel-polyfill
    - 方式二：npm i -D babel-plugin-transform-runtime 和 npm i -S babel-runtime
- 注意：babel-runtime包中的代码会被打包到你的代码中（-S）


区别：
polyfill 所有兼容性问题，都可以通过polyfill解决（包括：实例方法）、污染全局环境

runtime  除了实例方法以外，其他兼容新问题都能解决、不污染全局环境

- polyfill：如果想要支持全局对象（比如：`Promise`）、静态方法（比如：`Object.assign`）或者**实例方法**（比如：`String.prototype.padStart`）等，那么就需要使用`babel-polyfill`

- babel-runtime ：提供了兼容旧环境的函数，使用的时候，需要我们自己手动引入
  比如： const Promise = require('babel-runtime/core-js/promise')
  存在的问题：
    - 1 手动引入太繁琐
    - 2 多个文件引入同一个helper（定义），造成代码重复，增加代码体积
- babel-plugin-transform-runtime：
    - 1 自动引入helper（比如，上面引入的 Promise）
    - 2 babel-runtime提供helper定义，引入这个helper即可使用，避免重复
    - 3 依赖于 babel-runtime 插件

- transform-runtime插件的使用：
  直接在 .bablerc 文件中，添加一个 plugins 的配置项即可！！！

```js
  "plugins": [
    "transform-runtime"
  ]

/*
  babel-polyfill 的使用步骤：
  1 main.js
*/
// 第一行引入
require("babel-polyfill")

var s = 'abc'.padStart(4)
console.log(s)


// 2 webpack.config.js 配置
module.exports = {
  entry: ['babel-polyfill', './js/main.js']
}
```

##### 总结
-  babel-core babel核心包
-  babel-loader 用来解析js文件
-  babel-preset-* 新ES语法的解析和转换
-  transform-runtime / babel-polyfill 兼容旧浏览器，到达支持新API目的

```js
// 判断浏览器是否兼容 padStart 这个 API
if (!String.prototype.padStart) {
  // 如果不兼容, 就自己模拟 padStart的功能实现一份
  String.prototype.padStart = function padStart(targetLength,padString) {
  }
}
```

