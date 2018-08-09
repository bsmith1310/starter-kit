import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  menu: any;

  constructor(private router: Router) {
    this.menu = {
      items: [
        {
          link: 'ws1',
          name: 'ws1(banner)',
          description: 'A call to the WebStore that is hardcoded to return a specific slider. Slider is displayed dynamically here.'
        },
        {
          link: 'ws2',
          name: 'ws2(products)',
          description: ''
        },
        {
          link: 'ws3',
          name: 'ws3(gallery)',
          description: ''
        },
        {
          link: 'ws4',
          name: 'ws4(filtering)',
          description: 'A space to test how many products could realistically be cached in browser and filtered by *ngFor directive.'
        },
        {
          link: 'ws5',
          name: 'ws5(orders)',
          description: 'Interacting with order data from Admin.'
        },
        {
          link: 'ws6',
          name: 'ws6',
          description: ''
        },
        {
          link: 'ws7',
          name: 'ws7',
          description: ''
        },
        {
          link: 'ws8',
          name: 'ws8',
          description: ''
        },
        {
          link: 'about',
          name: 'About',
          description: ''
        },
        {
          link: 'categories',
          name: 'direct B3 hackish copy',
          description: ''
        },
        {
          link: 'home',
          name: 'Home',
          description: ''
        },
      ]
    };
  }

  ngOnInit() {
  }

}
