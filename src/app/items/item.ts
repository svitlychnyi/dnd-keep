/**
 * Created by sargon on 7/16/16.
 */
export class Item {

    public name:string;
    public bonus:number;

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