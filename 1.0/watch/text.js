KISSY.add(function(S){

  "use strict";

  function add(watch){
    
    watch.add('text', {

      init: function(){

        var $control = this.$control;
        var model = $control('model');
        var key = $control('key');

        var val = model.get(key);
        var el = $control('el');
        var related = model.getRelated(key);

        model.change(related, function(){

          var val = model.get(key);
          el.html(val);

        }, this)

      },

      beforeReady: function(){

        var $control = this.$control;
        var key = $control('key');
        var model = $control('model');

        this.$html = ' id=' + $control('id') + '>' + model.get(key) + '<!----';

      }

    });

  }

  return add;

}, {
});
