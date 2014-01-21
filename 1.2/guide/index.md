## 综述

[![Build Status](https://travis-ci.org/shepherdwind/bidi.png?branch=master)](https://travis-ci.org/shepherdwind/bidi)
MVVM for KISSY

* 版本 
  - 1.0 for kissy 1.3.x
  - 1.1 for kissy 1.4.0
  - 1.2 for kissy 1.4.1
* demo：[http://gallery.kissyui.com/bidi/1.1/demo/index.html](http://gallery.kissyui.com/bidi/1.1/demo/index.html)
* todo app：[http://gallery.kissyui.com/bidi/1.1/demo/todo/index.html](http://gallery.kissyui.com/bidi/1.1/demo/todo/index.html)
* 教程：[http://gallery.kissyui.com/bidi/1.1/guide/index.html](http://gallery.kissyui.com/bidi/1.1/guide/index.html)
* spec：[http://gallery.kissyui.com/bidi/1.1/spec/index.html](http://gallery.kissyui.com/bidi/1.1/spec/index.html)

## 升级提示

2013-12-26 增加1.2版本，用于kissy 1.4.1，因为1.4.1改动过大，bidi没法再兼容下去

从1.0到1.1版本，改动主要是兼容kissy 1.4.0，因为api不一致，无法向后兼容，1.1不支
持kissy 1.3.x.

主要的改动是，

      <strong {{watch "fullname"}}></strong>

这种形式在1.0支持，在1.1，必须改成

      <strong {{{watch "fullname"}}}></strong>

三个括号的形式，不转义。

此外，1.0支持`Bidi.active`接口现在无效了，没法使用，容易和其他变量冲突。

### simple use

### 表单联动实现

1. 场景，点击radio，根据radio的值进行

```html
<div {{watch "radio: reasons.defaultValue"}}>
  {{@each reasons.values}}
    <label class="radio-inline">
      <input type="radio" name="hello" value="{{value}}"/>{{text}} <br>
    </label>
  {{/each}}
</div>
<p {{watch "class:reasons.$item.judge:hide"}}>I have reasons.$item.judge</p>
```

```js
  Bidi.xbind('form', {

    reasons: {
      defaultValue: null,
      name: "reasons",
      values: [
        { value: 11, text: '尺寸、尺码不符', judge: true, title: "desc" },
        { value: 12, text: '拼接、走线不齐' },
        { value: 21, text: '材质不符', judge: true },
        { value: 22, text: '严重缩水、褪色、起球、掉毛' },
        { value: 31, text: '收到商品时有破损' },
        { value: 32, text: '拼接、走线不齐', judge: true },
        { value: 33, text: '开线、走丝', judge: true },
        { value: 44, text: '有污渍' },
        { value: 45, text: '配件破损或不符' }
      ]
    }

  });

  Bidi.init();
```

example1:

<div class="container bidi-viewer" data-view="form-1">
  <script type="text/xtemplte">
    <div {{watch "radio: reasons.defaultValue"}}>
      {{@each reasons.values}}
        <label class="radio-inline">
          <input type="radio" name="hello" value="{{value}}"/>{{text}}
        </label>
      {{/each}}
    </div>
    <p {{watch "class:reasons.$item.judge:hide"}}>I have reasons.$item.judge</p>
  </script>
</div>

<script src="http://g.tbcdn.cn/kissy/k/1.4.1/seed.js" charset="utf-8"></script>
<script type="text/javascript">
  var S = KISSY;
  S.Config.debug = true;
  if (S.Config.debug) {
    var srcPath = "../../../";
    S.config({
      packages:[
        {
          name: "gallery",
          path: srcPath,
          charset: "utf-8",
          ignorePackageNameInUri: true
        }
      ]
    });
  }

  S.use('gallery/bidi/1.2/index', function(S, Bidi){

    Bidi.xbind('form-1', {
      reasons: {
        defaultValue: null,
        name: "reasons",
        values: [
          { value: 11, text: '尺寸、尺码不符', judge: true, title: "desc" },
          { value: 12, text: '拼接、走线不齐' },
          { value: 21, text: '材质不符', judge: true },
          { value: 22, text: '严重缩水、褪色、起球、掉毛' },
          { value: 31, text: '收到商品时有破损' },
          { value: 32, text: '拼接、走线不齐', judge: true },
          { value: 33, text: '开线、走丝', judge: true },
          { value: 44, text: '有污渍' },
          { value: 45, text: '配件破损或不符' }
        ]
      }
    });

    Bidi.init();

  });
</script>
