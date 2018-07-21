import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MyhomeRoutingModule } from './myhome-routing.module';
import { MyhomeComponent } from './myhome.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MyhomeRoutingModule
  ],
  declarations: [
    MyhomeComponent
  ],
  providers: []
})
export class MyhomeModule { }
