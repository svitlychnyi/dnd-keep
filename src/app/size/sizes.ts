/**
 * Created by gsvitlychnyi on 1/28/17.
 */
export class Sizes {

  public static ALL: Sizes[] = [];
  public static FINE: Sizes = new Sizes('f', 'Fine', 8, 8, -16, 16, 0);
  public static DIMINUTIVE: Sizes = new Sizes('d', 'Diminutive', 4, 4, -12, 12, 0);
  public static TINY: Sizes = new Sizes('t', 'Tiny', 2, 2, -8, 8, 0);
  public static SMALL: Sizes = new Sizes('s', 'Small', 1, 1, -4, 4, 5);
  public static MEDIUM: Sizes = new Sizes('m', 'Medium', 0, 0, 0, 0, 5);
  public static LARGE: Sizes = new Sizes('l', 'Large', -1, -1, 4, -4, 10);
  public static HUGE: Sizes = new Sizes('h', 'Huge', -2, -2, 8, -8, 15);
  public static GARGANTUAN: Sizes = new Sizes('g', 'Gargantuan', -4, -4, 12, -12, 20);
  public static COLOSSAL: Sizes = new Sizes('c', 'Colossal', -8, -8, 16, -16, 30);

  public static getClass(name: string): Sizes {
    return Sizes.ALL.find((charSize: Sizes) => {
      return charSize.getName() === name;
    });
  }

  private name: string;
  private description: string;
  private armorModifier: number;
  private attackModifier: number;
  private specialAttackModifier: number;
  private hideModifier: number;
  private reach: number;

  constructor(name, description,
              armorModifier, attackModifier, specialAttackModifier, hideModifier,
              reach) {
    this.name = name || '';
    this.description = description || '';
    this.armorModifier = Number(armorModifier || 0);
    this.attackModifier = Number(attackModifier || 0);
    this.specialAttackModifier = Number(specialAttackModifier || 0);
    this.reach = Number(reach || 5);
    Sizes.ALL.push(this);
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getArmorModifier(): number {
    return Number(this.armorModifier);
  }

  public getAttackModifier(): number {
    return Number(this.attackModifier);
  }

  public getSpecialAttackModifier(): number {
    return Number(this.specialAttackModifier);
  }

  public getHideModifier(): number {
    return Number(this.hideModifier);
  }

  public getReach(): number {
    return Number(this.reach);
  }
}
