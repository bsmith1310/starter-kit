import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ProductService } from './product.service';
import { finalize } from 'rxjs/operators';

@Component({
  // NOTE: ANIMATIONS DON'T DO ANYTHING YET
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() categoryId: any;
  @Input() filterArgs: '';

  isLoading: boolean;
  result: any;
  products: Array<any>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getAllProducts({categoryId: this.categoryId})
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((res: any) => { this.result = res; this.products = res.Search.Products; });
  }

}
