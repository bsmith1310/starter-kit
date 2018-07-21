import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ZnodePlpRoutingModule } from './znode-plp-routing.module';
import { ZnodePlpComponent } from './znode-plp.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ZnodePlpRoutingModule
  ],
  declarations: [
    ZnodePlpComponent
  ],
  providers: []
})
export class ZnodePlpModule { }
