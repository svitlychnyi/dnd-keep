import { Component } from '@angular/core';
import { CharService } from './char.service';
import { CharSerializer } from './charSerializer';

@Component({
  selector: 'char',
  templateUrl: 'char.component.html'
})

export class CharComponent {

  constructor(public charService: CharService) {
  }

  public download() {
    let json = CharSerializer.serializeChar(this.charService.getChar());
    let blob = new Blob([json], {type: 'application/json'});
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = this.charService.getChar().name + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  public upload(event) {
    let that = this;
    let reader = new FileReader();
    reader.onload = ((readerEvent: any) => {
      that.charService.setChar(CharSerializer.deserializeChar(readerEvent.target.result));
    });
    reader.readAsText(event.target.files[0]);
  }
}
