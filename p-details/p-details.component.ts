import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../Httpclient.Service';
import {MyProfileService} from '../services/my-profile.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-p-details',
  templateUrl: './p-details.component.html',
  styleUrls: ['./p-details.component.scss']
})
export class PDetailsComponent implements OnInit {

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private httpclientService: HttpClientService,
    private abc: MyProfileService,
    private http: HttpClient
  ) { }
  myp;
disabled = true;
 url = 'http://localhost:2019/userq/updateUserData';
  ngOnInit() {
    this.abc.getProfile().subscribe(data => {
      console.log(data);
      this.myp = data;
    });
  }
edit() {
  const token =  sessionStorage.getItem('token');
  const headers = new HttpHeaders({Authorization: 'Basic ' + token});
  return this.http.put(this.url, this.myp, {headers}).subscribe(data => {
    console.log(data);
    alert('profile edited');
  });

}
toggle() {
    this.disabled = false;
}
  get() {
    this.router.navigate(['/home']);
  }
}
