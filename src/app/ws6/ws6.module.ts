import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws6RoutingModule } from './ws6-routing.module';
import { Ws6Component } from './ws6.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws6RoutingModule
  ],
  declarations: [
    Ws6Component
  ],
  providers: []
})
export class Ws6Module { }
