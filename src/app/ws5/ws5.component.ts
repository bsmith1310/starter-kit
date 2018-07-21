import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './ws5.component.html',
  styleUrls: ['./ws5.component.scss']
})
export class Ws5Component implements OnInit {

  result: any;
  products: Array<any>;
  isLoading: boolean;

  version: string = environment.version;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
