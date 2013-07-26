KISSY.add(function(S){

  return function(watch){

    watch.add('class', function(){

      var $control = this.$control;
      var model = $control('model');
      var key = $control('key');
      var classname = $control('argv')[0];

      var expr = model.evaluation(key);

      model.change(expr.related, function(e){

        var el = $control('el');
        var fn = model.evaluation(key).val ? 'addClass': 'removeClass';
        el[fn](classname);

      });

    });

  }

});
