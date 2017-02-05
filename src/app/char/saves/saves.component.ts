import { Component } from '@angular/core';
import { Save } from './save';
import { CharService } from '../char.service';

@Component({
  selector: 'saves',
  templateUrl: 'saves.component.html'
})

export class SavesComponent {
  public saves: Save[] = Save.ALL;

  constructor(public charService: CharService) {
  };

  public getTotalSave(save: Save): number {
    return Number(this.charService.getSave(save.getAbility()))
      + Number(this.charService.getAbilityModifier(save.getAbility()))
      + Number(this.charService.getChar().saves[save.getName()].magic)
      + Number(this.charService.getChar().saves[save.getName()].misc)
      + Number(this.charService.getChar().saves[save.getName()].temp)
      + Number(this.charService.getChar().saves[save.getName()].other);
  }
}
;
