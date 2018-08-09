import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws5RoutingModule } from './ws5-routing.module';
import { Ws5Component } from './ws5.component';

import { OmsService } from './oms.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws5RoutingModule
  ],
  declarations: [
    Ws5Component
  ],
  providers: [
    OmsService
  ]
})
export class Ws5Module { }
