import {Component, OnInit} from '@angular/core';

import {OmsService} from './oms.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './ws5.component.html',
  styleUrls: ['./ws5.component.scss']
})
export class Ws5Component implements OnInit {

  isLoading: boolean;

  ordersList: any;

  constructor(private omsService: OmsService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.omsService.getOrders()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((res: any) => {
        this.ordersList = res.OrderList.Orders;
      });
  }

}
