import { Component } from '@angular/core';
import { CharService } from '../char.service';
import { Ability } from '../abilities/abitly';
import { Classes } from '../../classes/classes';
import { Sizes } from '../../size/sizes';

@Component({
  selector: 'ac',
  templateUrl: 'ac.component.html'
})

export class ACComponent {
  public dex: Ability = Ability.DEX;

  constructor(public charService: CharService) {
  }

  public getWisdomModifier(): number {
    let isMonk: boolean = false;

    for (let classKey in this.charService.getChar().classes) {
      if (classKey) {
        isMonk = this.charService.getChar().classes[classKey].name === Classes.MONK.getName()
          ? true
          : isMonk;
      }
    }

    return isMonk
      ? this.charService.getAbilityModifier(Ability.WIS)
      : 0;
  }

  public getAC(): number {
    return 10
      + Number(this.charService.getChar().armor.bonus)
      + Number(this.charService.getChar().shield.bonus)
      + Number(this.charService.getAbilityModifier(Ability.DEX))
      + Number((this.getWisdomModifier() || 0 ))
      + Number((this.charService.getChar().armor_bonuses.deflection || 0))
      + Number((this.charService.getChar().armor_bonuses.natural || 0))
      + Number((this.charService.getChar().armor_bonuses.misc || 0))
      + Number((this.charService.getChar().armor_bonuses.size || 0))
      + Number((this.charService.getChar().armor_bonuses.luck || 0))
      + Number(this.getSizeModifier());
  }

  public getFF(): number {
    return 10
      + Number(this.charService.getChar().armor.bonus)
      + Number(this.charService.getChar().shield.bonus)
      + Number((this.getWisdomModifier() || 0 ))
      + Number((this.charService.getChar().armor_bonuses.natural || 0))
      + Number((this.charService.getChar().armor_bonuses.misc || 0))
      + Number((this.charService.getChar().armor_bonuses.size || 0))
      + Number((this.charService.getChar().armor_bonuses.luck || 0))
      + Number(this.getSizeModifier());
  }

  public getTouch(): number {
    return 10
      + Number(this.charService.getAbilityModifier(Ability.DEX))
      + Number((this.getWisdomModifier() || 0 ))
      + Number((this.charService.getChar().armor_bonuses.deflection || 0))
      + Number((this.charService.getChar().armor_bonuses.misc || 0))
      + Number((this.charService.getChar().armor_bonuses.size || 0))
      + Number((this.charService.getChar().armor_bonuses.luck || 0))
      + Number(this.getSizeModifier());
  }

  public getSizeModifier(): number {
    let sizeArmorModifier = 0;
    let sizeType: Sizes = Sizes.getSize(this.charService.getChar().size);
    if (sizeType) {
      sizeArmorModifier = sizeType.getArmorModifier();
    }

    return sizeArmorModifier;
  }
};
