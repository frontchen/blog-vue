---
layout: post
title:  "ReactNative"
date:   2018-08-08
tags: js技术框架

color: 'rgb(154,133,255)'

---

# ReactNative - 概念和环境

- [谁在用React Native](https://facebook.github.io/react-native/showcase.html)
- ##### [学习资源](https://github.com/reactnativecn/react-native-guide)
## 移动App

- **移动App开发：开发能够运行在移动终端（手机、pad、watch等便携移动设备）中的应用程序(Application)**
- 主流移动设备操作系统：Android、iOS（其他：塞班、WindowPhone、黑莓）

## 背景介绍

- Wap：早期手机浏览的网站（浏览器），因为手机屏幕小，处理能力小，所以需要特殊格式的网页（简陋）
  - 定位：基本内容展示，能展示文字内容即可
- Web App：侧重于功能，基于HTML5、JS、CSS开发实现特定功能的应用，依赖于浏览器
- Native App：是一种基于智能手机本地操作系统如iOS、Android、WP并使用原生编程语言，编写第三方应用程序，也叫本地app
- Hybrid App（混合模式移动应用）是指介于Web App、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势”
- [网页与web app的区别概念 - 参考](http://3y.uu456.com/bp-7924d27014791711cc791799-1.html)

## 移动App的三种开发方式

- Native  ： 安卓（Java）、苹果（Object C、Swift）
- Web     ： JavaScript + HTML + CSS 等相关技术
  - [jQuery mobile（适配移动端的UI库）](http://www.w3school.com.cn/jquerymobile/)
- Hybrid  ： JavaScript + HTML + CSS 等相关技术，配合原生开发语言

### 三种开发方式对比 - web/native/hybrid

![三种开发方式对比 1](./images/Native-Hybrid-Webapp.png)
![三种开发方式对比 2](./images/三种开发类型的原理.png)
![三种开发方式对比 3](./images/native、web、hybridapp的对比.png)

- [Web App、Hybrid App与Native App的设计差异](http://www.woshipm.com/pd/123646.html)

- UIwebview：简单理解就是：浏览器，在安卓或iOS开发中，都是基于组件开发的，比如：在页面中展示一个按钮，只需要使用 按钮组件 即可。webview也是安卓或iOS中的一个组件，叫做：浏览器组件。给组件一个网址，这个组件就想浏览器一样，可以打开这个站点

### B/S和C/S的说明（补充）

- WebApp：所有的页面和其他的资源（js、css、img、字体）全部存储在服务器中
  - 缺点：受限于网络
  - 模式：B/S（Browser Server）
- NativeApp：所有的资源几乎都是存储与本地的（应用中的资源直接从本地获取，速度更快）
  - 模式：C/S（Client Server）

### WebApp

- 移动端 - [淘宝移动端](https://m.taobao.com/#index)
- PC端  - [百度脑图](http://naotu.baidu.com/)、web邮箱、webQQ等
- 优点：开发成本低、不用下载客户端（浏览器就能打开）、更新无需通知用户、不需要手动升级、跨平台
  - 可以运行在 PC、安卓、iOS、Pad、watch 等各种终端
- 缺点：用户体验稍差、无法获取系统级别的通知或提醒、设计受限制诸多

### NativeApp

- 优点：完美的用户体验、性能高且稳定、访问本地资源（通讯录，相册）、拥有系统级别的贴心通知或提醒
- 缺点：不能跨平台、开发成本高（不同平台有不同的开发语言和界面适配）、维护成本高（例如一款App已更新至V5版本，但仍有用户在使用V2， V3， V4版本，需要更多的开发人员维护之前的版本）、更新缓慢，根据不同平台，提交–审核–上线 等等不同的流程，需要经过的流程较复杂

### HybridApp

- 优点：跨平台、性能与原生差别不大、小更新无需重装
- 缺点：不适合开发游戏，受限于技术，网速，等等很多因素

## 为什么要学混合App开发

- 1 整合前端技术，接触前沿技术，接触原生开发
- 2 快速开发，一份代码多终端共用
- 3 需求量大，收入高

## 前端混合App开发框架

### React.js 和 ReactNative

- [React.js 官网](https://facebook.github.io/react/)
- [RN 官网](http://facebook.github.io/react-native/)
- [RN 中文网](http://reactnative.cn/docs/0.48/getting-started.html)

### Vue.js 和 Weex

- [Vue 中文官网](https://cn.vuejs.org/)
- [Weex 文档](http://weex.apache.org/cn/guide/index.html)
- [Weex github地址](https://github.com/apache/incubator-weex)
- [Weex快速打包](http://weex.apache.org/cn/guide/tools/toolkit.html)

### Angular.js 和 Ionic

- [Angular1官网](https://angularjs.org/)
- [Angular2官网](https://angular.io/)
- [Ionic 中文网](http://www.ionic.wang/)
- [Ionic 英文官网](http://ionicframework.com/getting-started/)

```html
Ionic：基于Angularjs语法的移动app开发框架，使用Phonegap打包Web页面
Phonegap：可以独立开发app，完成项目打包，让js调用原生API的移动App框架

phonegap与cordova 移动开发平台：
Cordova是从PhoneGap中抽出的核心代码，是驱动PhoneGap的核心引擎。
你可以把它们的关系想象成类似于Webkit和Chrome的关系。---摘自百度百科
```

### HBuilder + MUI

- [认识HTML5+](http://www.html5plus.org/#home)
  - HTML5+是一个产业联盟，它有一些互联网成员，专门在中国推广HTML5
  - HTML5不具备操作移动端设备API的功能，但是通过HTML5+提供的JS扩展就可以操作原生API
- [HTML5+ 说明](http://ask.dcloud.net.cn/article/89)
- [MUI开发](http://www.cnblogs.com/devilyouwei/p/6793609.html)

---

## 使用HBuilder生成安卓应用（在线）

- [HBuilder官网](http://www.dcloud.io/)

### 在线打包步骤

- 1 文件 -> 新建 -> 移动App
- 2 在项目根目录上右键 -> 发行 -> 发行为原生安装包
- 3 HBuilder会自动帮我们打包，并且把打包好的移动App下载到当前项目下的 unpackage 目录中的 release 中，然后，直接丢到手机中安装就可以了

```html
说明：HBuilder工具是在线生成安装包的，所以本地不需要配置安卓的开发环境
HBuilder工具，能够将本地的项目文件（html / css / js）提交到HBuiler的服务器中，在服务器中完成打包
```

## 移动App开发环境配置【重点】

- 线上打包：必须依赖与网络，没有网络的情况下就无法正常进行打包
- 本地打包：配置混合App项目需要的环境，实现本地打包构建

### 两种开发环境

- **ReactNative的开发环境，推荐按照官网中的步骤安装！！！**

- 安卓（android）
- 苹果（iOS）：需要macOS(操作系统)，参考RN官网环境安装步骤
- [RN - Building Projects with Native Code](https://facebook.github.io/react-native/docs/getting-started.html)
- [RN 中文网](http://reactnative.cn/docs/0.48/getting-started.html#content)

## 安卓（android）环境配置 - window系统

- 说明：以下是离线安装方式

```html
在 Windows系统下配置安卓开发环境需要6步：
1 安装 `java jdk`
2 配置 `JAVA_HOME` 系统环境变量
3 安装 `node`、`git`
4 安装 `python`
5 安装 `Android SDK Manager`
6 配置 `ANDROID_HOME` 系统环境变量
```

### 安装 java jdk（Java SE Development Kit）

- 注意：jdk版本需要 1.8.x 及其以上

- 1 根据操作系统位数（32或64）安装对应版本的jdk，采用`默认安装路径`即可
- 2 新建**系统环境变量**`JAVA_HOME`，值为`C:\Program Files (x86)\Java\jdk1.8.0_112`（示例），也就是安装JDK的根目录（注意：需要使用自己电脑中jdk的路径，而不是示例）
- 3 修改**系统环境变量**`Path`，在`Path`之后新增`%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`
  - 如果是win10系统，需要分两次添加环境变量：`%JAVA_HOME%\bin` 和 `%JAVA_HOME%\jre\bin`
- 4 新建**系统环境变量**`CLASSPATH`，值为`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`
- 5 保存所有的系统环境变量，同时退出系统环境变量配置窗口，然后运行cmd命令行工具，输入`javac`，如果能出现javac的命令选项，就表示配置成功

### 安装Python环境

- 注意：**只支持 Python2.× 版本**
- 注意：勾选安装界面上的`Add Python to path`，自动添加到系统环境变量
- 验证：在终端中，输入`python --version`，检查是否成功安装了python
  - `exit()`退出 pyhton 运行环境

### 安装Node.js环境

- 注意：需要安装最新的长期稳定版本（8.x 以及以上），实验版本可能存在问题
- 注意：**在RN项目中不要使用 cnpm 安装项目中用到的包**
- 使用 nrm 切换仓库地址：

```bash
# 1 安装 nrm
npm i -g nrm
# 展示仓库列表
nrm ls
# 根据仓库名称切换仓库地址
nrm use taobao

# 2 安装 cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 安装 Android SDK Manager 配置环境

- 1 安装`installer_r24.3.4-windows.exe`，安装到C盘下的android目录`C:\Android\`

- 2 将`platform-tools`文件夹拷贝到`C:\Android\`
- 3 将`platforms`文件夹拷贝到`C:\Android\`，并解压文件夹内部的两个压缩文件*解压到当前文件夹(X)*
- 4 将`build-tools`文件夹拷贝到`C:\Android\`，并解压文件夹内部的三个压缩文件*解压到当前文件夹(X)*
- 5 将`extras`文件夹拷贝到`C:\Android\`，并解压`extras\android`目录下的两个文件*解压到当前文件夹(X)*

- 6 配置安装环境变量：在**系统环境变量**中新建`ANDROID_HOME`，值为 android `SDK Manager.exe` 所在路径`C:\Android`。在**系统环境变量**`Path`中新增`%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`
  - win10系统分两次添加：`%ANDROID_HOME%\tools` 和 `%ANDROID_HOME%\platform-tools`

---

## ReactNative打包

- 注意：**支持的操作系统：Android 4.1以上 和 iOS 8.0 以上**

### 安装RN环境

- 安装：`npm i -g react-native-cli yarn`
- `yarn`：Facebook提供的替代npm的工具，可以加速node模块的下载，RN项目初始化脚手架在初始化的时候，会使用yarn来下载包
- `react-native-cli`：RN的脚手架工具，用于执行创建、初始化、更新项目、运行打包服务（packager）等任务

### RN项目打包步骤

- 1 运行`react-native init AwesomeProject` 创建React-Native项目
  - 说明：`AwesomeProject` 是RN项目的名称（任意的字母数字下划线）
  - **注意：项目所在目录路径中不要带有中文！！！**
- 2 运行`cd AwesomeProject` 切换到项目根目录中
- 3 运行`react-native run-android` 打包编译安卓项目，并部署到模拟器或手机（开发机）中
- 说明：通过手机 `摇一摇` 重新编译项目代码到手机中

- 注意：请确保手机连接到电脑中或者开启模拟器
- 注意：第一次打包必须是用数据线连接到手机，打包App到手机后，可以使用wifi连接

```html
运行命令`react-native run-android`命令后，会自动打开一个新的窗口
这个窗口不要关闭，它的作用：编译（将我们写的 ReactNative 代码，实时的打包到 安卓应用程序中）
当我们修改了 react-native 的代码，这个窗口（Bundler）就会重新编译我们写好的代码 到 手机或者模拟器中

react-native run-ios: 打包编译苹果项目，并部署到模拟器或iphone手机中，该命令运行一次即可（安装 手机应用）
react-native start：
  1 react-native run-android 命令将项目打包到手机中，运行一次即可
  2 以后的每一次只需执行：react-native start 命令，将我们更改后的代码适时更新到手机中
```

### adb（Android Debug Bridge）

- 1 手机通过数据线连接到电脑中
- 2 打开`ADBDriverInstaller.exe`，在列表中选中手机，点击`install`，安装驱动
- 3 在终端中，运行`adb devices`命令，查看连接到电脑中的设备列表，确认手机已经连接到电脑中，并能被识别为一个可用设备
- 4 至此，就可以将 react native 打包到手机中了
- 说明：**先在终端中运行`adb devices`，如果adb命令不可用再执行以上步骤**

### 真机调试注意点

- 注意1：手机需要开启：`开发者模式` 和 `USB调试`，并授权USB调试
  - 开启手机开发者模式：关于手机 -> 版本号（点击多次打开 开发者模式）

- 注意2：提示找不到设备的解决方式
  - 在cmd中，运行 `adb devices` 命令，查看接入电脑的设备列表，确保手机链接到电脑中

### 打包问题汇总

- [RN入坑指南 参考文档](http://www.open-open.com/lib/view/open1477469117948.html)

- 1 **项目所在路径以及项目名称中不要带有中文**
- 2 **只有通过数据线链接手机以后，才能将应用打包的手机中，否则，会导致打包到移动设备失败**
- 3 **有些手机系统，在第一次打包RN项目到手机时会出现：是否允许出现在其他应用上 等类似的提示，点击允许即可（作用：展示 摇一摇 的悬浮框）**
  - 手动开启：设置 -> 应用 -> 打包的应用 -> 出现在其他应用上（勾选）才能看到摇一摇的黑框
- 4 **有些手机系统无法使用摇一摇的功能，此时，可以点击手机的菜单键来打开 黑框（reload）**
- 5 **注意：目前npm5版本存在安装新库时会删除其他库的问题，导致项目无法正常运行。可以使用yarn代替npm操作**
- 6 **注意：通过npm下载包的时候如果一直失败，就将 C:\Users\登录用户\AppData\Roaming目录中的 npm-cache 文件夹删除（这个文件夹是 npm 下载包的缓存文件夹）**
- 7 **could not connect to development server，解决方式如下：**

```html
使用wifi连接手机步骤：

1 在 cmd.exe 中通过 `ipconfig` 获取到本机的**无线网ip地址**（注意：以太网适配器 不行！！！）
2 手机摇一摇，在悬浮框中点击 `Dev Settings` 进入
3 找到 `Debug server host & port for device` 输入第1步找到的 ip地址:8081，点击确定
4 手机摇一摇，重新载入

注意：
  1 如果是模拟器运行应用（App），那么，可以使用：以太网适配器 的IPv4地址
  2 如果是手机（外部设备），只能通过 无线网的ip地址 连接
```

### 配置夜神模拟器（安卓手机模拟器）

- 1 先打开 **夜神模拟器**  (设置 *手机版*)
- 2 在终端输入命令: `adb devices` 查看链接到电脑的设备，注意：第一次找不到模拟器的(没有 emulator 和 devices)
- 3 adb链接到模拟器: `adb connect 127.0.0.1:62001`
- 4 再次执行:`adb devices`:

```shell
# 显示一下内容，表示成功：
List of devices attached
127.0.0.1:62001 device
```

- 5 在RN项目的 **根目录** 下: `react-native run-android`(编译并打包运行到模拟器上)

---

## Yarn

- [yarn 官网](https://yarnpkg.com/zh-Hans/)
- [yarn 快速上手](https://yarnpkg.com/zh-Hans/docs/usage)
- [yarn vs npm](http://web.jobbole.com/88459/)

```
yarn 的作用与 npm 的作用相同

yarn 相对于 npm 来说，下载速度更快
在 react-native 项目中，不要使用 npm或cnpm 来下载包！！！
```

```python
# 设置yarn仓库镜像：
yarn config set registry https://registry.npm.taobao.org --global

# yarn 常用命令：
yarn init               初始化package.json文件      ---> npm init
yarn add vue            作为项目依赖安装             ---> npm install vue
yarn add webpack -D     做为项目开发依赖安装         ---> npm install webpack --save-dev
yarn install / yarn     安装package.json中的所有包  ---> npm install / npm i

# 注意：全局安装包的时候，命令为：yarn global add 包的名称，注意 global 和 add 的顺序！！不能颠倒
yarn global add webpack 全局安装                    ---> npm i -g webpack
```
# ReactNative

- [MAC OS 安装 ADB](http://www.jianshu.com/p/1b3fb1f27b67)
- [RN资源文章列表](https://github.com/reactnativecn/react-native-guide)
- [RN中各种坑的解决方式](http://www.jianshu.com/p/276cb2c0283a)

## RN的基本使用

### 项目结构的介绍

- 注意：react-native 中通过 yarn 来下载对应的包，因为使用npm下载包，npm会把 node_modules 中已经存在的包删除掉

```html
/__tests__               测试文件
/android                 安卓相关文件
/ios                     苹果相关文件
.babelrc                 babel的配置文件
.buckconfig              buck 的配置文件，buck 是 Facebook 开源的高效编译系统
.flowconfig              flow 的配置文件，flow 用于代码静态检查
.gitattributes           指定非文本文件的对比合并方式
.gitignore               git的忽略文件
.watchmanconfig          苹果系统中的一个软件
App.js                   主组件
app.json                 app的配置文件
index.js                 入口文件
package.json             yarn配置文件
yarn.lock                yarn高效下载依赖包lock文件
```

### 项目入口文件的说明

- **index.js** 是项目的入口文件

```js
// 导入 react-native 组件
import { AppRegistry } from 'react-native';
import App from './App';

// 作用：用来注册首屏组件，也就是：手机应用打开后要看到的首页
// 注意：不要修改 RN_basic 这个参数，否则，会导致项目报错
AppRegistry.registerComponent('RN_basic', () => App);
```

- **App.js** 是首页组件

```js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react-native 使用的也是 react 的语法，所以，先把react导入
import React, { Component } from 'react';

// 导入 react-native 组件
import {
  Platform,     // 用来获取平台相关信息的对象
  StyleSheet,   // 样式对象
  Text,         // Text 是一个文本组件，用来在 rn 中展示文字内容, 注意：文本必须添加到Text组件中
  View          // View组件类似于HTML中的div，用来处理rn中的布局
} from 'react-native';

// 为不同的平台提供不同展示内容
// 如果是 苹果手机，那么会展示 ios 对应的内容
// 如果是 安卓手机，那么会展示 android 对应的内容
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 导出组件，语法与 react 中是一模一样的，只不过 渲染的JSX组件，变成了 手机中组件（react-native 提供的）
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! 程序员
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

// StyleSheet 组件用来创建样式
// 理解：将 CSS样式，转化为 手机中能够识别的样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

```

### RN的注意事项

- 注意：RN中只能使用RN能够识别的组件，像：`div、p、img`等RN是不识别的会报错！
- 注意：文本内容必须出现在一个`Text`组件中，不能直接使用，否则，会报错

### RN中使用样式

- 1 使用`StyleSheet`组件的`StyleSheet.create({})`创建一个样式对象
- 2 样式的属性名称是`驼峰命名`表示的，中间不能出现短横线
- 3 数值类型的样式，不要带单位，直接将数值写到样式中即可
- 4 RN中的采用`flex`布局，默认的方向是`column`(垂直)，而不是`row`
  - `justifyContent`：在RN中表示 主轴, center表示垂直剧中
  - `alignItems`：在RN中表示 交叉轴， center表示水平剧中
  - `flexDirection` 默认值为：column，如果要水平排列需要修改为： row
- 5 `flex: 1` 用来占满整个屏幕
- [使用Flexbox布局](http://reactnative.cn/docs/0.47/layout-with-flexbox.html#content)
- 注意：React Native中的尺寸都是无单位的
- 默认情况下，flex布局是纵向的，如果想要让元素横向排列，需要将 flexDirection 设置为：row

#### Props(属性)
- 组件在创建时就可以使用各种定制的参数
- 基础组件image，可以传入一个名为source的prop来指定要显示的图片的地址，以及使用名为style的prop来控制其尺寸。

```javascript
//注意{pic}外围有一层括号，我们需要用括号来把pic这个变量嵌入到JSX语句中。括号的意思是括号内部为一个js变量或表达式，需要执行后取值。因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中。
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}
```
- 自定义组件的props使用

```javascript
//Greeting组件中将name作为一个属性来定制，这样可以复用这一组件来制作各种不同的“问候语”。

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

```
#### State(状态)
我们使用两种数据来控制一个组件：props和state。
- props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。
- 对于需要改变的数据，我们需要使用state。

```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//一般来说，你需要在constructor中初始化state,，然后在需要修改时调用setState方法。
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
```
#### 样式

实际开发中组件的样式会越来越复杂，我们建议使用StyleSheet.create来集中定义组件的样式,你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。

```js
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
```

#### 网络请求 Fetch

- ##### 发起网络请求

```js
//要从任意地址获取内容的话，只需简单地将网址作为参数传递给fetch方法即可
fetch('https://mywebsite.com/mydata.json')
//Fetch还有可选的第二个参数，可以用来定制HTTP请求一些参数。你可以指定header参数，或是指定使用POST方法，又或是提交数据等等：
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
//提交数据的格式关键取决于headers中的Content-Type。Content-Type有很多种，对应body的格式也有区别。到底应该采用什么样的Content-Type取决于服务器端，所以请和服务器端的开发人员沟通确定清楚。常用的'Content-Type'除了上面的'application/json'，还有传统的网页表单形式，示例如下：

fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'key1=value1&key2=value2'
})
```

- ##### 处理服务器的响应数据

  - ###### Fetch 方法会返回一个Promise，这种模式可以简化异步风格的代码

```js
  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

```

- 你也可以在React Native应用中使用ES7标准中的async/await 语法：

```js
   // 注意这个方法前面有async关键字
  async getMoviesFromApi() {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      return responseJson.movies;
    } catch(error) {
      console.error(error);
    }
  }
```

- ###### 别忘了catch住fetch可能抛出的异常，否则出错时你可能看不到任何提示。
  
- ##### 使用其他的网络库
  - ###### React Native中已经内置了XMLHttpRequest API(也就是俗称的ajax)。一些基于XMLHttpRequest封装的第三方库也可以使用，例如frisbee或是axios等。但注意不能使用jQuery，因为jQuery中还使用了很多浏览器中才有而RN中没有的东西

```js
      var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
    
      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error');
      }
    };
    
    request.open('GET', 'https://mywebsite.com/endpoint/');
    request.send();
```

  - ###### 安全机制与网页环境有所不同：在应用中你可以访问任何网站，没有跨域的限制。
- ##### WebSocket支持
  - ###### React Native还支持WebSocket，这种协议可以在单个TCP连接上提供全双工的通信信道。

```js
    var ws = new WebSocket('ws://host.com/path');
    
    ws.onopen = () => {
      // 打开一个连接
    
      ws.send('something'); // 发送一个消息
    };
    
    ws.onmessage = (e) => {
      // 接收到了一个消息
      console.log(e.data);
    };
    
    ws.onerror = (e) => {
      // 发生了一个错误
      console.log(e.message);
    };
    
    ws.onclose = (e) => {
      // 连接被关闭了
      console.log(e.code, e.reason);
    };
```

### 修改项目首屏页面

```js
import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
```

- 通过`AppRegistry.registerComponent()` 注册首屏组件（根组件）
- 如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！
- 在整个应用里`AppRegistry.registerComponent`这个方法只会调用一次

## 基本组件的使用介绍

```html
View / Text / TextInput / Image / Button
```

### View组件

- 作用：相当于div标签，作用是用来进行页面布局的

### Text组件

- 作用：展示文本内容，并且所有的文本内容，都需要包含在Text标签中

### TextInput组件

- 作用：相当于HTML中的input标签，接受用户的输入
- 属性：autoFocus / multiline / secureTextEntry
- 事件:
  - onChangeText事件:读取用户的输入,在onChangeText中用setState把用户的输入写入到state中，然后在需要取值的地方从this.state中取出值。(注意，从TextInput里取值这就是目前唯一的做法！)
  - onSubmitEditing:提交事件
  - onFocus

```js

import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text} />)
  }
}
```

```js
    <View style={styles.container}>
       <TextInput style={styles.inputStyle}
         //value={'我是默认的'}     /*该文字无法删除*/
         keyboardType = {'number-pad'} //弹出键盘类型
         multiline = {true}   //多行显示,默认false:单行显示
//          password = {true}     //密码 多行文本不显示密码
         placeholder = {'我是占位文字'}  //占位文字
         placeholderTextColor = 'red'  //占位文字颜色
         autoCapitalize = {'characters'} //通知文本输入自动利用某些字符
         clearButtonMode = {'always'}    //右侧的清除模式
         autoCorrect = {false} //禁用自动校正 默认值true开启自动校正
        // editable = {false} // 是否可编辑 默认为true可编辑
        // retrunKeyType = {'go'} //返回键类型
         />
      </View>
 ```

### Image组件

- ##### 作用：相当于HTML中的img标签，用来展示图片

- ##### 本地资源，使用require(相对路径)

```js
<Image source={require('./images/1.jpg')} style={{width:200, height:200, borderRadius:100, backgroundColor:'red'}} resizeMode="stretch"/>
```

- ##### 网络资源，使用`{uri: '图片地址'}`
- ##### 注意：引用网络资源的时候，必须提前指定宽高

```js
<Image source={{
  uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'
  }} style={{width:150 ,height:150}} />
```

##### 支持的图片格式
- （1）React Native 默认支持 JPG、PNG 格式。
- （2）在 iOS 平台下，还支持 GIF、WebP 格式。
- （3）在 Android 平台下，默认不支持 GIF、WebP 格式。可以通过修改 Android 工程设置让其支持这两种格式：
打开项目目录下的 android/app/build.gradle，视情况添加相关代码：

```js
dependencies {
  compile 'com.facebook.fresco:animated-gif:0.11.0'  //需要GIF动画支持添加本行语句
  compile 'com.facebook.fresco:webpsupport:0.11.0'  //需要WebP格式支持添加本行语句
  compile 'com.facebook.fresco:animated-webp:0.11.0'  //需要WebP动画支持添加本行语句
}
```
##### 网络图片的请求参数

```js

//可以在Image组件的source属性中指定一些请求参数
<Image source={{
  uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg',
  method: 'POST',
  body: 'Your Body goes here'}} style={{width: 400, height: 400}} />
  //headers: {  Pragma: 'no-cache' }

```

- ##### 缓存控制（仅iOS）
    - 仅仅想展示一张已经在本地缓存的图片
   - ###### cache
       - default：使用原生平台默认策略。
       - reload：URL的数据将从原始地址加载。不使用现有的缓存数据。
       - force-cache：现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则从原始地加载。
       - only-if-cached：现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则不尝试从原始地址加载，并且认为请求是失败的。

```JS
<Image source={{
  uri: 'https://facebook.github.io/react/img/logo_og.png',
  cache: 'only-if-cached'
  }} style={{width: 400, height: 400}} />
```

##### 网络图片加载监听
对于网络图片的加载，ReactNative提供了一些属性用于图片不同加载时期的监听。

- onLoadStart 图片开始加载时调用
- onLoad
图片加载完成时调用，此时图片加载成功
- onLoadEnd
加载结束后调用，与onLoad不同的是不论成功还是失败，此回调函数都会被执行。

使用方法如下

```js
<Image
   source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
   style={[styles.base, {overflow: 'visible'}]}
   onLoadStart={() => console.log('onLoadStart')}
   onLoad={(event) => console.log('onLoad') }
   onLoadEnd={() =>  console.log('onLoadEnd')}
            />


//对于iOS，还提供了加载进度的回调函数onProgress
<Image
   style={styles.image}
   onProgress={(event) => {
      console.log('onProgress')
      this.setState({
        progress: Math.round(100 * event.nativeEvent.loaded / event.nativeEvent.total)
    })}}/>


```

- ##### CameraRoll 
  - CameraRoll模块提供了访问本地相册的功能。
- ##### 背景图片组件ImageBackground
```
return (
  <ImageBackground source={...}>
    <Text>Inside</Text>
  </ImageBackground>
);
```

### Button组件

- 注意：按钮组件必须有onPress属性
- `title` 表示：添加给按钮的文字

```js
<Button title="点击啊啊啊啊" onPress={this.sayHello}></Button>
```

### ActivityIndicator组件

- 作用：loading效果

```js
<ActivityIndicator color="darkred" size="large"/>
```

### ScrollView组件

- 作用：滚动组件，将需要滚动的内容包裹起来即可
- 注意：RN中，默认情况下是没有滚动条的，即使内容超过了屏幕的高度也没有。只有将内容包裹在滚动组件中，才能出现滚动条

#### ScrollView滚动视图(显示数量不多的滚动元素)
- ScrollView是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。ScrollView不仅可以垂直滚动，还能水平滚动（通过horizontal属性来设置）。
```js
import React, { Component } from 'react';
import  {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   ScrollView,
} from 'react-native'
var NUM_ITEMS = 20;
var PerfectProject = React.createClass({
    Statics: {
      titles: '<ScrollView>',
      description: 'Component that enable scrolling through child component',
    },
    makeItems: function(nItems: number, styles) : Array<any> {
       var items = [];
      for (var i=0;i<nItems;i++){
        items[i] = (
           <TouchableOpacity key={i} style={styles}>
             <Text style={{fontSize:20 }}>{'Item text' + i}</Text>
           </TouchableOpacity>
        );
      }
      return items;
    },

   render: function(){
        var items = this.makeItems(NUM_ITEMS,styles.itemWrapper);
           items[4] = (
            <ScrollView  key={'ScrollView'} horizontal={true}>
            {this.makeItems(NUM_ITEMS,[styles.itemWrapper,styles.horizontalItemWrapper])}
            </ScrollView>
           );

        var verticalScrollView=(
           <ScrollView style={styles.verticalScrollView}>
            {items}
           </ScrollView>
        );
        return verticalScrollView;
    },
});
var styles = StyleSheet.create({
   itemWrapper: {
     backgroundColor: '#dddddd',
     alignItems: 'center',
     borderWidth: 5,
     borderColor: 'red',
     borderRadius: 5,
     padding: 30,
     margin: 5,
   },
   horizontalItemWrapper: {
     padding: 50,
   },
   verticalScrollView:{
     backgroundColor: 'aquamarine',
     margin: 10,
   },
});
AppRegistry.registerComponent('PerfectProject',() => PerfectProject);
```
- ##### ScrollView适合用来显示数量不多的滚动元素。放置在ScollView中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外。
- ##### 如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的ListView组件。
- ScrollView属性列表

|名称| value|作用
|---|---|---
|contentContainerStyle | 样式风格属性(传入StyleSheet创建的Style文件)| 这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内。
|horizontal | bool| 当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为false。
|keyboardDismissMode| enum('none', "interactive", 'on-drag') |用户拖拽滚动视图的时候，是否要隐藏软键盘。none（默认值），拖拽时不隐藏软键盘。on-drag 当拖拽开始的时候隐藏软键盘。interactive 软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘。安卓设备上不支持这个选项，会表现的和none一样。
|keyboardShouldPersistTaps|bool|当此属性为false的时候，在软键盘激活之后，点击焦点文本输入框以外的地方，键盘就会隐藏。如果为true，滚动视图不会响应点击操作，并且键盘不会自动消失。默认值为false。
|onContentSizeChange|function |此函数会在ScrollView内部可滚动内容的视图发生变化时调用。调用参数为内容视图的宽和高: (contentWidth, contentHeight)此方法是通过绑定在内容容器上的onLayout来实现的。
|onScroll |function|在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
|refreshControl |element|指定RefreshControl组件，用于为ScrollView提供下拉刷新功能。
|removeClippedSubviews|bool|（实验特性）：当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。默认值为true。
|showsHorizontalScrollIndicator|bool|当此属性为true的时候，显示一个水平方向的滚动条。
|showsVerticalScrollIndicator|bool|当此属性为true的时候，显示一个垂直方向的滚动条。有时候滚动视图会占据比实际内容更多的空间。这种情况下可以使用此属性，指定以某种颜色来填充多余的空间，以避免设置背景和创建不必要的绘制开销。一般情况下并不需要这种高级优化技巧。
|（ios）alwaysBounceHorizontal|bool|当此属性为true时，水平方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为true，否则为false。
|（ios）alwaysBounceVertical|bool|当此属性为true时，垂直方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为false，否则为true。
|（ios）automaticallyAdjustContentInsets|bool|如果滚动视图放在一个导航条或者工具条后面的时候，iOS系统是否要自动调整内容的范围。默认值为true。（译注：如果你的ScrollView或ListView的头部出现莫名其妙的空白，尝试将此属性置为false）
|（ios）bounces|bool|当值为true时，如果内容范围比滚动视图本身大，在到达内容末尾的时候，可以弹性地拉动一截。如果为false，尾部的所有弹性都会被禁用，即使alwaysBounce*属性为true。默认值为true。
|（ios）bouncesZoom|bool|当值为true时，使用手势缩放内容可以超过min/max的限制，然后在手指抬起之后弹回min/max的缩放比例。否则的话，缩放不能超过限制。
|（ios）canCancelContentTouches |bool |当值为false时，一旦有子节点响应触摸操作，即使手指开始移动也不会拖动滚动视图。默认值为true（在以上情况下可以拖动滚动视图。）
|（ios）centerContent|bool|当值为true时，如果滚动视图的内容比视图本身小，则会自动把内容居中放置。当内容比滚动视图大的时候，此属性没有作用。默认值为false。
|（ios）contentInset|{top: number, left: number, bottom: number, right: number} |内容范围相对滚动视图边缘的坐标。默认为{0, 0, 0, 0}。
|（ios）contentOffset|PointPropType |用来手动设置初始的滚动坐标。默认值为{x: 0, y: 0}。
|（ios）decelerationRate|number |一个浮点数，用于决定当用户抬起手指之后，滚动视图减速停下的速度。常见的选项有：Normal: 0.998 (默认值)；Fast: 0.9
|（ios）directionalLockEnabled| bool|当值为真时，滚动视图在拖拽的时候会锁定只有垂直或水平方向可以滚动。默认值为false。
|（ios）maximumZoomScale|number|允许的最大缩放比例。默认值为1.0。
|（ios）minimumZoomScale|number|允许的最小缩放比例。默认值为1.0。 
|（ios）onScrollAnimationEnd|function|当滚动动画结束之后调用此回调。
|pagingEnabled|bool|当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上。默认值为false。
|（ios）scrollEnabled|bool|当值为false的时候，内容不能滚动，默认值为true。
|（ios）scrollEventThrottle|number|这个属性控制在滚动过程中，scroll事件被调用的频率（单位是每秒事件数量）。更大的数值能够更及时的跟踪滚动位置，不过可能会带来性能问题，因为更多的信息会通过bridge传递。默认值为0，意味着每次视图被滚动，scroll事件只会被调用一次。
|（ios）scrollIndicatorInsets|{top: number, left: number, bottom: number, right: number}|决定滚动条距离视图边缘的坐标。这个值应该和contentInset一样。默认值为{0, 0, 0, 0}。
|（ios）scrollsToTop|bool|当此值为true时，点击状态栏的时候视图会滚动到顶部。默认值为true。
|（ios）snapToAlignment|enum('start', "center", 'end') |当设置了snapToInterval，snapToAlignment会定义停驻点与滚动视图之间的关系。start (默认) 会将停驻点对齐在左侧（水平）或顶部（垂直）；center 会将停驻点对齐到中间；end 会将停驻点对齐到右侧（水平）或底部（垂直）
|（ios）snapToInterval|number|当设置了此属性时，会让滚动视图滚动停止后，停止在snapToInterval的倍数的位置。这可以在一些子视图比滚动视图本身小的时候用于实现分页显示。与snapToAlignment组合使用。
|（ios）stickyHeaderIndices|[number]|一个子视图下标的数组，用于决定哪些成员会在滚动之后固定在屏幕顶端。举个例子，传递stickyHeaderIndices={[0]}会让第一个成员固定在滚动视图顶端。这个属性不能和horizontal={true}一起使用
|（ios）zoomScale|number|滚动视图内容初始的缩放比例。默认值为1.0。

- #### ScrollView样式

```css

//FlexBox布局
Flexbox...

ShadowPropTypesIOS#style...

Transforms...

backfaceVisibility enum('visible', 'hidden')

backgroundColor string

borderColor string

borderTopColor string

borderRightColor string

borderBottomColor string

borderLeftColor string

borderRadius number

borderTopLeftRadius number

borderTopRightRadius number

borderBottomLeftRadius number

borderBottomRightRadius number

borderStyle enum('solid', 'dotted', 'dashed')

borderWidth number

borderTopWidth number

borderRightWidth number

borderBottomWidth number

borderLeftWidth number

opacity number

overflow enum('visible', 'hidden')

shadowColor string

shadowOffset {width: number, height: number}

shadowOpacity number

shadowRadius number

androidendFillColor color 
```

- #### 双指缩放
- ##### 如果在ScrollView中只放置一个组件，则可以用来实现缩放操作。设置maximumZoomScale和minimumZoomScale属性即可以使用户能够缩放其中的内容。
- #### 处理其他的手势(自定义手势)
- ##### PanResponder类可以将多点触摸操作协调成一个手势。它使得一个单点触摸可以接受更多的触摸操作，也可以用于识别简单的多点触摸手势。对于每一个处理函数，它在原生事件之外提供了一个新的gestureState对象。
```
onPanResponderMove: (event, gestureState) => {}
```
- ###### 原生事件是指由以下字段组成的合成触摸事件：
   
 - nativeEvent
    - changedTouches - 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸）
    - identifier - 触摸点的ID
    - locationX - 触摸点相对于父元素的横坐标
    - locationY - 触摸点相对于父元素的纵坐标
    - pageX - 触摸点相对于根元素的横坐标
    - pageY - 触摸点相对于根元素的纵坐标
    - target - 触摸点所在的元素ID
    - timestamp - 触摸事件的时间戳，可用于移动速度的计算
    - touches - 当前屏幕上的所有触摸点的集合
 - 一个gestureState对象有如下的字段：
    - stateID - 触摸状态的ID。在屏幕上有至少一个触摸点的情况下，这个ID会一直有效。
    - moveX - 最近一次移动时的屏幕横坐标
    - moveY - 最近一次移动时的屏幕纵坐标
    - x0 - 当响应器产生时的屏幕坐标
    - y0 - 当响应器产生时的屏幕坐标
    - dx - 从触摸操作开始时的累计横向路程
    - dy - 从触摸操作开始时的累计纵向路程
    - vx - 当前的横向移动速度
    - vy - 当前的纵向移动速度
    - numberActiveTouches - 当前在屏幕上的有效触摸点的数量

```js
 componentWillMount: function() {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

        // gestureState.{x,y} 现在会被设置为0
      },
      onPanResponderMove: (evt, gestureState) => {
        // 最近一次的移动距离为gestureState.move{X,Y}

        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  },

  render: function() {
    return (
      <View {...this._panResponder.panHandlers} />
    );
  },
```

### ReactNative长列表数据组件一共有三个：
- ##### ListView 核心组件，数据量大时性能较差，占用内存持续增加，故设计出来FlatList组件。
- ##### FlatList 用于替代ListView，支持下拉刷新和上拉加载。
- ##### SectionList 高性能的分组列表组件。
### FlatList组件

- [FlatList使用文档](http://blog.csdn.net/mengks1987/article/details/70229918)
- [FlatList进阶](http://blog.csdn.net/fsf_snail/article/details/77875527)
- #### 属性

```js
//分割线组件，
ItemSeparatorComponent

//结尾组件 
ListFooterComponent

 //头组件
ListHeaderComponent

//列表数据 
data

//设置为true则变为水平列表。
horizontal 

 //列数 组件内元素必须是等高的,无法支持瀑布流布局
numColumns

//numColumns大于1时，设置每行的样式 
columnWrapperStyle

//如果我们知道行高可以用此方法节省动态计算行高的开销。
getItemLayout

//是否正在加载数据 
refreshing

 //设置此属性需要一个标准的 RefreshControl 控件，刷新数据
onRefresh

//渲染每个组件 
renderItem

//当一个新的Item渲染或者隐藏 的时候调用此方法
//参数：info: {viewableItems: Array, changed: Array}
onViewableItemsChanged

//当前可见的Item，changed：渲染或者隐藏的Item。
viewableItems

//滚动到末尾，如果不设置getItemLayout属性的话，可能会比较卡。
scrollToEnd({params?:?{animated?:?boolean}})

//滚动到制定的位置 
scrollToIndexparams: {animated?: ?boolean, index: number, viewPosition?: number}

//滚动到指定的偏移的位置。
scrollToOffset(params: {animated?: ?boolean, offset:number})：
```

#### FlatList 长列表数据

- ##### 和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
- ##### FlatList组件必须的两个属性是data和renderItem。FlatList组件是listview的升级版
  - data是列表的数据源，
  - renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

- 下面的例子创建了一个简单的FlatList，并预设了一些模拟数据。首先是初始化FlatList所需的data，其中的每一项（行）数据之后都在renderItem中被渲染成了Text组件，最后构成整个FlatList。

```JS
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
```

```js
<FlatList
  // 数据源
  data={this.state.list}
  // 设置集合中每一项展示的内容结构
  renderItem={ this._renderList }
  // keyExtractor用来为 flatlist 指定key属性
  keyExtractor={ item => item.id }
  // 两项之间的间隔样式
  ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }}></View>}></FlatList>
```

```js
// 下拉刷新 和 触底刷新

export default class App extends Component {
  state = {
    list: [],
    isfreshing: false,
    hasMore: true
  }

  componentWillMount() {
    for (var i = 0; i < 20; i++) {
      this.state.list.push({id: i + 1, name: 'dd-' + i})
    }

    this.setState({
      list: this.state.list
    })
  }

  render() {
    console.log(this.state.list);

    return (
      <FlatList
        // 数据源
        data={this.state.list}
        refreshing={this.state.isfreshing}
        onRefresh={e => {
          this.setState({
            isfreshing: true
          })

          setTimeout(() => {
            this.setState({
              isfreshing: false
            })
          }, 2000);
        }}

        onEndReachedThreshold={0.1}
        onEndReached={e => {
          if (this.state.hasMore) {
            console.warn('快滚完了~');
            this.setState((state) => ({
              list: state.list.concat([{ id: 21, name: '22221' }]),
              hasMore: this.state.list.length < 25
            }));
          } else {
            console.warn('没啦');
          }
        }}

        // 设置集合中每一项展示的内容结构
        renderItem={this._renderList}
        // keyExtractor用来为 flatlist 指定key属性
        keyExtractor={item => item.id}
        // 两项之间的间隔样式
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }}></View>}></FlatList>
    );
  }

  _renderList({item}) {

    return (
      <View style={{ height: 80, justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>这是第 {item.id} 个元素，{item.name}</Text>
      </View>
    )
  }
}
```

### ListView组件

- 作用：相比于ScrollView，ListView的性能会好一些，适用于做那些列表的渲染，默认就提供了懒加载的功能

#### 使用方式（3步）

```js
constructor(props) {
  super(props)

  // 1 创建 ListView 的数据源对象
  // 当数据变化时，rowHasChanged() 函数用来决定这一行数据是否被更新
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  // 2 传递数组转化为 ListView 需要的数据格式
  this.state = {
    dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  };
}

render() {
  return (
    // 3 设置数据源，根据数据源渲染每一行的数据
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
    />
  );
}
```
### SectionList分组列表
- #### 如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么SectionList将是个不错的选择.
- #### SectionList常用属性和方法
  - ##### 属性集合

| 属性名 | 类型 | 说明
| --- |--- |--- |
| sections | Array | 数据源  |
| ItemSeparatorComponent |ReactClass<any> |不会出现在第一行之前和最后一行之后  |
| SectionSeparatorComponent  | ReactClass<any>  | 每个section之间的分隔组件  |
| ListEmptyComponent | ReactClass<any>/React.Element<any> | 列表为空时渲染该组件。可以是React Component, 也可以是一个render函数， 或者渲染好的element。  |
| ListFooterComponent | ReactClass<any> | 尾部组件 |
| ListHeaderComponent | ReactClass<any> |头部组件 |
| data | Array<ItemT> | 为了简化起见，data属性目前只支持普通数组。如果需要使用其他特殊数据结构，例如immutable数组，请直接使用更底层的VirtualizedList组件 |
| extraData | any | 如果有除data以外的数据用在列表中（不论是用在renderItem还是Header或者Footer中），请在此属性中指定。同时此数据在修改时也需要先修改其引用地址（比如先复制到一个新的Object或者数组中），然后再修改其值，否则界面很可能不会刷新。 |
| getItem | any | 获取控件的绑定数据 |
| getItemCount | any | 获取绑定数据的条数 |
| getItemLayout | (data: ?Array<ItemT>, index: number) => {length: number, offset: number, index: number} | getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单，类似下面这样：getItemLayout={(data, index) => ( {length: 行高, offset: 行高 * index, index} )}；注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中。 |
| initialNumToRender | number | 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素。 |
| keyExtractor | (item: ItemT, index: number) => string|此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。 |
| legacyImplementation | boolean | 设置为true则使用旧的ListView的实现
onEndReached|(info: {distanceFromEnd: number}) => void|当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用  |
| onEndReachedThreshold | number | 决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发 |
| onRefresh | void | 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性 |
| onViewableItemsChanged | (info: {viewableItems: Array<ViewToken>, changed: Array<ViewToken>}) => void | 在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置viewabilityconfig属性 |
| refreshing | boolean | 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号 |
| renderItem | (info: {item: ItemT, index: number}) => ?React.Element<any> | 根据行数据data渲染每一行的组件 |
| viewabilityConfig | ViewabilityConfig | 请参考[ViewabilityHelper](https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js)的源码来了解具体的配置 |

  - ##### 方法集合

| 方法名|说明
| --- | --- |
| scrollToLocation | 将可视区内位于特定sectionIndex 或 itemIndex(section内)位置的列表项，滚动到可视区的制定位置。比如说，viewPosition 为0时将这个列表项滚动到可视区顶部 (可能会被顶部粘接的header覆盖), 为1时将它滚动到可视区底部, 为0.5时将它滚动到可视区中央。viewOffset是一个以像素为单位，到最终位置偏移距离的固定值，比如为了弥补粘接的header所占据的空间。注意: 如果没有设置getItemLayout，就不能滚动到位于外部渲染区的位置。 |
| recordInteraction | 主动通知列表发生了一个事件，以使列表重新计算可视区域。比如说当waitForInteractions 为 true 并且用户没有滚动列表时，就可以调用这个方法。不过一般来说，当用户点击了一个列表项，或发生了一个导航动作时，我们就可以调用这个方法。 |
| flashScrollIndicators | 短暂地显示滚动指示器。 |

- ##### SectionList示例，通讯录实现以及源码
 
```JSX
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  SectionList,
} from 'react-native';
 
 
 
class HomeScreen extends React.Component {
 
  constructor(props) {
    super(props);
  }
 
  _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    return <Text
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }
 
  _sectionComp = (info) => {
    var txt = info.section.key;
    return <Text
      style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
  }
 
  render() {
    var sections = [
      { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
      { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
      { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
      { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
    ];
 
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          sections={sections}
          ItemSeparatorComponent={() => <View><Text></Text></View>}
          ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
          ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
        />
      </View>
    );
  }
 
}
 
AppRegistry.registerComponent('App', () => HomeScreen);
```

## 案例：豆瓣电影列表

- 电影列表数据：`https://api.douban.com/v2/movie/in_theaters`
- 电影详细数据：`https://api.douban.com/v2/movie/subject/26309788`

## RN - 路由

- React Navigation（官方）
- #### 使用
```js
//安装
yarn add react-navigation
//导入组件 创建两个页面（Main和Profile）
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});
//其中每一个screen组件都可以单独设置导航选项，例如导航头的标题。还可以使用navigation属性中的方法去跳转到别的页面：

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' });
        }
      />
    );
  }
}
```

- #### NavigatorIOS
  - 如果你只针对iOS平台开发，那么可以考虑使用NavigatorIOS。它是基于 UINavigationController封装的，所以看起来很像。
  - NavigatorIOS使用路由要渲染的组件在路由对象的component字段中指定，要给目标组件传递的参数则写在passProps中。被渲染的component都会自动接受到一个名为navigator的属性，你可以直接调用此对象(this.props.navigator)的push和pop方法。
  - 由于NavigatorIOS使用的是原生的UIKit导航，所以它会自动渲染一个带有返回按钮和标题的导航栏。

```jsx
    import React, { Component, PropTypes } from 'react';
    import { NavigatorIOS, Text, TouchableHighlight, View } from 'react-native';

    export default class NavigatorIOSApp extends Component {
      render() {
        return (
          <NavigatorIOS
            initialRoute={{
              component: MyScene,
              title: 'My Initial Scene',
            }}
            style={{flex: 1}}
          />
        )
      }
    }

    class MyScene extends Component {
      static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
      }
    
      constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
      }
    
      _onForward() {
        this.props.navigator.push({
          title: 'Scene ' + nextIndex,
        });
      }
    
      render() {
        return (
          <View>
            <Text>Current Scene: { this.props.title }</Text>
            <TouchableHighlight onPress={this._onForward}>
              <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>
          </View>
        )
      }
    }
```

- [RN router - github](https://github.com/aksonov/react-native-router-flux):RNRF v4基于react-navigation，功能更强大
- [Mini-Tutorial（使用指南）](https://github.com/aksonov/react-native-router-flux/blob/v3/docs/MINI_TUTORIAL.md)

### 基本使用

- 安装：yarn add react-native-router-flux
- 通过 npm 安装包的时候，会自动删除已经安装的包，此时，可以通过yarn重新全部安装即可

```js

// 1 导入 React 组件
import React, { Component } from 'react';
// 2 导入 路由 组件
import { Router, Scene } from 'react-native-router-flux';

// 3 导入 自定义的两个组件
import PageOne from './PageOne';
import PageTwo from './PageTwo';

// 4 创建 根组件
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}

```

### 使用说明

- 1 所有的`Scene`需要包裹在一个`<Router></Router>`中
- 2 每一个路由（页面）称作：`<Scene></Scene>`
- 3 所有的`<Scene></Scene>`被包裹在一个`根<Scene></Scene>`中

### 属性介绍

- key: 唯一字符串，用来定位路由跳转到的Scene
- component: 当前路由对应的组件
- title: 在导航条或者最顶部展示的文字标题

### 路由跳转

```js
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        {/*
          onPress 点击事件
          Actions.pageTwo 要跳转到的路由key
        */}
        <Text onPress={Actions.pageTwo}>This is PageOne!</Text>
      </View>
    )
  }
}
```

- 路由之间传参：

```js
// pageOne组件：
render() {
  // 跳转到 pageTwo ，并传递参数（对象）
  const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});

  return (
    <View style={{margin: 128}}>
      <Text onPress={goToPageTwo}>This is PageOne!</Text>
    </View>
  )
}

// pageTwo组件：
通过 this.props.text 获取到
```

## 配置首页的轮播图

- [RN - 轮播图官网](https://github.com/leecade/react-native-swiper)

### swiper使用说明

- 命令：`yarn add react-native-swiper` 安装轮播图组件

```js
// 将 Swiper 包裹在 View 中，并且设置高度
<View style={{ height: 160 }}>
  <Swiper style={styles.wrapper} showsButtons={true} height={160} autoplay={true} showsPagination={false}>
    <View style={styles.slide1}>
      <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg' }} style={styles.image}></Image>
    </View>
    <View style={styles.slide2}>
      <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg' }} style={styles.image}></Image>
    </View>
    <View style={styles.slide3}>
      <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg' }} style={styles.image}></Image>
    </View>
  </Swiper>
</View>
```

### 首页轮播图片URL地址

- [图片地址1](http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg)
- [图片地址2](http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg)
- [图片地址3](http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg)

## 渲染电影列表数据

- `<TouchableOpacity>`组件：用于响应屏幕点击事件

## 渲染电影详情页面

## 调用摄像头拍照

- 使用 rn , 是可以直接调用android或iOS中原生的API
- 可以直接在 rn 中进行 android和iOS 原生开发
- 对于我们前端, 不会Java和OC编程语言, 我们可以通过一些第三方的组件, 来通过JS实现操作手机原生API的操作

[react-native-image-picker的github官网](https://github.com/marcshilling/react-native-image-picker)
[react native 之 react-native-image-picke的详细使用图解](http://www.cnblogs.com/shaoting/p/6148085.html)

```html
调用手机API的方式：
1 手机API（通讯录、摄像头、系统提示。。）是无法通过JS直接调用
2 如果想要使用这些功能，首先需要获取手机权限
3 获取权限后，才能够调用手机API
```

- 1 运行`yarn add react-native-image-picker@latest`安装到项目运行依赖

- 2 运行`react-native link`自动注册相关的组件到原生配置中（集成配置到Android或iOS环境中）

- 3 打开项目中的`android`->`app`->`src`->`main`->`AndroidManifest.xml`文件，在第8行添加如下配置：

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

- 4 打开项目中的`android`->`app`->`src`->`main`->`java`->`com`->`当前项目名称文件夹`->`MainActivity.java`文件，修改配置如下：

```java
package com.native_camera; // native_camera 表示项目名称
import com.facebook.react.ReactActivity;

// 1. 添加以下两行：
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends ReactActivity {
    // 2. 添加如下一行：
    private PermissionListener listener; // <- add this attribute

    /**
      * Returns the name of the main component registered from JavaScript.
      * This is used to schedule rendering of the component.
      */
    @Override
    protected String getMainComponentName() {
        return "native_camera";
    }
}
```

- 5 在项目中添加如下代码：

```js
// 第1步：
import ImagePicker from 'react-native-image-picker'

var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

// 第2步：
constructor(props) {
  super(props);
  this.state = {
    imgURL: ''
  }
}

// 第3步：
<Button title="拍照" onPress={this.cameraAction}></Button>
<Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200 }}></Image>

// 第4步：
cameraAction = () => {
  ImagePicker.showImagePicker(photoOptions, (response) => {
    console.log('response' + response);
    this.setState({
      imgURL: response.uri
    });
    if (response.didCancel) {
      return
    }
  })
}
```

- 6 **一定要退出之前调试的App**，并重新运行`react-native run-android`进行打包部署；这次打包期间会下载一些jar的包，需要耐心等待！

## Redux 参考资料

- [react-redux流程与实现分析](http://www.jianshu.com/p/507d9da0afe7)
- [《看漫画，学 Redux》 —— A cartoon intro to Redux](https://github.com/jasonslyvia/a-cartoon-intro-to-redux-cn)
- [Redux 中文网](http://www.redux.org.cn/docs/basics/ExampleTodoList.html)
- [React 实践心得：react-redux 之 connect 方法详解](http://taobaofed.org/blog/2016/08/18/react-redux-connect/)
- [解读redux工作原理](http://zhenhua-lee.github.io/react/redux.html)
# 常用的组件用户及API

## 处理触摸事件

> RN中大部分组件不能够注册点击事件, 比如 View, Text。 如果需要给这些组件注册事件，则需要在这些
>
> 组件外层包裹: `Touchable` 开头的组件, 如下:
>
> **TouchableHighlight** --制作按钮或者链接。注意此组件的背景会在用户手指按下时变暗。
>
> **TouchableNativeFeedback** (仅安卓中可以使用)-- 它会在用户手指按下时形成类似墨水涟漪的视觉效果。
>
> **TouchableOpacity**-- 在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。
>
> **TouchableWithoutFeedback**-- 在处理点击事件的同时不显示任何视觉反馈

可以给以上4个组件添加`onPress` 属性来注册点击事件，或者添加`onLongPress`来注册长按事件!

```jsx
// 示例
import {TouchableOpacity} from 'react-native'
const App = () => (
  <TouchableOpacity onPress={e => alert('点击事件')}>
    <View>
      <Text>登陆</Text>
    </View>
  </TouchableOpacity>
)
```

## Dimensions

> 获取屏幕的宽高
>
> **注意: 当手机旋转时，宽高可能会发生变化**

```js
import {Dimesions} from 'react-native'
const {height, width} = Dimensions.get('window');
```

## 路由 (react-navigation)

[文档](https://reactnavigation.org)

- 安装：`yarn add react-navigation`
- [github](https://github.com/react-community/react-navigation)
- [路由跳转和传递参数](https://reactnavigation.org/docs/navigators/navigation-prop#navigate-Link-to-other-screens)

### 使用 - StackRouter

- 导航跳转：`props.navigation.navigate('about')`
  - 参数：目标路由screen
- 导航传递参数：`props.navigation.navigate('home', {msg: '参数'})`
  - 第二个参数：表示传递给home路由的参数，是一个对象
- 获取参数：`props.navigation.state.params.msg`
  - msg 表示要获取的参数名称

```jsx
import { StackNavigator } from 'react-navigation'

const Home = (props) => {
  return (
    <View>
      <Text onPress={() => props.navigation.navigate('about')}>react-navigation 首页，获取参数：{props.navigation.state.params && props.navigation.state.params.msg}</Text>
    </View>
  )
}

const About = (props) => (
  <View>
    <Text onPress={() => props.navigation.navigate('home', {msg: '参数'})}>react-navigation 关于</Text>
  </View>
)

// 配置路由规则
export default StackNavigator({
  // 默认展示第一个路由
  home: {
    // 路由展示的组件
    screen: Home,
    // 顶部导航配置
    navigationOptions: {
      // 导航标题
      headerTitle: '首页',
      // 隐藏导航条
      // header: null
    }
  },
  about: {
    screen: About
  }
})
```

- 2 TabNavigator

```jsx
import {TabNavigator} from 'react-navigation'
// Tab路由配置
const menus = {
  home: {
    screen: Home,
    navigationOptions: {
      title: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <Image />
      )
    }
  },
  about: {
    screen: About,
    navigationOptions: {
      title: '关于'
    }
  },
}

// tab导航栏配置
const menuOptions = {
  // 导航栏位置
  tabBarPosition: 'bottom',
  tabBarOptions: {
    // 激活菜单颜色
    activeTintColor: '#06c1ae',
    // 未激活菜单颜色
    inactiveTintColor: '#979797',
    // 菜单样式
    style: {
      // 背景色
      backgroundColor: '#ffffff',
      // 高度
      height: 49
    },
    labelStyle: {
      // 菜单文字大小
      fontSize: 14
    }
  }

}

const TabBar = TabNavigator(menus, menuOptions)
export default TabBar
```

- 3 StackNavigator 结合 TabNavigator

```jsx
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation'

const Login = (props) => (
  <View>
    <Text>Login 组件</Text>
    <Button title="Login" onPress={() => { props.navigation.navigate('tab') }}></Button>
  </View>
)
const Home = (props) => (
  <View>
    <Text>Home 组件</Text>
    <Button title="进入 关于页面" onPress={() => {}}></Button>
  </View>
)
const About = () => (
  <View>
    <Text>About 组件</Text>
    <Button title="返回首页" onPress={() => {}}></Button>
  </View>
)

const TabNav = TabNavigator({
  home: {
    screen: Home
  },
  about: {
    screen: About
  },
}, {
    tabBarPosition: 'bottom'
  })

export default StackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      headerTitle: '登录'
    }
  },

  tab: {
    screen: TabNav,
    navigationOptions: {
      headerTitle: '首页'
    }
  }
})

```

### 详细配置大全

```js
/*
  StackNavigator
*/

StackNavigator({
  XX: {
  navigationOptions：配置StackNavigator的一些属性。  

    title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用  
    header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null  
    headerTitle：设置导航栏标题，推荐  
    headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null  
    headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"  
    headerRight：设置导航条右侧。可以是按钮或者其他视图控件  
    headerLeft：设置导航条左侧。可以是按钮或者其他视图控件  
    headerStyle：设置导航条的样式。背景色，宽高等  
    headerTitleStyle：设置导航栏文字样式  
    headerBackTitleStyle：设置导航栏‘返回’文字样式  
    headerTintColor：设置导航栏颜色  
    headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0  
    gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭  
   
  
screen：对应界面名称，需要填入import之后的页面  
  
mode：定义跳转风格  
  
   card：使用iOS和安卓默认的风格  
  
   modal：iOS独有的使屏幕从底部画出。类似iOS的present效果  
  
headerMode：返回上级页面时动画效果  
  
   float：iOS默认的效果  
  
   screen：滑动过程中，整个页面都会返回  
  
   none：无动画  
  
cardStyle：自定义设置跳转效果  
  
   transitionConfig： 自定义设置滑动返回的配置  
  
   onTransitionStart：当转换动画即将开始时被调用的功能  
  
   onTransitionEnd：当转换动画完成，将被调用的功能  
  
  path：路由中设置的路径的覆盖映射配置  

  initialRouteName：设置默认的页面组件，必须是上面已注册的页面组件  

  initialRouteParams：初始路由参数  

  }
})

```

```jsx
/*
  TabNavigator
*/

TabNavigator({
  screen：和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。  
  navigationOptions：配置TabNavigator的一些属性  

      title：标题，会同时设置导航条和标签栏的title  

      tabBarVisible：是否隐藏标签栏。默认不隐藏(true)  

      tabBarIcon：设置标签栏的图标。需要给每个都设置  

      tabBarLabel：设置标签栏的title。推荐 
}, {
  tabBarPosition：设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）  
  
  swipeEnabled：是否允许在标签之间使用手指进行滑动  

  animationEnabled：是否在更改标签时显示动画  

  lazy：是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true  
  trueinitialRouteName： 设置默认的页面组件  

  backBehavior：按 back 键是否跳转到第一个Tab(首页)， none 为不跳转  

  tabBarOptions：配置标签栏的一些属性iOS属性  

  activeTintColor：label和icon的前景色 活跃状态下  

  activeBackgroundColor：label和icon的背景色 活跃状态下  

  inactiveTintColor：label和icon的前景色 不活跃状态下  

  inactiveBackgroundColor：label和icon的背景色 不活跃状态下  

  showLabel：是否显示label，默认开启 style：tabbar的样式  

  labelStyle：label的样式安卓属性  

  activeTintColor：label和icon的前景色 活跃状态下  

  inactiveTintColor：label和icon的前景色 不活跃状态下  

  showIcon：是否显示图标，默认关闭  

  showLabel：是否显示label，默认开启 style：tabbar的样式  

  labelStyle：label的样式 upperCaseLabel：是否使标签大写，默认为true  

  pressColor：material涟漪效果的颜色（安卓版本需要大于5.0）  

  pressOpacity：按压标签的透明度变化（安卓版本需要小于5.0）  

  scrollEnabled：是否启用可滚动选项卡 tabStyle：tab的样式  

  indicatorStyle：标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题  

  labelStyle：label的样式  

  iconStyle：图标样式 
})
```

## react-native 打包失败

- 清理android打包残留文件删除不掉问题 或 无法创建android打包文件问题：
  - 在项目根目录中执行：`cd android && gradlew clean`

## react-native中的字体图标

- 安装：`yarn add react-native-vector-icons`
- [github](https://github.com/oblador/react-native-vector-icons)
- 注意：需要集成到Android或iOS中，才可以使用！！！


使用步骤：
- 1 安装
- 2 要将当前模块（包）中的安卓或ios的环境继承到rn中的安卓或ios中
  集成步骤：
    - 1 react-native link
    - 2 在目录 android/app/build.gradle 中，添加：
      apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
      project.ext.vectoricons = [
        iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
      ]
- 3 重新运行: react-native run-android 重新打包
- 4 在 App.js 中使用

```JS
  import Icon from 'react-native-vector-icons/FontAwesome'
  <Icon name="user-circle-o" size={30} color="#000" />
```

##### 只要重新安装了一个新的包，就需要执行下面这句话，才能正确使用 字体图标库，否则，就会报错！！！

5 rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
参考：https://github.com/oblador/react-native-vector-icons/issues/626


```js
import Icon from 'react-native-vector-icons/FontAwesome'

<Icon style={styles.icon} name='user' size={25} color='#ccc' />
```

## 问答系统-API文档

### 项目的启动步骤

- 1 开启数据库，新建一个数据库，数据库的名称叫：qs
- 2 把 教学资料/qs-bg-master/qs.sql 文件，在新建的数据库中执行一次
  - 创建数据库中的表，并初始化一些数据
- 3 修改 qs-bg-master/models/db.js 中的数据库配置（数据库名称、登录数据库的用户名和密码）
- 4 在 qs-bg-master 根目录中执行命令：`npm run dev`
- 5 可以通过 `npm run apiserver` 打开API文档

### 接口文档的说明

```html
api文档：npm run apiserver

api接口服务器：npm run dev
  依赖于mysql，api接口服务器启动前，先开启mysql数据库
  还需要：
    1 根据接口项目qs-bg-master根目录中的 qs.sql 数据库文件在mysql中创建数据库
    2 当接口服务器启动以后，需要注意：手机和电脑是两个终端，接口服务器是在电脑中开启的，手机是无法通过 http://127.0.0.1:8088 来访问到电脑的。因为 127.0.0.1 指的本机（手机）
    可以通过手机和电脑所处的公共网络（无线网）来相互访问！！！也就是使用：http://192.168.253.1:8088/user/signin （公网的ip地址）
```

```html
登录：/user/signin
轮播图：/topics/swipers
话题列表：/topics
上传话题图片：/topic/cover
```

```js
const fm = new FormData()
fm.append('cover', {
  uri: image.path,
  type: 'image/jepg'
})

axios
  .post('/topic/cover', fm)
  .then(res => {})
```

## AsyncStorage 本地存储

- AsyncStorage是一个简单的、异步的、持久化的Key-Value存储系统，它对于App来说是全局性的。它用来代替LocalStorage。

```html
1 登录的时候，将access-token存储到AsyncStorage中
2 解析来的每次请求，都需要能够拿到存储的 access-token 并且随着请求一起发送给服务器
3 我们可以通过 axios 的拦截器，来拦截每次请求，并在拦截器中统一处理 access-token 的问题
```

- [react-native AsyncStorage的坑](https://github.com/facebook/react-native/issues/14101)

- 语法：

```js
// 存储
AsyncStorage.setItem(key: string, value: string, callback?: ?(error: ?Error) => void)

// 读取
AsyncStorage.getItem(key: string, callback?: ?(error: ?Error, result: ?string) => void)
```

- 基本使用演示:

```js
// 存储
AsyncStorage.setItem('name', 'jack', err => {
  if (err) {
    return alert('出错了')
  }

  alert('token 保存成功')
})

// 读取
AsyncStorage.getItem('name', (error, result) => {
  if (error) {
    alert('存储数据失败')
  }

  console.log(result)
})
```

## 登录状态保持

- 网站提供的接口有两种：1 不需要登录就可以访问 2 需要登录后才能够访问
  - 1 比如：登录接口
  - 2 比如：个人信息

- HTTP协议是无状态的，也就是：服务器不知道两个请求是不是同一个用户发送过来的
  - 比如：有两个请求，1 登录请求 2 登录后访问个人资料，但是由于无状态的影响，所以，服务器不知道这两个请求是同一个人发送过来的
- 因为这种问题的存在，所以，我们需要解决：HTTP协议无状态的问题，解决方案叫做：状态保持

- web端是如何实现状态保持的？？？cookie 和 sessionid
- cookie的特点：cookie会伴随每次请求，在浏览器和服务器之间来回传递

- react-native 不是web端，因此不能使用 cookie+sessionid 这种机制来实现状态保持。
- 但是，我们可以借鉴这个实现思路，自己模拟cookie和session的机制：token机制（令牌机制）

- 状态保持的两种解决方案：1 cookie和session 2 token令牌机制
