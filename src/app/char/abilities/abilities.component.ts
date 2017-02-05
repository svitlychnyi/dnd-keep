import { Component } from '@angular/core';
import { Ability } from './abitly';
import { CharService } from '../char.service';

@Component({
  selector: 'abilities',
  templateUrl: 'abilities.component.html',
})

export class AbilitiesComponent {
  public abilities: Ability[] = Ability.ALL;

  constructor(public _charService: CharService) {
  };
}
