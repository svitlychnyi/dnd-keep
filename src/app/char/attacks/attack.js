System.register(["../abilities/abitly"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var abitly_1;
    var Attack;
    return {
        setters:[
            function (abitly_1_1) {
                abitly_1 = abitly_1_1;
            }],
        execute: function() {
            Attack = (function () {
                function Attack(name, ability) {
                    this.name = name;
                    this.ability = ability;
                    Attack.ALL.push(this);
                }
                Attack.prototype.getName = function () {
                    return this.name;
                };
                Attack.prototype.getAbility = function () {
                    return this.ability;
                };
                Attack.ALL = [];
                Attack.MELEE = new Attack("Melee", abitly_1.Ability.STR);
                Attack.RANGED = new Attack("Ranged", abitly_1.Ability.DEX);
                return Attack;
            }());
            exports_1("Attack", Attack);
        }
    }
});
//# sourceMappingURL=attack.js.map