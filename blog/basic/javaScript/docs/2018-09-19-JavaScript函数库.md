---
layout: post
title: 'JavaScript函数库'
date: 2018-09-19
tags: 随笔
color: 'rgb(154,133,255)'
---

## 1.JavaSript 中数组方法是否对原数组产生影响

### 产生影响

#### 栈方法

##### push

- push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。

##### pop

- pop()方法会删除数组最后一项，并将该项返回。

#### 队列方法

##### shift

- shift()方法会删除数组的第一项，并将该项返回。

##### unshift

- unshift()方法可以在数组前端添加任意个项，并返回修改后数组的长度。

#### 重排序方法

##### reverse

- reverse()方法可以反转数组项的顺序。

```js
var arr = ['one', 'two', 'three']
arr.reverse()
console.log(arr) // ['three', 'two', 'one']
```

##### sort

- sort()方法会对数组进行排序。
  为了实现排序，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串。
  sort()方法可以接收一个比较函数作为参数。该比较函数接收两个参数，如果第一个参数应该位于第二个参数之前，则返回一个负数；反之返回正数；若两个参数相等则返回 0.

```js
// 默认排序
var arr = ['B', 'C', 'A']
arr.sort()
console.log(arr) // ['A', 'B', 'C']

// 接收比较函数
var values = [5, 1, 10, 0]
values.sort(function(a, b) {
  return a - b // 升序
  // return b-a;  // 降序
})
console.log(values) // [0,1,5,10]
```

#### 操作方法

##### splice

- splice()方法可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素。
- splice()方法始终都会返回一个空数组，该数组中包含从原始数组中删除的项。

```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']
var arrDel = arr.splice(2, 3, 'Google', 'Facebook') // 从索引2开始删除3个元素,然后再添加两个元素
console.log(arr) // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
console.log(arrDel) // ['Yahoo', 'AOL', 'Excite']
```

### 不产生影响

#### 转换方法

##### toString、toLocaleString

得到数组中每个值的字符串形式拼接而成的、一个以逗号分隔的字符串。
调用 toString()时，会调用数组每一项的 toString()方法。而调用 toLocaleString()时，会调用数组每一项的 toLocaleString()方法。

```js
var arr = ['red', 'blue', 'green']
var arrNew = arr.toString()
console.log(arr) // ["red", "blue", "green"]
console.log(arrNew) // red,blue,green
```

##### valueOf

- 在《JavaScript 高级教程》中，提到调用数组的 valueOf()和 toString()方法会返回相同的值。而实际上并非这样，valueOf()方法会返回数组的原始值。

```js
var arr = ['red', 'blue', 'green']
var arrNew = arr.valueOf()
console.log(arr) // ["red", "blue", "green"]
console.log(arrNew) // ["red", "blue", "green"]
```

##### join

- join()方法使用指定的分隔符，将数组的每个元素连接起来，返回构建的字符串。
  使用 join()重现 toString()方法的输出：arr.join(',')

```js
var arr = ['red', 'blue', 'green']
var arrNew = arr.join(',')
console.log(arr) // ["red", "blue", "green"]
console.log(arrNew) // red,blue,green
```

#### 操作方法

##### concat

- concat()方法可以基于当前数组中的所有项创建一个新数组。
  具体来说，concat()方法会先创建当前数组的一个副本，然后将接收的参数添加到这个副本的末尾，最后返回新构建的数组。
  如果没有给 concat()方法传递参数，只是复制当前数组并返回副本。如果给 concat()方法传递一个或多个数组，则会将数组的每一项都添加到结果数组中。

```js
var arr = ['A', 'B', 'C']
var arrNew = arr.concat(1, 2, [3, 4])
console.log(arr) // ['A', 'B', 'C']
console.log(arrNew) // ['A', 'B', 'C', 1, 2, 3, 4]
```

##### slice

- slice()方法可以基于当前数组中的一项或多项创建一个新数组。
  slice()方法可以接收一或两个参数，即要返回项的起始和结束位置，但不包括结束位置。如果只有一个参数，slice()方法返回起始位置到数组末尾的所有项。如果参数为负数，则用数组长度+该参数来确定相应的位置。

```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
arr.slice(0, 3) // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr) // ["A", "B", "C", "D", "E", "F", "G"]
```

#### 位置方法

ES5 中定义了 2 中数组位置方法。每个方法接收两个参数：要查找的项、表示查找起点位置的索引。其中，第二个参数可选。

##### indexOf

- indexOf()方法可以搜索一个指定元素的位置，返回该项在数组中的位置。如果没找到，则返回-1。indexOf()是从数组的开头开始向后查找。

```js
var arr = [10, 20, '30', 'xyz', 20];
var pos = arr.indexOf(20);
console.log(arr);  // [10, 20, "30", "xyz", 20]
console.log(pos);  // 1
lastIndexOf
lastIndexOf()方法与indexOf()方法类似，区别在于：lastIndexOf()从数组的末尾开始向前查找。

var arr = [10, 20, '30', 'xyz', 20];
var pos = arr.lastIndexOf(20);
console.log(arr);  // [10, 20, "30", "xyz", 20]
console.log(pos);  // 4
```

#### 迭代方法

ES5 中定义了 5 种数组迭代方法。每个方法都接收两个参数：要在每一项上运行的函数，和运行该函数的作用于对象。其中，第二个参数可选。传入这些方法中的函数会接收三个参数：数组项的值、该项的索引、数组对象本身。

##### forEach

- 对数组中的每一项运行给定函数。forEach()方法没有返回值。

```js
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var eachResult = arr.forEach(function(item, index, self) {
  return (item += 2)
})
console.log(arr) // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(eachResult) // undefined
```

##### map

- 对数组中的每一项运行给定函数。 map()方法返回每次函数调用的结果组成的数组。

```js
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var mapResult = arr.map(function(item, index, self) {
  return item * 2
})
console.log(arr) // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mapResult) // [2, 4, 6, 8, 10, 8, 6, 4, 2]
```

##### filter

- 对数组中的每一项运行给定函数。filter()方法返回使给定函数返回 true 的项组成的数组。

```js
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var filterResult = arr.filter(function(item, index, self) {
  return item > 2
})
console.log(arr) // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(filterResult) // [3, 4, 5, 4, 3]
```

##### every

- 对数组中的每一项运行给定函数。every()方法会返回布尔值，如果给定函数对数组每一项都返回 true，则返回 true。

```js
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var everyResult = arr.every(function(item, index, self) {
  return item > 2
})
console.log(arr) // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(everyResult) // false
```

##### some

- 对数组中的每一项运行给定函数。some()方法会返回布尔值，如果给定函数对数组任意一项返回 true，则返回 true。

