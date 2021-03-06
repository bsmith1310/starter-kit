import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  slider: (c: Context) => `/angularpoc/bannerslider/${c.id}`,
  sliderList: () => `/slider/slider/list`
};

export interface Context {
  // The quote's categoryId: 'dev', 'explicit'...
  id: string;
}

@Injectable()
export class BannerSliderService {

  constructor(private httpClient: HttpClient) { }

  getBannerSlider(context: Context): Observable<any> {
    return this.httpClient
      .cache()
      .get(routes.slider(context))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not get banner slider :-('))
      );
  }

  getBannerSliders(): Observable<any> {
    return this.httpClient
      .cache()
      .get(routes.sliderList())
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not get slider  list :-('))
      );
  }

}
