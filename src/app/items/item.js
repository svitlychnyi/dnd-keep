System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Item;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by sargon on 7/16/16.
             */
            Item = (function () {
                function Item(name, bonus) {
                    this.name = name;
                    this.bonus = bonus;
                }
                Item.prototype.getName = function () {
                    return this.name;
                };
                ;
                Item.prototype.getBonus = function () {
                    return this.bonus;
                };
                ;
                return Item;
            }());
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=item.js.map