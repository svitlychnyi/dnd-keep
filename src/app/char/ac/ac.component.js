System.register(['@angular/core', "../char.service", "../abilities/abitly", "../../classes/classes"], function (exports_1, context_1) {
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
  var core_1, char_service_1, abitly_1, classes_1;
  var ACComponent;
  return {
    setters: [
      function (core_1_1) {
        core_1 = core_1_1;
      },
      function (char_service_1_1) {
        char_service_1 = char_service_1_1;
      },
      function (abitly_1_1) {
        abitly_1 = abitly_1_1;
      },
      function (classes_1_1) {
        classes_1 = classes_1_1;
      }],
    execute: function () {
      ACComponent = (function () {
        function ACComponent(charService) {
          this.charService = charService;
          this.dex = abitly_1.Ability.DEX;
        }

        ACComponent.prototype.getWisdomModifier = function () {
          var isMonk = false;
          for (var classKey in this.charService.getChar().classes) {
            isMonk = this.charService.getChar().classes[classKey].name == classes_1.Classes.MONK.getName()
              ? true
              : isMonk;
          }
          return isMonk
            ? this.charService.getAbilityModifier(abitly_1.Ability.WIS)
            : 0;
        };
        ACComponent.prototype.getAC = function () {
          return 10
            + this.charService.getChar().armor.getBonus()
            + this.charService.getChar().shield.getBonus()
            + this.charService.getAbilityModifier(abitly_1.Ability.DEX)
            + (this.getWisdomModifier() || 0);
        };
        ACComponent.prototype.getFF = function () {
          return 10
            + this.charService.getChar().armor.getBonus()
            + this.charService.getChar().shield.getBonus()
            + (this.getWisdomModifier() || 0);
        };
        ACComponent.prototype.getTouch = function () {
          return 10
            + this.charService.getAbilityModifier(abitly_1.Ability.DEX)
            + (this.getWisdomModifier() || 0);
        };
        ACComponent = __decorate([
          core_1.Component({
            selector: 'ac',
            templateUrl: './app/char/ac/ac.component.html'
          }),
          __metadata('design:paramtypes', [char_service_1.CharService])
        ], ACComponent);
        return ACComponent;
      }());
      exports_1("ACComponent", ACComponent);
      ;
    }
  }
});
//# sourceMappingURL=ac.component.js.map
