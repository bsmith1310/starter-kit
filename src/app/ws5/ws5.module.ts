import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws5RoutingModule } from './ws5-routing.module';
import { Ws5Component } from './ws5.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws5RoutingModule
  ],
  declarations: [
    Ws5Component
  ],
  providers: []
})
export class Ws5Module { }
