import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws8RoutingModule } from './ws8-routing.module';
import { Ws8Component } from './ws8.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws8RoutingModule
  ],
  declarations: [
    Ws8Component
  ],
  providers: []
})
export class Ws8Module { }
