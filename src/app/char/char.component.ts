import { Component } from '@angular/core';
import { CharService } from './char.service';

@Component({
    selector: 'char',
    templateUrl: 'char.component.html'
})


export class CharComponent {

    constructor(public charService: CharService) {}

    public download(){
        // var json = CharSerializer.serializeChar(this.charService.getChar());
        // var blob = new Blob([json], {type: "application/json"});
        // var url = window.URL.createObjectURL(blob);
        // var a = document.createElement('a');
        // a.href = url;
        // a.download = this.charService.getChar().name + ".json";
        // document.body.appendChild(a);
        // a.click();
        // document.body.removeChild(a);
        // window.URL.revokeObjectURL(url);
    }

    public upload(){
        // var that = this;
        // var reader = new FileReader();
        // reader.onload = function(){
        //     that.charService.setChar(CharSerializer.deserializeChar(event.target.result));
        // };
        // reader.readAsText(event.target.files[0]);
    }
}