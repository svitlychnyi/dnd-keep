System.register([], function (exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var AbilityService;
  return {
    setters: [],
    execute: function () {
      AbilityService = (function () {
        function AbilityService() {
        }

        AbilityService.getModifier = function (score) {
          score = score || 10;
          return ((score / 2) >> 0) - 5;
        };
        return AbilityService;
      }());
      exports_1("AbilityService", AbilityService);
    }
  }
});
//# sourceMappingURL=ability.service.js.map
