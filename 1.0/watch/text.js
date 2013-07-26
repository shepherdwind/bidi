KISSY.add(function(S){

  function add(watch){
    
    watch.add('text', function(){

      var $control = this.$control;
      var model = $control('model');
      var key = $control('key');

      var val = model.get(key);
      var el = $control('el');

      el.html(val);
      var related = model.getRelated(key);

      model.change(related, function(){

        var val = model.get(key);
        el.html(val);

      }, this)

    });

  }

  return add;

}, {
});
