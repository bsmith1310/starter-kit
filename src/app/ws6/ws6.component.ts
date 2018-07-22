import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './ws6.component.html',
  styleUrls: ['./ws6.component.scss']
})
export class Ws6Component implements OnInit {

  isLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
