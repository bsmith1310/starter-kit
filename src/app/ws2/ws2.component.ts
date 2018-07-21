import { Component, OnInit } from '@angular/core';

import { CategoryListService } from './categoryList.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './ws2.component.html',
  styleUrls: ['./ws2.component.scss']
})
export class Ws2Component implements OnInit {

  isLoading: boolean;
  result: any;
  categoryList: any;

  constructor(private categoryListService: CategoryListService) { }

  ngOnInit() {
    this.isLoading = true;
    this.categoryListService.getCategoryList()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((res: any) => { this.result = res; this.categoryList = res.Tree.children; });
  }

}
