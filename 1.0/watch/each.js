KISSY.add(function(S, XTemplate){

  "use strict";

  function add(watch){

    watch.add('linkage', {

      init: function(){


        var $control = this.$control;

        var model = $control('model');
        var key = $control('key');
        var linkage = $control('argv')[0];

        model.change(linkage, function(){

          var fn = $control('fn');
          var el = $control('el');

          var html = new XTemplate(fn);
          var option = {params: [model.get(key)], fn: fn};
          var scopesNew = $control('scopes').slice();
          scopesNew.unshift(model.get(key));
          html = html.runtime.option.commands.each(scopesNew, option);
          el.html(html);

          var paths = key.split('.');

          model.set(paths[0] + '.defaultValue', null);
          model.fire('render:linkage', { key: key, el: el })

        });

      },

      beforeReady: function(){

        var $control = this.$control;
        var model = $control('model');
        var key = $control('key');
        var linkage = $control('argv')[0];

        model.setLinkage(key, linkage);
      }

    });

  }

  return add;

}, {
  requires: ['xtemplate']
});
