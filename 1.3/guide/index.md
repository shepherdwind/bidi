## 综述

[![Build Status](https://travis-ci.org/shepherdwind/bidi.png?branch=master)](https://travis-ci.org/shepherdwind/bidi)
MVVM for KISSY

* 版本 
  - 1.0 for kissy 1.3.x
  - 1.3 for kissy 1.4.0
  - <del>1.2 for kissy 1.4.1</del>, 1.2的不是真正支持1.4.1，当时只是在1.2的bidi里面引用1.4.0的XTemplate
  - 1.3 for kissy 1.4.1
* spec：[http://gallery.kissyui.com/bidi/1.3/spec/index.html](http://gallery.kissyui.com/bidi/1.3/spec/index.html)

## 基本使用

html

```
  <div class="bidi-viewer" data-view="user">
    <script type="text/xtemplate">
      <p>hello, I am <strong {{{watch "text: fullName"}}}></strong></p>
      <p>hello, I am <strong {{{watch "text: firstName"}}}></strong></p>
      First Name: <input {{watch "value: firstName"}}/><br>
      Last Name: <input {{watch "value: lastName"}}/>
      <button {{watch "click: capitalizeLastName"}}>Go caps</button>
    </script>
  </div>
```

JS
```
KISSY.use('gallery/bidi/1.3/index', function (S, Bidi) {
  
  var user = Bidi.xbind('user', {
    firstName: 'Song',
    lastName: 'Eward',
    fullName: function(){
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }, {
    capitalizeLastName: function(){
      var lastName = this.get('lastName').toUpperCase();
      this.set('lastName', lastName);
    }
  });
  
  Bidi.init();
})
```

Bidi主要包括两个部分，`view`和`model`，`view`是视图，主要是一个XTemplate的模板，
在html结构中，`div.bidi-viewer`的html结构描述一个视图，每个视图里面的一个script
标签是模板类容，当然这个html也可以是一个js模块，通过Bidi.xbind(viewName, model, func, template)
第四个参数传递一个模板进去。

model是js对象，model分为数据和函数两部分。两者也可以混在一起，不过最好分开。在
model内部，使用this.get和this.set对变量进行修改。model所有函数，通过this.get获取
的属性的改变，会引起函数对应的DOM修改，比如上面user.fullName，当firstName或者
lastName修改的时候，fullName会跟着改变。

model和view之间的联系，通过{{watch}}这样一个XTemplate的扩展函数实现的。具体语法
参考[watch语法](./watch.html)。这里有一个约定，每个DOM节点，对应一个属性，并且
DOM节点不允许使用ID，ID是bidi自动生成的，用于识别变量和DOM节点之间联系的。如果
想要获得dom，可以使用classname或者使用view.get('property')，property是watch函数
的第一个参数。比如上面的例子中，user.get('fullName')，可以返回fullName第一次绑定
所对应的DOM节点。

## 调试

MVVM会在dom节点和JS变量之间形成双向绑定，这中间可能会比较绕，不清楚是什么导致了
变量改变。可以使用Object.defineProperty定义一个setter来观察变量被谁修改，比如
上面例子，监视lastName。

```
KISSY.use('gallery/bidi/1.3/index', function (S, Bidi) {

  // 监控函数，返回一个函数
  function watch(obj, property){

    // 通过闭包，存贮value
    var nowVal = obj[property];

    return function(){

      Object.defineProperty(obj, property, {

        get: function(){
          return nowVal;
        },

        set: function(v){
          // 设置一个端点，查看变量被修改的场景
          debugger
          nowVal = v;
          return v;
        }

      });

    }

  }

  var data = {
    firstName: 'Song',
    lastName: 'Eward',
    fullName: function(){
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  };

  watch(data, 'lastName')();

  var user = Bidi.xbind('user', data , {
    capitalizeLastName: function(){
      var lastName = this.get('lastName').toUpperCase();
      this.set('lastName', lastName);
    }
  });
  
  Bidi.init();

}
```

上面的方案，不仅仅可以用来监控bidi的变量改变，在其他复杂应用，同样有效。

## 语法

### watch

[watch语法](./watch.html)

## 例子
  
### 表单联动实现

场景，点击radio，根据radio的值进行显示某些值[example1](./example1.html)，
   [jsfiddle](http://jsfiddle.net/AAEZP/6/embedded/result,js,html,css/)

### 其他

* demo：[http://gallery.kissyui.com/bidi/1.3/demo/index.html](http://gallery.kissyui.com/bidi/1.3/demo/index.html)
* todo app：[http://gallery.kissyui.com/bidi/1.3/demo/todo/index.html](http://gallery.kissyui.com/bidi/1.3/demo/todo/index.html)

## 升级提示

从1.0到1.3版本，改动主要是兼容kissy 1.4.0，因为api不一致，无法向后兼容，1.3不支持kissy 1.3.x.

主要的改动是，text绑定

      <strong {{watch "text: fullname"}}></strong>

这种形式在1.0支持，在1.3，必须改成，三个括号形式，这个后面可以改进一下

      <strong {{{watch "text: fullname"}}}></strong>

三个括号的形式，不转义。

此外，1.0支持`Bidi.active`接口现在无效了，没法使用，容易和其他变量冲突。
