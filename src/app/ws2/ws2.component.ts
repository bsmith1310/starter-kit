import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './ws2.component.html',
  styleUrls: ['./ws2.component.scss']
})
export class Ws2Component implements OnInit {

  result: any;
  products: Array<any>;
  isLoading: boolean;

  version: string = environment.version;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
