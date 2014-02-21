## 综述

[![Build Status](https://travis-ci.org/shepherdwind/bidi.png?branch=master)](https://travis-ci.org/shepherdwind/bidi)
MVVM for KISSY

* 版本 
  - 1.0 for kissy 1.3.x
  - 1.3 for kissy 1.4.0
  - <del>1.2 for kissy 1.4.1</del>, 1.2的不是真正支持1.4.1，当时只是在1.2的bidi里面引用1.4.0的XTemplate
  - 1.3 for kissy 1.4.1
* demo：[http://gallery.kissyui.com/bidi/1.3/demo/index.html](http://gallery.kissyui.com/bidi/1.3/demo/index.html)
* todo app：[http://gallery.kissyui.com/bidi/1.3/demo/todo/index.html](http://gallery.kissyui.com/bidi/1.3/demo/todo/index.html)
* spec：[http://gallery.kissyui.com/bidi/1.3/spec/index.html](http://gallery.kissyui.com/bidi/1.3/spec/index.html)

## 升级提示

从1.0到1.3版本，改动主要是兼容kissy 1.4.0，因为api不一致，无法向后兼容，1.3不支持kissy 1.3.x.

主要的改动是，text绑定

      <strong {{watch "text: fullname"}}></strong>

这种形式在1.0支持，在1.3，必须改成，三个括号形式，这个后面可以改进一下

      <strong {{{watch "text: fullname"}}}></strong>

三个括号的形式，不转义。

此外，1.0支持`Bidi.active`接口现在无效了，没法使用，容易和其他变量冲突。

### [watch语法](./watch.html)

### simple use

### 表单联动实现

1. 场景，点击radio，根据radio的值进行显示某些值[example1](./example1.html)，
   [jsfiddle](http://jsfiddle.net/AAEZP/6/embedded/result,js,html,css/)
