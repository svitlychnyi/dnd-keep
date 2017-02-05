import { Item } from '../items/item';

export interface Char {
  name: string;
  player: string;
  race: string;
  size: string;
  sex: string;
  eyes: string;
  heir: string;
  age: number;
  vision: string;
  height: number;
  weight: number;
  alignment: string;
  deities: string;
  classes: {class1: any, class2: any, class3: any};
  avatar: string;

  initiative: number;
  speed: number;
  speed_bonus: number;
  hp_max: number;
  hp: number;
  xp: number;
  dr: string;
  sr: number;

  attack_bonuses: {
    melee: { misc: number, temp: number, other: number },
    ranged: { misc: number, temp: number, other: number }
  };

  armor_bonuses: {
    natural: number,
    deflection: number,
    misc: number,
    size: number,
    luck: number
  };

  abilities: any;
  ench_abilities: any;
  tmp_abilities: any;

  skills: any;
  sills_misc: any;
  saves: {
    fortitude: { magic: number, misc: number, temp: number, other: number },
    reflex: { magic: number, misc: number, temp: number, other: number },
    willpower: { magic: number, misc: number, temp: number, other: number }
  },

  armor: Item;
  shield: Item;
  skills_misc: any;
}
