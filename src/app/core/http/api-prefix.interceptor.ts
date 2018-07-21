import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let baseUrl = '';
    if (request.url.indexOf('data/media') >= 0 ||
      request.url.indexOf('catalog/getcategorytree') >= 0) {
      baseUrl = environment.znodeApiUrl;
    } else if (request.url.indexOf('jokes') >= 0) {
      baseUrl = environment.serverUrl;
    } else {
      baseUrl = environment.znodeWebStoreApiUrl;
    }
    request = request.clone({ url: baseUrl + request.url });
    return next.handle(request);
  }

}
