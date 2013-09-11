KISSY.add(function(S, XTemplate){

  "use strict";

  function getRadioValue(el){

    var ret;

    el.all('input').each(function(element){
      if (element.attr('checked')) {
        ret = element.val();
      }
    });

    return ret;

  }

  function add(watch){

    watch.add('linkage', {

      init: function(){


        var $control = this.$control;

        var model = $control('model');
        var key = $control('key');
        var linkage = $control('argv')[0];
        var el = $control('el');
        var paths = key.split('.');

        model.change(linkage, function(){

          var fn = $control('fn');

          var html = new XTemplate(fn);
          var option = {params: [model.get(key)], fn: fn};
          var scopesNew = $control('scopes').slice();
          scopesNew.unshift(model.get(key));
          html = html.runtime.option.commands.each(scopesNew, option);
          el.html(html);

          model.set(paths[0] + '.defaultValue', getRadioValue(el));
          $control('view').fire('inited');
          model.fire('render:linkage', { key: key, el: el })

        });

        var val = getRadioValue(el);
        if (val) {
          model.set(paths[0] + '.defaultValue', el.all('input').val());
        }
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
