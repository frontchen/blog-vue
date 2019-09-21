---
layout: post
title: 'React-Native总结'
date: 2018-08-17
tags: 随笔

color: 'rgb(154,133,255)'
---

### 1.windows-bug 启动不成功--清除 andriod 残余文件

- cd android
- gradlew clean

### 2.View Style

#### 支持 Flexbox、ShadowPropTypesIOS、Transforms 属性。

#### 背面可见性

- backfaceVisibility enum('visible', 'hidden')

#### 背景颜色

- backgroundColor string

#### 边框颜色

- borderColor string
- borderTopColor string
- borderRightColor string
- borderBottomColor string
- borderLeftColor string

#### 边框圆角半径

- borderRadius number
- borderTopLeftRadius number
- borderTopRightRadius number
- borderBottomLeftRadius number
- borderBottomRightRadius number

#### 边框样式

- borderStyle enum('solid', 'dotted', 'dashed')

#### 边框宽度

- borderWidth number
- borderTopWidth number
- borderRightWidth number
- borderBottomWidth number
- borderLeftWidth number

#### 不透明度

- opacity number

#### 填充

- overflow enum('visible', 'hidden')

#### 测试 ID（用来定位视图）

- testID string

### Image Style

#### 支持 Flexbox 和 Transforms

#### 调整大小模式

- resizeMode Object.keys(ImageResizeMode)

#### 背景颜色

- backgroundColor string

#### 边框属性

- borderColor string
- borderWidth number
- borderRadius number

#### 填充

- overflow enum('visible', 'hidden')

#### 色彩颜色

- tintColor string

#### 不透明度

- opacity number

### Text Style

#### 支持 View 的样式

#### 字体颜色

- color string

#### 字体

- fontFamily string

#### 一行省略

- numberOfLines number

#### 字体大小

- fontSize number

#### 字体样式

fontStyle enum('normal', 'italic')
字体粗细（指定字体的粗细。大多数字体都支持’normal’和’bold’值。并非所有字体都支持所有的数字值。如果某个值不支持，则会自动选择最接近的值。）

- fontWeight enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')

#### 字间距

- letterSpacing number

#### 行间距

- lineHeight number

#### 字体对齐方式（指定文本的对齐方式。其中’justify’值仅 iOS 支持。）

- textAlign enum("auto", 'left', 'right', 'center', 'justify')

Flexbox Style

#### 宽高

- width number
- height number

#### 项目对齐

- alignItems enum('flex-start', 'flex-end', 'center', 'stretch')

#### 自身对齐

- alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')

#### 边框宽度

- borderBottomWidth number
- borderLeftWidth number
- borderRightWidth number
- borderTopWidth number
- borderWidth number

#### 弹性伸缩

- flex number

#### 弹性伸缩方向

- flexDirection enum('row', 'column')

#### 弹性伸缩包裹

- flexWrap enum('row', 'row-reverse', 'column', 'column-reverse)

##### 属性内容

- justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')

#### 外边距

- margin number
- marginBottom number
- marginLeft number
- marginRight number
- marginTop number
- marginHorizontal number
- marginVertical number

#### 内边距

- padding number
- paddingBottom number
- paddingLeft number
- paddingRight number
- paddingTop number
- paddingHorizontal number
- paddingVertical number

#### 位置（绝对、相对）

- position enum('absolute', 'relative')

#### 上下左右

- right number
- top number
- left number
- bottom number

#### Transform 属性变化

- transform [
  - {perspective: number},
  - {rotate: string},
  - {rotateX: string},
  - {rotateY: string},
  - {rotateZ: string},
  - {scale: number},
  - {scaleX: number},
  - {scaleY: number},
  - {translateX: number},
  - {translateY: number},
  - {skewX: string},
  - {skewY: string}
  ]

#### 属性矩阵

- transformMatrix TransformMatrixPropType

### 3.adb server version (39) doesn't match this client (40)

#### Genymotion==>设置==>ADB=>Use custom Android SDK Tools=>选择安卓 adk 目录，然后 cmd 输入

- adb kill-server

- adb start-server

### 4.Genymotion 不能安装 APK 的解决方法

- 1、下载 Genymotion-ARM-Translation-Librarities 工具转换包；下载路径:https://pan.baidu.com/s/1sWe36TSZHPxqiaLn1TGPig

- 2、将下载号的工具包直接拖拽到 Genymotion 中，

- 3、进行操作

  - 1.adb shell

  - 2.cd /sdcard/Download/

  - 3.sh /system/bin/flash-archive.sh /sdcard/Download/Genymotion-ARM-Translation.zip

  - 4.重启模拟器。

### 5.运行 react-native init Hello 之后报错 "import type {CommandT} from './commands';"

- 更新的 react-native 0.56 版本在 Windows 上有 bug 不能正常运行，所以才会一直报错，然后我试了一下 react-native init xxx --version 0.55.4，即初始化时指定版本

- 可以进入项目的文件夹，然后

  - C:\Users\13708\Desktop\aaa\Hello>react-native -v
  - react-native-cli: 2.0.1
  - react-native: 0.56.0
  - 就可以看到自己项目的版本了

### 6.正确地引入 antd-mobile 的步骤：

- (1)npm intall react-dom --save
- (2)npm install antd-mobile --save
- (3)npm install babel-plugin-import --save-dev
- (4).babelrc 中为

```json
{

“plugins”：[["import",{"libraryName":"antd-mobile"}]]，

"presets":["react-native"]

}
```

- (5)在代码中引入 antd-mobile，然后正确的运行
### 7.指定端口启动项目
```js
react-native run-android --port 5000
react-native run-android=8082
```