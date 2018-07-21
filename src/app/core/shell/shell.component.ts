import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  menu: any;

  constructor() {
    this.menu = {
      items: [
        {
          link: 'ws1',
          name: 'ws1(bannerslider)'
        },
        {
          link: 'ws2',
          name: 'ws2(productsByCategoryId)'
        },
        {
          link: 'ws3',
          name: 'ws3'
        },
        {
          link: 'ws4',
          name: 'ws4'
        },
        {
          link: 'ws5',
          name: 'ws5'
        },
        {
          link: 'about',
          name: 'About'
        },
        {
          link: 'productsByCategoryId',
          name: 'Categories'
        },
        {
          link: 'home',
          name: 'Home'
        },
        {
          link: 'myhome',
          name: 'Myhome'
        },
        {
          link: 'myplp3',
          name: 'Myplp3'
        },
        {
          link: 'plp2',
          name: 'Plp2'
        },
        {
          link: 'storehome',
          name: 'Storehome'
        },
        {
          link: 'znodeplp',
          name: 'Znodeplp'
        },
        {
          link: 'znodehome',
          name: 'Znodehome'
        }
      ]
    };
  }

  ngOnInit() {
  }

}
