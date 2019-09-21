---
layout: post
title:  "AngularJS"
date:   2018-08-08
tags:  js技术框架

color: 'rgb(154,133,255)'

---

#### 1.基本使用

- ng-app 是angular的基础指令，用来指定angularjs管理的边界，也就是说：只有ng-app内部的元素才会收到angular的管理，
类似于:Vue实例中的el配置项

- ng-controller 指令：负责启动控制器中的代码，也就是说：只有在视图中使用 ng-controller 以后，控制器中的代码才会执行
**注意:angular找到第一个ng-app以后，就不再解析后续的ng-app，所以，默认情况下，只有第一个ng-app会生效**

如果要在一个页面中启动多个 ng-app，后面的需要通过手动启动的方式来启动（但是，一般不会有这种情况出现！！！）

```html
  <!-- 第一种启动方式：使用ng-app启动 -->
  <div ng-app="myApp" ng-controller="myCtrl"></div>

  <!-- 第二种启动方式：使用 boostrap 方法 -->
  <div id="dv" ng-controller="myCtrl1">
    {{ msg }}
  </div>
  <!-- <div ng-app="myApp1"></div> -->

  <script src="./angular.js"></script>
  <script>

    angular
      .module('myApp', [])
      .controller('myCtrl', function ($scope) {
        console.log('控制器中的代码执行了');
      })
    
    // 手动启动模块的方式：（知道）
    angular
      .module('myApp1', [])
      .controller('myCtrl1', function ($scope) {
        $scope.msg = '手动启动angular'
      })

    // 第一个参数：表示angular模块管理的边界
    // 第二个参数：表示使用哪个模块来管理这个区域
    angular.bootstrap(document.getElementById('dv'), ['myApp1'])
  </script>

```

- ng-model 也是一个指令，用来实现文本框数据的双向绑定，类似于：Vue中的 v-model 

```html
<div ng-app>
    <!-- ng-model 也是一个指令，用来实现文本框数据的双向绑定，类似于：Vue中的 v-model -->
    <input type="text" ng-model="msg">
    <!-- {{}} 是插值表达式，表示展示 msg 数据的值 -->
    <h1>{{ msg }}</h1>
  </div>

  <!-- 1 引入angularjs -->
  <script src="./angular.js"></script>

```
##### 注意：angular中实现任何的功能都需要先创建模块，所有其他的内容，都是挂载到这个模块中的
##### 使用流程
###### 1.创建模块
- 第一个参数:表示模块名称
- 第二个参数:表示当前模块的依赖项，如果当前模块依赖于其他模块，那就需要将以来模块的名字放到数组中，如果当前模块没有依赖项，也要指定一个空数组

**推断式写法**

