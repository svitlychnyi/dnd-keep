import { Injectable } from '@angular/core';
@Injectable()
export class AbilityService {

    public static getModifier(score:number):number {
        score = score || 10;
        return ((score / 2) >> 0) - 5;
    }
}