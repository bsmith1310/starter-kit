import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

const routes = {
  order: (c: Context) => `/orders/${c.id}`,
  orderList: () => `/orders/list`
};

export interface Context {
  id: string;
}

@Injectable()
export class OmsService {

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Znode-UserId': '' + environment.znodeUserId
      })
    };

    return this.httpClient
      .cache()
      .get(routes.orderList(), httpOptions)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not get orders'))
      );
  }
}
