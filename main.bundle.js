var ac_main =
webpackJsonpac__name_([0],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(2);

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(444);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppState);



/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbilityService; });

var AbilityService = (function () {
    function AbilityService() {
    }
    AbilityService.getModifier = function (score) {
        score = score || 10;
        return ((score / 2) >> 0) - 5;
    };
    return AbilityService;
}());
AbilityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AbilityService);



/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__char_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charSerializer__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharComponent; });



var CharComponent = (function () {
    function CharComponent(charService) {
        this.charService = charService;
    }
    CharComponent.prototype.download = function () {
        var json = __WEBPACK_IMPORTED_MODULE_2__charSerializer__["a" /* CharSerializer */].serializeChar(this.charService.getChar());
        var blob = new Blob([json], { type: "application/json" });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = this.charService.getChar().name + ".json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };
    CharComponent.prototype.upload = function (event) {
        var that = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            that.charService.setChar(__WEBPACK_IMPORTED_MODULE_2__charSerializer__["a" /* CharSerializer */].deserializeChar(readerEvent.target.result));
        };
        reader.readAsText(event.target.files[0]);
    };
    return CharComponent;
}());
CharComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'char',
        template: __webpack_require__(76)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__char_service__["a" /* CharService */]])
], CharComponent);



/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(143);

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(770);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abilities_ability_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_classes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skills_skill__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_item__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharService; });





var CharService = (function () {
    function CharService() {
        this.char = {
            name: "Oberon",
            player: "Gena",
            race: "Human",
            size: "m",
            sex: "Male",
            eyes: "Green",
            vision: "Low-light",
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
            xp: 44100,
            dr: "5/evil",
            sr: 21,
            armor_bonuses: {
                natural: 1,
                deflection: 2,
                misc: 0,
                size: 0,
                luck: 1
            },
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
            armor: new __WEBPACK_IMPORTED_MODULE_4__items_item__["a" /* Item */]("Breast Plate", 4),
            shield: new __WEBPACK_IMPORTED_MODULE_4__items_item__["a" /* Item */]("Heavy Shield", 2)
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
        return __WEBPACK_IMPORTED_MODULE_1__abilities_ability_service__["a" /* AbilityService */].getModifier(totalAbility);
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
            var charClass = __WEBPACK_IMPORTED_MODULE_2__classes_classes__["a" /* Classes */].getClass(this.getChar().classes[className].name);
            totalBAB += charClass.getBAB(this.getChar().classes[className].level);
        }
        return totalBAB;
    };
    CharService.prototype.getSave = function (ability) {
        var totalSave = 0;
        for (var className in this.getChar().classes) {
            var charClass = __WEBPACK_IMPORTED_MODULE_2__classes_classes__["a" /* Classes */].getClass(this.getChar().classes[className].name);
            totalSave += charClass.getSave(ability, this.getChar().classes[className].level);
        }
        return totalSave;
    };
    CharService.prototype.getTotalSkillRank = function (skill) {
        return (Number(this.getChar().skills[skill.getName()]) || 0)
            + (Number(this.getChar().skills_misc[skill.getName()]) || 0)
            + Number(this.getAbilityModifier(skill.getAbility()));
    };
    CharService.prototype.getClassSkills = function () {
        var classSkills = [];
        for (var classKey in this.getChar().classes) {
            classSkills = classSkills.concat(__WEBPACK_IMPORTED_MODULE_2__classes_classes__["a" /* Classes */].getClass(this.getChar().classes[classKey].name).getSkills());
        }
        if (this.getChar().deities.indexOf("Trickery")) {
            classSkills.push(__WEBPACK_IMPORTED_MODULE_3__skills_skill__["a" /* Skill */].BLUFF);
            classSkills.push(__WEBPACK_IMPORTED_MODULE_3__skills_skill__["a" /* Skill */].DISGUISE);
            classSkills.push(__WEBPACK_IMPORTED_MODULE_3__skills_skill__["a" /* Skill */].HIDE);
        }
        return classSkills;
    };
    CharService.prototype.getSizeArmorModifier = function () {
    };
    ;
    return CharService;
}());
CharService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CharService);



/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(442);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/*
 * Angular 2 decorators and services
 */


/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(85)
        ],
        template: "\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppState */]])
], AppComponent);

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_resolver__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_styles_scss__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styles_headings_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__styles_headings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__char_char_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__char_abilities_abilities_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__char_ac_ac_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__char_armor_armor_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__char_attacks_attacks_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__char_abilities_ability_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__char_header_header_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__char_hp_hp_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__char_saves_saves_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__char_shield_shield_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__char_skills_skills_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__char_weapons_weapons_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__char_char_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });






/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component


















// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_9__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__char_char_component__["a" /* CharComponent */],
            __WEBPACK_IMPORTED_MODULE_14__char_abilities_abilities_component__["a" /* AbilitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__char_ac_ac_component__["a" /* ACComponent */],
            __WEBPACK_IMPORTED_MODULE_16__char_armor_armor_component__["a" /* ArmorComponent */],
            __WEBPACK_IMPORTED_MODULE_17__char_attacks_attacks_component__["a" /* AttacksComponent */],
            __WEBPACK_IMPORTED_MODULE_19__char_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__char_hp_hp_component__["a" /* HPComponent */],
            __WEBPACK_IMPORTED_MODULE_21__char_saves_saves_component__["a" /* SavesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__char_shield_shield_component__["a" /* ShieldComponent */],
            __WEBPACK_IMPORTED_MODULE_23__char_skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__char_weapons_weapons_component__["a" /* WeaponsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__angular_router__["PreloadAllModules"] })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_18__char_abilities_ability_service__["a" /* AbilityService */],
            __WEBPACK_IMPORTED_MODULE_25__char_char_service__["a" /* CharService */]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ability; });
var Ability = (function () {
    function Ability(name) {
        this.name = name;
        if (this.name !== "") {
            Ability.ALL.push(this);
        }
    }
    Ability.prototype.getName = function () {
        return this.name;
    };
    ;
    return Ability;
}());