```js
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var someResult = arr.some(function(item, index, self) {
  return item > 2
})
console.log(arr) // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(someResult) // true
```

#### 缩小方法

ES5 中定义了 2 种数组缩小方法。每个方法都接收两个参数：在每一项上调用的函数、作为缩小基础的初始值。其中，第二个参数可选。传入这些方法中的函数会接收四个参数：前一个值、当前值、项的索引、数组对象。

##### reduce

- reduce()方法会迭代数组中的所有项，然后构建一个最终返回值。reduce()方法从数组的第一项开始，逐个遍历到最后。

```js
var arr = [1, 2, 3, 4, 5]
var reduceResult = arr.reduce(function(prev, cur, index, self) {
  return prev + cur
})
console.log(arr) // [1, 2, 3, 4, 5]
console.log(reduceResult) // 15
```

##### reduceRight

- reduceRight()方法与 reduce()方法类似，区别在于：reduceRight()从数组的最后一项开始，向前遍历到第一项。

```js
var arr = [1, 2, 3, 4, 5]
var rightResult = arr.reduceRight(function(prev, cur, index, self) {
  return prev + cur
})
console.log(arr) // [1, 2, 3, 4, 5]
console.log(rightResult) // 15
```

### ES6 find 和 filter 的区别

```js
const list = [{ name: '1', index: 1 }, { name: '2' }, { name: '1' }]
let list2 = list.find(i => i.name === '1')

let list3 = list.filter(i => i.name === '1')

console.log(list) //[ { name: '1', index: 1 }, { name: '2' }, { name: '1' } ]
console.log(list2) //{ name: '1', index: 1 }

console.log(list3) //[ { name: '1', index: 1 }, { name: '1' } ]
```

- find 和 filter 都是不改变原数组的方法
- 但是 find 只查出第一个符合条件的结果像例子里是直接返回了一个对象而不是数组！
- 而 filter 返回全部结果仍然是数组。

## 2.字符串操作

### 2-1 去除字符串空格

```js
    //去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
    //ecDo.trim('  1235asd',1)
    //result：1235asd
    //这个方法有原生的方案代替，但是考虑到有时候开发PC站需要兼容IE8，所以就还是继续保留

    trim: function (str, type) {
        switch (type) {
            case 1:
                return str.replace(/\s+/g, "");
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s*)/g, "");
            case 4:
                return str.replace(/(\s*$)/g, "");
            default:
                return str;
        }
    }
```

### 2-2 字母大小写切换

```js
    /*type
     1:首字母大写
     2：首页母小写
     3：大小写转换
     4：全部大写
     5：全部小写
     */


    //ecDo.changeCase('asdasd',1)
    //result：Asdasd
    changeCase: function (str, type) {
        function ToggleCase(str) {
            var itemText = ""
            str.split("").forEach(
                function (item) {
                    if (/^([a-z]+)/.test(item)) {
                        itemText += item.toUpperCase();
                    } else if (/^([A-Z]+)/.test(item)) {
                        itemText += item.toLowerCase();
                    } else {
                        itemText += item;
                    }
                });
            return itemText;
        }
        switch (type) {
            case 1:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
                });
            case 2:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                });
            case 3:
                return ToggleCase(str);
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    }
```

### 2-3 字符串循环复制

```js
            //repeatStr(str->字符串, count->次数)
            //ecDo.repeatStr('123',3)
            //"result：123123123"

            repeatStr: function (str, count) {
                var text = '';
                for (var i = 0; i < count; i++) {
                    text += str;
                }
                return text;
            }
```

### 2-4 字符串替换

```js
        //ecDo.replaceAll('这里是上海，中国第三大城市，广东省省会，简称穗，','上海','广州')

        //result："这里是广州，中国第三大城市，广东省省会，简称穗，"

        replaceAll: function (str, AFindText, ARepText) {
            raRegExp = new RegExp(AFindText, "g");
            return str.replace(raRegExp, ARepText);
        }
```

### 2-5 替换

```js
            //字符替换*
            //replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
            //ecDo.replaceStr('18819322663',[3,5,3],0)
            //result：188*****663
            //ecDo.replaceStr('asdasdasdaa',[3,5,3],1)
            //result：***asdas***
            //ecDo.replaceStr('1asd88465asdwqe3',[5],0)
            //result：*****8465asdwqe3
            //ecDo.replaceStr('1asd88465asdwqe3',[5],1,'+')
            //result："1asd88465as+++++"

            replaceStr: function (str, regArr, type, ARepText) {
                var regtext = '',
                    Reg = null,
                    replaceText = ARepText || '*';
                //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
                if (regArr.length === 3 && type === 0) {
                    regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
                    Reg = new RegExp(regtext);
                    var replaceCount = this.repeatStr(replaceText, regArr[1]);
                    return str.replace(Reg, '$1' + replaceCount + '$2')
                }
                else if (regArr.length === 3 && type === 1) {
                    regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
                    Reg = new RegExp(regtext);
                    var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
                    var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
                    return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
                }
                else if (regArr.length === 1 && type === 0) {
                    regtext = '(^\\w{' + regArr[0] + '})'
                    Reg = new RegExp(regtext);
                    var replaceCount = this.repeatStr(replaceText, regArr[0]);
                    return str.replace(Reg, replaceCount)
                }
                else if (regArr.length === 1 && type === 1) {
                    regtext = '(\\w{' + regArr[0] + '}$)'
                    Reg = new RegExp(regtext);
                    var replaceCount = this.repeatStr(replaceText, regArr[0]);
                    return str.replace(Reg, replaceCount)
                }
            }
```

### 2-6 检测字符串

```js
        //检测字符串
        //ecDo.checkType('165226226326','phone')
        //result：false
        //大家可以根据需要扩展
        checkType: function (str, type) {
            switch (type) {
                case 'email':
                    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
                case 'phone':
                    return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
                case 'tel':
                    return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
                case 'number':
                    return /^[0-9]$/.test(str);
                case 'english':
                    return /^[a-zA-Z]+$/.test(str);
                case 'text':
                    return /^\w+$/.test(str);
                case 'chinese':
                    return /^[\u4E00-\u9FA5]+$/.test(str);
                case 'lower':
                    return /^[a-z]+$/.test(str);
                case 'upper':
                    return /^[A-Z]+$/.test(str);
                default:
                    return true;
            }
        }
```

### 2-7 检测密码强度

```js
    //ecDo.checkPwd('12asdASAD')
    //result：3(强度等级为3)
    checkPwd: function (str) {
        var nowLv = 0;
        if (str.length < 6) {
            return nowLv
        }
        if (/[0-9]/.test(str)) {
            nowLv++
        }
        if (/[a-z]/.test(str)) {
            nowLv++
        }
        if (/[A-Z]/.test(str)) {
            nowLv++
        }
        if (/[\.|-|_]/.test(str)) {
            nowLv++
        }
        return nowLv;
    }
```

