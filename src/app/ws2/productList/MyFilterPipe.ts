import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    for (let key in filter) {
      //console.log(key);
    }

    if (filter.CategoryName && filter.CategoryName.length > 0) {
      items = items.filter(item => {
        return this.contains(item.CategoryName, filter.CategoryName);
      });
    }

    if (filter.Name && filter.Name.length > 0) {
      items = items.filter(item => {
        return this.contains(item.Name, filter.Name);
      });
    }

    items = items.filter(item => {
      return this.isExactly(item.LocaleId, filter.LocaleId);
    });

    return items;
  }

  contains(itemValue: any, filterCriteria: any): boolean {
    return itemValue.indexOf(filterCriteria) !== -1;
  }

  isExactly(itemValue: any, filterCriteria: any): boolean {
    return itemValue === filterCriteria;
  }
}
