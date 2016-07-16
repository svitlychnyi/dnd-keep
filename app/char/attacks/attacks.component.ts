import { Component } from '@angular/core';
import {Attack} from "./attack";

@Component({
    selector: 'attacks',
    templateUrl: './app/char/attacks/attacks.component.html'
})

export class AttacksComponent {
    public attacks:Attack[] = Attack.ALL;
};
