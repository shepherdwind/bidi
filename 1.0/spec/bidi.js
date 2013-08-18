KISSY.add(function(S, Bidi, simple, form, lists, webmail){

  window.Bidi = {};
  window.Bidi.simple = simple;
  window.Bidi.form = form;
  window.Bidi.lists = lists;
  window.Bidi.webmail = webmail;

  Bidi.init();

  S.use('gallery/bidi/1.0/spec/runner');

}, {
  requires: [
    '../index',
    '../demo/simple',
    '../demo/form',
    '../demo/lists',
    '../demo/webmail'
  ]
})
