import { Component } from '@angular/core';
import { CharService } from '../char.service';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
})

export class HeaderComponent {
    constructor(public charService: CharService) {}
};