### 2-8 随机码（toString 详解）

```js
    //count取值范围0-36
    //ecDo.randomWord(10)
    //result："2584316588472575"
    //ecDo.randomWord(14)
    //result："9b405070dd00122640c192caab84537"
    //ecDo.randomWord(36)
    //result："83vhdx10rmjkyb9"
    randomWord: function (count) {
        return Math.random().toString(count).substring(2);
    }
```

### 2-9 查找字符串

    可能标题会有点误导，下面我就简单说明一个需求，
    在字符串'sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
    中找出'blog'的出现次数。代码如下

```js
    //var strTest='sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
    //ecDo.countStr(strTest,'blog')
    //result：6
    countStr: function (str, strSplit) {
        return str.split(strSplit).length - 1
    }
```

### 2-9 去掉两边

```js
var str = 'abcd'
str.replace(/(^.)|(.$)/g, '')
;('bc')
```

### 2-10 过滤字符串

```js
    //过滤字符串(html标签，表情，特殊字符)
    //字符串，替换内容（special-特殊字符,html-html标签,emjoy-emjoy表情,word-小写字母，WORD-大写字母，number-数字,chinese-中文），要替换成什么，默认'',保留哪些特殊字符
    //如果需要过滤多种字符，type参数使用,分割，如下栗子
    //过滤字符串的html标签，大写字母，中文，特殊字符，全部替换成*,但是特殊字符'%'，'?'，除了这两个，其他特殊字符全部清除
    //var str='asd    654a大蠢sasdasdASDQWEXZC6d5#%^*^&*^%^&*$\\"\'#@!()*/-())_\'":"{}?<div></div><img src=""/>啊实打实大蠢猪自行车这些课程';
    // ecDo.filterStr(str,'html,WORD,chinese,special','*','%?')
    //result："asd    654a**sasdasd*********6d5#%^*^&*^%^&*$\"'#@!()*/-())_'":"{}?*****************"
    filterStr: function (str, type, restr, spstr) {
        var typeArr = type.split(','), _str = str;
        for (var i = 0, len = typeArr.length; i < len; i++) {
            //是否是过滤特殊符号
            if (typeArr[i] === 'special') {
                var pattern, regText = '$()[]{}?\|^*+./\"\'+';
                //是否有哪些特殊符号需要保留
                if (spstr) {
                    var _spstr = spstr.split(""), _regText = "[^0-9A-Za-z\\s";
                    for (var j = 0, len1 = _spstr.length; j < len1; j++) {
                        if (regText.indexOf(_spstr[j]) === -1) {
                            _regText += _spstr[j];
                        }
                        else {
                            _regText += '\\' + _spstr[j];
                        }
                    }
                    _regText += ']'
                    pattern = new RegExp(_regText, 'g');
                }
                else {
                    pattern = new RegExp("[^0-9A-Za-z\\s]", 'g')
                }
            }
            var _restr = restr || '';
            switch (typeArr[i]) {
                case 'special':
                    _str = _str.replace(pattern, _restr);
                    break;
                case 'html':
                    _str = _str.replace(/<\/?[^>]*>/g, _restr);
                    break;
                case 'emjoy':
                    _str = _str.replace(/[^\u4e00-\u9fa5|\u0000-\u00ff|\u3002|\uFF1F|\uFF01|\uff0c|\u3001|\uff1b|\uff1a|\u3008-\u300f|\u2018|\u2019|\u201c|\u201d|\uff08|\uff09|\u2014|\u2026|\u2013|\uff0e]/g, _restr);
                    break;
                case 'word':
                    _str = _str.replace(/[a-z]/g, _restr);
                    break;
                case 'WORD':
                    _str = _str.replace(/[A-Z]/g, _restr);
                    break;
                case 'number':
                    _str = _str.replace(/[0-9]/g, _restr);
                    break;
                case 'chinese':
                    _str = _str.replace(/[\u4E00-\u9FA5]/g, _restr);
                    break;
            }
        }
        return _str;
    }
```

### 2-11 格式化处理字符串

```js
    //ecDo.formatText('1234asda567asd890')
    //result："12,34a,sda,567,asd,890"
    //ecDo.formatText('1234asda567asd890',4,' ')
    //result："1 234a sda5 67as d890"
    //ecDo.formatText('1234asda567asd890',4,'-')
    //result："1-234a-sda5-67as-d890"
    formatText: function (str, size, delimiter) {
        var _size = size || 3, _delimiter = delimiter || ',';
        var regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
        var reg = new RegExp(regText, 'g');
        return str.replace(reg, _delimiter);
    }
```

### 2-12 找出最长单词

```js
    //ecDo.longestWord('Find the Longest word in a String')
    //result：7
    //ecDo.longestWord('Find|the|Longest|word|in|a|String','|')
    //result：7
    longestWord: function (str, splitType) {
        var _splitType = splitType || /\s+/g,
            _max = 0,_item='';
        var strArr = str.split(_splitType);
        strArr.forEach(function (item) {
            if (_max < item.length) {
                _max = item.length
                _item=item;
            }
        })
        return {el:_item,max:_max};
    }
```

### 2-13 句中单词首字母大写

```js
    //这个我也一直在纠结，英文标题，即使是首字母大写，也未必每一个单词的首字母都是大写的，但是又不知道哪些应该大写，哪些不应该大写
    //ecDo.titleCaseUp('this is a title')
    //"This Is A Title"
    titleCaseUp: function (str, splitType) {
        var _splitType = splitType || /\s+/g;
        var strArr = str.split(_splitType),
            result = "", _this = this
        strArr.forEach(function (item) {
            result += _this.changeCase(item, 1) + ' ';
        })
        return this.trim(result, 4)
    }
```

## 3.数组操作

### 3-1 数组去重

#### 3-1-1 利用 ES6 Set 去重（ES6 中最常用）

```js
function unique(arr) {
  return Array.from(new Set(arr))
}
var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {}
]
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

##### 不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉“{}”空对象。

#### 3-1-2 利用 for 嵌套 for，然后 splice 去重（ES5 中最常用）

```js
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1)
        j--
      }
    }
  }

  return
  arr
}

var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {}
]
console.log(unique(arr))

//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]
```

##### 双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。

#### 3-1-3 利用 indexOf 去重

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')

    return
  }

  var array = []

  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }

  return
  array
}
```

##### 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则 push 进数组。

