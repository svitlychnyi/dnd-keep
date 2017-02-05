import { Injectable } from '@angular/core';
import { Char } from './char';
import { AbilityService } from './abilities/ability.service';
import { Ability } from './abilities/abitly';
import { Classes } from '../classes/classes';
import { Skill } from './skills/skill';
import { Item } from '../items/item';

@Injectable()
export class CharService {
  private char: any = {
    name: 'Oberon',
    player: 'Gena',
    race: 'Human',
    size: 'm',
    sex: 'Male',
    eyes: 'Green',
    vision: 'Low-light',
    heir: 'Black',
    age: 40,
    height: 6,
    weight: 150,
    alignment: 'LN',
    deities: 'Luck / Trickery',
    classes: {
      class1: {name: 'cleric', level: 10},
      class2: {name: 'cleric', level: 0},
      class3: {name: 'cleric', level: 0}
    },
    avatar: 'sargon.jpg',

    initiative: 4,
    speed: 20,
    speed_bonus: 0,
    hp_max: 300,
    hp: 270,
    xp: 44100,
    dr: '5/evil',
    sr: 21,

    armor_bonuses: {
      natural: 1,
      deflection: 2,
      misc: 0,
      size: 0,
      luck: 1
    },

    abilities: {str: 10, dex: 11, con: 12, int: 13, wis: 14, cha: 15},
    ench_abilities: {str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0},
    tmp_abilities: {str: 2, dex: 1, con: 4, int: 1, wis: 2, cha: 1},

    skills: {
      balance: 1,
      bluff: 11,
      concentration: 13,
      decipherScript: 1,
      diplomacy: 11,
      knowledgeArc: 6,
      knowledgeReligion: 6,
      knowledgePlanar: 1,
      knowledgeHistory: 1,
      spellcraft: 13
    },
    skills_misc: {
      spellcraft: 2
    },

    armor: new Item('Breast Plate', 4),
    shield: new Item('Heavy Shield', 2)
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
    let totalAbility: number = this.getCharAbility(ability)
      + this.getCharEnchAbility(ability)
      + this.getCharTmpAbility(ability);
    return AbilityService.getModifier(totalAbility);
  }

  public getTotalLevel(): number {
    let totalLevel = 0;
    for (let className in this.getChar().classes) {
      if (className) {
        totalLevel += Number(this.getChar().classes[className].level);
      }
    }
    return totalLevel;
  }

  public getBAB(): number {
    let totalBAB: number = 0;
    for (let className in this.getChar().classes) {
      if (className) {
        let charClass: Classes = Classes.getClass(this.getChar().classes[className].name);
        totalBAB += charClass.getBAB(this.getChar().classes[className].level);
      }
    }
    return totalBAB;
  }

  public getSave(ability: Ability): number {
    let totalSave: number = 0;
    for (let className in this.getChar().classes) {
      if (className) {
        let charClass: Classes = Classes.getClass(this.getChar().classes[className].name);
        totalSave += charClass.getSave(ability, this.getChar().classes[className].level);
      }
    }
    return totalSave;
  }

  public getTotalSkillRank(skill: Skill): number {
    return (Number(this.getChar().skills[skill.getName()]) || 0)
      + (Number(this.getChar().skills_misc[skill.getName()]) || 0)
      + Number(this.getAbilityModifier(skill.getAbility()));
  }

  public getClassSkills(): Skill[] {
    let classSkills: Skill[] = [];
    for (let classKey in this.getChar().classes) {
      if (classKey) {
        classSkills = classSkills.concat(Classes.getClass(this.getChar().classes[classKey].name).getSkills());
      }
    }

    if (this.getChar().deities.indexOf('Trickery')) {
      classSkills.push(Skill.BLUFF);
      classSkills.push(Skill.DISGUISE);
      classSkills.push(Skill.HIDE);
    }
    return classSkills;
  }

  public getSizeArmorModifier(): number {
    return 0;
  };
}
