KISSY.add(function(S){

  return function(watch){

    watch.add('attr', function(){

      var $control = this.$control;
      var model = $control('model');
      var key = $control('key');
      var attrname = $control('argv')[0];

      var expr = model.evaluation(key);

      model.change(expr.related, function(){

        var el = $control('el');
        el.attr(attrname, model.evaluation(key).val);

      });

    });

  }

});