Ability.ALL = [];
Ability.STR = new Ability("str");
Ability.DEX = new Ability("dex");
Ability.CON = new Ability("con");
Ability.INT = new Ability("int");
Ability.WIS = new Ability("wis");
Ability.CHA = new Ability("cha");
Ability.NONE = new Ability("");


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__char_char_component__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });

var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__char_char_component__["a" /* CharComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__char_char_component__["a" /* CharComponent */] }
];


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abitly__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__char_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbilitiesComponent; });



var AbilitiesComponent = (function () {
    function AbilitiesComponent(_charService) {
        this._charService = _charService;
        this.abilities = __WEBPACK_IMPORTED_MODULE_1__abitly__["a" /* Ability */].ALL;
    }
    ;
    return AbilitiesComponent;
}());
AbilitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'abilities',
        template: __webpack_require__(72),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__char_service__["a" /* CharService */]])
], AbilitiesComponent);



/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__char_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abilities_abitly__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_classes__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACComponent; });




var ACComponent = (function () {
    function ACComponent(charService) {
        this.charService = charService;
        this.dex = __WEBPACK_IMPORTED_MODULE_2__abilities_abitly__["a" /* Ability */].DEX;
    }
    ACComponent.prototype.getWisdomModifier = function () {
        var isMonk = false;
        for (var classKey in this.charService.getChar().classes) {
            isMonk = this.charService.getChar().classes[classKey].name == __WEBPACK_IMPORTED_MODULE_3__classes_classes__["a" /* Classes */].MONK.getName()
                ? true
                : isMonk;
        }
        return isMonk
            ? this.charService.getAbilityModifier(__WEBPACK_IMPORTED_MODULE_2__abilities_abitly__["a" /* Ability */].WIS)
            : 0;
    };
    ACComponent.prototype.getAC = function () {
        return 10
            + Number(this.charService.getChar().armor.bonus)
            + Number(this.charService.getChar().shield.bonus)
            + Number(this.charService.getAbilityModifier(__WEBPACK_IMPORTED_MODULE_2__abilities_abitly__["a" /* Ability */].DEX))
            + Number((this.getWisdomModifier() || 0))
            + Number((this.charService.getChar().armor_bonuses.deflection || 0))
            + Number((this.charService.getChar().armor_bonuses.natural || 0))
            + Number((this.charService.getChar().armor_bonuses.misc || 0))
            + Number((this.charService.getChar().armor_bonuses.size || 0))
            + Number((this.charService.getChar().armor_bonuses.luck || 0));
    };
    ACComponent.prototype.getFF = function () {
        return 10
            + Number(this.charService.getChar().armor.bonus)
            + Number(this.charService.getChar().shield.bonus)
            + Number((this.getWisdomModifier() || 0))
            + Number((this.charService.getChar().armor_bonuses.natural || 0))
            + Number((this.charService.getChar().armor_bonuses.misc || 0))
            + Number((this.charService.getChar().armor_bonuses.size || 0))
            + Number((this.charService.getChar().armor_bonuses.luck || 0));
    };
    ACComponent.prototype.getTouch = function () {
        return 10
            + Number(this.charService.getAbilityModifier(__WEBPACK_IMPORTED_MODULE_2__abilities_abitly__["a" /* Ability */].DEX))
            + Number((this.getWisdomModifier() || 0))
            + Number((this.charService.getChar().armor_bonuses.deflection || 0))
            + Number((this.charService.getChar().armor_bonuses.misc || 0))
            + Number((this.charService.getChar().armor_bonuses.size || 0))
            + Number((this.charService.getChar().armor_bonuses.luck || 0));
    };
    return ACComponent;
}());
ACComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ac',
        template: __webpack_require__(73)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__char_service__["a" /* CharService */]])
], ACComponent);

;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__char_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorComponent; });


var ArmorComponent = (function () {
    function ArmorComponent(charService) {
        this.charService = charService;
    }
    return ArmorComponent;
}());
ArmorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'armor',
        template: __webpack_require__(74)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__char_service__["a" /* CharService */]])
], ArmorComponent);

;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attack; });

var Attack = (function () {
    function Attack(name, ability) {
        this.name = name;
        this.ability = ability;
        Attack.ALL.push(this);
    }
    Attack.prototype.getName = function () {
        return this.name;
    };
    Attack.prototype.getAbility = function () {
        return this.ability;
    };
    return Attack;
}());

Attack.ALL = [];
Attack.MELEE = new Attack("Melee", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].STR);
Attack.RANGED = new Attack("Ranged", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attack__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttacksComponent; });


var AttacksComponent = (function () {
    function AttacksComponent() {
        this.attacks = __WEBPACK_IMPORTED_MODULE_1__attack__["a" /* Attack */].ALL;
    }
    return AttacksComponent;
}());
AttacksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'attacks',
        template: __webpack_require__(75)
    })
], AttacksComponent);

;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharSerializer; });
/**
 * Created by sargon on 7/18/16.
 */
var CharSerializer = (function () {
    function CharSerializer() {
    }
    CharSerializer.serializeChar = function (char) {
        return JSON.stringify(char);
    };
    CharSerializer.deserializeChar = function (charStr) {
        console.log(charStr);
        return JSON.parse(charStr);
    };
    return CharSerializer;
}());



/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__char_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_classes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__size_sizes__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });




var HeaderComponent = (function () {
    function HeaderComponent(charService) {
        this.charService = charService;
        this.sizes = __WEBPACK_IMPORTED_MODULE_3__size_sizes__["a" /* Sizes */].ALL;
        this.classes = __WEBPACK_IMPORTED_MODULE_2__classes_classes__["a" /* Classes */].ALL;
        this.levels = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var i = 0;
        while (i < 20) {
            this.levels.push(++i);
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__(77),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__char_service__["a" /* CharService */]])
], HeaderComponent);

;


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abilities_abitly__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__char_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HPComponent; });



