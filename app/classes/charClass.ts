import {Classes} from "./classes";
/**
 * Created by sargon on 7/16/16.
 */
export class CharClass {
    private _class: Classes;
    private _level: number;

    constructor(classes:Classes, level:number) {
        this._class = classes;
        this._level = level;
    }

    getClass():Classes {
        return this._class;
    }

    getLevel():number {
        return this._level;
    }

    toString():string {
        return "111";
    }
}