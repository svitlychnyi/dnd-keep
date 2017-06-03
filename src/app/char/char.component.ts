import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharService } from './char.service';
import { CharSerializer } from './charSerializer';

@Component({
  selector: 'char',
  templateUrl: 'char.component.html'
})

export class CharComponent implements OnInit, OnDestroy {

  private interval;

  constructor(public charService: CharService) {
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {

      this.charService.saveToLocalStorage();
    }, 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
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

  public saveChar() {
    this.charService.saveToLocalStorage();
  }
}
