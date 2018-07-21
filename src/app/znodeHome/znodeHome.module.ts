import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ZnodeHomeRoutingModule } from './znodeHome-routing.module';
import { ZnodeHomeComponent } from './znodeHome.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ZnodeHomeRoutingModule
  ],
  declarations: [
    ZnodeHomeComponent
  ],
  providers: []
})
export class ZnodeHomeModule { }
