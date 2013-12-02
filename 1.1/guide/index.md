## 综述

[![Build Status](https://travis-ci.org/shepherdwind/bidi.png?branch=master)](https://travis-ci.org/shepherdwind/bidi)
MVVM for KISSY

* 版本：1.1 for Kissy 1.4.0
* demo：[http://gallery.kissyui.com/bidi/1.1/demo/index.html](http://gallery.kissyui.com/bidi/1.1/demo/index.html)
* todo app：[http://gallery.kissyui.com/bidi/1.1/demo/todo/index.html](http://gallery.kissyui.com/bidi/1.1/demo/todo/index.html)
* 教程：[http://gallery.kissyui.com/bidi/1.1/guide/index.html](http://gallery.kissyui.com/bidi/1.1/guide/index.html)
* spec：[http://gallery.kissyui.com/bidi/1.1/spec/index.html](http://gallery.kissyui.com/bidi/1.1/spec/index.html)

## 升级提示

从1.0到1.1版本，改动主要是兼容kissy 1.4.0，因为api不一致，无法向后兼容，1.1不支
持kissy 1.3.x.

主要的改动是，

      <strong {{watch "fullname"}}></strong>

这种形式在1.0支持，在1.1，必须改成

      <strong {{{watch "fullname"}}}></strong>

三个括号的形式，不转义。

此外，1.0支持`Bidi.active`接口现在无效了，没法使用，容易和其他变量冲突。

### simple use

<iframe width="100%" height="300" src="http://jsfiddle.net/AAEZP/1/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<iframe width="100%" height="500" src="http://jsfiddle.net/AAEZP/3/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
