import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {product} from '../product-list/product.constant';
import {HttpClientService} from '../../Httpclient.Service';
import {AppService} from '../services/app.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  product1;
  constructor(
    private router: Router,
    private httpclientService: HttpClientService,
    private service: AppService
  ) {
  }

  c1;
  hover: boolean;
  id;
  search1;
s;
  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['login']);
    }
    this.httpclientService.getProducts().subscribe((data) => {
      this.product1 = data;
    });
  }

  mycart() {
    if (this.service.checklogin()) {
      this.router.navigate(['cart']);
    }
  }
show() {
  this.httpclientService.getProducts().subscribe((data) => {
    this.product1 = data;
  });
}
  gotodetails(id1) {
    this.router.navigate(['/product-details'], {queryParams: {id: id1}});
  }

  showElectrical() {
    this.c1 = 'electronics';
    this.httpclientService.getElectrical('electronics').subscribe((data) => {
      this.product1 = data;
    });
  }

  showsports() {
    this.c1 = 'sports';
    this.httpclientService.getElectrical('sports').subscribe((data) => {
      this.product1 = data;
    });
  }

  showclothing() {
    this.c1 = 'clothes';
    this.httpclientService.getElectrical('clothes').subscribe((data) => {
      this.product1 = data;
    });
  }

  showbooks() {
    this.c1 = 'books';
    this.httpclientService.getElectrical('books').subscribe((data) => {
      this.product1 = data;
    });
  }

  handleSelected($event, number1: number, number2: number) {
    if (!this.c1) {
      this.httpclientService.getPriceBtw(number1, number2).subscribe((data) => {
        this.product1 = data;
      });
    } else {
      this.httpclientService.getPriceAndCategoryBtw(this.c1, number1, number2).subscribe((data) => {
        this.product1 = data;
      });
    }
  }

  addtoCart(id1) {
    alert('product added');
    this.httpclientService.addToCart(id1).subscribe((data) => {
    });
  }
  update(value) {
    this.search1 = value;
    console.log(this.search1);
  }
  search(s: string) {
    this.httpclientService.getProduct(s).subscribe((data) => {
      this.product1 = data;
    });
  }
}
