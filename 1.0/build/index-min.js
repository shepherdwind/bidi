/*! bidi - v1.0 - 2013-08-18 12:59:18 AM
* Copyright (c) 2013 hanwen.sah; Licensed  */
KISSY.add("gallery/bidi/1.0/expression/parse",function(){var a=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,expressions:3,math:4,EOF:5,"var":6,VAR:7,DOT:8,"||":9,"&&":10,">":11,"<":12,"==":13,">=":14,"<=":15,"!=":16,"!":17,NUMBER:18,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",7:"VAR",8:"DOT",9:"||",10:"&&",11:">",12:"<",13:"==",14:">=",15:"<=",16:"!=",17:"!",18:"NUMBER"},productions_:[0,[3,2],[6,1],[6,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,1],[4,1]],performAction:function(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return f[g-1];case 2:this.$={name:f[g],path:[]};break;case 3:this.$={name:f[g-2].name,path:f[g-2].path.concat(f[g])};break;case 4:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 5:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 6:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 7:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 8:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 9:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 10:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 11:this.$={l:f[g-2],r:f[g],operator:f[g-1]};break;case 12:this.$={l:f[g],operator:"not"};break;case 13:this.$=f[g];break;case 14:this.$=f[g]}},table:[{3:1,4:2,6:4,7:[1,6],17:[1,3],18:[1,5]},{1:[3]},{5:[1,7],9:[1,8],10:[1,9],11:[1,10],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15]},{4:16,6:4,7:[1,6],17:[1,3],18:[1,5]},{5:[2,13],8:[1,17],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13]},{5:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14]},{5:[2,2],8:[2,2],9:[2,2],10:[2,2],11:[2,2],12:[2,2],13:[2,2],14:[2,2],15:[2,2],16:[2,2]},{1:[2,1]},{4:18,6:4,7:[1,6],17:[1,3],18:[1,5]},{4:19,6:4,7:[1,6],17:[1,3],18:[1,5]},{4:20,6:4,7:[1,6],17:[1,3],18:[1,5]},{4:21,6:4,7:[1,6],17:[1,3],18:[1,5]},{4:22,6:4,7:[1,6],17:[1,3],18:[1,5]},{4:23,6:4,7:[1,6],17:[1,3],18:[1,5]},{4:24,6:4,7:[1,6],17:[1,3],18:[1,5]},{4:25,6:4,7:[1,6],17:[1,3],18:[1,5]},{5:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12]},{7:[1,26]},{5:[2,4],9:[2,4],10:[2,4],11:[1,10],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15]},{5:[2,5],9:[2,5],10:[2,5],11:[1,10],12:[1,11],13:[1,12],14:[1,13],15:[1,14],16:[1,15]},{5:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[2,6]},{5:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[2,7]},{5:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[2,8]},{5:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[2,9]},{5:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[2,10]},{5:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11]},{5:[2,3],8:[2,3],9:[2,3],10:[2,3],11:[2,3],12:[2,3],13:[2,3],14:[2,3],15:[2,3],16:[2,3]}],defaultActions:{7:[2,1]},parseError:function(a,b){if(!b.recoverable)throw new Error(a);this.trace(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||m,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0,l=2,m=1;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var n=this.lexer.yylloc;f.push(n);var o=this.lexer.options&&this.lexer.options.ranges;this.parseError="function"==typeof this.yy.parseError?this.yy.parseError:Object.getPrototypeOf(this).parseError;for(var p,q,r,s,t,u,v,w,x,y={};;){if(r=d[d.length-1],this.defaultActions[r]?s=this.defaultActions[r]:((null===p||"undefined"==typeof p)&&(p=b()),s=g[r]&&g[r][p]),"undefined"==typeof s||!s.length||!s[0]){var z="";x=[];for(u in g[r])this.terminals_[u]&&u>l&&x.push("'"+this.terminals_[u]+"'");z=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(i+1)+": Unexpected "+(p==m?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(z,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:n,expected:x})}if(s[0]instanceof Array&&s.length>1)throw new Error("Parse Error: multiple actions possible at state: "+r+", token: "+p);switch(s[0]){case 1:d.push(p),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(s[1]),p=null,q?(p=q,q=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,n=this.lexer.yylloc,k>0&&k--);break;case 2:if(v=this.productions_[s[1]][1],y.$=e[e.length-v],y._$={first_line:f[f.length-(v||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(v||1)].first_column,last_column:f[f.length-1].last_column},o&&(y._$.range=[f[f.length-(v||1)].range[0],f[f.length-1].range[1]]),t=this.performAction.call(y,h,j,i,this.yy,s[1],e,f),"undefined"!=typeof t)return t;v&&(d=d.slice(0,2*-1*v),e=e.slice(0,-1*v),f=f.slice(0,-1*v)),d.push(this.productions_[s[1]][0]),e.push(y.$),f.push(y._$),w=g[d[d.length-2]][d[d.length-1]],d.push(w);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},test_match:function(a,b){var c,d,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),d=a[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],c=this.performAction.call(this,this.yy,this,b,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var f in e)this[f]=e[f];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d;this._more||(this.yytext="",this.match="");for(var e=this._currentRules(),f=0;f<e.length;f++)if(c=this._input.match(this.rules[e[f]]),c&&(!b||c[0].length>b[0].length)){if(b=c,d=f,this.options.backtrack_lexer){if(a=this.test_match(c,e[f]),a!==!1)return a;if(this._backtrack){b=!1;continue}return!1}if(!this.options.flex)break}return b?(a=this.test_match(b,e[d]),a!==!1?a:!1):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(a,b,c,d){switch(c){case 0:return 18;case 1:return 7;case 2:return 8;case 3:return b.yytext;case 4:return b.yytext;case 5:return b.yytext;case 6:return b.yytext;case 7:return b.yytext;case 8:return b.yytext;case 9:return b.yytext;case 10:return b.yytext;case 11:return b.yytext;case 12:break;case 13:return 5}},rules:[/^(?:\d+)/,/^(?:[\$\w]+)/,/^(?:\.(?=[\$\w]))/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:>)/,/^(?:<)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\s+)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}}};return a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();return"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=a,exports.Parser=a.Parser,exports.parse=function(){return a.parse.apply(a,arguments)},exports.main=function(a){a[1]||(console.log("Usage: "+a[0]+" FILE"),process.exit(1));var b=require("fs").readFileSync(require("path").normalize(a[1]),"utf8");return exports.parser.parse(b)},"undefined"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1))),a}),KISSY.add("gallery/bidi/1.0/expression/index",function(a,b){"use strict";function c(a){function c(a){if(a.path.length){var b=a.name+"."+a.path.join(".");return j.get(b,k)}return j.get(a.name,k)}var g,h,i=a("key"),j=a("model"),k=a("parent"),l=k?k.name+":"+k.id+i:i;return l in f?(g=f[l].ast,h=f[l].related):(g=b.parse(i),h=d(g,j,k),f[l]={ast:g,related:h}),{val:e(g,c),related:h}}function d(a,b,c){var e=[];if(a.operator)a.l&&(e=e.concat(d(a.l,b,c))),a.r&&(e=e.concat(d(a.r,b,c)));else if(a.name){var f=a.name;a.path.length&&(f+="."+a.path.join(".")),e=e.concat(b.getRelated(f,c))}return e}function e(a,b){if(!a.operator)return a.name?b(a):parseInt(a);switch(a.operator){case"&&":return e(a.l,b)&&e(a.r,b);case"||":return e(a.l,b)||e(a.r,b);case"not":return!e(a.l,b);case"==":return e(a.l,b)==e(a.r,b);case"!=":return e(a.l,b)!=e(a.r,b);case">=":return e(a.l,b)>=e(a.r,b);case"<=":return e(a.l,b)<=e(a.r,b);case"<":return e(a.l,b)<e(a.r,b);case">":return e(a.l,b)>e(a.r,b)}}var f={};return c},{requires:["./parse"]}),KISSY.add("gallery/bidi/1.0/models",function(a,b){"use strict";function c(b,c){function d(){}var e;return c?(a.augment(d,c),e=new d,a.mix(e,b)):e=b,this.attributes=e,this.linkages={},this.lists={},this}return a.augment(c,a.EventTarget,{_isFunc:function(b,c){var d;return d=c?this._getParent(c)[b]:this._getAttr(b),a.isFunction(d)},setLists:function(a){this.lists[a]=!0},get:function(a,b){if(b)return this._getByParent(a,b);var c=this._getAttr(a);return"function"==typeof c&&(c=c.call(this)),this.__recode&&this.__getter.push(a),c},_getAttr:function(b,c){var d=b.split("."),e=c||this.attributes;if(d.length>2&&"$item"===d[1]&&(e=this.item(d[0]),d=d.slice(2),!e))return e;if(a.each(d,function(a){return e=e[a],void 0===e?!1:void 0}),b in this.linkages){var f=this.linkages[b],g=this.item(f),h=d[0];if(!g||!g[h])return void 0;g=g[h],e=a.filter(e,function(b){return a.indexOf(b.value,g)>-1})}return e},item:function(b){var c,d=this.get(b).values,e=this.get(b).defaultValue;return d?(a.some(d,function(a){return a.value==e?(c=a,!0):void 0}),c):c},_getByParent:function(b,c){var d;if(b&&0===b.indexOf("$root."))d=this._getAttr(b.slice(6));else{var e=this._getParent(c);d=null!==b?this._getAttr(b,e):e}return a.isFunction(d)&&(e.parent=this,d=d.call(e,c)),this.__recode&&this.__getter.push(c.name+":"+c.id),d},_getParent:function(b){if(b.__parent__)return b;var c=b.name,d=this.get(c),e={};return a.some(d,function(a){return a.__parent__.id===b.id?(e=a,!0):void 0},this),e},getRelated:function(a,b){return this._isFunc(a,b)?(this.__recode=!0,this.__getter=[],this.get(a,b),this.__recode=!1,this.__getter.slice()):b?[b.name+":"+b.id]:[a]},toJSON:function(){var b={};return this.__forbidden_set=!0,a.each(this.attributes,function(a,c){this.attributes.hasOwnProperty(c)&&(b[c]=this.get(c))},this),delete this.__forbidden_set,b},change:function(b,c,d){var e="";return e=a.isArray(b)?a.map(b,function(a){return"change:"+a+" add:"+a+" remove:"+a}).join(" "):"change:"+b,this.on(e,c,d),this},set:function(b,c,d){if(!this.__forbidden_set){if(d)return this._setByParent(b,c,d);var e=b.split("."),f=this.attributes,g=e.length;a.each(e,function(a,b){return a in f&&g-1>b?(f=f[a],void 0):!1});var h=e[g-1];return f[h]=c,b in this.lists&&this._addToken(b,c),this.fire("change:"+e[0],{path:e.slice(1),val:c}),this}},_addToken:function(b,c){a.each(c,function(c){c.__parent__={name:b,id:a.guid("$id")}})},remove:function(b){if(!this.__forbidden_set){b.__parent__&&(b=b.__parent__);var c,d=b.name,e=this.get(d);return a.some(e,function(a,d){return a.__parent__.id===b.id?(c=d,!0):void 0}),e.splice(c,1),this.fire("remove:"+d,{id:b.id,index:c}),this}},add:function(b,c){if(!this.__forbidden_set){b.__parent__={id:a.guid("$id"),name:c};var d=this.get(c);return d.push(b),this.fire("add:"+c,{obj:b}),this}},_setByParent:function(a,b,c){var d=this._getParent(c);d&&a in d&&(d[a]=b);var e=c.__parent__||c;this.fire("change:"+e.name,{$item:e.id}),this.fire("change:"+e.name+":"+e.id)},evaluation:function(a){return b(a)},setLinkage:function(a,b){return this.linkages[a]=b,this}}),c},{requires:["./expression/index","event"]}),KISSY.add("gallery/bidi/1.0/watch/text",function(){"use strict";function a(a){a.add("text",{init:function(){var b=this.$control,c=b("model");b("key");var d=b("el"),e=c.evaluation(b),f=b("argv"),g=f[0];c.change(e.related,function(){var e=c.evaluation(b).val;g&&g in a.pipe&&(e=a.pipe[g](e)),d.html(e)},this)},beforeReady:function(){var b=this.$control,c=b("model"),d=c.evaluation(b).val||"",e=b("argv"),f=e[0];f&&f in a.pipe&&(d=a.pipe[f](d)),this.$html=" id="+b("id")+">"+d+"<!----",a.noEscape[this.$html]=!0}})}return a}),KISSY.add("gallery/bidi/1.0/watch/class",function(){"use strict";return function(a){a.add("class",function(){function a(){var a=b("el"),e=c.evaluation(b).val?"addClass":"removeClass";a[e](d)}var b=this.$control,c=b("model");b("key");var d=b("argv")[0],e=c.evaluation(b);c.change(e.related,a),a()})}}),KISSY.add("gallery/bidi/1.0/watch/click",function(){"use strict";return function(a){a.add("click",function(){var a=this.$control,b=a("model"),c=a("key"),d=a("selector");a("base").delegate("click",d,function(){b.get(c,a("parent"))})})}}),KISSY.add("gallery/bidi/1.0/watch/select",function(){"use strict";return function(a){a.add("select",function(){var a=this.$control,b=a("model"),c=a("key"),d=a("el"),e=a("parent"),f=b.evaluation(a);d.val(f.val),b.change(f.related,function(){var a=b.get(c,e);d.val(a)}),d.on("change",function(){b.set(c,d.val(),e)})})}},{}),KISSY.add("gallery/bidi/1.0/watch/attr",function(){"use strict";return function(a){a.add("attr",function(){function a(a){var c=b("el"),d=b("argv")[0];c.attr(d,a)}var b=this.$control,c=b("model");b("key");var d=c.evaluation(b);a(d.val),c.change(d.related,function(){a(c.evaluation(b).val)})})}}),KISSY.add("gallery/bidi/1.0/watch/each",function(a,b){"use strict";function c(a){a.add("linkage",{init:function(){var a=this.$control,c=a("model"),d=a("key"),e=a("argv")[0];c.change(e,function(){var e=a("fn"),f=a("el"),g=new b(e),h={params:[c.get(d)],fn:e};g=g.runtime.option.commands.each([c.get(d)],h),f.html(g);var i=d.split(".");c.set(i[0]+".defaultValue",null)})},beforeReady:function(){var a=this.$control,b=a("model"),c=a("key"),d=a("argv")[0];b.setLinkage(c,d),this.$html="<span class=xform id="+a("id")+">"}})}return c},{requires:["xtemplate"]}),KISSY.add("gallery/bidi/1.0/watch/radio",function(a){"use strict";return function(b){b.add("radio",function(){var b=this.$control,c=b("model"),d=b("key"),e=b("el");e.delegate("click","input",function(b){var e=a.all(b.currentTarget),f=e.val();c.set(d,f)})})}},{}),KISSY.add("gallery/bidi/1.0/watch/list",function(a,b){"use strict";function c(a){a.add("list",{init:function(){var a=this.$control,b=a("model"),c=a("key");b.on("remove:"+c,function(b){var c=a("el").children(),d=b.index;c.item(d).remove()}),b.on("add:"+c,function(c){var d=a("fn"),e={params:[c.obj],fn:d},f=b.toJSON();f.__name__=a("name");var g=e.fn([c.obj,f]).replace(/^>/,"");a("el").append(g),a("view").fire("inited")}),this._bindChange()},_bindChange:function(){var a=this.$control,c=a("model"),d=a("key");c.change(d,function(d){if(!d.$item){var e=a("fn"),f={params:[d.val],fn:e},g=c.toJSON();g.__name__=a("name");var h=new b(e);h=h.runtime.option.commands.each([d.val,g],f),a("el").html(h),a("view").fire("inited")}})},beforeReady:function(){var a=this.$control(),b=a.model;b.setLists(a.key)}})}return c},{requires:["xtemplate"]}),KISSY.add("gallery/bidi/1.0/watch/render",function(){"use strict";function a(a){a.add("render",{init:function(){var a=this.$control,b=a("model"),c=a("key");b.change(c,function(c){if(!c.$item){var d=a("fn"),e={params:[c.val],fn:d},f=b.toJSON();f.__name__=a("name");var g=e.fn([c.val,f]);a("el").html(g),a("view").fire("inited")}})},beforeReady:function(){}})}return a},{requires:["xtemplate"]}),KISSY.add("gallery/bidi/1.0/watch/value",function(a){"use strict";function b(b){b.add("value",{init:function(){var b=this.$control();a.mix(this,b),this._render()},beforeReady:function(){var a=this.$control,b=a("key"),c=a("model"),d=c.get(b);this.$html=" value= "+d+" id="+a("id")+" "},_render:function(){var a=this.el,b=a.attr("type")||"input";this.model,this.key,"radio"==b?this._bindRadio():this._bindEvent()},_bindRadio:function(){var a=this.el,b=this.model,c=this.base,d=a.attr("name"),e=this.key;c.delegate("click","input",function(c){var f=c.currentTarget;if("radio"==f.type&&f.name==d){var g=a.attr("checked");b.set(e,g)}}),b.change(e,function(){a.attr("checked",b.get(e))})},_bindEvent:function(){var a=this.el,b=this.model,c=this.key;a.on("keyup",function(){var d=a.val();b.set(c,d)}),b.change(c,function(){a.val(b.get(c))})}})}return b},{}),KISSY.add("gallery/bidi/1.0/watch/index",function(a){"use strict";var b={},c={};c.noEscape={};var d=a.escapeHTML;return a.escapeHTML=function(a){return a in c.noEscape?a:d(a)},c.add=function(c,d){c in b&&a.error(c+" has be add before"),a.isFunction(d)&&(d={init:d}),b[c]=function(b){var c={};a.mix(c,b),this.$control=function(b,d){return b?d?(b in c||(c[b]=d),void 0):c[b]:a.mix(c,{})},this.beforeReady&&this.beforeReady(),this.on("ready",this.init,this)},a.augment(b[c],a.EventTarget,d)},c.get=function(a){return b[a]},c.pipe={},a.each(arguments,function(a,b){b&&a(c)}),c},{requires:["./text","./class","./click","./select","./attr","./each","./radio","./list","./render","./value"]}),KISSY.add("gallery/bidi/1.0/views",function(a,b,c,d){"use strict";function e(a,b){this.model=b,this.name=a}return a.augment(e,a.EventTarget,{setEl:function(a){return this.el=a,this.template=new c(a.all("script").html()),this},render:function(){var a=this.model.toJSON();a.__name__=this.name;var b=this.template.render(a);return b=b.replace(/>\s+>>><<</g,""),this.el.html(b),this.fire("inited"),this},watch:function(b,c){var e=b[0],f=b[1],g=d.get(e),h=b.id||"bidi-"+this.name+"-"+a.guid(),i="#"+h,j=b.slice(2),k=" id="+h+" ",l=b.meta;if(g){var m=new g({selector:i,parent:l,id:h,key:f,model:this.model,base:this.el,fn:c,argv:j,name:this.name,view:this}),n=function(){m.$control("el",this.el.all(i)),m.fire("ready"),this.detach("inited",n)};this.on("inited",n),k=m.$html||k}else a.log("watcher "+e+" is not defined!");return{id:h,html:k}}}),e},{requires:["event","xtemplate","./watch/index"]}),KISSY.add("gallery/bidi/1.0/macros",function(){function a(a,c){var d=c.params,e=d[0];if(c.fn){var f=d.slice(1);return b[e]={fn:c.fn,params:d.slice(1)},""}for(var g={},h=b[e],f=h.params,i=1;i<d.length;i++)g[f[i-1]]=d[i];return a.unshift(g),h.fn(a)}var b={};return a}),KISSY.add("gallery/bidi/1.0/index",function(a,b,c,d,e,f,g,h){"use strict";function i(b,c){var d,e,f=b.length-1,g=b[f][n],h=b[0][m];return a.each(c.params,function(f){var i=a.map(f.split(":"),a.trim);if(h&&(i.meta=h),c.fn)if(d)i.id=d,l[g].watch(i);else{var j=l[g].watch(i,c.fn);d=j.id;var k=i[0];k in o?e=o[k](b,c,i,g,j.html):a.log("watch block command no support "+k)}else if(d)i.id=d,l[g].watch(i);else{var j=l[g].watch(i);d=j.id,e=j.html}}),e}function j(a){if(!(a in p)){var b=function(b,c){return c.params[0]=a+":"+c.params[0],i(b,c)};p[a]=b}}var k=b.all,l={},m="__parent__",n="__name__",o={linkage:function(a,b,c,d,e){e=e||"";var f=l[d].model;return a[0].$$linkage=f.get(c[1]),b.params[0]=a[0].$$linkage,e+=b.commands.each(a,b),delete a.$$linkage,e+="</span>"},render:function(a,b,c,d,e){l[d].model,a.length-1,b.params[0]=a[0][c[1]];var f=b.params[0],g=[f,a],h=b.fn(g).replace(/^>/,"");return" >>><<<"+e+">"+h},list:function(b,c,d,e,f){l[e].model,b.length-1,c.params[0]=b[0][d[1]];for(var g=c.params[0],h=[0,0].concat(b),i=g.length,j="",k=0;i>k;k++)h[0]=g[k],h[0][m]||(h[0][m]={id:a.guid("$id"),name:d[1]}),h[1]={xcount:i,xindex:k},j+=c.fn(h).replace(/^>/,"");return" >>><<<"+f+">"+j},"with":function(a,b,c,d,e){l[d].model,a.length-1,b.params[0]=a[0][c[1]];var f=b.params[0],g=[f].concat(a),h=b.fn(g).replace(/^>/,"");return" >>><<<"+e+">"+h}},p={macro:h},q={active:function(b){a.isArray(b)?a.each(b,j):j(b)},xbind:function(a,b,c){return l[a]=new f(a,new e(b,c)),l[a]},init:function(){k(".bidi-viewer").each(function(b){var c=b.attr("data-view"),d=l[c].setEl(b);d.template.addCommand("watch",i),d.template.addCommand("macro",h),a.each(p,function(a,b){d.template.addCommand(b,a)}),d.render()})},add:function(a,b){g.add(a,b)},pipe:function(a,b){g.pipe[a]=b}};return q},{requires:["node","base","xtemplate","./models","./views","./watch/index","./macros"]});