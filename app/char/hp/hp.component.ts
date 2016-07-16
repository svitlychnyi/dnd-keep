import { Component } from '@angular/core';
import {AbilityService} from "../abilities/ability.service";
import {Ability} from "../abilities/abitly";
import {CharService} from "../char.service";
import {CharComponent} from "../char.component";
import {Char} from "../char";
import {AbilitiesComponent} from "../abilities/abilities.component";

@Component({
    selector: 'hp',
    templateUrl: './app/char/hp/hp.component.html',
})

export class HPComponent {
    dex:Ability = Ability.DEX;

    constructor(public charService: CharService) {
    };

    // N*(N-1)*500
    getNextLevelXP(): number {
        return this.charService.getTotalLevel() * (this.charService.getTotalLevel() - 1) * 500;
    }
};
