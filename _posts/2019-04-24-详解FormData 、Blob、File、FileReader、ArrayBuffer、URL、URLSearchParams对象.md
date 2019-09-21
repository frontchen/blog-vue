---
layout: post
title:  "详解FormData 、Blob、File、FileReader、ArrayBuffer、URL、URLSearchParams对象"
date:   2019-04-24
tags:  js

color: 'rgb(154,133,255)'

---
详解FormData 、Blob、File、FileReader、ArrayBuffer、URL、URLSearchParams对象
============================
* * *

## 一. FormData

> 利用`FormData对象`,我们可以通过JavaScript用一些键值对来模拟一系列表单控件,我们还可以使用XMLHttpRequest的[`send()`](https://developer.mozilla.org/zh-CN/DOM/XMLHttpRequest#send%28%29)方法来异步的提交这个"表单".比起普通的ajax,使用`FormData`的最大优点就是我们可以异步上传一个二进制文件.

**方法：**

```js
    var formData = new FormData();
    formData.append("k1", "v1"); //append()方法的第二个参数可以是File,Blob对象
    formData.append("k1", "v2");
    formData.get("k1"); // // "v1" 获取key为name的第一个值
    formData.getAll("k1"); // ["v1","v2"] 返回一个数组，获取key为name的所有值
    formData.set("k1", "1"); //设置修改数据
    formData.has("k1"); // true 来判断是否有对应的key值
    formData.has("k2"); // false
    formData.delete("k1"); //删除数据
```
 

根据已有form表单初始化一个formData对象：

```js
    // 获取页面已有的一个form表单
    var form = document.getElementById("myForm");
    // 用表单来初始化
    var formData = new FormData(form);
    // 我们可以根据name来访问表单中的字段
    var name = formData.get("name"); // 获取名字
    var psw = formData.get("pw"); // 获取密码
    // 当然也可以在此基础上，添加其他数据
    formData.append("token","kshdfiwi3rh");
```
    

发送一个二进制数据流：

```js
    var content = '<a id="a"><b id="b">hey!</b></a>'; 
    var blob = new Blob([content], { type: "text/xml"});
    formData.append("file", blob);
    axios.post('http://demo.api.com/doSomething', formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
           }
       }
    )
    
```

##  二. Blob

> 一个Blob对象就是一个包含有只读原始数据的类文件对象。Blob对象中的数据并不一定得是JavaScript中的原生形式。File接口基于Blob，继承了Blob的功能,并且扩展支持了用户计算机上的本地文件。

Blob对象可以看做是存放二进制数据的容器，但要读取里面的二进制数据，需要用`FileReader`；此外还可以通过Blob设置二进制数据的MIME类型。

```js
/**
    * Blob构造函数：
    * dataArray：数组，包含了要添加到Blob对象中的数据，数据可以是Int32Array、Uint8Array、Float32Array等，或者连续内存缓冲区ArrayBuffer，ArrayBufferView， Blob，或者 DOMString对象。
    * opt：对象，用于设置Blob对象的属性（如：MIME类型）
    **/
    var blob = new Blob(dataArr:Array<any>, opt:{type:string});
```    

1.  创建一个装填DOMString对象的Blob对象

```js
    var s = '<div>hello</div>'
    var blobObj = new Blob([s], {type: 'text/xml'})
    
```

2.  创建一个装填ArrayBuffer对象的Blob对象

```js
    var abf = new ArrayBuffer(8)
    var blobOjb = new Blob([abf], {type: 'text/plain'})
    
```

3.  Blob.slice()  
    此方法返回一个新的Blob对象，包含了原Blob对象中指定范围内的数据，利用此方法可以实现大文件的分片上传

```js
    /**
    * start：开始索引，默认为0
    * end：截取结束索引（不包括end）
    * contentType：新Blob的MIME类型，默认为空字符串
    **/
    Blob.slice(start:number, end:number, contentType:string)
```
    

4.  Canvas.toBlob()  
    canvas转为blob对象
5.  实现url下载文件  
    window.URL对象可以为Blob对象生成一个网络地址，结合a标签的download属性，可以实现点击url下载文件

```js
    function createDownload(fileName, content){
        var blob = new Blob([content]);
        var link = document.createElement("a");
        link.download = fileName;
        link.href = URL.createObjectURL(blob); //可以直接当作image的src属性来显示图片
        link.click()
    }
```
    

##  三. File

> File是Blob的子类，比blob主要多出一个name的属性。

我们常用的文件选择标签<inout type="file" />元素就拥有一个files属性，这个files就是File类型

```js
    var input = document.querySelector('input[type=file]');
    console.log(input.files) // FileList {0: File(3044232), length: 1}
    
```

##  四. URL

> 除了可以使用base64字符串作为内容的DataURI将一个文件嵌入到另外一个文档里，还可以使用URL对象。URL对象用于生成指向File对象或Blob对象的URL

**实例属性：**

```js
    var url = new URL(location.href)
    url.href //包含完整 URL 的DOMString
    url.protocol //包含 URL 协议名的DOMString,末尾带 ':'。
    url.host //包含 URL 域名，':'，和端口号的DOMString
    url.hostname //包含 URL 域名的DOMString
    url.port //包含 URL 端口号的DOMString
    url.pathname //以 '/' 起头紧跟着 URL 文件路径的DOMString
    url.search //以 '?' 起头紧跟着 URL 请求参数的DOMString
    url.hash //以 '#' 起头紧跟着 URL 锚点标记的DOMString
    url.username //包含在域名前面指定的用户名的DOMString
    url.password //包含在域名前面指定的密码的DOMString
    url.origin //返回一个包含协议名、域名和端口号的DOMString
    url.searchParams //返回一个用来访问当前 URL GET 请求参数的URLSearchParams对象
```
    

**静态方法：**

*   URL.createObjectURL()  
    该方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。

```js
    var objectURL = URL.createObjectURL(blob);
    
```

`blob`是用来创建 URL 的 File 对象或者 Blob 对象​

*   URL.revokeObjectURL()  
    该方法用来释放一个之前通过调用 URL.createObjectURL() 创建的已经存在的 URL 对象。当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。

```js
    window.URL.revokeObjectURL(objectURL);
```
    

`objectURL`是一个 DOMString，表示通过调用 URL.createObjectURL() 方法产生的 URL 对象

##  五. URLSearchParams

> URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。  
> **方法：**

*   URLSearchParams.append() 插入一个指定的键/值对作为新的搜索参数。
*   URLSearchParams.delete() 从搜索参数列表里删除指定的搜索参数及其对应的值。
*   URLSearchParams.entries() 返回一个iterator可以遍历所有键/值对的对象。
*   URLSearchParams.get() 获取指定搜索参数的第一个值。
*   URLSearchParams.getAll() 获取指定搜索参数的所有值，返回是一个数组。
*   URLSearchParams.has() 返回Boolean判断是否存在此搜索参数。
*   URLSearchParams.keys() 返回iterator此对象包含了键/值对的所有键名。
*   URLSearchParams.set() 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
*   URLSearchParams.sort() 按键名排序。
*   URLSearchParams.toString() 返回搜索参数组成的字符串，可直接使用在URL上。
*   URLSearchParams.values() 返回iterator此对象包含了键/值对的所有值。  
    **基本用法：**

```js
    var paramsString = "https://www.baidu.com?topic=api&target=bank"
    var searchParams = new URLSearchParams(paramsString);
    
    searchParams.has('topic') // true
    searchParams.get('topic') // "api"
    searchParams.get('target') // "bank"
    searchParams.getAll('topic') // ["api"]
    
    searchParams.get('foo') // null，注意Firefox返回空字符串
    searchParams.set('foo', 2);
    searchParams.get('foo') // 2
    
    searchParams.append('topic', 'webdev');
    searchParams.toString() // "q=URLUtils.searchParams&topic=api&foo=2&topic=webdev"
    
    searchParams.append('foo', 3);
    searchParams.getAll('foo') // [2, 3]
    
    searchParams.delete('topic');
    searchParams.toString() // "q=URLUtils.searchParams&foo=2&foo=3"
```
    

在一些场景里使用axios发送数据时若需要以application/x-www-form-urlencoded格式发送数据，在浏览器端可以用URLSearchParams的实例当作POST数据发送，所有数据都会URL编码。（_请注意，由于URLSearchParams支持性不好，可以使用polyfill来转换，可以在入口文件引入_）

```js
    import 'url-search-params-polyfill';
```
    

在node环境里可以使用querystring模块进行编码

```js
    var querystring = require('querystring');
    axios.post('http://something.com/', querystring.stringify({ foo: 'bar' });
```
    

DOM 的 a 元素节点的 `searchParams` 属性，就是一个 URLSearchParams 实例。

```js
    var a = document.createElement('a');
    a.href = 'https://example.com?filter=api';
    a.searchParams.get('filter') // "api"
```
    

URLSearchParams 还可以与 `URL` 接口结合使用:

```js
    var url = new URL(location);
    var foo = url.searchParams.get('foo') || 'somedefault';
```
    

##  六. FileReader

> 我们知道Blob对象只是二进制数据的容器，本身并不能操作二进制，FileReader对象就是专门操作二进制数据的，FileReader主要用于将文件内容读入内存，通过一系列`异步`接口，可以在主线程中访问本地文件。

**创建实例：**

```js
    var reader = new FileReader();
```
    

**方法(入参都是`File`或`Blob`对象)**

*   reader.abort() 终止文件读取操作
*   reader.readAsArrayBuffer(file) 异步按字节读取文件内容，结果用ArrayBuffer对象表示
*   reader.readAsBinaryString(file) 异步按字节读取文件内容，结果为文件的二进制串  
    reader.readAsDataURL(file) 异步读取文件内容，结果用data:url(即Base64格式)的字符串形式表示
*   reader.readAsText(file, encoding) 异步按字符读取文件内容，结果用字符串形式表示

**事件名称**

*   onabort 当读取操作被中止时调用
*   onerror 当读取操作发生错误时调用
*   onload 当读取操作成功完成时调用
*   onloadend 当读取操作完成时调用,不管是成功还是失败
*   onloadstart 当读取操作将要开始之前调用
*   onprogress 在读取数据过程中周期性调用

* * *

**它们在实际场景中的一些应用**

1.  上传图片后直接显示出来，而不用先经过后台

```js
    var input  = document.getElementById("file"); //input file
    input.onchange = function(){
        var file = this.files[0];
        if(!!file){
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(){
                //读取完毕后输出结果
               document.getElementById("file_img").src = reader.result //显示上传的图片
               console.log(reader.result);
            }
        }
    }
```
    

2.  图片转二进制Blob  
    `在实际文件上传中，将用户选择的图片读取为ArrayBuffer并保存到新的Blob对象中，二进制的方式传参比直接传图片效率更高)`

```js
    input.addEventListener('change', function() {
      var file = this.files[0],
          fr = new FileReader(),
          blob;
      fr.onload = function() {
          blob = new Blob([this.result]);
          var formdata = new FormData()
          formdata.append('file', blob)
      };
      fr.readAsArrayBuffer(file)
    });
```

3.  图片Image转Base64

```js
    function getImgToBase64(url,callback){
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        var img = new Image()
        img.crossOrigin = 'Anonymous';
        img.onload = function(){
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img,0,0);
            var dataURL = canvas.toDataURL('image/png'); //base64格式
            callback(dataURL);
            canvas = null;
        };
        img.src = url;
    }
```


4.  Base64转为`Blob`、`File`

```js
    function base64ToBlob(base64){
        var arr = base64.split(',')
        var mime = arr[0].match(/:(.*?);/)[1]
        var bytes = atob(arr[1])      //对用base64编码过的二进制进行解码  
        var n = bytes.length
        var u8arr = new Uint8Array(n)
        while(n--){
            u8arr[n]=bytes.charCodeAt(n);   //将编码转换成Unicode编码
        }
        return new Blob([u8arr], {type: mime})
        //or: return new File(u8arr], {type:mime})  //base64转换为文件
    
       //以二进制的方式传参：
        var formdata = new FormData()
        formdata.append('file', new Blob([u8arr], {type: mime}))
        xhr.send(formdata)
    }
```

## 七. Image对象
=======


目录
--

*   [概述](#toc0)
*   [特性相关的属性](#toc1)
*   [HTMLImageElement.width，HTMLImageElement.height](#toc2)
*   [HTMLImageElement.naturalWidth，HTMLImageElement.naturalHeight](#toc3)
*   [HTMLImageElement.complete](#toc4)
*   [HTMLImageElement.crossOrigin](#toc5)
*   [HTMLImageElement.referrerPolicy](#toc6)
*   [HTMLImageElement.x，HTMLImageElement.y](#toc7)
*   [事件属性](#toc8)

概述
--

`<img>`元素用于插入图片，主要继承了 HTMLImageElement 接口。

浏览器提供一个原生构造函数`Image`，用于生成`HTMLImageElement`实例。

```JS
    var img = new Image();
    img instanceof Image // true
    img instanceof HTMLImageElement // true
```
    

`Image`构造函数可以接受两个整数作为参数，分别表示`<img>`元素的宽度和长度。

```JS
    // 语法
    Image(width, height)
    
    // 用法
    var myImage = new Image(100, 200);
```
    

`<img>`实例的`src`属性可以定义图像的网址。

```js
    var img = new Image();
    img.src = 'picture.jpg';
```
    

新生成的`<img>`实例并不属于文档的一部分。如果想让它显示在文档中，必须手动插入文档。

```js
    var img = new Image();
    img.src = 'image1.png';
    document.body.appendChild(img);
```
    

除了使用`Image`构造，下面的方法也可以得到`HTMLImageElement`实例。

*   `document.images`的成员
*   节点选取方法（比如`document.getElementById`）得到的`<img>`节点
*   `document.createElement('img')`生成的`<img>`节点

```js
    document.images[0] instanceof HTMLImageElement
    // true
    
    var img = document.getElementById('myImg');
    img instanceof HTMLImageElement
    // true
    
    var img = document.createElement('img');
    img instanceof HTMLImageElement
    // true
```
    

`HTMLImageElement`实例除了具有 Node、Element、HTMLElement 接口以外，还拥有一些独有的属性。这个接口没有定义自己的方法。

特性相关的属性
-------

**（1）HTMLImageElement.src**

`HTMLImageElement.src`属性返回图像的完整网址。

```js
    // HTML 代码如下
    // <img width="300" height="400" id="myImg" src="http://example.com/pic.jpg">
    var img = document.getElementById('img');
    img.src // http://example.com/pic.jpg
```
    

**（2）HTMLImageElement.currentSrc**

`HTMLImageElement.currentSrc`属性返回当前正在展示的图像的网址。JavaScript 和 CSS 的 mediaQuery 都可能改变正在展示的图像。

**（3）HTMLImageElement.alt**

`HTMLImageElement.alt`属性可以读写`<img>`的 HTML 属性`alt`，表示对图片的文字说明。

**（4）HTMLImageElement.isMap，HTMLImageElement.useMap**

`HTMLImageElement.isMap`属性对应`<img>`元素的 HTML 属性`ismap`，返回一个布尔值，表示图像是否为服务器端的图像映射的一部分。

`HTMLImageElement.useMap`属性对应`<img>`元素的 HTML 属性`usemap`，表示当前图像对应的`<map>`元素。

**（5）HTMLImageElement.srcset，HTMLImageElement.sizes**

`HTMLImageElement.srcset`属性和`HTMLImageElement.sizes`属性，分别用于读写`<img>`元素的`srcset`属性和`sizes`属性。它们用于`<img>`元素的响应式加载。`srcset`属性可以单独使用，但是`sizes`属性必须与`srcset`属性同时使用。

```js
    // HTML 代码如下
    // <img srcset="example-320w.jpg 320w,
    //              example-480w.jpg 480w,
    //              example-800w.jpg 800w"
    //      sizes="(max-width: 320px) 280px,
    //             (max-width: 480px) 440px,
    //             800px"
    //      id="myImg"
    //      src="example-800w.jpg">
    var img = document.getElementById('myImg');
    img.srcset
    // "example-320w.jpg 320w,
    //  example-480w.jpg 480w,
    //  example-800w.jpg 800w"
    
    img.sizes
    // "(max-width: 320px) 280px,
    //  (max-width: 480px) 440px,
    //  800px"
```
    

上面代码中，`sizes`属性指定，对于小于`320px`的屏幕，图像的宽度为`280px`；对于小于`480px`的屏幕，图像宽度为`440px`；其他情况下，图像宽度为`800px`。然后，浏览器会根据当前屏幕下的图像宽度，到`srcset`属性加载宽度最接近的图像。

HTMLImageElement.width，HTMLImageElement.height
----------------------------------------------

`width`属性表示`<img>`的 HTML 宽度，`height`属性表示高度。这两个属性返回的都是整数。

```js
    // HTML 代码如下
    // <img width="300" height="400" id="myImg" src="pic.jpg">
    var img = document.getElementById('img');
    img.width // 300
    img.height // 400
```
    

如果图像还没有加载，这两个属性返回的都是`0`。

如果 HTML 代码没有设置`width`和`height`属性，则它们返回的是图像的实际宽度和高度，即`HTMLImageElement.naturalWidth`属性和`HTMLImageElement.naturalHeight`属性。

HTMLImageElement.naturalWidth，HTMLImageElement.naturalHeight
------------------------------------------------------------

`HTMLImageElement.naturalWidth`属性表示图像的实际宽度（单位像素），`HTMLImageElement.naturalHeight`属性表示实际高度。这两个属性返回的都是整数。

如果图像还没有指定或不可得，这两个属性都等于`0`。

```js
    var img = document.getElementById('img');
    if (img.naturalHeight > img.naturalWidth) {
      img.classList.add('portrait');
    }
```
    

上面代码中，如果图片的高度大于宽度，则设为`portrait`模式。

HTMLImageElement.complete
-------------------------

`HTMLImageElement.complete`属性返回一个布尔值，表示图表是否已经加载完成。如果`<img>`元素没有`src`属性，也会返回`true`。

HTMLImageElement.crossOrigin
----------------------------

`HTMLImageElement.crossOrigin`属性用于读写`<img>`元素的`crossorigin`属性，表示跨域设置。

这个属性有两个可能的值。

*   `anonymous`：跨域请求不要求用户身份（credentials），这是默认值。
*   `use-credentials`：跨域请求要求用户身份。

```js
    // HTML 代码如下
    // <img crossorigin="anonymous" id="myImg" src="pic.jpg">
    var img = document.getElementById('img');
    img.crossOrigin // "anonymous"
```
    

HTMLImageElement.referrerPolicy
-------------------------------

`HTMLImageElement.referrerPolicy`用来读写`<img>`元素的 HTML 属性`referrerpolicy`，表示请求图像资源时，如何处理 HTTP 请求的`referrer`字段。

它有五个可能的值。

*   `no-referrer`：不带有`referrer`字段。
*   `no-referrer-when-downgrade`：如果请求的地址不是 HTTPS 协议，就不带有`referrer`字段，这是默认值。
*   `origin`：`referrer`字段是当前网页的地址，包含协议、域名和端口。
*   `origin-when-cross-origin`：如果请求的地址与当前网页是同源关系，那么`referrer`字段将带有完整路径，否则将只包含协议、域名和端口。
*   `unsafe-url`：`referrer`字段包含当前网页的地址，除了协议、域名和端口以外，还包括路径。这个设置是不安全的，因为会泄漏路径信息。

HTMLImageElement.x，HTMLImageElement.y
-------------------------------------

`HTMLImageElement.x`属性返回图像左上角相对于页面左上角的横坐标，`HTMLImageElement.y`属性返回纵坐标。

事件属性
----

图像加载完成，会触发`onload`属性指定的回调函数。

```js
    // HTML 代码为 <img src="example.jpg" onload="loadImage()">
    function loadImage() {
      console.log('Image is loaded');
    }
```
    

图像加载完成，会触发`onerror`属性指定的回调函数。

```js
    // HTML 代码为 <img src="image.gif" onerror="myFunction()">
    function myFunction() {
      console.log('There is something wrong');
    }
```
 
