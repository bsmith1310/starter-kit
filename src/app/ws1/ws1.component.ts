import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

import { BannerSliderService } from './bannerSlider.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './ws1.component.html',
  styleUrls: ['./ws1.component.scss']
})
export class Ws1Component implements OnInit {

  slider: any;
  isLoading: boolean;

  version: string = environment.version;

  constructor(private bannerSliderService: BannerSliderService) { }

  ngOnInit() {
    this.isLoading = true;
    this.bannerSliderService.getBannerSlider({ id: '333' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((res: any) => { this.slider = res; });
  }

}
