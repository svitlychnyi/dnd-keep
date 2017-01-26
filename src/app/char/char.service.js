System.register(['@angular/core', './abilities/ability.service', '../classes/classes', './skills/skill'], function(exports_1, context_1) {
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
    var core_1, ability_service_1, classes_1, skill_1;
    var CharService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ability_service_1_1) {
                ability_service_1 = ability_service_1_1;
            },
            function (classes_1_1) {
                classes_1 = classes_1_1;
            },
            function (skill_1_1) {
                skill_1 = skill_1_1;
            }],
        execute: function() {
            CharService = (function () {
                function CharService() {
                    this.char = {
                        name: "Oberon",
                        player: "Gena",
                        race: "Human",
                        sex: "Male",
                        eyes: "Green",
                        vision: "LE",
                        heir: "Black",
                        age: 40,
                        height: 6,
                        weight: 150,
                        alignment: "LN",
                        deities: "Luck / Trickery",
                        classes: {
                            class1: { name: "cleric", level: 10 },
                            class2: { name: "cleric", level: 0 },
                            class3: { name: "cleric", level: 0 }
                        },
                        avatar: "sargon.jpg",
                        initiative: 4,
                        speed: 20,
                        speed_bonus: 0,
                        hp_max: 300,
                        hp: 270,
                        xp: 45600,
                        dr: "5/evil",
                        sr: 21,
                        abilities: { str: 10, dex: 11, con: 12, int: 13, wis: 14, cha: 15 },
                        ench_abilities: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                        tmp_abilities: { str: 2, dex: 1, con: 4, int: 1, wis: 2, cha: 1 },
                        skills: {
                            "balance": 1,
                            "bluff": 11,
                            "concentration": 13,
                            "decipherScript": 1,
                            "diplomacy": 11,
                            "knowledgeArc": 6,
                            "knowledgeReligion": 6,
                            "knowledgePlanar": 1,
                            "knowledgeHistory": 1,
                            "spellcraft": 13
                        },
                        skills_misc: {
                            "spellcraft": 2
                        },
                        armor: { name: "Breast Plate", bonus: 4 },
                        shield: { name: "Heavy Shield", bonus: 2 },
                    };
                }
                CharService.prototype.getChar = function () {
                    return this.char;
                };
                CharService.prototype.setChar = function (char) {
                    this.char = char;
                };
                CharService.prototype.getCharAbility = function (ability) {
                    return this.getChar().abilities[ability.getName()] || 0;
                };
                CharService.prototype.getCharEnchAbility = function (ability) {
                    return this.getChar().ench_abilities[ability.getName()] || 0;
                };
                CharService.prototype.getCharTmpAbility = function (ability) {
                    return this.getChar().tmp_abilities[ability.getName()] || 0;
                };
                CharService.prototype.getAbilityModifier = function (ability) {
                    var totalAbility = this.getCharAbility(ability)
                        + this.getCharEnchAbility(ability)
                        + this.getCharTmpAbility(ability);
                    return ability_service_1.AbilityService.getModifier(totalAbility);
                };
                CharService.prototype.getTotalLevel = function () {
                    var totalLevel = 0;
                    for (var className in this.getChar().classes) {
                        totalLevel += Number(this.getChar().classes[className].level);
                    }
                    return totalLevel;
                };
                CharService.prototype.getBAB = function () {
                    var totalBAB = 0;
                    for (var className in this.getChar().classes) {
                        var charClass = classes_1.Classes.getClass(this.getChar().classes[className].name);
                        totalBAB += charClass.getBAB(this.getChar().classes[className].level);
                    }
                    return totalBAB;
                };
                CharService.prototype.getSave = function (ability) {
                    var totalSave = 0;
                    for (var className in this.getChar().classes) {
                        var charClass = classes_1.Classes.getClass(this.getChar().classes[className].name);
                        totalSave += charClass.getSave(ability, this.getChar().classes[className].level);
                    }
                    return totalSave;
                };
                CharService.prototype.getTotalSkillRank = function (skill) {
                    return (this.getChar().skills[skill.getName()] || 0)
                        + (this.getChar().skills_misc[skill.getName()] || 0)
                        + this.getAbilityModifier(skill.getAbility());
                };
                CharService.prototype.getClassSkills = function () {
                    var classSkills = [];
                    for (var classKey in this.getChar().classes) {
                        classSkills = classSkills.concat(classes_1.Classes.getClass(this.getChar().classes[classKey].name).getSkills());
                    }
                    if (this.getChar().deities.indexOf("Trickery")) {
                        classSkills.push(skill_1.Skill.BLUFF);
                        classSkills.push(skill_1.Skill.DISGUISE);
                        classSkills.push(skill_1.Skill.HIDE);
                    }
                    return classSkills;
                };
                CharService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CharService);
                return CharService;
            }());
            exports_1("CharService", CharService);
        }
    }
});
//# sourceMappingURL=char.service.js.map