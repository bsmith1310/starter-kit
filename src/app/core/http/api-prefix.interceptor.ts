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
    if (request.url.indexOf('jokes') >= 0) {
      baseUrl = environment.serverUrl;
    } else if (this.isWebStoreResource(request.url)) {
      baseUrl = environment.znodeWebStoreApiUrl;
    } else if (this.isAdminResource(request.url)) {
      baseUrl = environment.znodeAdminUrl;
    } else {
      baseUrl = environment.znodeApiUrl;
    }
    request = request.clone({ url: baseUrl + request.url });
    return next.handle(request);
  }

  isAdminResource(url: string): boolean {
    return url.indexOf(environment.znodeAdminApiResourcePrefix) > -1;
  }

  isWebStoreResource(url: string): boolean {
    let found = false;
    environment.znodeWebStoreApiResources.forEach((resource) => {
      if (url.indexOf(resource) >= 0) {
        found = true;
      }
    });
    return found;
  }

}
