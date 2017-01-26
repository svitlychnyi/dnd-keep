System.register(["../char/skills/skill", "./classesFormulas", "../char/abilities/abitly"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var skill_1, classesFormulas_1, abitly_1;
    var Classes;
    return {
        setters:[
            function (skill_1_1) {
                skill_1 = skill_1_1;
            },
            function (classesFormulas_1_1) {
                classesFormulas_1 = classesFormulas_1_1;
            },
            function (abitly_1_1) {
                abitly_1 = abitly_1_1;
            }],
        execute: function() {
            /**
             * Created by sargon on 7/16/16.
             */
            Classes = (function () {
                function Classes(name, baseAttackBonusFunction, fortitudeSaveFunction, reflexSaveFunction, willSaveFunction, skills) {
                    this._name = name;
                    this._baseAttackBonusFunction = baseAttackBonusFunction;
                    this._fortitudeSaveFunction = fortitudeSaveFunction;
                    this._reflexSaveFunction = reflexSaveFunction;
                    this._willSaveFunction = willSaveFunction;
                    this._skills = skills;
                    Classes.ALL.push(this);
                }
                Classes.getClass = function (name) {
                    return Classes.ALL.find(function (charClass) {
                        return charClass.getName() === name;
                    });
                };
                Classes.prototype.getName = function () {
                    return this._name;
                };
                Classes.prototype.getSkills = function () {
                    return this._skills;
                };
                Classes.prototype.getBAB = function (level) {
                    return this._baseAttackBonusFunction.call(this, level);
                };
                Classes.prototype.getFortitudeSave = function (level) {
                    return this._fortitudeSaveFunction.call(this, level);
                };
                Classes.prototype.getReflexSave = function (level) {
                    return this._reflexSaveFunction.call(this, level);
                };
                Classes.prototype.getWillSave = function (level) {
                    return this._willSaveFunction.call(this, level);
                };
                Classes.prototype.getSave = function (ability, level) {
                    switch (ability) {
                        case abitly_1.Ability.CON: return this.getFortitudeSave(level);
                        case abitly_1.Ability.DEX: return this.getReflexSave(level);
                        case abitly_1.Ability.WIS: return this.getWillSave(level);
                    }
                };
                Classes.ALL = [];
                Classes.CLERIC = new Classes("cleric", classesFormulas_1.ClassesFormulas.getMediumBAB, classesFormulas_1.ClassesFormulas.getHighSave, classesFormulas_1.ClassesFormulas.getLowSave, classesFormulas_1.ClassesFormulas.getHighSave, [skill_1.Skill.CONCENTRATION, skill_1.Skill.CRAFT_1, skill_1.Skill.DIPLOMACY, skill_1.Skill.HEAL, skill_1.Skill.KNOWLEDGE_ARC, skill_1.Skill.KNOWLEDGE_HISTORY,
                    skill_1.Skill.KNOWLEDGE_RELIGION, skill_1.Skill.KNOWLEDGE_PLANAR, skill_1.Skill.PROFESSION_1, skill_1.Skill.SPELLCRAFT]);
                Classes.MONK = new Classes("monk", classesFormulas_1.ClassesFormulas.getHighBAB, classesFormulas_1.ClassesFormulas.getHighSave, classesFormulas_1.ClassesFormulas.getLowSave, classesFormulas_1.ClassesFormulas.getHighSave, [skill_1.Skill.BALANCE]);
                return Classes;
            }());
            exports_1("Classes", Classes);
        }
    }
});
//# sourceMappingURL=classes.js.map