import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/Authentication.service';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   username;
   password;

  constructor(
    private router: Router,
    private service: AppService,
    private loginservice: AuthenticationService
  ) {
  }

  ngOnInit() {
    if (this.service.checklogin()) {
      this.router.navigate(['home']);
    }
  }
  get() {
    return this.username;
  }
  login() {
    this.loginservice.authenticate(this.username, this.password).subscribe( data => {
      this.service.isLoggedIn(true);
      this.router.navigate(['home']);
    }
  );
  }
  logout() {

    this.service.isLoggedIn(false);
  }
}

