import { Component } from '@angular/core';
import {Weapon} from "./weapon";

@Component({
    selector: 'weapons',
    templateUrl: './app/char/weapons/weapons.component.html'
})

export class WeaponsComponent {
    public weapons:Weapon[] = [new Weapon(), new Weapon(), new Weapon()];
};
