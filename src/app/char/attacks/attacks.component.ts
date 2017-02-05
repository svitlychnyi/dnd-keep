import { Component } from '@angular/core';
import { Attack } from './attack';
import { CharService } from '../char.service';
import { Sizes } from '../../size/sizes';

@Component({
  selector: 'attacks',
  templateUrl: 'attacks.component.html'
})

export class AttacksComponent {
  public attacks: Attack[] = Attack.ALL;

  constructor(public charService: CharService) {
  };

  public getTotalAttack(attack: Attack): number {
    return Number(this.charService.getBAB())
      + Number(this.charService.getAbilityModifier((attack.getAbility())))
      + Number(this.getSizeModifier())
      + Number(this.charService.getChar().attack_bonuses[attack.getName()].misc)
      + Number(this.charService.getChar().attack_bonuses[attack.getName()].temp)
      + Number(this.charService.getChar().attack_bonuses[attack.getName()].other);
  };

  public getSizeModifier(): number {
    let sizeModifier = 0;
    let size: Sizes = Sizes.getSize(this.charService.getChar().size);
    if (size) {
      sizeModifier = Sizes.getSize(this.charService.getChar().size).getAttackModifier();
    }
    return sizeModifier;
  }
}
