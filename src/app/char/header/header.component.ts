import { Component, OnInit } from '@angular/core';
import { CharService } from '../char.service';
import { Classes } from '../../classes/classes';
import { Sizes } from '../../size/sizes';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
})

export class HeaderComponent implements OnInit {

  public sizes: Sizes[] = Sizes.ALL;
  public classes: Classes[] = Classes.ALL;
  public levels: number[] = [];

  constructor(public charService: CharService) {
  }

  /* tslint:disable */
  ngOnInit() {
    let i: number = 0;
    while (i < 30) {
      this.levels.push(++i);
    }

  }

  public changeAvatar(evt){
    let files = evt.target.files;
    let file = files[0];

    if (files && file) {
      let reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    this.charService.getChar().avatar = btoa(binaryString);
  }
}
