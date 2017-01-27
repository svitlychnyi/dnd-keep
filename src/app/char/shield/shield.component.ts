import { Component } from '@angular/core';
import { CharService } from '../char.service';

@Component({
    selector: 'shield',
    templateUrl: 'shield.component.html'
})

export class ShieldComponent {

    constructor(public charService: CharService) {
    };
};
