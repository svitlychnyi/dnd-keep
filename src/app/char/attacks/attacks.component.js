System.register(['@angular/core', "./attack"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, attack_1;
    var AttacksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attack_1_1) {
                attack_1 = attack_1_1;
            }],
        execute: function() {
            AttacksComponent = (function () {
                function AttacksComponent() {
                    this.attacks = attack_1.Attack.ALL;
                }
                AttacksComponent = __decorate([
                    core_1.Component({
                        selector: 'attacks',
                        templateUrl: './app/char/attacks/attacks.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttacksComponent);
                return AttacksComponent;
            }());
            exports_1("AttacksComponent", AttacksComponent);
            ;
        }
    }
});
//# sourceMappingURL=attacks.component.js.map