import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../services/app.service';
import {Router} from '@angular/router';
import {HttpClientService} from '../../Httpclient.Service';
import {MyProfileService} from '../services/my-profile.service';

@Component({
  selector: 'app-nv-bar',
  templateUrl: './nv-bar.component.html',
  styleUrls: ['./nv-bar.component.scss']
})
export class NvBarComponent implements OnInit {
  constructor(private service: AppService, private route: Router,
              private httpclientService: HttpClientService,
              private httpservice: HttpClient,
              private abc: MyProfileService) { }
users;
  USER;
  private role;
  ngOnInit() {
    this.abc.getProfile().subscribe(data => {
      console.log(data);
      this.USER = data;
      this.role = this.USER.role;
    });
  }
getLogin() {
  this.httpclientService.getRole('admin').subscribe((data) => {
    this.route.navigate(['add-prduct']);
  });
}
  logout() {

    this.service.isLoggedIn(false);
    this.route.navigate(['login']);
  }

  showCart() {
    this.route.navigate(['/cart']);
  }
  getProducts() {
    console.log('test call');
    return this.httpservice.get('http://localhost:2019/api/products');
  }

  get() {
    this.route.navigate(['/home']);
  }

  isAdmin() {
    if (this.role == 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
