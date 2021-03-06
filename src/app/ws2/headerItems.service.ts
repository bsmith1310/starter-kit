import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

const routes = {
  headerItems: () => `/headeritems`
};

@Injectable()
export class HeaderItemsService {

  constructor(private httpClient: HttpClient) { }

  getHeaderItems(): Observable<any> {
    // const data = {
    //   PimCategoryHierarchyId: 0,
    //   CatalogId: environment.storeSettings.catelogId,
    //   CategoryId: 0,
    //   ProductId: 0,
    //   LocaleId: 0,
    //   CategoryIds: 'string',
    //   PimCategoryHierarchyIds: 'string',
    //   ProductIds: 'string',
    //   DisplayProducts: true,
    //   IsAssociated: true,
    //   ProfileCatalogId: 0,
    //   ProfileCatalogCategoryIds: 'string',
    //   DisplayOrder: 0,
    //   IsActive: true,
    //   CreatedBy: 0,
    //   // CreatedDate: ,
    //   ModifiedBy: 0,
    //   // ModifiedDate: null,
    //   ActionMode: 'string'
    // };
    return this.httpClient
      .cache()
      .get(routes.headerItems())
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not get header items :-('))
      );
  }
}
