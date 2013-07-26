KISSY.add(function(S){

  "use strict";

  return function(watch){

    watch.add('select', function(){

      var $control = this.$control;
      var model = $control('model');
      var key = $control('key');

      var val = model.val(key);
      var el = $control('el');

      if (val) { el.val(val); }

      el.on('change', function(){
        model.val(key, el.val());
      });

    });

  }

}, {
});
