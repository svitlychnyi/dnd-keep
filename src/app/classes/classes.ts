import { Skill } from '../char/skills/skill';
import { ClassesFormulas } from './classesFormulas';
import { Ability } from '../char/abilities/abitly';

/**
 * Created by sargon on 7/16/16.
 */
export class Classes {
  public static ALL: Classes[] = [];

  public static NONE: Classes = new Classes('', ClassesFormulas.none,
    ClassesFormulas.none, ClassesFormulas.none, ClassesFormulas.none);

  public static CLERIC: Classes = new Classes('cleric', ClassesFormulas.getMediumBAB,
    ClassesFormulas.getHighSave, ClassesFormulas.getLowSave, ClassesFormulas.getHighSave,
    [Skill.CONCENTRATION, Skill.CRAFT_1, Skill.DIPLOMACY, Skill.HEAL, Skill.KNOWLEDGE_ARC, Skill.KNOWLEDGE_HISTORY,
      Skill.KNOWLEDGE_RELIGION, Skill.KNOWLEDGE_PLANAR, Skill.PROFESSION_1, Skill.SPELLCRAFT]);

  public static MONK: Classes = new Classes('monk', ClassesFormulas.getHighBAB,
    ClassesFormulas.getHighSave, ClassesFormulas.getLowSave, ClassesFormulas.getHighSave,
    [Skill.BALANCE]);

  public static getClass(name: string): Classes {
    return Classes.ALL.find((charClass: Classes) => {
      return charClass.getName() === name;
    });
  }

  private _name: string;
  private _baseAttackBonusFunction: any;
  private _fortitudeSaveFunction: any;
  private _reflexSaveFunction: any;
  private _willSaveFunction: any;
  private _skills: Skill[];

  constructor(name: string, baseAttackBonusFunction: any, fortitudeSaveFunction: any, reflexSaveFunction: any,
              willSaveFunction: any, skills?: [Skill]) {
    this._name = name;
    this._baseAttackBonusFunction = baseAttackBonusFunction;
    this._fortitudeSaveFunction = fortitudeSaveFunction;
    this._reflexSaveFunction = reflexSaveFunction;
    this._willSaveFunction = willSaveFunction;
    this._skills = skills || [];
    Classes.ALL.push(this);
  }

  public getName(): string {
    return this._name;
  }

  public getSkills(): Skill[] {
    return this._skills;
  }

  public getBAB(level): number {
    return this._baseAttackBonusFunction.call(this, level);
  }

  public getFortitudeSave(level): number {
    return this._fortitudeSaveFunction.call(this, level);
  }

  public getReflexSave(level): number {
    return this._reflexSaveFunction.call(this, level);
  }

  public getWillSave(level): number {
    return this._willSaveFunction.call(this, level);
  }

  public getSave(ability: Ability, level: number): number {
    switch (ability) {
      case Ability.CON:
        return this.getFortitudeSave(level);
      case Ability.DEX:
        return this.getReflexSave(level);
      case Ability.WIS:
        return this.getWillSave(level);
      default:
        return 0;
    }
  }
}
