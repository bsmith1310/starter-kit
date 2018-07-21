import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws2RoutingModule } from './ws2-routing.module';
import { Ws2Component } from './ws2.component';

import { CategoryListService } from './categoryList.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws2RoutingModule
  ],
  declarations: [
    Ws2Component
  ],
  providers: [
    CategoryListService
  ]
})
export class Ws2Module { }
