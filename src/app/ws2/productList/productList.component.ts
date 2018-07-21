import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  categoryId: any;

  isLoading: boolean;

  result: any;
  products: Array<any>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getProductsByCategory({categoryId: this.categoryId})
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((res: any) => { this.result = res; this.products = res.Search.Products; });
  }

}