var HPComponent = (function () {
    function HPComponent(charService) {
        this.charService = charService;
        this.dex = __WEBPACK_IMPORTED_MODULE_1__abilities_abitly__["a" /* Ability */].DEX;
    }
    ;
    // N*(N-1)*500
    HPComponent.prototype.getNextLevelXP = function () {
        return this.charService.getTotalLevel() * (this.charService.getTotalLevel() - 1) * 500;
    };
    return HPComponent;
}());
HPComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hp',
        template: __webpack_require__(78),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__char_service__["a" /* CharService */]])
], HPComponent);

;


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Save; });

var Save = (function () {
    function Save(name, label, ability) {
        this.name = name;
        this.label = label;
        this.ability = ability;
        Save.ALL.push(this);
    }
    ;
    Save.prototype.getName = function () {
        return this.name;
    };
    Save.prototype.getLabel = function () {
        return this.label;
    };
    Save.prototype.getAbility = function () {
        return this.ability;
    };
    return Save;
}());

Save.ALL = [];
Save.FORTITUDE = new Save("fortitude", "Fortitude", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CON);
Save.REFLEX = new Save("reflex", "Reflex", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Save.WILLPOWER = new Save("willpower", "Willpower", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].WIS);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__char_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavesComponent; });



var SavesComponent = (function () {
    function SavesComponent(charService) {
        this.charService = charService;
        this.saves = __WEBPACK_IMPORTED_MODULE_1__save__["a" /* Save */].ALL;
    }
    ;
    return SavesComponent;
}());
SavesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'saves',
        template: __webpack_require__(79)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__char_service__["a" /* CharService */]])
], SavesComponent);

;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__char_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShieldComponent; });


var ShieldComponent = (function () {
    function ShieldComponent(charService) {
        this.charService = charService;
    }
    ;
    return ShieldComponent;
}());
ShieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shield',
        template: __webpack_require__(80)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__char_service__["a" /* CharService */]])
], ShieldComponent);

;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skill__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__char_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });



var SkillsComponent = (function () {
    function SkillsComponent(charService) {
        this.charService = charService;
        this.skills = __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */].ALL;
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
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'skills',
        template: __webpack_require__(81),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__char_service__["a" /* CharService */]])
], SkillsComponent);

;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weapon; });
var Weapon = (function () {
    function Weapon() {
    }
    return Weapon;
}());



/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weapon__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponsComponent; });


var WeaponsComponent = (function () {
    function WeaponsComponent() {
        this.weapons = [new __WEBPACK_IMPORTED_MODULE_1__weapon__["a" /* Weapon */](), new __WEBPACK_IMPORTED_MODULE_1__weapon__["a" /* Weapon */](), new __WEBPACK_IMPORTED_MODULE_1__weapon__["a" /* Weapon */]()];
    }
    return WeaponsComponent;
}());
WeaponsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'weapons',
        template: __webpack_require__(82)
    })
], WeaponsComponent);

;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesFormulas; });
/**
 * Created by sargon on 7/16/16.
 */
var ClassesFormulas = (function () {
    function ClassesFormulas() {
    }
    ClassesFormulas.none = function (level) {
        return 0;
    };
    ClassesFormulas.getHighBAB = function (level) {
        return Number(level);
    };
    ClassesFormulas.getMediumBAB = function (level) {
        level = Number(level);
        return level > 0
            ? (level - 1) - Math.round((level - 1) / 4.1)
            : 0;
    };
    ClassesFormulas.getLowBAB = function (level) {
        level = Number(level);
        return level > 0
            ? (level - 1) - Math.round((level - 1) / 2.1)
            : 0;
    };
    ClassesFormulas.getHighSave = function (level) {
        level = Number(level);
        return level > 0
            ? 2 + ClassesFormulas.getLowBAB(level)
            : 0;
    };
    ClassesFormulas.getLowSave = function (level) {
        level = Number(level);
        return level > 0
            ? Math.round(level / 3.1)
            : 0;
    };
    return ClassesFormulas;
}());



/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * Created by sargon on 7/16/16.
 */
var Item = (function () {
    function Item(name, bonus) {
        this.name = name;
        this.bonus = bonus;
    }
    Item.prototype.getName = function () {
        return this.name;
    };
    ;
    Item.prototype.getBonus = function () {
        return this.bonus;
    };
    ;
    return Item;
}());



/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sizes; });
/**
 * Created by gsvitlychnyi on 1/28/17.
 */
var Sizes = (function () {
    function Sizes(name, description, armorModifier, attackModifier, specialAttackModifier, hideModifier, reach) {
        this.name = name || '';
        this.description = description || '';
        this.armorModifier = Number(armorModifier || 0);
        this.attackModifier = Number(attackModifier || 0);
        this.specialAttackModifier = Number(specialAttackModifier || 0);
        this.reach = Number(reach || 5);
        Sizes.ALL.push(this);
    }
    Sizes.getClass = function (name) {
        return Sizes.ALL.find(function (charSize) {
            return charSize.getName() === name;
        });
    };
    Sizes.prototype.getName = function () {
        return this.name;
    };
    Sizes.prototype.getDescription = function () {
        return this.description;
    };
    Sizes.prototype.getArmorModifier = function () {
        return Number(this.armorModifier);
    };
    Sizes.prototype.getAttackModifier = function () {
        return Number(this.attackModifier);
    };
    Sizes.prototype.getSpecialAttackModifier = function () {
        return Number(this.specialAttackModifier);
    };
    Sizes.prototype.getHideModifier = function () {
        return Number(this.hideModifier);
    };
    Sizes.prototype.getReach = function () {
        return Number(this.reach);
    };
    return Sizes;
}());

