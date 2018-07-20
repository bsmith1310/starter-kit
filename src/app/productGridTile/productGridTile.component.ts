import { Component, Input, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-product-grid-tile',
  templateUrl: './productGridTile.component.html',
  styleUrls: ['./productGridTile.component.scss']
})
export class ProductGridTileComponent implements OnInit {

  @Input()
  product: any;

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
