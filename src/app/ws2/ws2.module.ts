import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws2RoutingModule } from './ws2-routing.module';
import { Ws2Component } from './ws2.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws2RoutingModule
  ],
  declarations: [
    Ws2Component
  ],
  providers: []
})
export class Ws2Module { }
