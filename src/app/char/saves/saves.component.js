System.register(['@angular/core', "./save", "../char.service"], function(exports_1, context_1) {
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
    var core_1, save_1, char_service_1;
    var SavesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (save_1_1) {
                save_1 = save_1_1;
            },
            function (char_service_1_1) {
                char_service_1 = char_service_1_1;
            }],
        execute: function() {
            SavesComponent = (function () {
                function SavesComponent(charService) {
                    this.charService = charService;
                    this.saves = save_1.Save.ALL;
                }
                ;
                SavesComponent = __decorate([
                    core_1.Component({
                        selector: 'saves',
                        templateUrl: './app/char/saves/saves.component.html'
                    }), 
                    __metadata('design:paramtypes', [char_service_1.CharService])
                ], SavesComponent);
                return SavesComponent;
            }());
            exports_1("SavesComponent", SavesComponent);
            ;
        }
    }
});
//# sourceMappingURL=saves.component.js.map