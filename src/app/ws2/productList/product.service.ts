import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  productsByCategoryId: (c: Context) => `/search/fulltextsearch`
};

export interface Context {
  // The quote's categoryId: 'dev', 'explicit'...
  categoryId: string;
}

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsByCategory(context: Context): Observable<any> {
    const data = {
      Category: 'Nuts',
      CategoryId: 39,
      // Keyword: null,
      // InnerSearchKeywords: null,
      // FacetValue: null,
      // SearchTerm: null,
      // FacetGroup: null,
      PageNumber: 1,
      PageSize: 16,
      RefineBy: {},
      Sort: 0,
      LocaleId: 1,
      CatalogId: 3,
      ProfileId: 1,
      IsRemove: false,
      IsRemoveAll: false,
      PortalId: 1,
      // FilterList: null,
      IsBrandSearch: false,
      BrandId: 0,
      // BrandName: null,
      IsFacetList: false,
      IsSearchWidget: false,
      IsAutocomplete: false,
      UseSuggestion: true,
      ExternalIdEnabled: false,
      ExternalIdNotNullCheck: false,
      // FacetableFields: null,
      NumberOfAggregationSize: 0,
      CreatedBy: 0,
      // CreatedDate: '2018-07-21T04:33:11.564Z',
      ModifiedBy: 0,
      // ModifiedDate: '2018-07-21T04:33:11.564Z' // ,
      // ActionMode: null
    };
    return this.httpClient
      .cache()
      .post(routes.productsByCategoryId(context), data)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not get productsByCategoryId :-('))
      );
  }

}
