---
layout: post
title: '移动端真机调试spy-debugger'
date: 2018-08-08
tags: 随笔

color: 'rgb(154,133,255)'
---

### 1.安装

Windows 下

npm install spy-debugger -g
Mac 下

sudo npm install spy-debugger -g

### 2.使用

- 第一步：手机和 PC 保持在同一网络下（比如同时连到一个 Wi-Fi 下）
- 第二步：命令行输入 spy-debugger，按命令行提示用浏览器打开相应地址。
- 第三步：设置手机的 HTTP 代理，代理 IP 地址设置为 PC 的 IP 地址，端口为 spy-debugger 的启动端口(默认端口：9888)。
- 第四步：安装证书。注：手机必须先设置完代理后再通过(非微信)手机浏览器访问http://spydebugger.com/cert安装证书（手机首次调试需要安装证书，已安装了证书的手机无需重复安装)。
- 第五步：用手机浏览器访问你要调试的页面即可

### 3.自定义项

#### 端口

(默认端口：9888)

spy-debugger -p 8888

#### 设置外部代理（默认使用 AnyProxy）

spy-debugger -e http://127.0.0.1:8888
spy-debugger 内置 AnyProxy 提供抓包功能，但是也可通过设置外部代理和其它抓包代理工具一起使用，如：Charles、Fiddler。

#### 是否让 weinre 监控 iframe 加载的页面

(默认： false)

spy-debugger -i true

#### 是否只拦截浏览器发起的 https 请求

(默认： true)

spy-debugger -b false
有些浏览器发出的 connect 请求没有正确的携带 userAgent，这个判断有时候会出错，如 UC 浏览器。这个时候需要设置为 false。大多数情况建议启用默认配置：true，由于目前大量 App 应用自身（非 WebView）发出的请求会使用到 SSL pinning 技术，自定义的证书将不能通过 app 的证书校验。

#### 是否允许 HTTP 缓存

(默认： false)

spy-debugger -c true
