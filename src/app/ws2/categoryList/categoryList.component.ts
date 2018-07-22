import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './categoryList.component.html',
  styleUrls: ['./categoryList.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: any;
  @Output() categoryId: any;

  isLoading: boolean;

  result: any;
  products: Array<any>;

  constructor() { }

  ngOnInit() { }

}
