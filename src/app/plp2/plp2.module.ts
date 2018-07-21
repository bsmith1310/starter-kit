import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Plp2RoutingModule } from './plp2-routing.module';
import { Plp2Component } from './plp2.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Plp2RoutingModule
  ],
  declarations: [
    Plp2Component
  ],
  providers: []
})
export class Plp2Module { }
