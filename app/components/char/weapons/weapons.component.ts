import {Component} from 'angular2/core';
import {Weapon} from "./weapon";

@Component({
    selector: 'weapons',
    templateUrl: './app/components/char/weapons/weapons.component.html'
})

export class WeaponsComponent {
    public weapons:Weapon[] = [new Weapon(), new Weapon(), new Weapon()];
};
