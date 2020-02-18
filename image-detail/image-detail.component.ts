import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../Httpclient.Service';
import {AppService} from '../services/app.service';
import {MyProfileService} from '../services/my-profile.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
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
  ) { }

  ngOnInit() {
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
}

