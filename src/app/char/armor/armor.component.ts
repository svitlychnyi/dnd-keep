import { Component } from '@angular/core';
import { CharService } from '../char.service';

@Component({
    selector: 'armor',
    templateUrl: 'armor.component.html'
})

export class ArmorComponent {

    constructor(public charService: CharService) {}
};
