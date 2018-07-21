import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Myplp3RoutingModule } from './myplp3-routing.module';
import { Myplp3Component } from './myplp3.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Myplp3RoutingModule
  ],
  declarations: [
    Myplp3Component
  ],
  providers: []
})
export class Myplp3Module { }
