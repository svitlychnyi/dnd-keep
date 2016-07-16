import { Component } from '@angular/core';
import {Skill} from "./skill";
import {AbilityService} from "../abilities/ability.service";

@Component({
    selector: 'skills',
    templateUrl: './app/char/skills/skills.component.html',
    inputs: ['char']
})

export class SkillsComponent {
    char:Object;
    public skills:Skill[] = Skill.ALL;

    public getAbilityModifier(abilityValue:number):number {
        return AbilityService.getModifier(abilityValue);
    };
};