#### 3-1-4 利用 sort()

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')

    return
  }
  arr = arr.sort()

  var arrry = [arr[0]]

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arrry.push(arr[i])
    }
  }

  return
  arrry
}
```

##### 利用 sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。

#### 3-1-5 利用对象的属性不能相同的特点进行去重

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')

    return
  }

  var arrry = []

  var obj = {}

  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      arrry.push(arr[i])
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }

  return
  arrry
}
```

#### 3-1-6 利用 includes

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')

    return
  }

  var arrry = []

  for (vari = 0; i < arr.length; i++) {
    if (!arrry.includes(arr[i])) {
      //includes 检测数组是否有某个值
      arrry.push(arr[i])
    }
  }
}
```

#### 3-1-7 利用 hasOwnProperty

```js
function unique(arr) {
  var obj = {}

  return arr.filter(function(item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true)
  })
}
```

##### 利用 hasOwnProperty 判断是否存在对象属性。

#### 3-1-8 利用 filter

```js
function unique(arr) {
  return
  arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素

    return
    arr.indexOf(item) === index
  })
}
```

#### 3-1-9 利用递归去重

```js
function unique(arr) {
  var arrry = arr

  var len = arrry.length
  arrry.sort(function(a, b) {
    //排序后更加方便去重

    return a - b
  })

  function loop(index) {
    if (index >= 1) {
      if (arrry[index] === arrry[index - 1]) {
        arrry.splice(index, 1)
      }
      loop(index - 1)
      //递归loop，然后数组去重
    }
  }
  loop(len - 1)

  return arrry
}
```

#### 3-1-10 利用 Map 数据结构去重

```js
function arrayNonRepeatfy(arr) {
  let map = new Map()

  let array = new Array()
  // 数组用于返回结果

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      // 如果有该key值
      map.set(arr[i], true)
    } else {
      map.set(arr[i], false)
      // 如果没有该key值
      array.push(arr[i])
    }
  }

  return
  array
}
```

#### 3-1-11 利用 reduce

```js
Array.prototype.unique = function() {
  var sortArr = this.sort()

  var array = []
  sortArr.reduce((s1, s2) => {
    if (s1 !== s2) {
      array.push(s1)
    }

    return s2
  })
  array.push(sortArr[sortArr.length - 1])

  return array
}
```

##### 创建一个空 Map 数据结构，遍历需要去重的数组，把数组的每一个元素作为 key 存到 Map 中。由于 Map 中不会出现相同的 key 值，所以最终得到的就是去重后的结果。

#### 3-1-11 利用 reduce

### 3-2 数组顺序打乱

```js
        upsetArr: function (arr) {
            return arr.sort(function () {
                return Math.random() - 0.5
            });
        },
```

### 3-3 数组最大值最小值

```js
    //数组最大值
      maxArr: function (arr) {
            return Math.max.apply(null, arr);
        },
    //数组最小值
     minArr: function (arr) {
            return Math.min.apply(null, arr);
        }
```

### 3-4 数组求和，平均值

```js
     //这一块的封装，主要是针对数字类型的数组
        //求和
        sumArr: function (arr) {
            return arr.reduce(function (pre, cur) {
                return pre + cur
            })
        }
        //数组平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活！
        covArr: function (arr) {
            return this.sumArr(arr) / arr.length;
        },
```

### 3-5 从数组中随机获取元素

```js
        //ecDo.randomOne([1,2,3,6,8,5,4,2,6])
        //2
        //ecDo.randomOne([1,2,3,6,8,5,4,2,6])
        //8
        //ecDo.randomOne([1,2,3,6,8,5,4,2,6])
        //8
        //ecDo.randomOne([1,2,3,6,8,5,4,2,6])
        //1
        randomOne: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
```

### 3-6 返回数组（字符串）一个元素出现的次数

```js
        //ecDo.getEleCount('asd56+asdasdwqe','a')
        //result：3
        //ecDo.getEleCount([1,2,3,4,5,66,77,22,55,22],22)
        //result：2
        getEleCount: function (obj, ele) {
            var num = 0;
            for (var i = 0, len = obj.length; i < len; i++) {
                if (ele === obj[i]) {
                    num++;
                }
            }
            return num;
        }
```

### 3-7 返回数组（字符串）出现最多的几次元素和出现次数

```js
        //arr, rank->长度，默认为数组长度，ranktype，排序方式，默认降序
        //返回值：el->元素，count->次数
        //ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2])
        //默认情况，返回所有元素出现的次数
        //result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2},{"el":"4","count":1},{"el":"5","count":1},{"el":"6","count":1}]
        //ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3)
        //传参（rank=3），只返回出现次数排序前三的
        //result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2}]
        //ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],null,1)
        //传参（ranktype=1,rank=null），升序返回所有元素出现次数
        //result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1},{"el":"3","count":2},{"el":"1","count":4},{"el":"2","count":6}]
        //ecDo.getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3,1)
        //传参（rank=3，ranktype=1），只返回出现次数排序（升序）前三的
        //result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1}]
        getCount: function (arr, rank, ranktype) {
            var obj = {},
                k, arr1 = []
            //记录每一元素出现的次数
            for (var i = 0, len = arr.length; i < len; i++) {
                k = arr[i];
                if (obj[k]) {
                    obj[k]++;
                } else {
                    obj[k] = 1;
                }
            }
            //保存结果{el-'元素'，count-出现次数}
            for (var o in obj) {
                arr1.push({el: o, count: obj[o]});
            }
            //排序（降序）
            arr1.sort(function (n1, n2) {
                return n2.count - n1.count
            });
            //如果ranktype为1，则为升序，反转数组
            if (ranktype === 1) {
                arr1 = arr1.reverse();
            }
            var rank1 = rank || arr1.length;
            return arr1.slice(0, rank1);
        }
```

### 3-8 得到 n1-n2 下标的数组

```js
        //ecDo.getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
        //result：[5, 6, 7, 8, 9]
        //getArrayNum([0,1,2,3,4,5,6,7,8,9],2) //不传第二个参数,默认返回从n1到数组结束的元素
        //result：[2, 3, 4, 5, 6, 7, 8, 9]
        getArrayNum: function (arr, n1, n2) {
            return arr.slice(n1, n2);
        }
```

### 3-9 筛选数组

```js
        //删除值为'val'的数组元素
        //ecDo.removeArrayForValue(['test','test1','test2','test','aaa'],'test',')
        //result：["aaa"]   带有'test'的都删除
        //ecDo.removeArrayForValue(['test','test1','test2','test','aaa'],'test')
        //result：["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
        removeArrayForValue: function (arr, val, type) {
            return arr.filter(function (item) {
                return type ? item.indexOf(val) === -1 : item !== val
            })
        }
