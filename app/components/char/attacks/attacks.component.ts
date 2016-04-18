import {Component} from 'angular2/core';
import {Attack} from "./attack";

@Component({
    selector: 'attacks',
    templateUrl: './app/components/char/attacks/attacks.component.html'
})

export class AttacksComponent {
    public attacks:Attack[] = Attack.ALL;
};
