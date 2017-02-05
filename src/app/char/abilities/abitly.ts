export class Ability {
  public static ALL: Ability[] = [];

  public static STR: Ability = new Ability('str');
  public static DEX: Ability = new Ability('dex');
  public static CON: Ability = new Ability('con');
  public static INT: Ability = new Ability('int');
  public static WIS: Ability = new Ability('wis');
  public static CHA: Ability = new Ability('cha');
  public static NONE: Ability = new Ability('');

  private name: string;

  constructor(name: string) {
    this.name = name;
    if (this.name !== '') {
      Ability.ALL.push(this);
    }
  }

  public getName(): string {
    return this.name;
  };
}
