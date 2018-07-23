import { Component, OnInit } from '@angular/core';

import { HeaderItemsService } from './headerItems.service';
import { ProductService } from './product.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './ws2.component.html',
  styleUrls: ['./ws2.component.scss']
})
export class Ws2Component implements OnInit {

  isLoading: boolean;
  result: any;
  headerItems: any;
  categories: any;
  products: any;
  selectedCategory: any = null;
  filterArgs: any;

  constructor(private headerItemsService: HeaderItemsService, private productService: ProductService) { }

  ngOnInit() {
    this.isLoading = true;
    this.headerItemsService.getHeaderItems()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((res: any) => {
        this.result = res;
        this.headerItems = res;
        this.categories = res.Categories;
        this.onSelectedCategoryChanged(this.categories[0]);
        this.productService.getAllProducts({categoryId: this.selectedCategory.CategoryId})
          .pipe(finalize(() => { this.isLoading = false; }))
          .subscribe((res2: any) => {
            this.result = res2;
            this.products = res2.Search.Products;
          });
      });
  }

  onSelectedCategoryChanged(category: any) {
    this.selectedCategory = category;
    this.filterArgs = {
      CategoryName: this.selectedCategory.CategoryName,
      Name: ''
    };
    // this.filterArgs = null;
  }
}
