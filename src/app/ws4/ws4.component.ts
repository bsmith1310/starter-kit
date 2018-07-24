import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './ws4.component.html',
  styleUrls: ['./ws4.component.scss']
})
export class Ws4Component implements OnInit {

  isLoading: boolean;
  items: Array<any>;

  start = 0;
  end = 4;

  constructor() {
    this.items = [];
    for (let ix = 0; ix < 100000; ix++) {
      this.items.push({
        name: `Some Item Name Here ${ix}`,
        url: `http://localhost:44762/Data/Media/Catalog/1/250/a84c2143-a0b0-4915-8f71-4e8db23144ecpistachios.jpg_${ix}`,
        price: ix
      });
    }
  }

  ngOnInit() {
    this.isLoading = true;
  }

}