```

### 3-10 获取对象数组某些项

```js
        //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
        //ecDo.getOptionArray(arr,'a,c')
        //result：[{a:1,c:9},{a:2,c:5},{a:5,c:underfind},{a:4,c:5},{a:4,c:7}]
        //ecDo.getOptionArray(arr,'b')
        //result：[2, 3, 9, 2, 5]
        getOptionArray: function (arr, keys) {
            var newArr = []
            if (!keys) {
                return arr
            }
            var _keys = keys.split(','), newArrOne = {};
            //是否只是需要获取某一项的值
            if (_keys.length === 1) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    newArr.push(arr[i][keys])
                }
                return newArr;
            }
            for (var i = 0, len = arr.length; i < len; i++) {
                newArrOne = {};
                for (var j = 0, len1 = _keys.length; j < len1; j++) {
                    newArrOne[_keys[j]] = arr[i][_keys[j]]
                }
                newArr.push(newArrOne);
            }
            return newArr
        }
```

### 3-11 排除对象数组某些项

```js
        //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
        //ecDo.filterOptionArray(arr,'a')
        //result：[{b:2,c:9},{b:3,c:5},{b:9},{b:2,c:5},{b:5,c:7}]
        //ecDo.filterOptionArray(arr,'a,c')
        //result：[{b:2},{b:3},{b:9},{b:2},{b:5}]
        filterOptionArray: function (arr, keys) {
            var newArr = []
            var _keys = keys.split(','), newArrOne = {};
            for (var i = 0, len = arr.length; i < len; i++) {
                newArrOne = {};
                for (var key in arr[i]) {
                    //如果key不存在排除keys里面,添加数据
                    if (_keys.indexOf(key) === -1) {
                        newArrOne[key] = arr[i][key];
                    }
                }
                newArr.push(newArrOne);
            }
            return newArr
        }
```

### 3-12 对象数组排序

```js
        //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
        //ecDo.arraySort(arr,'a,b')a是第一排序条件，b是第二排序条件
        //result：[{"a":1,"b":2,"c":9},{"a":2,"b":3,"c":5},{"a":4,"b":2,"c":5},{"a":4,"b":5,"c":7},{"a":5,"b":9}]
        arraySort: function (arr, sortText) {
            if (!sortText) {
                return arr
            }
            var _sortText = sortText.split(',').reverse(), _arr = arr.slice(0);
            for (var i = 0, len = _sortText.length; i < len; i++) {
                _arr.sort(function (n1, n2) {
                    return n1[_sortText[i]] - n2[_sortText[i]]
                })
            }
            return _arr;
        }
```

### 3-13 数组扁平化

```js
        //ecDo.steamroller([1,2,[4,5,[1,23]]])
        //[1, 2, 4, 5, 1, 23]
        steamroller: function (arr) {
            var newArr = [],_this=this;
            for (var i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    // 如果是数组，调用(递归)steamroller 将其扁平化
                    // 然后再 push 到 newArr 中
                    newArr.push.apply(newArr, _this.steamroller(arr[i]));
                } else {
                    // 不是数组直接 push 到 newArr 中
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }
```

### 3-14 数组对象去重指定 key

```js
//过滤数组对象中重复的key项
//将对象元素转换成字符串以作比较
function obj2key(obj, keys) {
  var n = keys.length,
    key = []
  while (n--) {
    key.push(obj[keys[n]])
  }
  return key.join('|')
}
//去重操作
function uniqeByKeys(array, keys) {
  var arr = []
  var hash = {}
  for (var i = 0, j = array.length; i < j; i++) {
    var k = obj2key(array[i], keys)
    if (!(k in hash)) {
      hash[k] = true
      arr.push(array[i])
    }
  }
  return arr
}

var arr = [{ a: 1, b: 2, c: 3 }, { a: 1, b: 3, c: 5 }, { a: 11, b: 22, c: 11 }]
uniqeByKeys(arr, ['a']) //[{a:1,b:2,c:3},{a:11,b:22,c:11}]
```

### 3-15 数组对象按指定 key 分组

```js
function getGroupbyId(arr, name) {
  var map = {},
    dest = []
  for (var i = 0; i < arr.length; i++) {
    var ai = arr[i]
    if (!map[ai.name]) {
      dest.push({
        name: ai.name,
        data: [ai]
      })
      map[ai.id] = ai
    } else {
      for (var j = 0; j < dest.length; j++) {
        var dj = dest[j]
        if (dj.name == ai.name) {
          dj.data.push(ai)
          break
        }
      }
    }
  }
  return dest
}
```

## 4.基础 DOM 操作

这个部分代码其实参考 jquery 的一些函数写法，唯一区别就是调用不用，参数一样.比如下面的栗子

```js
        //设置对象内容
        jquery：$('#xxx').html('hello world');
        现在：ecDo.html(document.getElementById('xxx'),'hello world')
        //获取对象内容
        jquery：$('#xxx').html();
        现在：ecDo.html(document.getElementById('xxx'))
```

### 4-1 检测对象是否有哪个类名

```js
        //检测对象是否有哪个类名
        hasClass: function (obj, classStr) {
            if (obj.className && this.trim(obj.className, 1) !== "") {
                var arr = obj.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含
                return (arr.indexOf(classStr) == -1) ? false : true;
            }
            else {
                return false;
            }
        }
```

### 4-2 添加类名

```js
function addClass(obj, classStr) {
  if (
    (this.istype(obj, 'array') || this.istype(obj, 'elements')) &&
    obj.length >= 1
  ) {
    for (var i = 0, len = obj.length; i < len; i++) {
      if (!this.hasClass(obj[i], classStr)) {
        obj[i].className += ' ' + classStr
      }
    }
  } else {
    if (!this.hasClass(obj, classStr)) {
      obj.className += ' ' + classStr
    }
  }
}
```

### 4-3 删除类名

```js
function removeClass(obj, classStr) {
  if (
    (this.istype(obj, 'array') || this.istype(obj, 'elements')) &&
    obj.length > 1
  ) {
    for (var i = 0, len = obj.length; i < len; i++) {
      if (this.hasClass(obj[i], classStr)) {
        var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)')
        obj[i].className = obj[i].className.replace(reg, '')
      }
    }
  } else {
    if (this.hasClass(obj, classStr)) {
      var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)')
      obj.className = obj.className.replace(reg, '')
    }
  }
}
```

### 4-4 替换类名("被替换的类名","替换的类名")

```jsx
        replaceClass: function (obj, newName, oldName) {
            this.removeClass(obj, oldName);
            this.addClass(obj, newName);
        }
