import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  products: (c: ProductsByCategoryContext) => `/product/bycategory/${c.category}`
};

export interface ProductsByCategoryContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsByCategory(context: ProductsByCategoryContext): Observable<Array<any>> {
    return this.httpClient
      .cache()
      .get(routes.products(context))
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

}
