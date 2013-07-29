KISSY.add(function(S){

  "use strict";

  return function(watch){

    watch.add('attr', function(){

      var $control = this.$control;
      var model = $control('model');
      var key = $control('key');
      var attrname = $control('argv')[0];

      var expr = model.evaluation($control);

      model.change(expr.related, function(){

        var el = $control('el');
        el.attr(attrname, model.evaluation($control).val);

      });

    });

  }

});
