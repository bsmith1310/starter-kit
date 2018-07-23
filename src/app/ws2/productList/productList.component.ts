import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  // NOTE: ANIMATIONS DON'T DO ANYTHING YET
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({opacity: 0.5, transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0.5, transform: 'translateX(100%)'}))
      ])
    ])
  ],
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() filterArgs: '';
  @Input() products: Array<any>;

  isLoading: boolean;
  result: any;

  constructor() { }

  ngOnInit() {

  }

}
