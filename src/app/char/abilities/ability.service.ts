import { Injectable } from '@angular/core';
@Injectable()
export class AbilityService {

  public static getModifier(score: number): number {
    score = score || 10;

    /* tslint:disable */
    return ((score / 2) >> 0) - 5;
  }
}
