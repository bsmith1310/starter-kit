import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-grid-tile',
  templateUrl: './productGridTile.component.html',
  styleUrls: ['./productGridTile.component.scss']
})
export class ProductGridTileComponent implements OnInit {

  @Input()
  product: any;

  constructor() { }

  ngOnInit() { }

}
