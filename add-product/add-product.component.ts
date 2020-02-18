import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../Httpclient.Service';
import {AppService} from '../services/app.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product1;
  id1;
  disabled = true;
  USER;
  private formValidate= true;

  constructor(private httpclientService: HttpClientService,
              private service: AppService, private router: Router,
              private route: ActivatedRoute) {
  }

  name2;
  category;
  src;
  price;
  url = 'http://localhost:2019/api/productsss';
  role = 'user';
  DATA;
  ID;
  dis;

  update(value: any) {
    this.name2 = value;
    console.log(this.name2);
  }

  update2(value: any) {
    this.price = value;
  }

  update3(value) {
    this.category = value;
  }

  update4(value: any) {
    this.src = value;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.id1 = param.id;
    })
    this.httpclientService.getProducts().subscribe((data) => {
      this.product1 = data;
    });
  }

  get() {
    this.router.navigate(['/home']);
  }

  addproduct() {
    if (
      this.name2 == undefined ||
      this.category == undefined ||
      this.src == undefined ||
      this.price == undefined
    ) {
      this.formValidate = false;
      alert('All fields are not filled');
    } else {
      this.formValidate = true;
    }
    if (this.formValidate) {
      const json = {
        name: this.name2,
        category: this.category,
        src: this.src,
        price: this.price,
        active: 1
      };
      console.log(json);
      this.router.navigate(['/home']);
      this.httpclientService.addProduct(json).subscribe((data1) => {
        alert('product added');
      });
    }
  }

  editproduct() {
    this.httpclientService.editProduct(this.id1, {
      id: this.id1,
      name: this.name2,
      category: this.category,
      src: this.src,
      price: this.price,
      active: 1
    }).subscribe(data => {
      localStorage.removeItem('edit');
      alert('product edited');
      this.router.navigate(['/product-detalis'], {
        queryParams: {
          id: this.id1
        }
      });
    });
  }
}
