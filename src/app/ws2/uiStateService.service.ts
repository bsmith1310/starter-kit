import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UiStateServiceService {
  public selectedCategory: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public filterArgs: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
    this.selectedCategory.subscribe( value => {
      let filterArgs = null;
      if (this.selectedCategory.getValue() !== null) {
        filterArgs = {
          CategoryName: this.selectedCategory.getValue().CategoryName,
          Name: ''
        };
      }
      this.filterArgs.next(filterArgs);
    });
  }
}
