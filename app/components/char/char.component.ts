import { Component } from 'angular2/core';
import { AbilitiesComponent } from "./abilities/abilities.component";
import { HeaderComponent } from "./header/header.component";
import { ACComponent } from "./ac/ac.component";
import { ArmorComponent } from "./armor/armor.component";
import { AttacksComponent } from "./attacks/attacks.component";
import { HPComponent } from "./hp/hp.component";
import {WeaponsComponent} from "./weapons/weapons.component";
import {ShieldComponent} from "./shield/shield.component";
import {SkillsComponent} from "./skills/skills.component";
import {SavesComponent} from "./saves/saves.component";

@Component({
    selector: 'char',
    templateUrl: './app/components/char/char.component.html',
    directives: [
        AbilitiesComponent, HeaderComponent, ACComponent, ArmorComponent, AttacksComponent, HPComponent,
        WeaponsComponent, ShieldComponent, SkillsComponent, SavesComponent
    ]
})


export class CharComponent {

}