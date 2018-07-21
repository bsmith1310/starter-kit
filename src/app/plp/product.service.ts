import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  categories: (c: Context) => `/product/bycategory/${c.category}`
};

export interface Context {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsByCategory(context: Context): Observable<any> {
    return this.httpClient
      .cache()
      .get(routes.categories(context))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not get categories :-('))
      );
  }

}
