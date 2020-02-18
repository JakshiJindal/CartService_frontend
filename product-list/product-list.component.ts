import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {product} from './product.constant';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products = product;
  constructor(private router: Router) { }

  ngOnInit() {
  }
gotodetails(id) {
  this.router.navigate(['/product-details'], {queryParams: { id : 1}});
}
}
