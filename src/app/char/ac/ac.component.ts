import { Component } from '@angular/core';
import {CharService} from "../char.service";
import {Ability} from "../abilities/abitly";
import {Classes} from "../../classes/classes";

@Component({
    selector: 'ac',
    templateUrl: 'ac.component.html'
})

export class ACComponent {
    dex:Ability = Ability.DEX;
    constructor(public charService: CharService) {}

    getWisdomModifier(): number {
        var isMonk: boolean = false;

        for(var classKey in this.charService.getChar().classes) {
            isMonk = this.charService.getChar().classes[classKey].name == Classes.MONK.getName()
                ? true
                : isMonk;
        }

        return isMonk
            ? this.charService.getAbilityModifier(Ability.WIS)
            : 0;
    }

    getAC():number {
        return 10
            // + this.charService.getChar().armor.getBonus()
            // + this.charService.getChar().shield.getBonus()
            + this.charService.getAbilityModifier(Ability.DEX)
            + (this.getWisdomModifier() || 0 );
    }

    getFF():number {
        return 10
            // + this.charService.getChar().armor.getBonus()
            // + this.charService.getChar().shield.getBonus()
            + (this.getWisdomModifier() || 0 );
    }

    getTouch():number {
        return 10
            + this.charService.getAbilityModifier(Ability.DEX)
            + (this.getWisdomModifier() || 0 );
    }
};
