import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UiStateServiceService } from '../uiStateService.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './categoryList.component.html',
  styleUrls: ['./categoryList.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: any;

  isLoading: boolean;
  selectedCategory: any = null;

  constructor(private uiStateService: UiStateServiceService) {
    this.uiStateService.selectedCategory.subscribe( value => {
      this.selectedCategory = value;
    });
  }

  ngOnInit() { }

  selectCategory(category: any) {
    this.uiStateService.selectedCategory.next(category);
  }

  isSelected(category: any): boolean {
    return this.selectedCategory === category;
  }
}
