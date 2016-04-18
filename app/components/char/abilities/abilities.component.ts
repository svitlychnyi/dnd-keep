import {Component} from 'angular2/core';
import {Ability} from "./abitly";

@Component({
    selector: 'abilities',
    templateUrl: './app/components/char/abilities/abilities.component.html'
})

export class AbilitiesComponent {
    abilities:Ability[] = Ability.ALL;
};
