import { Component } from '@angular/core';
import {CharService} from "../char.service";
import {Char} from "../char";

@Component({
    selector: 'header',
    templateUrl: './app/char/header/header.component.html',
})

export class HeaderComponent {
    constructor(public charService: CharService) {}
};
