KISSY.add(function(S){

  "use strict";

  function add(watch){

    watch.add('value', {

      init: function(){

        var $control = this.$control();
        S.mix(this, $control);
        this._render();

      },

      beforeReady: function(){
        var $control = this.$control;
        var key = $control('key');
        var model = $control('model');
        var val = model.get(key);

        this.$html = ' value= ' + val + ' id=' + $control('id') + ' ';
      },

      _render: function(){

        var el = this.el;
        var type = el.attr('type') || 'input';
        var model = this.model;
        var key = this.key;

        if (type == 'radio') {
          this._bindRadio();
        } else {
          //el.val(model.get(key));
          this._bindEvent();
        }

      },

      _bindRadio: function(){

        var el = this.el;
        var model = this.model;
        var base = this.base;
        var name = el.attr('name');
        var key = this.key;

        base.delegate('click', 'input', function(e){

          var target = e.currentTarget;

          if (target.type == 'radio' && target.name == name) {
            var val = el.attr('checked');
            model.set(key, val);
          }

        });

        model.change(key, function(){
          el.attr('checked', model.get(key));
        });

      },

      _bindEvent: function(){

        var el = this.el;
        var model = this.model;
        var key = this.key;

        el.on('keyup', function(){

          var val = el.val();
          model.set(key, val);

        });

        model.change(key, function(){
          el.val(model.get(key));
        });

      }

    });

  }

  return add;

}, {
});
