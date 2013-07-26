/**
 * @fileoverview 请修改组件描述
 * @author hanwen.sah<hanwen.sah@taobao.com>
 * @module bidi
 **/
KISSY.add(function (S, Node, Base, XTemplate, Model, Form, View, Watcher){

  "use strict";

  var EMPTY = '';
  var $ = Node.all;
  var Views = {};

  /**
   * 处理双向绑定分发的函数, watch自定义命令，注入到xtemplate执行过程中
   */
  function watch(scopes, option){

    var id;
    var len = scopes.length - 1;
    var name = scopes[len]['__name__'];
    var ret;

    S.each(option.params, function(param, i){

      var params = S.map(param.split(':'), S.trim);

      if (!option.fn) {

        if (id) {

          params.id = id;
          Views[name].watch(params);

        } else {

          var o = Views[name].watch(params);
          id = o.id;
          ret = o.html;

        }

      } else {

        if (!id) {

          var o = Views[name].watch(params, option.fn);
          id = o.id;
          var model = Views[name].model;

          //scopes[len][params[0]] = model.get(params[0]);
          //重新计算，这时候model的value会有改变
          scopes[len][params[1]] = model.get(params[1]);

          ret = o.html;
          option.params[0] = scopes[0][params[1]];
          ret += option.commands.each(scopes, option);
          ret += '</span>';

        } else {

          params.id = id;
          Views[name].watch(params);

        }

      }

    });

    return ret;
  }

  var commands = {};

  function addCommand(name){

    if (name in commands) return;

    var fn = function(scopes, option){
      option.params[0] = name + ':' + option.params[0];
      return watch(scopes, option);
    }

    XTemplate.addCommand(name, fn);
    commands[name] = true;

  }

  XTemplate.addCommand('watch', watch);

  var Bidi = {

    /**
     * 激活命令，比如Bidi.active('text'), 那么可以在模板中写 
     * {{text "key"}} == {{watch "text: key"}}
     * @param {string|array} name * * 需要激活的命令，注册到XTemplate的自定义命
     * 令中
     * @static
     * @method
     */
    active: function(name){

      if (S.isArray(name)){

        S.each(name, addCommand);

      } else {

        addCommand(name);

      }

    },

    xbind: function(name, obj){
      Views[name] = new View(name, new Model(obj));
    },

    xform: function(name, obj){
      Views[name] = new View(name, new Form(obj));
      return Views[name];
    },

    init: function(){

      $(".bidi-viewer").each(function(el){
        var name = el.attr('data-view');
        Views[name].setEl(el).render();
      });

    },

    add: function(name, obj){
      Watcher.add(name, obj);
    }

  };

  return Bidi;

}, {
  requires:[
    'node', 
    'base',
    'xtemplate',
    './models',
    './form',
    './views',
    './watch/index'
  ]
});
