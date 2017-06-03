import { Char } from './char';
import { Item } from '../items/item';
/**
 * Created by sargon on 7/18/16.
 */
export class CharSerializer {
  public static serializeChar(char: Char): string {
    return JSON.stringify(char);
  }

  public static deserializeChar(charStr: string): Char {
    return JSON.parse(charStr);
  }
}
