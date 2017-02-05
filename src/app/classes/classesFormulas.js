System.register([], function (exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var ClassesFormulas;
  return {
    setters: [],
    execute: function () {
      /**
       * Created by sargon on 7/16/16.
       */
      ClassesFormulas = (function () {
        function ClassesFormulas() {
        }

        ClassesFormulas.getHighBAB = function (level) {
          return level;
        };
        ClassesFormulas.getMediumBAB = function (level) {
          return level > 0
            ? (level - 1) - Math.round((level - 1) / 4.1)
            : 0;
        };
        ClassesFormulas.getLowBAB = function (level) {
          return level > 0
            ? (level - 1) - Math.round((level - 1) / 2.1)
            : 0;
        };
        ClassesFormulas.getHighSave = function (level) {
          return level > 0
            ? 2 + ClassesFormulas.getLowBAB(level)
            : 0;
        };
        ClassesFormulas.getLowSave = function (level) {
          return level > 0
            ? Math.round(level / 3.1)
            : 0;
        };
        return ClassesFormulas;
      }());
      exports_1("ClassesFormulas", ClassesFormulas);
    }
  }
});
//# sourceMappingURL=classesFormulas.js.map
