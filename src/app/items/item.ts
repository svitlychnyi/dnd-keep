/**
 * Created by sargon on 7/16/16.
 */
export class Item {

    private name:string;
    private bonus:number;

    constructor(name:string, bonus:number) {
        this.name = name;
        this.bonus = bonus;
    }

    public getName():string {
        return this.name;
    };

    public getBonus():number {
        return this.bonus;
    };
}