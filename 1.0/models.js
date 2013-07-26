KISSY.add(function(S, evaluation){

  function Model(obj){

    this.attributes = {};

    S.each(obj, function(val, key){
      this.attributes[key] = val.slice ? val.slice(): val;
    }, this);

    return this;
  }

  S.augment(Model, S.EventTarget, {

    /**
     * @private
     */
    _isFunc: function(key){
      var val = this.attributes[key];
      return S.isFunction(val);
    },

    get: function(key){ 

      var val = this.attributes[key]; 

      if (typeof val == 'function') {
        val = val.call(this);
      }

      if (this.__recode) {
        this.__getter.push(key);
      }

      return val;
    },

    getRelated: function(key){

      if (this._isFunc(key)) {

        this.__recode = true;
        this.__getter = [];
        this.get(key);
        this.__recode = false;

        return this.__getter.slice();

      } else {

        return [key];

      }

    },

    toJSON: function(){ 

      var json = {};

      this.__forbidden_set = true;

      S.each(this.attributes, function(val, key){
        json[key] = this.get(key);
      }, this); 

      delete this.__forbidden_set;

      return json;
    },

    /**
     * 绑定change:xxx事件封装，直接使用this.on('change:' + xxx)感觉不好，另外支
     * 持传入一个数组，对于多个属性封装，使用数组更方便
     * @param {array|string} key 需要绑定change事件的属性
     * @param {function} fn 回调函数
     * @param {object|undefined} context 执行上下文，可以不填
     * @return this
     */
    change: function(key, fn, context){

      var evt = '';

      if (S.isArray(key)){

        evt = S.map(key, function(name){
          return 'change:' + name;
        }).join(' ');

      } else {
        evt = 'change:' + key;
      }

      this.on(evt, fn, context);

      return this;

    },

    set: function(key, value){

      // 临时禁止set方法，在toJSON方法调用的时候需要如此
      if (this.__forbidden_set) return;

      if (key in this.attributes) {

        var old = this.attributes[key];
        this.attributes[key] = value;

        this.fire('change:' + key, {name: key, old: old, value: value});

      } else {

        this.attributes[key] = value;
        this.fire('add:' + key, {name: key, value: value});

      }

      return this;

    },

    /**
     * 对表达式求值
     * @return {object} { val: Boolen, related: Array }
     */
    evaluation: function(expr){
      return evaluation(expr, this);
    }

  });

  return Model;

}, {
  requires: [
    './expression/index',
    'event'
  ]
});