Sizes.ALL = [];
Sizes.FINE = new Sizes('f', 'Fine', 8, 8, -16, 16, 0);
Sizes.DIMINUTIVE = new Sizes('d', 'Diminutive', 4, 4, -12, 12, 0);
Sizes.TINY = new Sizes('t', 'Tiny', 2, 2, -8, 8, 0);
Sizes.SMALL = new Sizes('s', 'Small', 1, 1, -4, 4, 5);
Sizes.MEDIUM = new Sizes('m', 'Medium', 0, 0, 0, 0, 5);
Sizes.LARGE = new Sizes('l', 'Large', -1, -1, 4, -4, 10);
Sizes.HUGE = new Sizes('h', 'Huge', -2, -2, 8, -8, 15);
Sizes.GARGANTUAN = new Sizes('g', 'Gargantuan', -4, -4, 12, -12, 20);
Sizes.COLOSSAL = new Sizes('c', 'Colossal', -8, -8, 16, -16, 30);


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css);", ""]);

// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\nnav {\n  margin-top: 16px; }\n\nnav a {\n  background-color: #00838F;\n  color: white;\n  padding: 8px 16px;\n  margin: 8px;\n  vertical-align: middle;\n  line-height: 1.25;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n\n/* app css stylesheet */\n.menu {\n  list-style: none;\n  border-bottom: 0.1em solid black;\n  margin-bottom: 2em;\n  padding: 0 0 0.5em; }\n\n.menu:before {\n  content: \"[\"; }\n\n.menu:after {\n  content: \"]\"; }\n\n.menu > li {\n  display: inline; }\n\n.menu > li:before {\n  content: \"|\";\n  padding-right: 0.3em; }\n\n.menu > li:nth-child(1):before {\n  content: \"\";\n  padding: 0; }\n\nbody {\n  max-width: 1100px;\n  min-width: 1100px;\n  display: block;\n  margin: auto;\n  padding: 30px; }\n\n.no-gutter .row > [class*='col-'] {\n  padding-right: 5px;\n  padding-left: 5px; }\n\n.form-control {\n  text-align: center; }\n\n.skillTable {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 230px; }\n\n.skillTable .row {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.skillTable input[type=checkbox] {\n  margin: 0;\n  padding: 0; }\n\n.skillTable .input-sm {\n  height: 13px;\n  font-size: 11px;\n  line-height: 11px;\n  padding: 0px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  box-shadow: none; }\n\np,\nlabel {\n  margin: 0 0 2px; }\n\n.row {\n  margin-top: 4px; }\n\n.inverse {\n  background: black !important;\n  color: white !important;\n  font-weight: 600;\n  border-radius: 9px 9px 0 0; }\n\nselect.input-sm {\n  height: 25px !important; }\n\n@media print {\n  .download {\n    display: none !important; }\n  button {\n    display: none !important; }\n  input,\n  textarea {\n    box-shadow: none !important;\n    outline: none !important; }\n  .skillTable input {\n    border-bottom: 1px dashed !important; }\n  .inverse,\n  .weapon label {\n    -webkit-print-color-adjust: exact; }\n  .str input,\n  .dex input,\n  .con input,\n  .int input,\n  .wis input,\n  .cha input {\n    -webkit-print-color-adjust: exact; } }\n\n.avatar {\n  margin: 0 0 0 45px;\n  position: absolute; }\n\n.input-sm {\n  height: 25px; }\n\n.weapon {\n  margin-top: 10px;\n  padding: 0 10px; }\n\n.weapon .row {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.weapon label {\n  background: black !important;\n  color: white !important;\n  width: 100%; }\n\n.weapon .header label {\n  margin-top: 10px; }\n\n.weapon .row > [class*='col-'] {\n  padding-right: 0;\n  padding-left: 0; }\n\n.str input {\n  background-color: rgba(255, 0, 0, 0.1) !important; }\n\n.dex input {\n  background-color: rgba(51, 153, 51, 0.1) !important; }\n\n.con input {\n  background-color: rgba(0, 102, 255, 0.1) !important; }\n\n.int input {\n  background-color: rgba(204, 51, 255, 0.1) !important; }\n\n.wis input {\n  background-color: rgba(255, 102, 0, 0.1) !important; }\n\n.cha input {\n  background-color: rgba(255, 255, 0, 0.1) !important; }\n\ninput[type=\"number\"] {\n  padding: 1px 0px; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  /* display: none; <- Crashes Chrome on hover */\n  -webkit-appearance: none; }\n\n.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 5px;\n  padding-left: 5px; }\n", ""]);

// exports


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\na.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "h1 {\n  color: #00BCD4;\n}", ""]);