```

### 4-5 获取兄弟节点

```js
        //ecDo.siblings(obj,'#id')
        siblings: function (obj, opt) {
            var a = []; //定义一个数组，用来存o的兄弟元素
            var p = obj.previousSibling;
            while (p) { //先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 p表示previousSibling
                if (p.nodeType === 1) {
                    a.push(p);
                }
                p = p.previousSibling //最后把上一个节点赋给p
            }
            a.reverse() //把顺序反转一下 这样元素的顺序就是按先后的了
            var n = obj.nextSibling; //再取o的弟弟
            while (n) { //判断有没有下一个弟弟结点 n是nextSibling的意思
                if (n.nodeType === 1) {
                    a.push(n);
                }
                n = n.nextSibling;
            }
            if (opt) {
                var _opt = opt.substr(1);
                var b = [];//定义一个数组，用于储存过滤a的数组
                if (opt[0] === '.') {
                    b = a.filter(function (item) {
                        return item.className === _opt
                    });
                }
                else if (opt[0] === '#') {
                    b = a.filter(function (item) {
                        return item.id === _opt
                    });
                }
                else {
                    b = a.filter(function (item) {
                        return item.tagName.toLowerCase() === opt
                    });
                }
                return b;
            }
            return a;
        }
```

### 4-6 设置样式

```js
        css: function (obj, json) {
            for (var attr in json) {
                obj.style[attr] = json[attr];
            }
        }
```

### 4-7 设置文本内容

```jsx
        html: function (obj) {
            if (arguments.length === 1) {
                return obj.innerHTML;
            } else if (arguments.length === 2) {
                obj.innerHTML = arguments[1];
            }
        }
        text: function (obj) {
            if (arguments.length === 1) {
                return obj.innerHTML;
            } else if (arguments.length === 2) {
                obj.innerHTML = this.filterStr(arguments[1],'html');
            }
        }
```

### 4-8 显示隐藏

```jsx
        show: function (obj) {
            var blockArr=['div','li','ul','ol','dl','table','article','h1','h2','h3','h4','h5','h6','p','hr','header','footer','details','summary','section','aside','']
            if(blockArr.indexOf(obj.tagName.toLocaleLowerCase())===-1){
                obj.style.display ='inline';
            }
            else{
                obj.style.display ='block';
            }
        },
        hide: function (obj) {
            obj.style.display = "none";
        }
```

## 5.其他操作

### 5-1cookie

```js
        //cookie
        //设置cookie
        setCookie: function (name, value, iDay) {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + iDay);
            document.cookie = name + '=' + value + ';expires=' + oDate;
        },
        //获取cookie
        getCookie: function (name) {
            var arr = document.cookie.split('; ');
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('=');
                if (arr2[0] == name) {
                    return arr2[1];
                }
            }
            return '';
        },
        //删除cookie
        removeCookie: function (name) {
            this.setCookie(name, 1, -1);
        },
