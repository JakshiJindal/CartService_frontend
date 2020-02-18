import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {HttpClientService} from '../../Httpclient.Service';
import {AppService} from '../services/app.service';
import {relativeToRootDirs} from '@angular/compiler-cli/src/transformers/util';
import {MyProfileService} from '../services/my-profile.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products;
  id;
   role = 'user';
  private USER;
  private dis;
  private disabled = true;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private httpclientService: HttpClientService,
    private appService: AppService,
    private abc: MyProfileService
  ) {
  }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.httpclientService.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.abc.getProfile().subscribe(data => {
      console.log(data);
      this.USER = data;
      this.role = this.USER.role;
    });
  }

  get() {
    this.router.navigate(['/home']);
  }

  addtoCart(id1) {
    alert('product added');
    this.httpclientService.addToCart(id1).subscribe((data) => {
    });
  }

  isAdmin() {
    if (this.role == 'admin') {
return true;
    } else {
  return false;
    }
  }
  editProduct(id1) {
    this.appService.edit(true);
    this.router.navigate(['/add-product'], {
      queryParams: {
      id: id1
      }
    });
  }

}
