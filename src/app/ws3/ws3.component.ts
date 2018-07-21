import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './ws3.component.html',
  styleUrls: ['./ws3.component.scss']
})
export class Ws3Component implements OnInit {

  result: any;
  products: Array<any>;
  isLoading: boolean;

  version: string = environment.version;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
