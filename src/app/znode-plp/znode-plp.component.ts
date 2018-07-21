import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './znode-plp.component.html',
  styleUrls: ['./znode-plp.component.scss']
})
export class ZnodePlpComponent implements OnInit {

  isLoading: boolean;

  version: string = environment.version;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
