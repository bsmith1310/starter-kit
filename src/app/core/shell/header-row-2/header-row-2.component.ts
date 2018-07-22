import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-header-row-2',
  templateUrl: './header-row-2.component.html',
  styleUrls: ['./header-row-2.component.scss']
})
export class HeaderRow2Component implements OnInit {

  @Input()
  menu: any;

  menuHidden = true;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

}
