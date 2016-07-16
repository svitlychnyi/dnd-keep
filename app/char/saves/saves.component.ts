import { Component } from '@angular/core';
import {Save} from "./save";
import {CharService} from "../char.service";

@Component({
    selector: 'saves',
    templateUrl: './app/char/saves/saves.component.html'
})

export class SavesComponent {
    public saves:Save[] = Save.ALL;

    constructor(public charService: CharService) {
    };
};
