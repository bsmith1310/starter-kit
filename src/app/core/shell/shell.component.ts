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
          name: 'ws1(banner)'
        },
        {
          link: 'ws2',
          name: 'ws2(products)'
        },
        {
          link: 'ws3',
          name: 'ws3(gallery)'
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
          link: 'ws6',
          name: 'ws6'
        },
        {
          link: 'ws7',
          name: 'ws7'
        },
        {
          link: 'ws8',
          name: 'ws8'
        },
        {
          link: 'about',
          name: 'About'
        },
        {
          link: 'categories',
          name: 'direct B3 hackish copy'
        },
        {
          link: 'home',
          name: 'Home'
        },
      ]
    };
  }

  ngOnInit() {
  }

}
