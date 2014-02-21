KISSY.add(function(S, XTemplate){

  "use strict";

  var Scope = S.require('xtemplate/runtime/scope');

  function add(watch){

    watch.add('with', {

      init: function(){

        var $control = this.$control;
        var model = $control('model');
        var key = $control('key');

        model.change(key, function(e){

          if (e.$item || e.path.length) return;

          var fn = $control('fn');

          var opScope = new Scope();
          opScope.data = e.val;
          opScope.setParent($control('scopes'));

          var html = fn(opScope);

          $control('el').html(html);
          $control('view').fire('inited');

        });

      },

      beforeReady: function(){
        //var $control = this.$control();
        //var model = $control.model;
        //model.setLists($control.key);
      }

    });

  }

  return add;

}, {
  requires: ['xtemplate']
});
