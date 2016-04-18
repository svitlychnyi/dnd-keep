import {Component} from 'angular2/core';
import {Save} from "./save";

@Component({
    selector: 'saves',
    templateUrl: './app/components/char/saves/saves.component.html'
})

export class SavesComponent {
    public saves:Save[] = Save.ALL;
};
