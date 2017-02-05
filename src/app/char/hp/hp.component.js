System.register(['@angular/core', "../abilities/abitly", "../char.service"], function (exports_1, context_1) {
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
  var HPComponent;
  return {
    setters: [
      function (core_1_1) {
        core_1 = core_1_1;
      },
      function (abitly_1_1) {
        abitly_1 = abitly_1_1;
      },
      function (char_service_1_1) {
        char_service_1 = char_service_1_1;
      }],
    execute: function () {
      HPComponent = (function () {
        function HPComponent(charService) {
          this.charService = charService;
          this.dex = abitly_1.Ability.DEX;
        }
        ;
        // N*(N-1)*500
        HPComponent.prototype.getNextLevelXP = function () {
          return this.charService.getTotalLevel() * (this.charService.getTotalLevel() - 1) * 500;
        };
        HPComponent = __decorate([
          core_1.Component({
            selector: 'hp',
            templateUrl: './app/char/hp/hp.component.html',
          }),
          __metadata('design:paramtypes', [char_service_1.CharService])
        ], HPComponent);
        return HPComponent;
      }());
      exports_1("HPComponent", HPComponent);
      ;
    }
  }
});
//# sourceMappingURL=hp.component.js.map
