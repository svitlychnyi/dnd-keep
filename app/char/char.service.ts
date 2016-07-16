import { Injectable } from '@angular/core';
import {Char} from "./char";
import {AbilityService} from "./abilities/ability.service";
import {Ability} from "./abilities/abitly";
import {Item} from "../items/item";
import {CharClass} from "../classes/charClass";
import {Classes} from "../classes/classes";

@Injectable()
export class CharService {
    char = {
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
            class1: new CharClass(Classes.CLERIC, 10),
            class2: new CharClass(Classes.CLERIC, 0),
            class3: new CharClass(Classes.CLERIC, 0)
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

        abilities: {str: 10, dex: 11, con: 12, int: 13, wis: 14, cha: 15},
        ench_abilities: {str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0},
        tmp_abilities: {str: 2, dex: 1, con: 4, int: 1, wis: 2, cha: 1},

        armor: new Item("Breast Plate", 4),
        shield: new Item("Heavy Shield", 2),
    };

    public getChar():Char {
        return this.char;
    }

    public getCharAbility(ability:Ability):number {
        return this.getChar().abilities[ability.getName()]  || 0;
    }

    public getCharEnchAbility(ability:Ability):number {
        return this.getChar().ench_abilities[ability.getName()] || 0;
    }

    public getCharTmpAbility(ability:Ability):number {
        return this.getChar().tmp_abilities[ability.getName()] || 0;
    }

    public getAbilityModifier(ability:Ability):number {
        var totalAbility:number = this.getCharAbility(ability)
            + this.getCharEnchAbility(ability)
            + this.getCharTmpAbility(ability);
        return AbilityService.getModifier(totalAbility);
    }

    public getTotalLevel():number {
        var totalLevel = 0;
        for (var className in this.getChar().classes) {
            totalLevel += Number(this.getChar().classes[className].getLevel());
        }
        return totalLevel;
    }

    public getBAB():number {
        var totalBAB:number = 0;
        for (var className in this.getChar().classes) {
            var charClass:CharClass = this.getChar().classes[className];
            totalBAB += charClass.getClass().getBAB(charClass.getLevel());
        }
        return totalBAB;
    }

    public getSave(ability:Ability) {
        var totalSave:number = 0;
        for (var className in this.getChar().classes) {
            var charClass:CharClass = this.getChar().classes[className];
            totalSave += charClass.getClass().getSave(ability, charClass.getLevel());
        }
        return totalSave;
    }
}
