System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CharSerializer;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by sargon on 7/18/16.
             */
            CharSerializer = (function () {
                function CharSerializer() {
                }
                CharSerializer.serializeChar = function (char) {
                    return JSON.stringify(char);
                };
                CharSerializer.deserializeChar = function (charStr) {
                    return JSON.parse(charStr);
                };
                return CharSerializer;
            }());
            exports_1("CharSerializer", CharSerializer);
        }
    }
});
//# sourceMappingURL=charSerializer.js.map