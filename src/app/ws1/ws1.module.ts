import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Ws1RoutingModule } from './ws1-routing.module';
import { Ws1Component } from './ws1.component';

import { BannerSliderService } from './bannerSlider.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ws1RoutingModule
  ],
  declarations: [
    Ws1Component
  ],
  providers: [
    BannerSliderService
  ]
})
export class Ws1Module { }
