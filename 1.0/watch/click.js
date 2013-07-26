KISSY.add(function(S){

  return function(watch){

    watch.add('click', function(){

      var $control = this.$control;
      var model = $control('model');
      var key = $control('key');
      var selector = $control('selector');

      $control('base').delegate('click', selector, function(){
        model.get(key);
      });

    });

  }

} );
