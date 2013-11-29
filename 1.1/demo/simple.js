KISSY.add(function(S, Bidi){
  Bidi.active(['text', 'click']);
  var view = Bidi.xbind('user', {
    a: "1",
    text: 'haha',
    firstName: 'Song',
    lastName: 'Eward',
    fullName: function(){
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }, {
    capitalizeLastName: function(){
      var lastName = this.get('lastName').toUpperCase();
      this.set('lastName', lastName);
    }
  });

  return view;
}, {
  requires: ['../index']
})
