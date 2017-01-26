import { Injectable } from '@angular/core';
import { Char } from './char';
import { AbilityService } from './abilities/ability.service';
import { Ability } from './abilities/abitly';
import { Classes } from '../classes/classes';
import { Skill } from './skills/skill';

@Injectable()
export class CharService {
  private char: any = {
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

  public getChar(): Char {
    return this.char;
  }

  public setChar(char: Char) {
    this.char = char;
  }

  public getCharAbility(ability: Ability): number {
    return this.getChar().abilities[ability.getName()] || 0;
  }

  public getCharEnchAbility(ability: Ability): number {
    return this.getChar().ench_abilities[ability.getName()] || 0;
  }

  public getCharTmpAbility(ability: Ability): number {
    return this.getChar().tmp_abilities[ability.getName()] || 0;
  }

  public getAbilityModifier(ability: Ability): number {
    var totalAbility: number = this.getCharAbility(ability)
      + this.getCharEnchAbility(ability)
      + this.getCharTmpAbility(ability);
    return AbilityService.getModifier(totalAbility);
  }

  public getTotalLevel(): number {
    var totalLevel = 0;
    for (var className in this.getChar().classes) {
      totalLevel += Number(this.getChar().classes[className].level);
    }
    return totalLevel;
  }

  public getBAB(): number {
    var totalBAB: number = 0;
    for (var className in this.getChar().classes) {
      var charClass: Classes = Classes.getClass(this.getChar().classes[className].name);
      totalBAB += charClass.getBAB(this.getChar().classes[className].level);
    }
    return totalBAB;
  }

  public getSave(ability: Ability): number {
    var totalSave: number = 0;
    for (var className in this.getChar().classes) {
      var charClass: Classes = Classes.getClass(this.getChar().classes[className].name);
      totalSave += charClass.getSave(ability, this.getChar().classes[className].level);
    }
    return totalSave;
  }

  public getTotalSkillRank(skill: Skill): number {
    return (this.getChar().skills[skill.getName()] || 0)
      + (this.getChar().skills_misc[skill.getName()] || 0)
      + this.getAbilityModifier(skill.getAbility());
  }

  public getClassSkills(): Skill[] {
    let classSkills: Skill[] = [];
    for (var classKey in this.getChar().classes) {
      classSkills = classSkills.concat(Classes.getClass(this.getChar().classes[classKey].name).getSkills());
    }

    if (this.getChar().deities.indexOf("Trickery")) {
      classSkills.push(Skill.BLUFF);
      classSkills.push(Skill.DISGUISE);
      classSkills.push(Skill.HIDE);
    }
    return classSkills;
  }
}
