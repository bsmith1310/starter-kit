import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './ws4.component.html',
  styleUrls: ['./ws4.component.scss']
})
export class Ws4Component implements OnInit {

  result: any;
  products: Array<any>;
  isLoading: boolean;

  version: string = environment.version;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
