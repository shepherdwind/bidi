KISSY.add(function(S, XTemplate){

  "use strict";

  var Scope = S.require('xtemplate/runtime/scope');

  function add(watch){

    watch.add('list', {

      init: function(){

        var $control = this.$control;
        var self = this;

        var model = $control('model');
        var key = $control('key');

        model.on('remove:' + key, function(e){

          var el = $control('el').children();
          var index = e.index;
          el.item(index).remove();

        });

        model.on('add:' + key, function(e){

          var fn = $control('fn');
          var option = { params: [e.obj], fn: fn };

          var opScope = new Scope();
          opScope.data = e.obj;
          opScope.setParent($control('scopes'));

          var html = option.fn(opScope, option).replace(/^>/, '');
          $control('el').append(html);

          $control('view').fire('inited');

        });

        this._bindChange();
      },

      _bindChange: function(){

        var $control = this.$control;
        var model = $control('model');
        var key = $control('key');

        model.change(key, function(e){

          if (e.$item) return;

          var fn = $control('fn');
          var option = { params: [e.val], fn: fn };

          var opScope = new Scope();
          opScope.data = e.val;
          opScope.setParent($control('scopes'));

          var html = new XTemplate(fn);
          html = html.config.commands.each(opScope, option);

          $control('el').html(html);
          $control('view').fire('inited');

        });

      },

      beforeReady: function(){
        var $control = this.$control();
        var model = $control.model;
        model.setLists($control.key);
      }

    });

  }

  return add;

}, {
  requires: ['xtemplate']
});
