import { Classes } from './classes';
/**
 * Created by sargon on 7/16/16.
 */
export class CharClass {
  private _class: Classes;
  private _level: number;

  constructor(classes: Classes, level: number) {
    this._class = classes;
    this._level = level;
  }

  public getClass(): Classes {
    return this._class;
  }

  public getLevel(): number {
    return this._level;
  }
}
