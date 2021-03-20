import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PagosComponent implements OnInit {
  @Input() animated = true;
  @Input() width: string;
  @Input() height = '30px';
  @Input() paddingContent = '15px';
  @Input() type: string;
  @Input() colums: number;

  style: any;
  rows = [];

  constructor() {}

  ngOnInit() {
    this.style = {
      width: this.width ? this.width : `100%`,
      height: this.height,
    };

    if (this.type === 'table') {
      for (let index = 0; index < this.colums; index++) {
        this.rows[index] = index;
      }
    }
  }
}
