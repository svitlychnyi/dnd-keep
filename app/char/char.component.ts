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
import {CharSerializer} from "./charSerializer";
import {CharSerializer} from "./charSerializer";

@Component({
    selector: 'char',
    templateUrl: './app/char/char.component.html',
    directives: [
        AbilitiesComponent, HeaderComponent, ACComponent, ArmorComponent, AttacksComponent, HPComponent,
        WeaponsComponent, ShieldComponent, SkillsComponent, SavesComponent
    ]
})


export class CharComponent {

    constructor(public charService: CharService) {}

    public download(){
        var json = CharSerializer.serializeChar(this.charService.getChar());
        var blob = new Blob([json], {type: "application/json"});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = this.charService.getChar().name + ".json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    public upload(){
        var that = this;
        var reader = new FileReader();
        reader.onload = function(){
            that.charService.setChar(CharSerializer.deserializeChar(event.target.result));
        };
        reader.readAsText(event.target.files[0]);
    }
}