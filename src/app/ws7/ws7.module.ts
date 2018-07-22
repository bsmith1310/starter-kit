import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws7RoutingModule } from './ws7-routing.module';
import { Ws7Component } from './ws7.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws7RoutingModule
  ],
  declarations: [
    Ws7Component
  ],
  providers: []
})
export class Ws7Module { }
