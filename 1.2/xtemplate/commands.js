
/**
 * native commands for xtemplate.
 * @author yiminghe@gmail.com
 * @ignore
 */
KISSY.add(function (S) {
    var commands;

    return commands = {
        'each': function (scopes, config) {
            var params = config.params;
            var param0 = params[0];
            var buffer = '';
            var xcount;
            // if undefined, will emit warning by compiler
            if (param0) {
                // skip array check for performance
                var opScopes = [0, 0].concat(scopes);
                if (S.isArray(param0)) {
                    xcount = param0.length;
                    for (var xindex = 0; xindex < xcount; xindex++) {
                        // two more variable scope for array looping
                        opScopes[0] = param0[xindex];
                        opScopes[1] = {
                            xcount: xcount,
                            xindex: xindex
                        };
                        buffer += config.fn(opScopes);
                    }
                } else {
                    for (var name in param0) {
                        opScopes[0] = param0[name];
                        opScopes[1] = {
                            xindex: name
                        };
                        buffer += config.fn(opScopes);
                    }
                }

            } else if (config.inverse) {
                buffer = config.inverse(scopes);
            }
            return buffer;
        },

        'with': function (scopes, config) {
            var params = config.params;
            var param0 = params[0];
            var opScopes = [0].concat(scopes);
            var buffer = '';
            if (param0) {
                // skip object check for performance
                opScopes[0] = param0;
                buffer = config.fn(opScopes);
            } else if (config.inverse) {
                buffer = config.inverse(scopes);
            }
            return buffer;
        },

        'if': function (scopes, config) {
            var params = config.params;
            var param0 = params[0];
            var buffer = '';
            if (param0) {
                if (config.fn) {
                    buffer = config.fn(scopes);
                }
            } else if (config.inverse) {
                buffer = config.inverse(scopes);
            }
            return buffer;
        },

        'set': function (scopes, config) {
            // in case scopes[0] is not object ,{{#each}}{{set }}{{/each}}
            for (var i = scopes.length - 1; i >= 0; i--) {
                if (typeof scopes[i] == 'object') {
                    S.mix(scopes[i], config.hash);
                    break;
                }
            }
            return '';
        },

        include: function (scopes, config) {
            var params = config.params;
            // allow hash to shadow parent scopes
            var extra = config.hash ? [config.hash] : [];
            scopes = extra.concat(scopes);

            if (!params || params.length != 1) {
                S.error('include must has one param');
                return '';
            }

            var myName = this.config.name;
            var subTplName = params[0];


            if (subTplName.charAt(0) == '.') {
                if (myName == 'unspecified') {
                    S.error('parent template does not have name' + ' for relative sub tpl name: ' + subTplName);
                    return '';
                }
                subTplName = S.Path.resolve(myName, '../', subTplName);
            }

            var tpl = this.config.loader.call(this, subTplName);

            config = S.merge(this.config);
            // template file name
            config.name = subTplName;
            // pass commands to sub template
            config.commands = this.config.commands;
            // share macros with parent template and sub template
            config.macros = this.config.macros;
            return this.invokeEngine(tpl, scopes, config)
        },

        'macro': function (scopes, config) {
            var params = config.params;
            var macroName = params[0];
            var params1 = params.slice(1);
            var macros = this.config.macros;
            // definition
            if (config.fn) {
                // parent template override child template
                if (!macros[macroName]) {
                    macros[macroName] = {
                        paramNames: params1,
                        fn: config.fn
                    };
                }
            } else {
                var paramValues = {};
                var macro = macros[macroName];
                if (!macro) {
                    macro = S.require(macroName);
                    if (!macro) {
                        S.error("can not find macro module:" + name);
                    }
                }
                S.each(macro.paramNames, function (p, i) {
                    paramValues[p] = params1[i];
                });
                var newScopes = scopes.concat();
                newScopes.unshift(paramValues);
                return macro.fn.call(this, newScopes);
            }
            return '';
        },

        parse: function (scopes, config) {
            // abandon parent scopes
            return commands.include.call(this, [], config);
        }
    };
});
