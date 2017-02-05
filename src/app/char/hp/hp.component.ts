import { Component } from '@angular/core';
import { Ability } from '../abilities/abitly';
import { CharService } from '../char.service';

@Component({
  selector: 'hp',
  templateUrl: 'hp.component.html',
})

export class HPComponent {
  public dex: Ability = Ability.DEX;

  constructor(public charService: CharService) {
  };

  // N*(N-1)*500
  public getNextLevelXP(): number {
    return this.charService.getTotalLevel() * (this.charService.getTotalLevel() - 1) * 500;
  }
}
;
