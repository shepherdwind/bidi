KISSY.add(function(S, Parse){

  "use strict";

  // 模型求值运算，支持以下表达式
  // 1. 基本属性求值，attrname  attrname.key attrname.length
  // 2. 其他运算表达式，支持逻辑运算、比较运算 !a ,  a || b , a && b
  //    a > b , a > 1, a < b, a == b, a >= b
  // 3. 一起基本求值混合，不支持括号运算

  var cache = {};

  function evaluation(str, model){

    var ast, related;

    /**
     * 对变量求值
     */
    function val(variable){

      var key = variable.name;

      if (!variable.path.length) {
        return model.get(key);
      } else {

        var base = model.item(key);
        if (!base) return base;

        S.some(variable.path, function(path){
          base = base[path];
          return !base;
        });

        return base;
      }

    }

    if (str in cache) {

      ast = cache[str].ast;
      related = cache[str].related;

    } else {

      ast = Parse.parse(str);
      related = getRelated(ast);
      cache[str] = { ast: ast, related: related };

    }

    return { 
      val:  expr(ast, val),
      related: related
    };

  }

  /**
   * 获取相关的属性，比如 a.b > c，和[a, c]的变化有关
   */
  function getRelated(ast){

    var ret = [];

    if (!ast.operator) {

      ast.name && ret.push(ast.name)

    } else {

      if (ast.l) ret = ret.concat(getRelated(ast.l));
      if (ast.r) ret = ret.concat(getRelated(ast.r));

    }

    return ret;

  }

  /**
   * 运算结果，和标准的逻辑求值一样
   */
  function expr(ast, val){

    if (!ast.operator) {

      if (ast.name)  {
        return val(ast);
      } else {
        return parseInt(ast);
      }

    } else {

      switch(ast.operator){

        case '&&':
          return expr(ast.l, val) && expr(ast.r, val);
          break;

        case '||':
          return expr(ast.l, val) || expr(ast.r, val);
          break;

        case 'not':
          return !expr(ast.l, val);
          break;

        case '==':
          return expr(ast.l, val) == expr(ast.r, val);
          break;

        case '!=':
          return expr(ast.l, val) != expr(ast.r, val);
          break;

        case '>=':
          return expr(ast.l, val) >= expr(ast.r, val);
          break;

        case '<=':
          return expr(ast.l, val) <= expr(ast.r, val);
          break;

        case '<':
          return expr(ast.l, val) < expr(ast.r, val);
          break;

        case '>':
          return expr(ast.l, val) > expr(ast.r, val);
          break;
      }

    }
  }

  return evaluation;

}, {
  requires: ['./parse']
});