- 推断式创建控制器，那么angular是根据回调函数形参的名称来找服务的，
- .controller("myCtrl",function($scope){}   **$scope形参不可变** ，如果代码压缩程序会报错

```html
<div ng-app="myApp" ng-controller="myCtrl">
    <!-- ng-model 也是一个指令，用来实现文本框数据的双向绑定，类似于：Vue中的 v-model -->
    <input type="text" ng-model="msg">
    <!-- {{}} 是插值表达式，表示展示 msg 数据的值 -->
    <h1>{{ msg }}</h1>
  </div>
  <!-- 1 引入angularjs -->
  <script src="./angular.js"></script>
  <script>
    angular.module('myApp',[]).controller("myCtrl",function($scope){
    $scope.msg="这是推断式写法"
})
  </script>
```

**注入式写法**

- 如果使用的是注入式语法创建控制器，那么angular是根据数组中的字符串参数来找服务的
- .controller("myCtrl",['$scope',function(**$scope**){}]} **$scope**形参可变，代码压缩后也不会影响代码运行

```html
<div ng-app="myApp" ng-controller="myCtrl">
    <!-- ng-model 也是一个指令，用来实现文本框数据的双向绑定，类似于：Vue中的 v-model -->
    <input type="text" ng-model="msg">
    <!-- {{}} 是插值表达式，表示展示 msg 数据的值 -->
    <h1>{{ msg }}</h1>
  </div>
  <!-- 1 引入angularjs -->
  <script src="./angular.js"></script>
  <script>
    angular.module('myApp',[]).controller("myCtrl",['$scope',function($scope){
    $scope.msg="这是推断式写法"
    }  
    ])
  </script>
```

###### 2为什么要使依赖注入来处理参数？

- 什么是依赖注入:根据我们制定的服务名称，来注入我们需要的服务
- 因为angular中提供了很多内置服务，有了依赖注入的功能以后，变成了，我们需要哪个服务，就把这个服务注入到控制器里面来即可，将来angular将会
-  依赖注入的原理：
       依赖注入：在angular中，我们需要使用哪个功能，就把这个功能对应的服务名称（比如：$scope），作为参数传递个angular即可
     -  原理：
        1 我们传递需要使用的服务名称，比如：$scope
        2 angular就会根据我们指定的服务名称，找到这个名称对应的内置服务
        3 在代码执行的时候，angular将这个服务传递给函数
        因此，在这个函数中就可以使用这个服务的功能了


#### 2.指令
##### ng-bind
- ng-bind指令的作用:用来设置当前元素的innerText或textContent，相当于Vue中的v-text指令
##### ng-clock
- ng-clock 会在angular代码解析完成后，从元素中移除掉

```html
<div ng-app="myApp" ng-controller="myController">
    <!-- <h1>{{ msg }}</h1> -->

    <!-- ng-bind指令的作用：用来设置当前元素的 innerText 或 textContent，相当于Vue中的 v-text 指令 -->
    <!-- <h1 ng-bind="msg"></h1> -->

    <!-- ng-cloak 会在angular代码解析完成后，从元素中移除掉 -->
    <h1 ng-cloak>{{ msg }}</h1>
  </div>

  <script src="./angular.js"></script>
  <script>
    var myApp = angular.module('myApp', [])
    myApp.controller('myController', function ($scope) {
      $scope.msg = '今天很冷'
    })
  </script>

```
##### 插值表达式
- angular中插值表达式和vue中插值表达式不同，angular中的插值表达式可以用在html元素的属性中

```html
 <div ng-app="myApp" ng-controller="myController">
    <!-- 如果要在 HTML元素的属性中使用 $scope中提供的数据，那么，需要使用插值表达式 -->

    <!-- href="url" 会原样输出，url就是url这三个字符 -->
    <!-- <a href="url">传智播客</a> -->

    <!-- href="{{url}}" 会被angular解析为：href="http://itcast.cn" -->
    <a href="{{ url }}">传智播客</a>
  </div>

  <script src="./angular.js"></script>
  <script>
    angular
      .module('myApp', [])
      .controller('myController', function ($scope) {
        // angular中插值表达式 和 vue中插值表达式的不同：
        // angular中的插值表达式可以用在HTML元素的属性中

        $scope.url = 'http://itcast.cn'
      })
  </script>

```

##### 绑定事件指令

- ng-click 绑定单击事件指令，跟vue不同的是，需要加()调用
- ng-mouseenter / ng-dblclick / ng-keyup
- 四则计算器

```html
<div ng-app="app" ng-controller="myController">
        <input type="text" ng-model="num1">
        <input type="text" ng-model="opt">
        <input type="text" ng-model="num2">
        <button ng-click="option()">=</button>
        <input type="text" ng-model="result">
</div>
<script src="./node_modules/angular/angular.js"></script>
<script>
        angular.module("app", []).controller("myController",                  function($scope) {
            $scope.num1 = 0;
            $scope.num2 = 0;
            $scope.opt = "+";
            $scope.result = 0;
            $scope.option = function() {
                switch ($scope.opt) {
                    case "+":
                        return $scope.result = ($scope.num1 - 0) + ($scope.num2 - 0);
                        break;
                    case "-":
                        return $scope.result = ($scope.num1 - 0) - ($scope.num2 - 0);
                        break;
                    case "*":
                        return $scope.result = ($scope.num1 - 0) * ($scope.num2 - 0);
                        break;
                    case "/":
                        return $scope.result = ($scope.num1 - 0) / ($scope.num2 - 0);
                        break;
                }
            }
        })
    </script>
```
##### ng-bind-html
- angular中的指令-ngSanitize模块展示html内容

```html
<div ng-app="myApp" ng-controller="myController">
    <!-- <h1 ng-bind="msg"></h1> -->

    <!-- ng-bind-html 指令是由：ngSanitize模块提供的 -->
    <h1 ng-bind-html="msg"></h1>
  </div>

  <script src="./angular.js"></script>
  <!-- 引入 sanitize 模块 -->
  <script src="./angular-sanitize.js"></script>
  <script>
    // 在angular中，如果需要展示 HTML内容，那么需要借助于 ngSanitize模块

    angular
    // 表示：创建的当前模块依赖于 ngSanitize 模块
      .module('myApp', ['ngSanitize'])
      .controller('myController', function ($scope) {
        $scope.msg = '<p>文本内容</p>'
      })
  </script>

```
##### ng-repeat

- 用来展示列表内容，为列表中的每一项元素
- 第一个参数:表示序列号，第二个参数:表示数组的每一项，这点与vue中的v-for 不同
     -  $index 表示遍历的每一项元素的索引号；
     -  $first / $last / $middle / $odd / $even 
     -  $first 表示：当前项是不是第一项，如果是，结果为：true，否则，结果为：false
       剩余其他属性的原理与 $first 相同

```html
 <div ng-app="myApp" ng-controller="myController">
    <ul>
      <!-- ng-repeat 用来展示列表内容，为列表中的每一项元素，生成一个当前li标签 -->

      <!-- 如果只指定了 item ，那么item就是数组中的每一项元素 -->
      <!-- <li ng-repeat="item in list">{{ item }}</li> -->

      <!-- 
        如果指定了两个参数，那么第一个参数：表示索引号；第二个参数：表示数组的每一项 
        注意：与 Vue中的 v-for 不同！！！
      -->
      <!-- <li ng-repeat="(index, item) in list">{{ index }} -- {{ item }}</li> -->
      
      <!-- $index 表示遍历的每一项元素的索引号 -->
      <!-- $first / $last / $middle / $odd / $even -->
      <!-- 
        $first 表示：当前项是不是第一项，如果是结果为：true，否则，结果为：false

        剩余其他属性的原理与 $first 相同
       -->
      <li ng-repeat="item in list">当前项内容为：{{item}}，索引号为：{{ $index }}，是不是第一个元素：{{ $first }}，是不是最后一项：{{ $last }}，是不是中间项：{{ $middle }}，是不是奇数项：{{$odd}}，是不是偶数项：{{$even}}</li>
    </ul>

    <!-- 使用 ng-repeat 遍历对象：知道 -->
    <!-- 遍历对象的时候， $index 也表示当前项的索引号 -->
    <!-- <p ng-repeat="item in obj">{{ item }} --- {{ $index }}</p> -->
    <p ng-repeat="(key, item) in obj">{{ key }} --- {{ item }}</p>
  </div>

  <script src="./angular.js"></script>
  <script>
    angular
      .module('myApp', [])
      .controller('myController', function ($scope) {
        $scope.list = ['aaa', 'bbb', 'ccc', 'ddd']

        $scope.obj = {
          name: 'jack',
          age: 19,
          gender: 'male'
        }
      })
  </script>

```
如果遍历的数组中包含了相同的内容（比如：ccc 出现了两次），此时页面将渲染不出内容内容，需要通过 track by 表达式来指定唯一的key，就可以解决这个问题了

```html
  <div ng-app="myApp" ng-controller="myController">
    <ul>
      <!-- 如果遍历的数组中包含了相同的内容（比如：ccc 出现了两次），此时，需要通过 track by 表达式来指定唯一的key，就可以解决这个问题了 -->
      <!-- 只要保证遍历数组的时候，每一个 track by 后面表达式的值不同即可！！！ -->
      <!-- <li ng-repeat="item in list track by $index">{{item}}</li> -->

      <!-- track by fn() 的意思： track by fn函数的返回值 -->
      <li ng-repeat="item in list track by fn()">{{item}}</li>
    </ul>
  </div>

  <script src="./angular.js"></script>
  <script>
    // ng-repeat 最佳实践：
    // 使用 ng-repeat 的时候，指定 track by ，并且要保证 track by 后面表达式的值是唯一的！！

    angular
      .module('myApp', [])
      .controller('myController', function ($scope) {
        $scope.list = ['aaa', 'bbb', 'ccc', 'ddd', 'ccc']

        /* 
        // 注意：使用 new Date 来作为唯一的key，可能会存在问题。
        // 问题：如果在同一个时间代码执行了多次，那么，通过 new Date 获取到的时间是相同的！！！
        $scope.fn = function () {
          var d = new Date() - 0
          console.log(d);
          return d
        }
        */

        $scope.fn = function () {
          console.log(' fn 被调用了 ');
          return Math.random()
        }
      })
  </script>

    <div ng-app="app" ng-controller="myController">
        <ul>
            <li ng-repeat="(index,item) in list track by $index">这是第{{$index}}项，内容为：{{item}}</li>
        </ul>
    </div>
    <script src="./node_modules/angular/angular.js"></script>
    <script>
        angular.module("app", []).controller("myController", function($scope) {
            $scope.list = ["使用vue-cli@2.0搭建项目框架", "使用vue-router@2.1进行页面路由切换", "使用vue-resource@1.0.1进行http请求获取数据", "使用vue-cli@2.0搭建项目框架"];
            /*   $scope.fn = function() {
                  return Math.random();
              } */
        })
    </script>
```
##### ng-class设置类

-  ng-class 的值是一个对象，对象的键表示要添加的类名称，值是一个布尔值，如果值为true，表示添加这个类；否则，不添加这个类

```html
  <div ng-app="myApp" ng-controller="myController">

    <!-- ng-class 的值是一个对象，对象的键表示要添加的类名称，值是一个布尔值，如果值为true，表示添加这个类；否则，不添加这个类 -->
    <p ng-class="{ red: true, fz: true }">ng-class的基本使用</p>
  </div>

  <script src="./angular.js"></script>
  <script>
    angular
      .module('myApp', [])
      .controller('myController', function ($scope) {
        // ng-class 用来动态操作类样式
      })
  </script>

```
##### ng-if/ng-show

```html
  <div ng-app="myApp" ng-controller="myController">
    <!-- <p ng-if="isShow">你能看到我吗？？</p> -->

    <!-- <p ng-show="isShow">你能看到我吗？？</p> -->
    <p ng-hide="isShow">你能看到我吗？？</p>
  </div>

  <script src="./angular.js"></script>
  <script>
    // ng-if 如何控制元素的展示和隐藏？？？

    //  ng-if 的值为true，会在页面中创建该元素
    //        的值为false，那么，在页面中就移除这个元素

    // ng-show 是通过 display:none 这个CSS样式来控制元素的展示和隐藏
    // ng-hide 作用与ng-show相同，如果ng-hide的值为true，表示隐藏该元素；如果ng-hide的值为false，表示展示这个元素

    angular
      .module('myApp', [])
      .controller('myController', function ($scope) {
        $scope.isShow = true
      })
  </script>

```
##### ng-switch 实现元素的展示和隐藏控制

```html
  <div ng-app="myApp" ng-controller="myController">
    <input type="text" ng-model="name">

    <!-- 通过 ng-switch 和 ng-switch-when 实现元素的展示和隐藏控制 -->
    <!-- 当 ng-switch 的值（也就是name属性的值） 与 ng-switch-when的值一致了，那么这一项元素就会展示，而其他的元素会隐藏 -->
    <div ng-switch="name">
      <div ng-switch-when="jack">我是jack</div>
      <div ng-switch-when="tom">我是tom</div>
      <div ng-switch-when="rose">我是rose</div>
    </div>
  </div>

  <script src="./angular.js"></script>
  <script>
    angular
      .module('myApp', [])
      .controller('myController', function ($scope) {
        $scope.name = "jack"
      })
  </script>

```

###### watch监视数据变化

-  通过 $scope.$watch() 监视数据变化
- $watch只能监视$scope中数据的变化
-  第一个参数：表示要监视的数据
-  第二个参数：是一个回调函数，如果监视到数据变化了，这个回调函数就会执行

```html
<body ng-app="myApp" ng-controller="myCtrl">
  <input type="text" ng-model="num">
  <input type="text" ng-model="user.name">
  <input type="text" ng-model="user.age">

  <script src="./angular.js"></script>
  <script>
    angular
      .module('myApp', [])
      .controller('myCtrl', function ($scope) {
        $scope.num = 1
        $scope.user = {
          name: 'jack',
          age: 19
        }

        // 监视对象属性的变化
        // 如果要监视对象属性的变化，需要传入第三个参数true，表示深度监听对象中属性的变化
        $scope.$watch('user', function (curVal, oldVal) {
          console.log('当前值：', curVal, '，旧值为：', oldVal);
        }, true)

        // 监视对象中某个属性的改变
        // $scope.$watch('user.name', function (curVal, oldVal) {
        //   console.log('当前值：', curVal, '，旧值为：', oldVal);
        // })

        // 通过 $scope.$watch() 监视数据变化
        // 第一个参数：表示要监视的数据
        // 第二个参数：是一个回调函数，如果监视到数据变化了，这个回调函数就会执行
        // 注意：$watch() 进入页面就会自动执行一次
        /* $scope.$watch('num', function (curVal, oldVal) {
          // 通过判断curVal 和 oldVal的值，来阻止第一次默认执行
          // 因为只有第一次执行的时候，curVal 和 oldVal 才相同，以后每次数据变化，这个值都是不同的
          if (curVal === oldVal) return
          
          console.log('当前值：', curVal, '，旧值为：', oldVal);
        }) */
      })
  </script>
</body>

```
###### 过滤器
- 用来对数据进行格式化，也就是让数据按照某个格式输出

```js
.filter('myDate', function () {

        return function (input, format, arg2) {
          return '视图中看到的过滤器内容，是由返回函数的返回值决定的'
        }
      })

```
#### 3.自定义指令
-  1 如果有原生DOM操作，需要将这些操作放到自定义指令中
- 2 angular中没有组件化开发，但是，可以通过 自定义指令 来模拟组件化开发
总结发现：angular中的自定义与Vue中的组件语法几乎一样，功能也很相近

```js
  .directive('myBtn', function () {

        return {
          // template: `<button ng-transclude>自定义指令创建的 按钮</button>`,
          // templateUrl: './views/btn.html',

          // 表示自定义指令使用的类型，推荐使用：EA
          // restrict: 'ECMA',

          // 表示是否使用模版内容替换当前视图中使用的自定义标签或属性
          // replace: true,

          // 相当于：Vue中的 slot 插槽
          // transclude: true,

          // DOM操作，需要在 link 函数中完成
          link: function (scope, element, attrs) {
            // 如果要进行DOM操作，此时，拿到第二个参数即可
            // 第二个参数是jqLite对象
          }
        }
      })


```
#### 4.面向对象的使用方式
##### 服务: 
- 把复杂的逻辑操作封装到服务中，目的是为了让控制器变的更薄
- 公共的方法都封装到服务中，其他控制器中使用的时候，只需要注入即可
      - 1 函数被当作构造函数来使用
      - 2 如果多个控制器中使用了服务，angular只会在第一次使用的时候，创建服务的实例对象并且注入到控制器中（缓存）
      - 3 控制器中如果没有注入服务，那么服务中代码是不会执行的
      
```js
      .service('myService', function () {
        this.say = function () {}
      })
      .controller('DemoController',
      ['$scope', '$timeout', 'myService', 
      function ($scope, $timeout, myService) {
        $scope.time = new Date;
         // 面向对象的使用方式：
        // 控制器中的函数会被当作构造函数，
        //因此，控制器中需要使用 
        //this.成员 = 值，这种形式来暴露数据
        // this.name = 'jack'
        $scope.name = '数据';
         // 作用：监视$scope中数据的变化
        $scope.$watch('name', 
        function (curVal, oldVal) {
          console.log(curVal);
        })


}])
```
#### 5.双向数据绑定
![](_v_images/_1515937654_24830.png)
