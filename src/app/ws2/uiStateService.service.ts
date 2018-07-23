import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UiStateServiceService {
  public selectedCategory: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public filterArgs: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
    this.selectedCategory.subscribe(value => {
      const categoryName = (this.selectedCategory.getValue() !== null) ?
        this.selectedCategory.getValue().CategoryName : '';
      this.filterArgs.next({
        CategoryName: categoryName,
        LocaleId: 1,
        Name: ''
      });
    });
  }
}
