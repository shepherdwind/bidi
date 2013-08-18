(function( window, S) {

  'use strict';

  if (S.Config.debug) {
    var srcPath = "../../../../";
    S.config({
      packages:[
        {
          name: "gallery",
          path: srcPath,
          charset: "utf-8",
          ignorePackageNameInUri: true
        }
      ]
    });
  }

  S.use('gallery/bidi/1.0/index', function (S, Bidi) {

    var $ = S.all;
    Bidi.active(['action', 'class', 'attr', 'text', 'click', 'value'])

    Bidi.xbind('todoapp', {
      todos: [
        { text: 'hello' },
        { text: 'hehe', isCompleted: true }
      ]
    }, {

      addTodo: function(e){

        if (e.keyCode !== 13) return;
        var target = e.target;
        var val = target.value;

        this.add({ text: val }, 'todos');
        target.value = '';
        target.blur();
      },

      toggelAll: function(e){
        var target = e.target;
        S.each(this.get('todos'), function(todo){
          this.set('isCompleted', target.checked, todo);
        }, this)
      },

      remove: function(seat){
        this.remove(seat);
      },

      unfinished: function(){
        return S.filter(this.get('todos'), function(todos){
          return !todos.isCompleted;
        }).length;
      },

      completed: function(){
        return S.filter(this.get('todos'), function(todos){
          return todos.isCompleted;
        }).length;
      },

      clear_completed: function(){

        var completed = S.filter(this.get('todos'), function(todo){
          return todo.isCompleted;
        })

        S.each(completed, function(todo){
          this.remove(todo)
        }, this)

      },

      edit: function(e, todo){
        if (e.type === 'dblclick') {
          this.set('isEdit', true, todo);
          var target = $(e.currentTarget);
          target.next('.edit')[0].focus();
        } else if (e.keyCode === 13){
          this.set('isEdit', false, todo);
        } else if (e.type === 'blur') {
          this.set('isEdit', false, todo);
        }
      }

    });

    Bidi.init();

  });

})( window, KISSY );
