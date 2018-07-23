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
      console.log(key);
    }

    if (filter.CategoryName && filter.CategoryName.length > 0) {
      items = items.filter(item => {
        return this.matches(item.CategoryName, filter.CategoryName);
      });
    }

    if (filter.Name && filter.Name.length > 0) {
      items = items.filter(item => {
        return this.matches(item.Name, filter.Name);
      });
    }

    return items;
    //
    // return items.filter(item => {
    //   return this.matches(item.CategoryName, filter.CategoryName) ||
    //     this.matches(item.Name, filter.Name);
    // });
  }

  matches(itemValue: any, filterCriteria: any): boolean {
    return itemValue.indexOf(filterCriteria) !== -1;
    // return true;
  }
}
