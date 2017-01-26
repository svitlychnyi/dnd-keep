System.register(['@angular/core', "./skill", "../char.service"], function(exports_1, context_1) {
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
    var core_1, skill_1, char_service_1;
    var SkillsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skill_1_1) {
                skill_1 = skill_1_1;
            },
            function (char_service_1_1) {
                char_service_1 = char_service_1_1;
            }],
        execute: function() {
            SkillsComponent = (function () {
                function SkillsComponent(charService) {
                    this.charService = charService;
                    this.skills = skill_1.Skill.ALL;
                }
                SkillsComponent.prototype.isClassSkill = function (skill) {
                    return this.charService.getClassSkills().indexOf(skill) !== -1;
                };
                SkillsComponent.prototype.maxClassSkillRank = function () {
                    return this.charService.getTotalLevel() + 3;
                };
                SkillsComponent.prototype.maxCrossClassSkillRank = function () {
                    return Math.round(this.maxClassSkillRank() / 2.1);
                };
                SkillsComponent = __decorate([
                    core_1.Component({
                        selector: 'skills',
                        templateUrl: './app/char/skills/skills.component.html',
                    }), 
                    __metadata('design:paramtypes', [char_service_1.CharService])
                ], SkillsComponent);
                return SkillsComponent;
            }());
            exports_1("SkillsComponent", SkillsComponent);
            ;
        }
    }
});
//# sourceMappingURL=skills.component.js.map