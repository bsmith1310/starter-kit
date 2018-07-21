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
          name: 'about'
        },
        {
          name: 'categories'
        },
        {
          name: 'home'
        },
        {
          name: 'myhome'
        },
        {
          name: 'myplp3'
        },
        {
          name: 'plp'
        },
        {
          name: 'plp2'
        },
        {
          name: 'storehome'
        },
        {
          name: 'znodeplp'
        },
        {
          name: 'znodehome'
        }
      ]
    };
  }

  ngOnInit() {
  }

}
