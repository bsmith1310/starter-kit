import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PlpRoutingModule } from './plp-routing.module';
import { PlpComponent } from './plp.component';

import { ProductGridTileComponent } from '../productGridTile/productGridTile.component';

import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PlpRoutingModule
  ],
  declarations: [
    PlpComponent,
    ProductGridTileComponent
  ],
  providers: [
    ProductService
  ]
})
export class PlpModule { }
