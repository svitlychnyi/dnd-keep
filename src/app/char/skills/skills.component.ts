import { Component } from '@angular/core';
import { Skill } from './skill';
import { CharService } from '../char.service';

@Component({
  selector: 'skills',
  templateUrl: 'skills.component.html',
})

export class SkillsComponent {
  public skills: Skill[] = Skill.ALL;

  constructor(public charService: CharService) {
  }

  public isClassSkill(skill: Skill): boolean {
    return this.charService.getClassSkills().indexOf(skill) !== -1;
  }

  public maxClassSkillRank(): number {
    return this.charService.getTotalLevel() + 3;
  }

  public maxCrossClassSkillRank(): number {
    return Math.round(this.maxClassSkillRank() / 2.1);
  }
}
;
