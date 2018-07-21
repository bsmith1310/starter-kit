import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws3RoutingModule } from './ws3-routing.module';
import { Ws3Component } from './ws3.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws3RoutingModule
  ],
  declarations: [
    Ws3Component
  ],
  providers: []
})
export class Ws3Module { }