// exports


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-3\"></div>\n    <div class=\"col-xs-2\"><label class=\"text-uppercase\">Ability Score</label></div>\n    <div class=\"col-xs-2\"><label class=\"text-uppercase\">Ability Modifier</label></div>\n    <div class=\"col-xs-2\"><label class=\"text-uppercase\">Ench Score</label></div>\n    <div class=\"col-xs-2\"><label class=\"text-uppercase\">Temp Score</label></div>\n</div>\n<div class=\"row\" *ngFor=\"let ability of abilities\">\n    <div class=\"col-xs-3\">\n        <input type=\"text\" value=\"{{ability.getName()}}\" class=\"form-control input-sm text-uppercase inverse\"/>\n    </div>\n    <div class=\"col-xs-2 {{ability.getName()}}\">\n        <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"_charService.getChar().abilities[ability.getName()]\"/>\n    </div>\n    <div class=\"col-xs-2 {{ability.getName()}}\">\n        <input type=\"text\" readonly class=\"form-control input-sm\" value=\"{{ _charService.getAbilityModifier(ability) }}\"/>\n    </div>\n    <div class=\"col-xs-2 {{ability.getName()}}\">\n        <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"_charService.getChar().ench_abilities[ability.getName()]\"/>\n    </div>\n    <div class=\"col-xs-2 {{ability.getName()}}\">\n        <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"_charService.getChar().tmp_abilities[ability.getName()]\"/>\n    </div>\n</div>"

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-3 col-xs-offset-3\"><label class=\"text-uppercase\">Total</label></div>\n            <div class=\"col-xs-3 col-xs-offset-2\"><label class=\"text-uppercase\">Armor Bonus</label></div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Shield Bonus</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Dex / Wis Modifier</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Defl. Modifier</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Natural Modifier</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Luck Modifier</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Misc Modifier</label></div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-3\"><input type=\"text\" value=\"AC\" class=\"form-control input-sm inverse\"/></div>\n            <div class=\"col-xs-3\"><input type=\"text\" readonly value=\"{{getAC()}}\" class=\"form-control input-sm\"/></div>\n            <div class=\"col-xs-2\"><input type=\"text\" readonly value=\"10\" class=\"form-control input-sm\"/></div>\n            <div class=\"col-xs-3\"><input type=\"text\" readonly value=\"{{charService.getChar().armor.bonus}}\" class=\"form-control input-sm\"/></div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\"><input type=\"text\" readonly value=\"{{charService.getChar().shield.bonus}}\" class=\"form-control input-sm\"/></div>\n            <div class=\"col-xs-2 dex\"><input type=\"text\" readonly value=\"{{charService.getAbilityModifier(dex)}}\" class=\"form-control input-sm\"/></div>\n            <div class=\"col-xs-2\">\n                <input type=\"text\" [(ngModel)]=\"charService.getChar().armor_bonuses.deflection\" class=\"form-control input-sm\"/>\n            </div>\n            <div class=\"col-xs-2\">\n                <input type=\"text\" [(ngModel)]=\"charService.getChar().armor_bonuses.natural\" class=\"form-control input-sm\"/>\n            </div>\n            <div class=\"col-xs-2\">\n                <input type=\"text\" [(ngModel)]=\"charService.getChar().armor_bonuses.luck\" class=\"form-control input-sm\"/>\n            </div>\n            <div class=\"col-xs-2\">\n                <input type=\"text\" [(ngModel)]=\"charService.getChar().armor_bonuses.misc\" class=\"form-control input-sm\"/>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-3\"><input type=\"text\" value=\"FF\" class=\"form-control input-sm inverse\"/></div>\n            <div class=\"col-xs-3\"><input type=\"text\" readonly value=\"{{getFF()}}\" class=\"form-control input-sm\"/></div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2 col-xs-offset-2 wis\">\n                <input type=\"text\" readonly value=\"{{getWisdomModifier()}}\" class=\"form-control input-sm\"/>\n            </div>\n            <div class=\"col-xs-5 col-xs-offset-1\">\n                <input type=\"text\" value=\"Damage Reduction\" class=\"form-control input-sm inverse\"/>\n            </div>\n            <div class=\"col-xs-2\"><input type=\"text\" [(ngModel)]=\"charService.getChar().dr\" class=\"form-control input-sm\"/></div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-3\"><input type=\"text\" value=\"T\" class=\"form-control input-sm inverse\"/></div>\n            <div class=\"col-xs-3\"><input type=\"text\" readonly value=\"{{getTouch()}}\" class=\"form-control input-sm\"/></div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2 col-xs-offset-2 wis\">\n                <input type=\"text\" readonly value=\"{{getWisdomModifier()}}\" class=\"form-control input-sm\"/>\n            </div>\n            <div class=\"col-xs-5 col-xs-offset-1\">\n                <input type=\"text\" value=\"Spell Resistance\" class=\"form-control input-sm inverse\"/>\n            </div>\n            <div class=\"col-xs-2\"><input type=\"text\" [(ngModel)]=\"charService.getChar().sr\" class=\"form-control input-sm\"/></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = "<div class=\"weapon\">\n    <div class=\"row header\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <input class=\"form-control input-sm text-uppercase inverse\" value=\"Armor\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Type</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Armor Bonus</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Max Dex Bonus</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <input class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().armor.name\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" [(ngModel)]=\"charService.getChar().armor.bonus\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Check Penalty</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Spell Failure</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Speed</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Weight</label>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label class=\"text-uppercase\">Special Properties</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-4\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-8\">\n                <label class=\"text-uppercase\">Attack Bonus</label>\n            </div>\n            <div class=\"col-xs-3\">\n                <label class=\"text-uppercase\">Total</label>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">BAB</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Ability Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Size Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Misc Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Temp Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Other Modifiers</label>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\" *ngFor=\"let attack of attacks\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-8\">\n                <input class=\"text-uppercase inverse form-control input-sm\" value=\"{{attack.getName()}}\" />\n            </div>\n            <div class=\"col-xs-3\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2 {{attack.getAbility().getName()}}\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "<div class=\"download\">\n    <button (click)=\"download()\">Download</button>\n    <input id=\"file\" type=\"file\" (change)=\"upload($event)\"/>\n</div>\n\n<header></header>\n\n<div style=\"font-size: 10px; text-align: center\">\n    <div class=\"row\">\n        <div class=\"col-xs-7\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <abilities></abilities>\n                </div>\n                <div class=\"col-xs-6\">\n                    <hp></hp>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-5\">\n            <skills class=\"skillTable\"></skills>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-7\">\n            <ac></ac>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-7\">\n            <saves></saves>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-7\">\n            <attacks></attacks>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-7\">\n            <weapons></weapons>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-7\">\n            <armor></armor>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-7\">\n            <shield></shield>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-8\">\n        <div class=\"row\">\n            <div class=\"col-xs-3\">\n                <input type=\"text\" id=\"charName\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().name\"/>\n                <label for=\"charName\" class=\"text-uppercase\">Character Name</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <select type=\"text\" id=\"class1\" class=\"form-control input-sm\"\n                        [(ngModel)]=\"charService.getChar().classes.class1.name\">\n                    <option *ngFor=\"let charClass of classes\" value=\"{{charClass.getName()}}\">{{charClass.getName()}}</option>\n                </select>\n                <label for=\"class1\" class=\"text-uppercase\">Class</label>\n            </div>\n            <div class=\"col-xs-1\">\n                <select id=\"class1Level\" class=\"form-control input-sm\"\n                        [(ngModel)]=\"charService.getChar().classes.class1.level\">\n                    <option value=\"0\"></option>\n                    <option *ngFor=\"let level of levels\" value=\"{{level}}\">{{level}}</option>\n                </select>\n                <label for=\"class1Level\" class=\"text-uppercase\">Level</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <input type=\"text\" id=\"alignment\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().alignment\"/>\n                <label for=\"alignment\" class=\"text-uppercase\">Alignment</label>\n            </div>\n\n            <div class=\"col-xs-4\">\n                <input type=\"text\" id=\"deities\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().deities\"/>\n                <label for=\"deities\" class=\"text-uppercase\">Deities</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-3\">\n                <div class=\"col-xs-6\">\n                    <input type=\"text\" id=\"race\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().race\"/>\n                    <label for=\"race\" class=\"text-uppercase\">Race</label>\n                </div>\n\n                <div class=\"col-xs-6\">\n                    <select id=\"size\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().size\">\n                        <option *ngFor=\"let size of sizes\" value=\"{{size.getName()}}\">{{size.getDescription()}}</option>\n                    </select>\n                    <label for=\"size\" class=\"text-uppercase\">Size</label>\n                </div>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <select type=\"text\" id=\"class2\" class=\"form-control input-sm\"\n                        [(ngModel)]=\"charService.getChar().classes.class2.name\">\n                    <option *ngFor=\"let charClass of classes\" value=\"{{charClass.getName()}}\">{{charClass.getName()}}</option>\n                </select>\n                <label for=\"class2\" class=\"text-uppercase\">Class</label>\n            </div>\n            <div class=\"col-xs-1\">\n                <select id=\"class2Level\" class=\"form-control input-sm\"\n                        [(ngModel)]=\"charService.getChar().classes.class2.level\">\n                    <option value=\"0\"></option>\n                    <option *ngFor=\"let level of levels\" value=\"{{level}}\">{{level}}</option>\n                </select>\n                <label for=\"class2Level\" class=\"text-uppercase\">Level</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <input type=\"text\" id=\"sex\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().sex\"/>\n                <label for=\"sex\" class=\"text-uppercase\">Sex</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <input type=\"text\" id=\"eyes\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().eyes\"/>\n                <label for=\"eyes\" class=\"text-uppercase\">Eyes</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <input type=\"text\" id=\"heir\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().heir\"/>\n                <label for=\"heir\" class=\"text-uppercase\">Heir</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-3\">\n                <input type=\"text\" id=\"playerName\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().player\"/>\n                <label for=\"playerName\" class=\"text-uppercase\">Player Name</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <select type=\"text\" id=\"class3\" class=\"form-control input-sm\"\n                        [(ngModel)]=\"charService.getChar().classes.class3.name\">\n                    <option *ngFor=\"let charClass of classes\" value=\"{{charClass.getName()}}\">{{charClass.getName()}}</option>\n                </select>\n                <label for=\"class3\" class=\"text-uppercase\">Class</label>\n            </div>\n            <div class=\"col-xs-1\">\n                <select id=\"class3Level\" class=\"form-control input-sm\"\n                        [(ngModel)]=\"charService.getChar().classes.class3.level\">\n                    <option value=\"0\"></option>\n                    <option *ngFor=\"let level of levels\" value=\"{{level}}\">{{level}}</option>\n                </select>\n                <label for=\"class3Level\" class=\"text-uppercase\">Level</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <input type=\"text\" id=\"age\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().age\"/>\n                <label for=\"age\" class=\"text-uppercase\">Age</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <input type=\"text\" id=\"height\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().height\"/>\n                <label for=\"height\" class=\"text-uppercase\">Height</label>\n            </div>\n\n            <div class=\"col-xs-2\">\n                <input type=\"text\" id=\"weight\" class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().weight\"/>\n                <label for=\"weight\" class=\"text-uppercase\">Weight</label>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-3\">\n        <img class=\"img-responsive avatar\"  src=\"app/resources/imgs/{{charService.getChar().avatar}}\">\n    </div>\n</div>\n"

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-4\"></div>\n    <div class=\"col-xs-2\"><p class=\"text-uppercase\">Total</p></div>\n    <div class=\"col-xs-2\"><p class=\"text-uppercase\">Ability Modifier</p></div>\n    <div class=\"col-xs-2\"><p class=\"text-uppercase\">Misc Modifier</p></div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-4\"><input type=\"text\" readonly value=\"Initiative\" class=\"form-control input-sm inverse\"/></div>\n    <div class=\"col-xs-2\"><input type=\"text\" readonly value=\"{{ (charService.getChar().initiative || 0) + charService.getAbilityModifier(dex) }}\" class=\"form-control input-sm\"/></div>\n    <div class=\"col-xs-2 {{dex.getName()}}\"><input type=\"text\" readonly value=\"{{ charService.getAbilityModifier(dex) }}\" class=\"form-control input-sm\"/></div>\n    <div class=\"col-xs-2\"><input type=\"number\" [(ngModel)]=\"charService.getChar().initiative\" class=\"form-control input-sm\"/></div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-4\"><input type=\"text\" readonly value=\"Speed\" class=\"form-control input-sm inverse\"/></div>\n    <div class=\"col-xs-2\"><input type=\"text\" readonly value=\"{{charService.getChar().speed + (charService.getChar().speed_bonus || 0)}}\" class=\"form-control input-sm\"/></div>\n    <div class=\"col-xs-2\"><input type=\"number\" [(ngModel)]=\"charService.getChar().speed\" class=\"form-control input-sm\"/></div>\n    <div class=\"col-xs-2\"><input type=\"number\" [(ngModel)]=\"charService.getChar().speed_bonus\" class=\"form-control input-sm\"/></div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-4\"><input type=\"text\" value=\"HP\" class=\"form-control input-sm inverse\"/></div>\n    <div class=\"col-xs-2\"><input type=\"number\" [(ngModel)]=\"charService.getChar().hp_max\" class=\"form-control input-sm\"/></div>\n    <div class=\"col-xs-4\"><input type=\"number\" [(ngModel)]=\"charService.getChar().hp\" class=\"form-control input-sm\"/></div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-4\"><input type=\"text\" value=\"XP\" class=\"form-control input-sm inverse\"/></div>\n    <div class=\"col-xs-3\"><input type=\"text\" readonly value=\"{{getNextLevelXP()}}\" class=\"form-control input-sm\"/></div>\n    <div class=\"col-xs-3\"><input type=\"number\" [(ngModel)]=\"charService.getChar().xp\" class=\"form-control input-sm\"/></div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-6\"><input type=\"text\" value=\"Base Attack Bonus\" class=\"form-control input-sm inverse\"/></div>\n    <div class=\"col-xs-4\"><input type=\"text\" readonly value=\"{{charService.getBAB()}}\" class=\"form-control input-sm\"/></div>\n</div>"

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-8\">\n                <label class=\"text-uppercase\">Saving Throws</label>\n            </div>\n            <div class=\"col-xs-3\">\n                <label class=\"text-uppercase\">Total</label>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Base Save</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Ability Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Magic Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Misc Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Temp Modifier</label>\n            </div>\n            <div class=\"col-xs-2\">\n                <label class=\"text-uppercase\">Other Modifiers</label>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\" *ngFor=\"let save of saves\">\n    <div class=\"col-xs-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-8\">\n                <input class=\"text-uppercase inverse form-control input-sm\" value=\"{{save.getLabel()}}\" />\n            </div>\n            <div class=\"col-xs-3\">\n                <input readonly class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\">\n                <input readonly class=\"text-uppercase form-control input-sm\" value=\"{{charService.getSave(save.getAbility())}}\" />\n            </div>\n            <div class=\"col-xs-2 {{save.getAbility().getName()}}\">\n                <input readonly class=\"text-uppercase form-control input-sm\" value=\"{{charService.getAbilityModifier(save.getAbility())}}\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n            <div class=\"col-xs-2\">\n                <input class=\"text-uppercase form-control input-sm\" value=\"\" />\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });

