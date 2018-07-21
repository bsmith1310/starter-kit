import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws2RoutingModule } from './ws2-routing.module';
import { Ws2Component } from './ws2.component';

import { ProductListComponent } from './productList/productList.component';

import { CategoryListService } from './categoryList.service';
import { ProductService } from './productList/product.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws2RoutingModule
  ],
  declarations: [
    Ws2Component,
    ProductListComponent
  ],
  providers: [
    CategoryListService,
    ProductService
  ]
})
export class Ws2Module { }