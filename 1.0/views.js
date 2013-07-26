KISSY.add(function(S, Event, XTemplate, Watch, Do){

  "use strict";

  function View(name, model){

    this.model = model;
    this.name = name;

  }

  S.augment(View, S.EventTarget, {

    setEl: function(el){

      this.el = el;
      this.template = new XTemplate(el.all('script').html());

      return this;

    },

    render: function(){

      var json = this.model.toJSON();
      json['__name__'] = this.name;

      var esc = S.escapeHTML;

      S.escapeHTML = function(s){
        return s;
      };

      this.el.html(this.template.render(json));

      this.fire('inited');

      return this;
    },

    watch: function(params, fn){

      var who = params[0];
      var key = params[1];
      var watcher = Watch.get(who);
      var id = params.id || 'bidi-' + this.name + '-' + S.guid();
      var selector = '#' + id;
      var argv = params.slice(2);
      var html = ' id=' + id + ' ';

      if (watcher) {

        var w = new watcher({
          selector: selector,
          id: id,
          key: key, 
          model: this.model,
          base: this.el,
          fn: fn,
          argv: argv
        });

        this.on('inited', function(){
          // dom ready
          w.$control('el', this.el.all(selector));
          w.fire('ready');
        }, this)

        html = w.$html || html;

      } else {

        S.log('watcher ' + who + ' is not defined!');

      }

      return {id: id, html: html};
    }

  });

  return View;

}, {
  requires: [
    'event',
    'xtemplate',
    './watch/index'
  ]
});
