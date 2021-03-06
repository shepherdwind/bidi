/**
 * @fileoverview 请修改组件描述
 * @author hanwen.sah<hanwen.sah@taobao.com>
 * @module bidi
 **/
KISSY.add(function (S, Node, Base, XTemplate, Model, View, Watcher, macro){

  //firefox下，Object.prototype.watch存在，导致xtempalte运行挂了
  delete Object.prototype.watch;

  var EMPTY = '';
  var $ = Node.all;
  var Views = {};
  //记录list下面元素所对应的parent
  var META = '__parent__';
  //记录view视图的名字
  var NAME = '__name__';

  /**
   * 处理双向绑定分发的函数, watch自定义命令，注入到xtemplate执行过程中
   */
  function watch(scopes, option){

    var id;
    var len = scopes.length - 1;
    var name = scopes[len][NAME];
    var ret;
    var meta = scopes[0][META];

    S.log('bidi-' + name + ' add watch: ' + option.params.join(','));

    S.each(option.params, function(param, i){

      var params = S.map(param.split(':'), S.trim);
      if (meta) params.meta = meta;

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

          var o = Views[name].watch(params, option.fn, scopes);
          id = o.id;
          var fn = params[0];

          if (fn in Block) {
            ret = Block[fn](scopes, option, params, name, o.html);
          } else {
            S.log('watch block command no support ' + fn);
          }

        } else {

          params.id = id;
          Views[name].watch(params);

        }

      }

    });

    return ret;
  }

  // 块级语法支持，需要一些特殊的处理
  var Block = {

    linkage: function(scopes, option, params, name, html){

      var model = Views[name].model;

      S.log('linkage start run')
      //重新计算，这时候model的value会有改变
      scopes[0]['$$linkage'] = model.get(params[1]);

      //调用XTemplate的each命令
      option.params[0] = scopes[0]['$$linkage'];
      var buf = option.commands.each(scopes, option);

      delete scopes[0]['$$linkage'];

      S.log('linkage start run success')
      return ' >>><<<' + html + '>' + buf;

    },

    list: function(scopes, option, params, name, html){

      var model = Views[name].model;
      var len = scopes.length - 1;

      option.params[0] = scopes[0][params[1]];

      var param0 = option.params[0] || [];
      var opScopes = [0, 0].concat(scopes);
      var xcount = param0.length;

      var buf = '';

      for (var xindex = 0; xindex < xcount; xindex++) {
        // two more variable scope for array looping
        opScopes[0] = param0[xindex];

        if (!opScopes[0][META]) {
          opScopes[0][META] = { id: S.guid('$id'), name: params[1]};
        }

        opScopes[1] = {
          xcount: xcount,
          xindex: xindex
        };
        buf += option.fn(opScopes).replace(/^>/, '');
      }

      return ' >>><<<' + html + '>' + buf;

    },

    'with': function(scopes, option, params, name, html){

      var model = Views[name].model;
      var len = scopes.length - 1;

      option.params[0] = scopes[0][params[1]];

      var param0 = option.params[0];
      var opScopes = [param0].concat(scopes);

      var buf = option.fn(opScopes).replace(/^>/, '');

      return ' >>><<<' + html + '>' + buf;

    }

  };

  // 缓存已经注册到XTemplate中的命令，避免重复执行
  var commands = { macro: macro };
  // for Bidi.active function
  function addCommand(name){

    if (name in commands) return;

    var fn = function(scopes, option){
      S.each(option.params, function(param, i) {
        option.params[i] = name + ':' + param;
      });
      return watch(scopes, option);
    }

    commands[name] = fn;

  }

  var Bidi = {

    /**
     * 激活命令，比如Bidi.active('text'), 那么可以在模板中写 
     * {{text "key"}} == {{watch "text: key"}}
     * @param {string|array} name 需要激活的命令，注册到XTemplate的自定义命令中
     * @static
     */
    active: function(name){

      if (S.isArray(name)){

        S.each(name, addCommand);

      } else {

        addCommand(name);

      }

    },

    xbind: function(name, obj, augment){

      if (!S.isString(name)) {
        throw new Error('Bidi init fail, name must be string');
      }

      Views[name] = new View(name, new Model(obj, augment));
      S.log('init bidi, add view ' + name)
      return Views[name];

    },

    init: function(grep){

      $(".bidi-viewer").each(function(el){

        var name = el.attr('data-view');

        //grep过滤
        if (grep && name.indexOf(grep) < 0) return;

        var view = Views[name].setEl(el);

        //添加命令
        view.template.addCommand('watch', watch);
        view.template.addCommand('macro', macro);
        S.each(commands, function(fn, cmd){
          view.template.addCommand(cmd, fn);
        });

        view.render();
      });

    },

    // add custom watcher
    add: function(name, obj){
      Watcher.add(name, obj);
    },

    // add pipe function
    pipe: function(name, fn){
      Watcher.pipe[name] = fn;
    },

    registerHelper: this.pipe

  };

  Bidi.active(['print']);
  return Bidi;

}, {
  requires:[
    'node', 
    'base',
    'xtemplate',
    './models',
    './views',
    './watch/index',
    './macros'
  ]
});
