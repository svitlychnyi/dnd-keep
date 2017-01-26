System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Ability;
    return {
        setters:[],
        execute: function() {
            Ability = (function () {
                function Ability(name) {
                    this.name = name;
                    if (this.name !== "") {
                        Ability.ALL.push(this);
                    }
                }
                Ability.prototype.getName = function () {
                    return this.name;
                };
                ;
                Ability.ALL = [];
                Ability.STR = new Ability("str");
                Ability.DEX = new Ability("dex");
                Ability.CON = new Ability("con");
                Ability.INT = new Ability("int");
                Ability.WIS = new Ability("wis");
                Ability.CHA = new Ability("cha");
                Ability.NONE = new Ability("");
                return Ability;
            }());
            exports_1("Ability", Ability);
        }
    }
});
//# sourceMappingURL=abitly.js.map