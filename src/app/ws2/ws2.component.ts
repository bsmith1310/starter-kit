import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';

import {HeaderItemsService} from './headerItems.service';
import {ProductService} from './product.service';
import {UiStateServiceService} from './uiStateService.service';

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

  constructor(private headerItemsService: HeaderItemsService,
              private productService: ProductService,
              private uiStateService: UiStateServiceService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.headerItemsService.getHeaderItems()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((res: any) => {
        this.result = res;
        this.headerItems = res;
        this.categories = res.Categories;
        this.onSelectedCategoryChanged(this.categories[0]);
      });
    this.productService.getAllProducts({categoryId: 'UNUSED'})
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((res2: any) => {
        this.result = res2;
        this.products = res2.Search.Products;
      });
    this.uiStateService.selectedCategory.subscribe(value => {
      this.selectedCategory = value;
    });
    this.uiStateService.filterArgs.subscribe(value => {
      this.filterArgs = value;
    });
  }

  onSelectedCategoryChanged(category: any) {
    this.uiStateService.selectedCategory.next(category);
  }
}
