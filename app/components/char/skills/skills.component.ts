import {Component} from 'angular2/core';
import {Skill} from "./skill";

@Component({
    selector: 'skills',
    templateUrl: './app/components/char/skills/skills.component.html'
})

export class SkillsComponent {
    public skills:Skill[] = Skill.ALL;
};
