import {Char} from "./char";
/**
 * Created by sargon on 7/18/16.
 */
export class CharSerializer{
    public static serializeChar(char:Char):string {
        return JSON.stringify(char);
    }

    public static deserializeChar(charStr:string):Char {
        console.log(charStr);
        return JSON.parse(charStr);
    }
}