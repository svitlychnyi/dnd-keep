System.register(['@angular/core', "./abitly", "../char.service"], function(exports_1, context_1) {
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
    var core_1, abitly_1, char_service_1;
    var AbilitiesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abitly_1_1) {
                abitly_1 = abitly_1_1;
            },
            function (char_service_1_1) {
                char_service_1 = char_service_1_1;
            }],
        execute: function() {
            AbilitiesComponent = (function () {
                function AbilitiesComponent(_charService) {
                    this._charService = _charService;
                    this.abilities = abitly_1.Ability.ALL;
                }
                ;
                AbilitiesComponent = __decorate([
                    core_1.Component({
                        selector: 'abilities',
                        templateUrl: './app/char/abilities/abilities.component.html',
                    }), 
                    __metadata('design:paramtypes', [char_service_1.CharService])
                ], AbilitiesComponent);
                return AbilitiesComponent;
            }());
            exports_1("AbilitiesComponent", AbilitiesComponent);
        }
    }
});
//# sourceMappingURL=abilities.component.js.map