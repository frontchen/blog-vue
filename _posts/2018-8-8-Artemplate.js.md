---
layout: post
title:  "artTemplate"
date:   2018-08-08
tags:  js

color: 'rgb(154,133,255)'

---

#### 主要记录三种使用artTemplate的方法。

- template(id, data)
　　根据 id 渲染模板。内部会根据document.getElementById(id)查找模板。

　　如果没有 data 参数，那么将返回一渲染函数。

- template.compile(source, options)
　　将返回一个渲染函数。

- template.render(source, options)
　　将返回渲染结果。

- template.helper(name, callback)
　　添加辅助方法。

- template.config(name, value)

#### 第一种：模板、JS、html在同一个页面中
在html中编写模板：使用一个type="text/html"的script标签存放模板：{{}}这是artTemplate获取数据的语法
```html
<div class="Header" id="Header"></div>
<script id="test" type="text/html">
   <img src="./images/meeting/Logo.png"  id="Logo" />
      <div class="title">
         <h1>
            <span>{{topic}}<a class="edit"></a></span>
         </h1>
      </div>
      <div class="right">
      {{if roleId==='HOST' || roleId===HOST}}
         <ul>
            <li >
               <a class="lock" status="unlock">锁定房间</a>
            </li>
            <li >
               <a class="shut">结束会议</a>
            </li>
         </ul>
      {{/if}}
         <a class="loginOut">退出</a>
   </div>
</script> 
```

渲染模板：这里用到的是artTemplate的template(id, data)方法，根据ID渲染模板：
```
var html = template('test', loginData);
document.getElementById('Header').innerHTML = html;
```
#### 第二种：模板是另外的HTML，和html不在同一页面
在html中编写模板：这里不需要type="text/html"的script标签存放模板

```html
<img src="./images/meeting/Logo.png"  id="Logo" />
<div class="title">
    <h1>
        <span>{{topic}}<a class="edit"></a></span>
    </h1>
</div>
<div class="right">
{{if roleId==='HOST' || roleId===HOST}}
    <ul>
        <li >
            <a class="lock" status="unlock">锁定房间</a>
        </li>
        <li >
            <a class="shut">结束会议</a>
        </li>
    </ul>
{{/if}}
    <a class="loginOut">退出</a>
</div>
```

渲染模板：因为是需要引用html文件，所以需要用ajax调用，这里需要将dataType设置为html,表明返回的data是html形式的，async设置为false同步。
success中返回的data就是模板引擎的html内容，这里渲染模板用的是template.compile(source, options)和render（返回结果）。
```js
$.ajax({
             type: "GET",
             async:false,
             url: "../tpl/header.html",
             data: loginData,
             dataType: "html",
             success: function(data){
               var render = template.compile(data);
               var html = render(loginData);
               $("#Header").html("").html(html);                  
            }
});
```
以上两种方法都可以，我更喜欢第二种，因为将模板剥离出去，便于后期维护。
#### 第三种：require和artTemplate结合。
使用require模块化加载模板引擎，需要先配置requireJS文件。
```js
require.config({
    baseUrl:"/",
    urlArgs : 'v=' + Date.now(),
    paths: {
      'css' : 'assets/libs/core/require/css',
      'text': 'assets/libs/core/require/text',
      'template':'assets/libs/components/artTemplate/3.0.0/template',

});
```
将require源文件配置的require文件加载到页面上
```js
<script src="assets/libs/core/require/2.1.18/require-debug.js"></script>
<script src="assets/libs/core/require-debug.js"></script>
//在html中编写模板：这里也不需要type="text/html"的script标签存放模板

<img src="./images/meeting/Logo.png"  id="Logo" />
<div class="title">
    <h1>
        <span>{{topic}}<a class="edit"></a></span>
    </h1>
</div>
<div class="right">
{{if roleId==='HOST' || roleId===HOST}}
    <ul>
        <li >
            <a class="lock" status="unlock">锁定房间</a>
        </li>
        <li >
            <a class="shut">结束会议</a>
        </li>
    </ul>
{{/if}}
    <a class="loginOut">退出</a>
</div>
```
渲染模板：以模块化渲染用如下require可实现也可用define都可实现

```js
define(['jquery', 'text!app/left-nav/leftnav.html', 'template'], function($, Module, header, template) {})

require(['jquery','app/header/Header'],function($,header){
    var headerTpl = template.compile(header),
        html,menuData;
    html = headerTpl({
        data: {roleId:"COMMON",topic:"测试"}//传入所需要的数据
    });
    $("#Header").html("").html(html);   
});
```