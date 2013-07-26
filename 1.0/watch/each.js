KISSY.add(function(S, XTemplate){

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
          html = html.runtime.option.commands.each([model.get(key)], option);
          el.html(html);

          model.fire('change:' + key);

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
