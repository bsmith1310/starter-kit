import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PlpRoutingModule } from './plp-routing.module';
import { PlpComponent } from './plp.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PlpRoutingModule
  ],
  declarations: [
    PlpComponent
  ]
})
export class PlpModule { }
