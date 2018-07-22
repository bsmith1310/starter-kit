import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws2RoutingModule } from './ws2-routing.module';
import { Ws2Component } from './ws2.component';

import { ProductGridTileComponent } from './productList/productGridTile/productGridTile.component';
import { ProductListComponent } from './productList/productList.component';

import { HeaderItemsService } from './headerItems.service';
import { ProductService } from './productList/product.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws2RoutingModule
  ],
  declarations: [
    Ws2Component,
    ProductGridTileComponent,
    ProductListComponent
  ],
  providers: [
    HeaderItemsService,
    ProductService
  ]
})
export class Ws2Module { }
