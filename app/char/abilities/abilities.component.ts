import { Component } from '@angular/core';
import {Ability} from "./abitly";
import {CharService} from "../char.service";
import {Char} from "../char";

@Component({
    selector: 'abilities',
    templateUrl: './app/char/abilities/abilities.component.html',
})

export class AbilitiesComponent {
    abilities:Ability[] = Ability.ALL;

    constructor(public _charService: CharService) {
    };
}
