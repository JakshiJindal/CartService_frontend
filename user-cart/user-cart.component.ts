import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../Httpclient.Service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
product;
id;
g: any;
total;
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private httpclientService: HttpClientService
  ) { }
  ngOnInit() {
return this.httpclientService.showCart().subscribe((data) => {
  this.product = data;
  this.totalPrice();
});

  }

  removeToProduct(productId) {
    this.httpclientService.removeProduct(productId).subscribe((data2) => {
      return this.httpclientService.showCart().subscribe((data) => {
        this.product = data;
        this.totalPrice();
      });
    });
  }
  removecart(productId) {
    this.httpclientService.removeCart(productId).subscribe((data3) => {
      return this.httpclientService.showCart().subscribe((data) => {
        this.product = data;
        this.totalPrice();
      });
    });
  }
  addProduct(id1) {
        this.httpclientService.addToCart(id1).subscribe((data1) => {
          return this.httpclientService.showCart().subscribe((data) => {
            this.product = data;
            this.totalPrice();
          });
        });
  }

  checkOut() {
    this.httpclientService.checkout().subscribe((data1) => {
      console.log(this.total);
    });
  }

  get() {
    this.router.navigate(['/home']);
  }
  totalPrice() {
    this.httpclientService.TotalPrice().subscribe((data) => {
      console.log(data);
      this.total = data;
    });
  }

  s(id1) {
    this.router.navigate(['/product-details'], {
      queryParams: {
        id: id1
      }
    });
  }
}