var Skill = (function () {
    function Skill(name, label, ability) {
        this.name = name;
        this.label = label;
        this.ability = ability;
        Skill.ALL.push(this);
    }
    ;
    Skill.prototype.getName = function () {
        return this.name;
    };
    Skill.prototype.getLabel = function () {
        return this.label;
    };
    ;
    Skill.prototype.getAbility = function () {
        return this.ability;
    };
    ;
    return Skill;
}());

Skill.ALL = [];
Skill.ALCHEMY = new Skill("alchemy", "Alchemy", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.ANIMAL_EMPATHY = new Skill("animalEmpathy", "Animal Empathy", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.APPRISE = new Skill("apprise", "Apprise", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.BALANCE = new Skill("balance", "Balance", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.BLUFF = new Skill("bluff", "Bluff", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.CLIMB = new Skill("climb", "Climb", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].STR);
Skill.CONCENTRATION = new Skill("concentration", "Concentration", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CON);
Skill.CRAFT_1 = new Skill("craft1", "Craft", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.DECIPHER_SCRIPT = new Skill("decipherScript", "Decipher Script", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.DIPLOMACY = new Skill("diplomacy", "Diplomacy", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.DISABLE_DEVICE = new Skill("disableDevice", "Disable Device", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.DISGUISE = new Skill("disguise", "disguise", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.ESCAPE_ARTIST = new Skill("escapeArtist", "Escape Artist", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.FORGERY = new Skill("forgery", "Forgery", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.GATHER_INFORMATION = new Skill("gatherInformation", "Gather Information", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.HANDLE_ANIMAL = new Skill("handleAnimal", "Handle Animal", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.HEAL = new Skill("heal", "Heal", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.HIDE = new Skill("hide", "Hide", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.INNUENDO = new Skill("innuendo", "Innuendo", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].WIS);
Skill.INTIMIDATE = new Skill("intimidate", "Intimidate", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.INTUIT_DIRECTION = new Skill("intuitDirection", "Intuit Direction", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].WIS);
Skill.JUMP = new Skill("jump", "Jump", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].STR);
Skill.KNOWLEDGE_ARC = new Skill("knowledgeArc", "Knowledge (Arcana)", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.KNOWLEDGE_NATURE = new Skill("knowledgeNature", "Knowledge (Nature)", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.KNOWLEDGE_RELIGION = new Skill("knowledgeReligion", "Knowledge (Religion)", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.KNOWLEDGE_PLANAR = new Skill("knowledgePlanar", "Knowledge (Planar)", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.KNOWLEDGE_HISTORY = new Skill("knowledgeHistory", "Knowledge (History)", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.KNOWLEDGE_3 = new Skill("knowledge3", "Knowledge", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.KNOWLEDGE_4 = new Skill("knowledge4", "Knowledge", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.KNOWLEDGE_5 = new Skill("knowledge5", "Knowledge", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.LISTEN = new Skill("listen", "Listen", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].WIS);
Skill.MOVE_SILENTLY = new Skill("moveSilently", "Move Silently", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.OPEN_LOCK = new Skill("openLock", "Open Lock", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.PERFORM = new Skill("perform", "Perform", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.PICK_POCKETS = new Skill("pickPockets", "Pick Pockets", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.PROFESSION_1 = new Skill("profession1", "Profession", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.PROFESSION_2 = new Skill("profession2", "Profession", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.PROFESSION_3 = new Skill("profession3", "Profession", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.READ_LIPS = new Skill("readLips", "Read Lips", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.RIDE = new Skill("ride", "Ride", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.SCRY = new Skill("scry", "Scry", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.SEARCH = new Skill("search", "Search", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.SENSE_MOTIVE = new Skill("senseMotive", "Sense Motive", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].WIS);
Skill.SPEAK_LANGUAGE = new Skill("speakLanguage", "Speak Language", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.SPELLCRAFT = new Skill("spellcraft", "Spellcraft", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.SPOT = new Skill("spot", "Spot", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].WIS);
Skill.SWIM = new Skill("swim", "Swim", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].STR);
Skill.TUMBLE = new Skill("tumble", "Tumble", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.USE_MAGIC_DEVICE = new Skill("useMagicDevice", "Use Magic Device", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].CHA);
Skill.USE_ROPE = new Skill("useRope", "Use Rope", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].DEX);
Skill.WILDERNESS_LORE = new Skill("wildernessLore", "Wilderness Lore", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].WIS);
Skill.PLACEHOLDER_1 = new Skill("placeholder1", "", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);
Skill.PLACEHOLDER_2 = new Skill("placeholder2", "", __WEBPACK_IMPORTED_MODULE_0__abilities_abitly__["a" /* Ability */].INT);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = "<div class=\"weapon\">\n    <div class=\"row header\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <input class=\"form-control input-sm text-uppercase inverse\" value=\"Shield\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Type</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Armor Bonus</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Max Dex Bonus</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <input class=\"form-control input-sm\" [(ngModel)]=\"charService.getChar().shield.name\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" [(ngModel)]=\"charService.getChar().shield.bonus\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Check Penalty</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Spell Failure</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Weight</label>\n                </div>\n                <div class=\"col-xs-6\">\n                    <label class=\"text-uppercase\">Special Properties</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-6\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-4 col-xs-offset-1\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\"></div>\n            <div class=\"col-xs-5 col-xs-offset-1\"><label class=\"text-uppercase\">Skills</label></div>\n            <div class=\"col-xs-3\"><label class=\"text-uppercase\">Class</label></div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Cross Class</label></div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-4 col-xs-offset-1\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\"></div>\n            <div class=\"col-xs-5 col-xs-offset-1\"><label class=\"text-uppercase\">Max Ranks</label></div>\n            <div class=\"col-xs-3\"><input class=\"form-control input-sm\" value=\"{{maxClassSkillRank()}}\"/></div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\"><input class=\"form-control input-sm\" value=\"{{maxCrossClassSkillRank()}}\"/></div>\n            <div class=\"col-xs-2\"><label class=\"input-sm\" class=\"text-uppercase\">Total</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Skill ranks</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Ability Modifier</label></div>\n            <div class=\"col-xs-2\"><label class=\"text-uppercase\">Misc Modifier</label></div>\n        </div>\n    </div>\n</div>\n<div class=\"row\" *ngFor=\"let skill of skills\">\n    <div class=\"col-xs-4 col-xs-offset-1\">\n        <div class=\"row\">\n            <div class=\"col-xs-2\"><input type=\"checkbox\" [checked]=\"isClassSkill(skill)\" disabled></div>\n            <div class=\"col-xs-10\" style=\"text-align: left\"><label class=\"input-sm\">{{skill.getLabel()}}</label></div>\n        </div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"row\">\n            <div class=\"col-xs-2 {{skill.getAbility().getName()}}\">\n                <input type=\"text\" class=\"text-uppercase form-control input-sm\" value=\"{{skill.getAbility().getName()}}\"/>\n            </div>\n            <div class=\"col-xs-2\"><input type=\"text\" class=\"form-control input-sm\"\n                                         value=\"{{ charService.getTotalSkillRank(skill) }}\"/></div>\n            <div class=\"col-xs-2\"><input type=\"text\" class=\"form-control input-sm\"\n                                         [(ngModel)]=\"charService.getChar().skills[skill.getName()]\"/></div>\n            <div class=\"col-xs-2\"><input type=\"text\" class=\"form-control input-sm\"\n                                         value=\"{{ charService.getAbilityModifier(skill.getAbility()) }}\"/></div>\n            <div class=\"col-xs-2\"><input type=\"text\" class=\"form-control input-sm\"\n                                         [(ngModel)]=\"charService.getChar().skills_misc[skill.getName()]\"/></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let weapon of weapons\" class=\"weapon\">\n    <div class=\"row header\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <input class=\"form-control input-sm text-uppercase inverse\" value=\"Weapon\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Attack Bonus</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Damage</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Critical</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Range</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Weight</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Type</label>\n                </div>\n                <div class=\"col-xs-2\">\n                    <label class=\"text-uppercase\">Size</label>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label class=\"text-uppercase\">Special Properties</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-2\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n                <div class=\"col-xs-4\">\n                    <input class=\"text-uppercase form-control input-sm\" value=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(17)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(17)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(70);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(0);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classesFormulas__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__char_abilities_abitly__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Classes; });



/**
 * Created by sargon on 7/16/16.
 */
var Classes = (function () {
    function Classes(name, baseAttackBonusFunction, fortitudeSaveFunction, reflexSaveFunction, willSaveFunction, skills) {
        this._name = name;
        this._baseAttackBonusFunction = baseAttackBonusFunction;
        this._fortitudeSaveFunction = fortitudeSaveFunction;
        this._reflexSaveFunction = reflexSaveFunction;
        this._willSaveFunction = willSaveFunction;
        this._skills = skills || [];
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
            case __WEBPACK_IMPORTED_MODULE_2__char_abilities_abitly__["a" /* Ability */].CON: return this.getFortitudeSave(level);
            case __WEBPACK_IMPORTED_MODULE_2__char_abilities_abitly__["a" /* Ability */].DEX: return this.getReflexSave(level);
            case __WEBPACK_IMPORTED_MODULE_2__char_abilities_abitly__["a" /* Ability */].WIS: return this.getWillSave(level);
        }
    };
    return Classes;
}());

Classes.ALL = [];
Classes.NONE = new Classes("", __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].none, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].none, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].none, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].none);
Classes.CLERIC = new Classes("cleric", __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getMediumBAB, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getHighSave, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getLowSave, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getHighSave, [__WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].CONCENTRATION, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].CRAFT_1, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].DIPLOMACY, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].HEAL, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].KNOWLEDGE_ARC, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].KNOWLEDGE_HISTORY,
    __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].KNOWLEDGE_RELIGION, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].KNOWLEDGE_PLANAR, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].PROFESSION_1, __WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].SPELLCRAFT]);
Classes.MONK = new Classes("monk", __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getHighBAB, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getHighSave, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getLowSave, __WEBPACK_IMPORTED_MODULE_1__classesFormulas__["a" /* ClassesFormulas */].getHighSave, [__WEBPACK_IMPORTED_MODULE_0__char_skills_skill__["a" /* Skill */].BALANCE]);


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(440);

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(441);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(443);

/***/ })

},[228]);
//# sourceMappingURL=main.bundle.js.map