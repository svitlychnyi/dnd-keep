import { Ability } from '../abilities/abitly';

export class Attack {
  public static ALL: Attack[] = [];
  public static MELEE = new Attack('Melee', Ability.STR);
  public static RANGED = new Attack('Ranged', Ability.DEX);

  private name: string;
  private ability: Ability;

  constructor(name: string, ability: Ability) {
    this.name = name;
    this.ability = ability;

    Attack.ALL.push(this);
  }

  public getName(): string {
    return this.name;
  }

  public getAbility(): Ability {
    return this.ability;
  }
}
