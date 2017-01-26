System.register(['@angular/core', './abilities/abilities.component', './header/header.component', './skills/skills.component', './ac/ac.component', './armor/armor.component', './hp/hp.component', './weapons/weapons.component', './shield/shield.component', './attacks/attacks.component', './saves/saves.component', './char.service'], function(exports_1, context_1) {
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
    var core_1, abilities_component_1, header_component_1, skills_component_1, ac_component_1, armor_component_1, hp_component_1, weapons_component_1, shield_component_1, attacks_component_1, saves_component_1, char_service_1;
    var CharComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abilities_component_1_1) {
                abilities_component_1 = abilities_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            },
            function (ac_component_1_1) {
                ac_component_1 = ac_component_1_1;
            },
            function (armor_component_1_1) {
                armor_component_1 = armor_component_1_1;
            },
            function (hp_component_1_1) {
                hp_component_1 = hp_component_1_1;
            },
            function (weapons_component_1_1) {
                weapons_component_1 = weapons_component_1_1;
            },
            function (shield_component_1_1) {
                shield_component_1 = shield_component_1_1;
            },
            function (attacks_component_1_1) {
                attacks_component_1 = attacks_component_1_1;
            },
            function (saves_component_1_1) {
                saves_component_1 = saves_component_1_1;
            },
            function (char_service_1_1) {
                char_service_1 = char_service_1_1;
            }],
        execute: function() {
            CharComponent = (function () {
                function CharComponent(charService) {
                    this.charService = charService;
                }
                CharComponent.prototype.download = function () {
                    // var json = CharSerializer.serializeChar(this.charService.getChar());
                    // var blob = new Blob([json], {type: "application/json"});
                    // var url = window.URL.createObjectURL(blob);
                    // var a = document.createElement('a');
                    // a.href = url;
                    // a.download = this.charService.getChar().name + ".json";
                    // document.body.appendChild(a);
                    // a.click();
                    // document.body.removeChild(a);
                    // window.URL.revokeObjectURL(url);
                };
                CharComponent.prototype.upload = function () {
                    // var that = this;
                    // var reader = new FileReader();
                    // reader.onload = function(){
                    //     that.charService.setChar(CharSerializer.deserializeChar(event.target.result));
                    // };
                    // reader.readAsText(event.target.files[0]);
                };
                CharComponent = __decorate([
                    core_1.Component({
                        selector: 'char',
                        templateUrl: './app/char/char.component.html',
                        directives: [
                            abilities_component_1.AbilitiesComponent, header_component_1.HeaderComponent, ac_component_1.ACComponent, armor_component_1.ArmorComponent, attacks_component_1.AttacksComponent, hp_component_1.HPComponent,
                            weapons_component_1.WeaponsComponent, shield_component_1.ShieldComponent, skills_component_1.SkillsComponent, saves_component_1.SavesComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [char_service_1.CharService])
                ], CharComponent);
                return CharComponent;
            }());
            exports_1("CharComponent", CharComponent);
        }
    }
});
//# sourceMappingURL=char.component.js.map