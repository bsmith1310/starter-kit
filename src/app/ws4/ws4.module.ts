import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws4RoutingModule } from './ws4-routing.module';
import { Ws4Component } from './ws4.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws4RoutingModule
  ],
  declarations: [
    Ws4Component
  ],
  providers: []
})
export class Ws4Module { }
