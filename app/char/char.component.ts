import { Component } from '@angular/core';
import {AbilitiesComponent} from "./abilities/abilities.component";
import {HeaderComponent} from "./header/header.component";
import {SkillsComponent} from "./skills/skills.component";
import {ACComponent} from "./ac/ac.component";
import {ArmorComponent} from "./armor/armor.component";
import {HPComponent} from "./hp/hp.component";
import {WeaponsComponent} from "./weapons/weapons.component";
import {ShieldComponent} from "./shield/shield.component";
import {AttacksComponent} from "./attacks/attacks.component";
import {SavesComponent} from "./saves/saves.component";
import {OnInit} from "../../node_modules/angular2/ts/src/core/linker/interfaces";
import {Ability} from "./abilities/abitly";
import {CharService} from "./char.service";
import {Char} from "./char";

@Component({
    selector: 'char',
    templateUrl: './app/char/char.component.html',
    directives: [
        AbilitiesComponent, HeaderComponent, ACComponent, ArmorComponent, AttacksComponent, HPComponent,
        WeaponsComponent, ShieldComponent, SkillsComponent, SavesComponent
    ]
})


export class CharComponent implements OnInit{
    public abilities:Ability[] = Ability.ALL;
    public char:Char;

    constructor(private _charService:CharService) {}

    ngOnInit() {
        this.char = this._charService.getChar();
    }
}