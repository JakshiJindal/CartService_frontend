import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../Httpclient.Service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  private cart;

  constructor(private service: HttpClientService, private router: Router) { }

  ngOnInit() {
    return this.service.getOrders().subscribe((data) => {
      this.cart = data;
    } );
  }

  get() {
    this.router.navigate(['/home']);
  }
}
