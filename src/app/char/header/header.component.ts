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
    while (i < 20) {
      this.levels.push(++i);
    }

  }
}
;