```

### 5-2 清除对象中值为空的属性

```js
        //ecDo.filterParams({a:"",b:null,c:"010",d:123})
        //Object {c: "010", d: 123}
        filterParams: function (obj) {
            var _newPar = {};
            for (var key in obj) {
                if ((obj[key] === 0 ||obj[key] === false|| obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
                    _newPar[key] = obj[key];
                }
            }
            return _newPar;
        }
```

### 5-3 现金额大写转换函数

```js
        //ecDo.upDigit(168752632)
        //result："人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
        //ecDo.upDigit(1682)
        //result："人民币壹仟陆佰捌拾贰元整"
        //ecDo.upDigit(-1693)
        //result："欠人民币壹仟陆佰玖拾叁元整"
        upDigit: function (n) {
            var fraction = ['角', '分', '厘'];
            var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
            var unit = [
                ['元', '万', '亿'],
                ['', '拾', '佰', '仟']
            ];
            var head = n < 0 ? '欠人民币' : '人民币';
            n = Math.abs(n);
            var s = '';
            for (var i = 0; i < fraction.length; i++) {
                s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
            }
            s = s || '整';
            n = Math.floor(n);
            for (var i = 0; i < unit[0].length && n > 0; i++) {
                var p = '';
                for (var j = 0; j < unit[1].length && n > 0; j++) {
                    p = digit[n % 10] + unit[1][j] + p;
                    n = Math.floor(n / 10);
                }
                s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
                //s = p + unit[0][i] + s;
            }
            return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
        }
```

### 5-4 获取，设置 url 参数

```js
        //设置url参数
        //ecDo.setUrlPrmt({'a':1,'b':2})
        //result：a=1&b=2
        setUrlPrmt: function (obj) {
            var _rs = [];
            for (var p in obj) {
                if (obj[p] != null && obj[p] != '') {
                    _rs.push(p + '=' + obj[p])
                }
            }
            return _rs.join('&');
        },
        //获取url参数
        //ecDo.getUrlPrmt('test.com/write?draftId=122000011938')
        //result：Object{draftId: "122000011938"}
        getUrlPrmt: function (url) {
            url = url ? url : window.location.href;
            var _pa = url.substring(url.indexOf('?') + 1),
                _arrS = _pa.split('&'),
                _rs = {};
            for (var i = 0, _len = _arrS.length; i < _len; i++) {
                var pos = _arrS[i].indexOf('=');
                if (pos == -1) {
                    continue;
                }
                var name = _arrS[i].substring(0, pos),
                    value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
                _rs[name] = value;
            }
            return _rs;
        }
```

### 5-5 随机返回一个范围的数字

```js
        //ecDo.randomNumber(5,10)
        //返回5-10的随机整数，包括5，10
        //ecDo.randomNumber(10)
        //返回0-10的随机整数，包括0，10
        //ecDo.randomNumber()
        //返回0-255的随机整数，包括0，255
        randomNumber: function (n1, n2) {
            if (arguments.length === 2) {
                return Math.round(n1 + Math.random() * (n2 - n1));
            }
            else if (arguments.length === 1) {
                return Math.round(Math.random() * n1)
            }
            else {
                return Math.round(Math.random() * 255)
            }
        }
```

### 5-6 随进产生颜色

```js
        randomColor: function () {
            //randomNumber是下面定义的函数
            //写法1
            //return 'rgb(' + this.randomNumber(255) + ',' + this.randomNumber(255) + ',' + this.randomNumber(255) + ')';
            //写法2
            return '#' + Math.random().toString(16).substring(2).substr(0, 6);
            //写法3
            //var color='#',_index=this.randomNumber(15);
            //for(var i=0;i<6;i++){
            //color+='0123456789abcdef'[_index];
            //}
            //return color;
        }
        //这种写法，偶尔会有问题。大家得注意哦
        //Math.floor(Math.random()*0xffffff).toString(16);
```

### 5-7Date 日期时间部分

```js
        //到某一个时间的倒计时
        //ecDo.getEndTime('2017/7/22 16:0:0')
        //result："剩余时间6天 2小时 28 分钟20 秒"
        getEndTime: function (endTime) {
            var startDate = new Date(); //开始时间，当前时间
            var endDate = new Date(endTime); //结束时间，需传入时间参数
            var t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
            var d = 0,
                h = 0,
                m = 0,
                s = 0;
            if (t >= 0) {
                d = Math.floor(t / 1000 / 3600 / 24);
                h = Math.floor(t / 1000 / 60 / 60 % 24);
                m = Math.floor(t / 1000 / 60 % 60);
                s = Math.floor(t / 1000 % 60);
            }
            return "剩余时间" + d + "天 " + h + "小时 " + m + " 分钟" + s + " 秒";
        }
```

### 5-8 适配 rem

这个适配的方法很多，我就写我自己用的方法。大家也可以去我回答过得一个问题那里看更详细的说明！移动端适配问题

#### 方法一

```js
            getFontSize: function (_client) {
                var doc = document,
                    win = window;
                var docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function () {
                        var clientWidth = docEl.clientWidth;
                        if (!clientWidth) return;
                        //如果屏幕大于750（750是根据我效果图设置的，具体数值参考效果图），就设置clientWidth=750，防止font-size会超过100px
                        if (clientWidth > _client) {
                            clientWidth = _client
                        }
                        //设置根元素font-size大小
                        docEl.style.fontSize = 100 * (clientWidth / _client) + 'px';
                    };
                //屏幕大小改变，或者横竖屏切换时，触发函数
                win.addEventListener(resizeEvt, recalc, false);
                //文档加载完成时，触发函数
                doc.addEventListener('DOMContentLoaded', recalc, false);
            }
            //ecDo.getFontSize(750)
            //使用方式很简单，比如效果图上，有张图片。宽高都是100px;
            //750是设计图的宽度
            //样式写法就是
            img{
                width:1rem;
                height:1rem;
            }
            //这样的设置，比如在屏幕宽度大于等于750px设备上，1rem=100px；图片显示就是宽高都是100px
            //比如在iphone6(屏幕宽度：375)上，375/750*100=50px;就是1rem=50px;图片显示就是宽高都是50px;
```

#### 方法二、

```js
// 1 获取屏幕的宽度
//
// 2 设置设计图的初始大小
//
// 3 设置需要的font-size
// 4 获取初始比例(2/3)
// 5 根据当前屏幕大小设置对应的fontsize
//
// 6 针对屏幕做出限定, 最小320最大设计图
//
// 7 设置html的字体大小

rem(750, 50)

function rem(uiWidth, fonts) {
  var html = document.documentElement
  var screenWidth = html.clientWidth
  var uiWidth = uiWidth
  var fonts = fonts
  var proportion = uiWidth / fonts
  var timer = null

  getRem()

  window.onresize = getRem

  function getRem() {
    clearTimeout(timer)
    timer = setTimeout(function() {
      screenWidth = html.clientWidth
      if (screenWidth <= 320) {
        html.style.fontSize = 320 / proportion + 'px'
      } else if (screenWidth >= uiWidth) {
        html.style.fontSize = uiWidth / proportion + 'px'
      } else {
        html.style.fontSize = screenWidth / proportion + 'px'
      }
    }, 100)
    console.log(getComputedStyle(html).fontSize)
  }
}
```

### 5-9ajax

```js
            /* 封装ajax函数
             * @param {string}obj.type http连接的方式，包括POST和GET两种方式
             * @param {string}obj.url 发送请求的url
             * @param {boolean}obj.async 是否为异步请求，true为异步的，false为同步的
             * @param {object}obj.data 发送的参数，格式为对象类型
             * @param {function}obj.success ajax发送并接收成功调用的回调函数
             * @param {function}obj.error ajax发送失败或者接收失败调用的回调函数
             */
            //  ecDo.ajax({
            //      type:'get',
            //      url:'xxx',
            //      data:{
            //          id:'111'
            //      },
            //      success:function(res){
            //          console.log(res)
            //      }
            //  })
            ajax: function (obj) {
                obj = obj || {};
                obj.type = obj.type.toUpperCase() || 'POST';
                obj.url = obj.url || '';
                obj.async = obj.async || true;
                obj.data = obj.data || null;
                obj.success = obj.success || function () {
                    };
                obj.error = obj.error || function () {
                    };
                var xmlHttp = null;
                if (XMLHttpRequest) {
                    xmlHttp = new XMLHttpRequest();
                } else {
                    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
                }
                var params = [];
                for (var key in obj.data) {
                    params.push(key + '=' + obj.data[key]);
                }
                var postData = params.join('&');
                if (obj.type.toUpperCase() === 'POST') {
                    xmlHttp.open(obj.type, obj.url, obj.async);
                    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                    xmlHttp.send(postData);
                } else if (obj.type.toUpperCase() === 'GET') {
                    xmlHttp.open(obj.type, obj.url + '?' + postData, obj.async);
                    xmlHttp.send(null);
                }
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        obj.success(xmlHttp.responseText);
                    } else {
                        obj.error(xmlHttp.responseText);
                    }
                };
            }
