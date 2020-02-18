import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/Authentication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  url = 'http://localhost:2019/api/signUp';
  isSeller;
  name;
  email;
  city;
  phone;
  password;
  address;
  formValidate = true;

  constructor(
    private route: Router,
    private service: AppService,
    private auth: AuthenticationService,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    }
    /*adduser() {
      const user = {
        username: this.name,
        password: this.password,
        email: this.email,
        phone: this.phone,
          address: this.address,
        city: this.city
      };
      console.log(user);
      this.service.addUser(user);
    }*/

  submitData() {
    if (
      this.name == undefined ||
      this.password == undefined ||
      this.email == undefined ||
      this.phone == undefined ||
      this.address == undefined ||
      this.city == undefined
    ) {
      this.formValidate = false;
      alert('All fields are not filled');
    } else {
      this.formValidate = true;
    }
    if (this.formValidate) {
      const json = {
        username: this.name,
        address: this.address,
        phone: this.phone,
        password: this.password,
        email: this.email,
        city: this.city
      };
      this.service.addUser(json);
    }
  }
}
