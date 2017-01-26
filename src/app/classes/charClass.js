System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CharClass;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by sargon on 7/16/16.
             */
            CharClass = (function () {
                function CharClass(classes, level) {
                    this._class = classes;
                    this._level = level;
                }
                CharClass.prototype.getClass = function () {
                    return this._class;
                };
                CharClass.prototype.getLevel = function () {
                    return this._level;
                };
                CharClass.prototype.toString = function () {
                    return "111";
                };
                return CharClass;
            }());
            exports_1("CharClass", CharClass);
        }
    }
});
//# sourceMappingURL=charClass.js.map