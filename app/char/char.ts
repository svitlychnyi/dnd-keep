import {Item} from "../items/item";

export interface Char {
    name: string;
    player: string;
    race: string;
    sex: string;
    eyes: string;
    heir: string;
    age: number;
    vision: string;
    height: number;
    weight: number;
    alignment: string;
    deities: string;
    classes: Object;
    avatar: string;

    initiative: number,
    speed: number;
    speed_bonus: number;
    hp_max: number;
    hp: number;
    xp: number;
    dr: string;
    sr: number;

    abilities: Object;
    ench_abilities: Object;
    tmp_abilities: Object;

    armor: Item;
    shield: Item;
}
