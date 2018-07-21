import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StoreHomeRoutingModule } from './storeHome-routing.module';
import { StoreHomeComponent } from './storeHome.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    StoreHomeRoutingModule
  ],
  declarations: [
    StoreHomeComponent
  ],
  providers: []
})
export class StoreHomeModule { }
