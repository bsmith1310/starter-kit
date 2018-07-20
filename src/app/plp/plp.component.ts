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

  products: Array<any>;
  isLoading: boolean;

  version: string = environment.version;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getProductsByCategory({ category: '333' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((products: Array<any>) => { this.products = products; });
  }

}
