import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

import { ProductService } from './product.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  result: any;
  products: Array<any>;
  isLoading: boolean;

  version: string = environment.version;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getProductsByCategory({ category: 'TODO-categoryId' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((res: any) => { this.result = res; this.products = res.Products; });
  }

}
