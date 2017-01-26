System.register(["../abilities/abitly"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var abitly_1;
    var Save;
    return {
        setters:[
            function (abitly_1_1) {
                abitly_1 = abitly_1_1;
            }],
        execute: function() {
            Save = (function () {
                function Save(name, label, ability) {
                    this.name = name;
                    this.label = label;
                    this.ability = ability;
                    Save.ALL.push(this);
                }
                ;
                Save.prototype.getName = function () {
                    return this.name;
                };
                Save.prototype.getLabel = function () {
                    return this.label;
                };
                Save.prototype.getAbility = function () {
                    return this.ability;
                };
                Save.ALL = [];
                Save.FORTITUDE = new Save("fortitude", "Fortitude", abitly_1.Ability.CON);
                Save.REFLEX = new Save("reflex", "Reflex", abitly_1.Ability.DEX);
                Save.WILLPOWER = new Save("willpower", "Willpower", abitly_1.Ability.WIS);
                return Save;
            }());
            exports_1("Save", Save);
        }
    }
});
//# sourceMappingURL=save.js.map