```

### 5-10 图片懒加载

```js
        //图片没加载出来时用一张图片代替
        aftLoadImg: function (obj, url, errorUrl,cb) {
            var oImg = new Image(), _this = this;
            oImg.src = url;
            oImg.onload = function () {
                obj.src = oImg.src;
                if (cb && _this.istype(cb, 'function')) {
                    cb(obj);
                }
            }
            oImg.onerror=function () {
                obj.src=errorUrl;
                if (cb && _this.istype(cb, 'function')) {
                    cb(obj);
                }
            }
        },
        //图片滚动懒加载
        //@className {string} 要遍历图片的类名
        //@num {number} 距离多少的时候开始加载 默认 0
        //比如，一张图片距离文档顶部3000，num参数设置200，那么在页面滚动到2800的时候，图片加载。不传num参数就滚动，num默认是0，页面滚动到3000就加载
        //html代码

        //data-src储存src的数据，到需要加载的时候把data-src的值赋值给src属性，图片就会加载。
        //详细可以查看testLoadImg.html
        //window.onload = function() {
        //    loadImg('load-img',100);
        //    window.onscroll = function() {
        //        ecDo.loadImg('load-img',100);
        //        }
        //}
        loadImg: function (className, num, errorUrl) {
            var _className = className || 'ec-load-img', _num = num || 0, _this = this,_errorUrl=errorUrl||null;
            var oImgLoad = document.getElementsByClassName(_className);
            for (var i = 0, len = oImgLoad.length; i < len; i++) {
                //如果图片已经滚动到指定的高度
                if (document.documentElement.clientHeight + document.documentElement.scrollTop > oImgLoad[i].offsetTop - _num && !oImgLoad[i].isLoad) {
                    //记录图片是否已经加载
                    oImgLoad[i].isLoad = true;
                    //设置过渡，当图片下来的时候有一个图片透明度变化
                    oImgLoad[i].style.cssText = "transition: ''; opacity: 0;"
                    if (oImgLoad[i].dataset) {
                        this.aftLoadImg(oImgLoad[i], oImgLoad[i].dataset.src, _errorUrl, function (o) {
                            //添加定时器，确保图片已经加载完了，再把图片指定的的class，清掉，避免重复编辑
                            setTimeout(function () {
                                if (o.isLoad) {
                                    _this.removeClass(o, _className);
                                    o.style.cssText = "";
                                }
                            }, 1000)
                        });
                    } else {
                        this.aftLoadImg(oImgLoad[i], oImgLoad[i].getAttribute("data-src"), _errorUrl, function (o) {
                            //添加定时器，确保图片已经加载完了，再把图片指定的的class，清掉，避免重复编辑
                            setTimeout(function () {
                                if (o.isLoad) {
                                    _this.removeClass(o, _className);
                                    o.style.cssText = "";
                                }
                            }, 1000)
                        });
                    }
                    (function (i) {
                        setTimeout(function () {
                            oImgLoad[i].style.cssText = "transition:all 1s; opacity: 1;";
                        }, 16)
                    })(i);
                }
            }
        }
```

### 5-11 关键词加标签

```js
        //这两个函数多用于搜索的时候，关键词高亮
        //创建正则字符
        //ecDo.createKeyExp([前端，过来])
        //result:(前端|过来)/g
        createKeyExp: function (strArr) {
            var str = "";
            for (var i = 0; i < strArr.length; i++) {
                if (i != strArr.length - 1) {
                    str = str + strArr[i] + "|";
                } else {
                    str = str + strArr[i];
                }
            }
            return "(" + str + ")";
        },
        //关键字加标签（多个关键词用空格隔开）
        //ecDo.findKey('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯','守侯 开','i')
        //"<i>守侯</i>我oaks接到了来自下次你离<i>开</i>快乐吉祥留在<i>开</i>城侯"
        findKey: function (str, key, el) {
            var arr = null,
                regStr = null,
                content = null,
                Reg = null,
                _el = el || 'span';
            arr = key.split(/\s+/);
            //alert(regStr); //    如：(前端|过来)
            regStr = this.createKeyExp(arr);
            content = str;
            //alert(Reg);//        /如：(前端|过来)/g
            Reg = new RegExp(regStr, "g");
            //过滤html标签 替换标签，往关键字前后加上标签
            content = content.replace(/<\/?[^>]*>/g, '')
            return content.replace(Reg, "<" + _el + ">$1</" + _el + ">");
        }
```

### 5-12 数据类型判断

```js
        //ecDo.istype([],'array')
        //true
        //ecDo.istype([])
        //'[object Array]'
        istype: function (o, type) {
            if (type) {
                var _type = type.toLowerCase();
            }
            switch (_type) {
                case 'string':
                    return Object.prototype.toString.call(o) === '[object String]';
                case 'number':
                    return Object.prototype.toString.call(o) === '[object Number]';
                case 'boolean':
                    return Object.prototype.toString.call(o) === '[object Boolean]';
                case 'undefined':
                    return Object.prototype.toString.call(o) === '[object Undefined]';
                case 'null':
                    return Object.prototype.toString.call(o) === '[object Null]';
                case 'function':
                    return Object.prototype.toString.call(o) === '[object Function]';
                case 'array':
                    return Object.prototype.toString.call(o) === '[object Array]';
                case 'object':
                    return Object.prototype.toString.call(o) === '[object Object]';
                case 'nan':
                    return isNaN(o);
                case 'elements':
                    return Object.prototype.toString.call(o).indexOf('HTML') !== -1
                default:
                    return Object.prototype.toString.call(o)
            }
        }
```

### 5-13 手机类型判断

```js
        browserInfo: function (type) {
            switch (type) {
                case 'android':
                    return navigator.userAgent.toLowerCase().indexOf('android') !== -1
                case 'iphone':
                    return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
                case 'ipad':
                    return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
                case 'weixin':
                    return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
                default:
                    return navigator.userAgent.toLowerCase()
            }
        }
```

### 5-14 函数节流

```js
        //多用于鼠标滚动，移动，窗口大小改变等高频率触发事件
        // var count=0;
        // function fn1(){
        //     count++;
        //     console.log(count)
        // }
        // //100ms内连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔200ms至少执行一次
        // document.onmousemove=ecDo.delayFn(fn1,100,200)
        delayFn: function (fn, delay, mustDelay) {
            var timer = null;
            var t_start;
            return function () {
                var context = this, args = arguments, t_cur = +new Date();
                //先清理上一次的调用触发（上一次调用触发事件不执行）
                clearTimeout(timer);
                //如果不存触发时间，那么当前的时间就是触发时间
                if (!t_start) {
                    t_start = t_cur;
                }
                //如果当前时间-触发时间大于最大的间隔时间（mustDelay），触发一次函数运行函数
                if (t_cur - t_start >= mustDelay) {
                    fn.apply(context, args);
                    t_start = t_cur;
                }
                //否则延迟执行
                else {
                    timer = setTimeout(function () {
                        fn.apply(context, args);
                    }, delay);
                }
            };
        }
```

### 5-15 获取地址栏参数

```js
var tools = {
  //获取参数列表
  getParamObj: function() {
    //获取参数列表
    var search = location.search
    //对参数进行解码  ?name=hucc&age=18&desc=帅的一匹
    search = decodeURI(search)
    //把?切掉  name=hucc&age=18&desc=帅的一匹
    search = search.slice(1)
    //  //把字符串name=hucc&age=18&desc=切割存放一个数组  ["name=hucc", "age=18", "desc=帅的一匹"]
    var arr = search.split('&')
    //  //遍历数组，把值存到对象中
    var obj = {}
    arr.forEach(function(e, i) {
      var key = e.split('=')[0]
      var value = e.split('=')[1]
      obj[key] = value
    })
    return obj
  },
  ///获取指定参数
  getParam: function(key) {
    return this.getParamObj()[key]
  },
  //AJAX请求
  ajax: function ajax(obj) {
    $.ajax({
      url: obj.url,
      type: 'get',
      async: obj.async || false,
      adderss: obj.address,
      data: obj.data,
      success: obj.success
    })
  }
}
```
