import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './categoryList.component.html',
  styleUrls: ['./categoryList.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: any;
  @Output() onSelectedCategory = new EventEmitter<any>();

  selectedCategory: any;

  isLoading: boolean;

  result: any;
  products: Array<any>;

  constructor() { }

  ngOnInit() { }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.onSelectedCategory.emit(category);
  }

  isSelected(category: any): boolean {
    return this.selectedCategory === category;
  }
}
