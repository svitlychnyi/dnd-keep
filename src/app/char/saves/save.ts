import {Ability} from "../abilities/abitly";

export class Save {

    public static ALL:Save[] = [];
    public static FORTITUDE = new Save("fortitude", "Fortitude", Ability.CON);
    public static REFLEX = new Save("reflex", "Reflex", Ability.DEX);
    public static WILLPOWER = new Save("willpower", "Willpower", Ability.WIS);

    private name:string;
    private label:string;
    private ability:Ability;

    constructor(name:string, label:string, ability:Ability) {
        this.name = name;
        this.label = label;
        this.ability = ability;

        Save.ALL.push(this);
    };

    public getName():string {
        return this.name;
    }

    public getLabel():string {
        return this.label;
    }

    public getAbility():Ability {
        return this.ability;
    }
}